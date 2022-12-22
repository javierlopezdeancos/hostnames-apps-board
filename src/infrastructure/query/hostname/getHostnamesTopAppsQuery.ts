import type HostnameTopAppsType from '../../../domain/hostname/HostnameTopAppsType';
import getHostnamesTopApps from '../../../application/hostname/getHostnamesTopApps';
import HOSTNAME_TOP_APPS_RANGE_MAX_LIMIT from '../../../domain/hostname/HostnameTopAppsRangeMaxLimitValue';
import getHostnamesTopAppsByRangeLimit from '../../../application/hostname/getHostnamesTopAppsByRangeLimit';

import type { GetAppsApiService } from '../../http/app/getAppsApiService';
import type AppsStore from '../../store/app/AppsStore';

export type GetHostnamesTopAppsQueryConfig = {
  key: string;
  apiService: GetAppsApiService;
  store: AppsStore;
};

export default function getHostnamesTopAppsQuery(
  queryConfig: GetHostnamesTopAppsQueryConfig
): Promise<HostnameTopAppsType[]> {
  return new Promise(async (resolve) => {
    const stale = true;

    if (!stale) {
      resolve(getHostnamesTopApps(HOSTNAME_TOP_APPS_RANGE_MAX_LIMIT, queryConfig.store.items));
    }

    const apps = await queryConfig.apiService();
    const hostnamesTopApps = getHostnamesTopApps(HOSTNAME_TOP_APPS_RANGE_MAX_LIMIT, apps);
    const rangeLimitHostnamesTopApps = getHostnamesTopAppsByRangeLimit(5, hostnamesTopApps);

    resolve(rangeLimitHostnamesTopApps);
  });
}
