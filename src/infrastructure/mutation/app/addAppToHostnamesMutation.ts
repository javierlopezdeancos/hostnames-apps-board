import type HostnameType from '../../../domain/hostname/HostnameType';
import AppsStore from '../../store/app/AppsStore';
import addAppToHostnames from '../../../application/app/addAppToHostnames';

import type AppType from '../../../domain/app/AppType';
import type { AddAppToHostnamesApiServiceType } from '../../http/app/addAppToHostnames';
import { LoggerInterface } from '../../../domain/logger';

type AddAppToHostnamesPayload = {
  hostnames: HostnameType[];
  appName: string;
};

export type GetUserQueryConfig = {
  key: string;
  apiService: AddAppToHostnamesApiServiceType;
  store: AppsStore;
  payload: AddAppToHostnamesPayload;
  logger: LoggerInterface;
};

export default function addAppToHostnamesMutation(queryConfig: GetUserQueryConfig): Promise<AppType[]> {
  return new Promise(async (resolve, reject) => {
    const prevAppsSnapshot = queryConfig.store.items;

    try {
      const appsOptimisticUpdated = addAppToHostnames(
        queryConfig.payload.appName,
        queryConfig.payload.hostnames,
        queryConfig.store.items
      );

      queryConfig.store.setItems(appsOptimisticUpdated);
      await queryConfig.apiService(queryConfig.payload.appName, queryConfig.payload.hostnames);
      resolve(queryConfig.store.items);
    } catch (error) {
      queryConfig.store.setItems(prevAppsSnapshot);
      this.logger.error(`Error trying to add ${queryConfig.payload.appName} app to hostnames: ${error}`);
      reject(error);
    }
  });
}
