import type HostnameTopAppsType from '../../domain/hostname/HostnameTopAppsType';

export default function getHostnamesTopAppsByRangeLimit(
  rangeMaxLimit: number,
  hostnamesTopAppsType: HostnameTopAppsType[]
): HostnameTopAppsType[] {
  return [...hostnamesTopAppsType].map((hostnameTopAppsType) => {
    return {
      host: hostnameTopAppsType.host,
      apps: hostnameTopAppsType.apps.slice(0, rangeMaxLimit),
    };
  });
}
