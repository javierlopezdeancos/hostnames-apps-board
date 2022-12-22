import AppType from '../../domain/app/AppType';

export default function getAppsSliced(start, end, apps: AppType[]): AppType[] {
  return apps.slice(start, end);
}
