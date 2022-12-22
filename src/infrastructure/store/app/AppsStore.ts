import type AppType from '../../../domain/app/AppType';
import type { StoreInterface } from '../../../domain/store/StoreInterface';
import type { BusInterface, EventHandlerType } from '../../../domain/bus';

export const enum AppsStoreBusMessagesEnum {
  appsStoreHasChanged = `bus_message::apps_store_has_changed`,
}

export default class AppsStore implements StoreInterface {
  public items: AppType[];

  public bus: BusInterface;

  constructor(bus: BusInterface) {
    this.items = [];
    this.bus = bus;
  }

  public isInclude(appName: string): boolean {
    return !!this.items.find((a) => appName === a.name);
  }

  public setItems(items: AppType[]): void {
    this.items = items;
    this.bus.publish(AppsStoreBusMessagesEnum.appsStoreHasChanged);
  }

  public get(appName: string): AppType {
    return [...this.items].find((a) => appName === a.name);
  }

  public add(app: AppType): void {
    const appIsIncluded = this.isInclude(app.name);

    if (appIsIncluded) {
      return;
    }

    this.items.push(app);
    this.bus.publish(AppsStoreBusMessagesEnum.appsStoreHasChanged);
  }

  public update(apps: AppType[]): void {
    let appsUpdated;

    for (const app of apps) {
      appsUpdated = [...this.items].map((a) => {
        if (a.name === app.name) {
          return app;
        }

        return a;
      });
    }

    this.setItems(appsUpdated);
  }

  public remove(appName: string): void {
    const appIsIncluded = this.isInclude(appName);

    if (!appIsIncluded) {
      return;
    }

    const itemsUpdated = [...this.items].filter((a) => a.name !== appName);
    this.setItems(itemsUpdated);
  }

  public clear(): void {
    this.setItems([]);
  }

  public subscribe(message: string, eventHandler: EventHandlerType): void {
    this.bus.subscribe(message, eventHandler);
  }
}
