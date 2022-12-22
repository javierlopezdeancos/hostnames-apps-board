import AppType from '../../domain/app/AppType';
import HostnameTopAppsType from '../../domain/hostname/HostnameTopAppsType';
import getTopAppsByHost from '../app/getTopAppsByHost';
import getHostnamesFromApps from './getHostnamesFromApps';

export default function getHostnamesTopApps(
  rangeMaxLimit: number,
  apps: AppType[]
): HostnameTopAppsType[] {
  if (apps.length === 0) {
    return [];
  }

  const hostnames = getHostnamesFromApps(apps);

  return hostnames.map((hostname) => {
    const topAppsByHost = getTopAppsByHost(hostname, rangeMaxLimit, apps);

    const hostnameTopApps = topAppsByHost.map((hostnameTopApp) => ({
      name: hostnameTopApp.name,
      apdex: hostnameTopApp.apdex,
    }));

    return {
      host: hostname,
      apps: hostnameTopApps,
    };
  });
}
