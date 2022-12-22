import type HostnameType from '../../../domain/hostname/HostnameType';
import AppsStore from '../../store/app/AppsStore';
import removeAppToHostnames from '../../../application/app/removeAppFromHostnames';

import type AppType from '../../../domain/app/AppType';
import type { RemoveAppFromHostnamesApiServiceType } from '../../http/app/removeAppFromHostnames';
import { LoggerInterface } from '../../../domain/logger';

type RemoveAppFromHostnamesPayload = {
  hostnames: HostnameType[];
  appName: string;
};

export type RemoveAppFromHostnamesMutationConfig = {
  key: string;
  apiService: RemoveAppFromHostnamesApiServiceType;
  store: AppsStore;
  payload: RemoveAppFromHostnamesPayload;
  logger: LoggerInterface;
};

export default function removeAppFromHostnamesMutation(
  queryConfig: RemoveAppFromHostnamesMutationConfig
): Promise<AppType[]> {
  return new Promise(async (resolve, reject) => {
    const prevAppsSnapshot = queryConfig.store.items;

    try {
      const appsOptimisticUpdated = removeAppToHostnames(
        queryConfig.payload.appName,
        queryConfig.payload.hostnames,
        queryConfig.store.items
      );

      queryConfig.store.setItems(appsOptimisticUpdated);
      await queryConfig.apiService(queryConfig.payload.appName, queryConfig.payload.hostnames);
      resolve(queryConfig.store.items);
    } catch (error) {
      queryConfig.store.setItems(prevAppsSnapshot);
      this.logger.error(`Error trying to remove ${queryConfig.payload.appName} app to hostnames: ${error}`);
      reject(error);
    }
  });
}
