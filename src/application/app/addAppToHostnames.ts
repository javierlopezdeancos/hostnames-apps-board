import type AppType from '../../domain/app/AppType';
import type HostnameType from '../../domain/hostname/HostnameType';

export default function addAppToHostnames(appName: string, hostnames: HostnameType[], apps: AppType[]): AppType[] {
  const appsUpdated = [...apps];

  for (const app of appsUpdated) {
    if (app.name !== appName) {
      continue;
    }

    for (const hostname of hostnames) {
      if (app.host.includes(hostname)) {
        continue;
      }

      app.host.push(hostname);
    }
  }

  return appsUpdated;
}
