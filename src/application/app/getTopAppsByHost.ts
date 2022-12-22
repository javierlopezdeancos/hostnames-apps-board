import AppType from '../../domain/app/AppType';
import HostnameType from '../../domain/hostname/HostnameType';
import getDeepCopyOfArrayOfObjects from '../utils/getDeepCopyOfArrayOfObjects';

function getSortedAppsByApdex(apps: AppType[]): AppType[] {
  return apps.sort((a: AppType, b: AppType): number => {
    if (a.apdex > b.apdex) {
      return -1;
    }

    if (a.apdex < b.apdex) {
      return 1;
    }

    return 0;
  });
}

function appIncludesHostname(hostname: HostnameType, app: AppType): boolean {
  if (app.host.length === 0) {
    return false;
  }

  return app.host.includes(hostname);
}

export default function getTopAppsByHost(
  hostname: HostnameType,
  rangeMaxLimit: number,
  apps: AppType[]
): AppType[] {
  const topAppsByHostname: AppType[] = [];
  const appsDeepCopy = getDeepCopyOfArrayOfObjects(apps);

  for (const app of appsDeepCopy) {
    const topAppsByHostnameAreLessThanRangeLimit =
      topAppsByHostname.length <= rangeMaxLimit;
    const appHasHostname = appIncludesHostname(hostname, app);

    if (topAppsByHostnameAreLessThanRangeLimit && appHasHostname) {
      topAppsByHostname.push(app);
    }
  }

  if (topAppsByHostname.length === 0) {
    return null;
  }

  const appsByHostnameSortedByApdex = getSortedAppsByApdex(topAppsByHostname);
  const topAppsByHostnameInRangeLimitSortedByApdex =
    appsByHostnameSortedByApdex.slice(0, rangeMaxLimit);

  return topAppsByHostnameInRangeLimitSortedByApdex;
}
