import AppType from '../../../domain/app/AppType';
import apps from '../../../../data/host-app-data.json';

export type GetAppsApiService = () => Promise<AppType[]>;

export default async function getAppsApiService(): Promise<AppType[]> {
  return new Promise((resolve) => {
    resolve(apps);
  });
}
