import AppType from '../../domain/app/AppType';
import HostnameType from '../../domain/hostname/HostnameType';

export default function getHostnamesFromApps(apps: AppType[]): HostnameType[] {
  const hostnames = new Set<HostnameType>();

  for (const app of apps) {
    for (const host of app.host) {
      if (hostnames.has(host)) {
        continue;
      }

      hostnames.add(host);
    }
  }

  return Array.from(hostnames);
}
