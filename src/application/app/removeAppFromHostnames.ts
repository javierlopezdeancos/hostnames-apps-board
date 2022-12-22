import type AppType from '../../domain/app/AppType';
import type HostnameType from '../../domain/hostname/HostnameType';

export default function removeAppFromHostnames(appName: string, hostnames: HostnameType[], apps: AppType[]): AppType[] {
  const appsUpdated = [...apps];

  for (const app of appsUpdated) {
    if (app.name !== appName) {
      continue;
    }

    for (const hostname of hostnames) {
      if (app.host.includes(hostname)) {
        continue;
      }

      const hosts = [...app.host].filter((h) => h !== hostname);
      app.host = hosts;
    }
  }

  return appsUpdated;
}
