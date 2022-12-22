import type AppType from '../../../domain/app/AppType';
import type { StoreInterface } from '../../../domain/store/StoreInterface';

export default class AppsStore implements StoreInterface {
  public items: AppType[];

  constructor() {
    this.items = [];
  }

  public isInclude(appName: string): boolean {
    return !!this.items.find((a) => appName === a.name);
  }

  public add(app: AppType): void {
    const appIsIncluded = this.isInclude(app.name);

    if (appIsIncluded) {
      return;
    }

    this.items.push(app);
  }

  public remove(appName: string): void {
    const appIsIncluded = this.isInclude(appName);

    if (!appIsIncluded) {
      return;
    }

    this.items = [...this.items].filter((a) => a.name !== appName);
  }

  public clear(): void {
    this.items = [];
  }
}
