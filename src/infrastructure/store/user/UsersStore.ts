import type { StoreInterface } from '../../../domain/store/StoreInterface';
import type { BusInterface } from '../../../domain/bus';
import type { EventHandlerType } from '../../../domain/bus';
import type UserType from '../../../domain/user/UserType';

export const enum UsersStoreBusMessagesEnum {
  usersStoreHasChanged = `bus_message::users_store_has_changed`,
}

export default class UsersStore implements StoreInterface {
  public items: UserType[];

  public bus: BusInterface;

  constructor(bus: BusInterface) {
    this.items = [];
    this.bus = bus;
  }

  public isInclude(userId: string): boolean {
    return !!this.items.find((u) => userId === u.id);
  }

  public setItems(items: UserType[]): void {
    this.items = items;
    this.bus.publish(UsersStoreBusMessagesEnum.usersStoreHasChanged);
  }

  public get(userId: string): UserType {
    return [...this.items].find((u) => userId === u.id);
  }

  public add(user: UserType): void {
    const appIsIncluded = this.isInclude(user.id);

    if (appIsIncluded) {
      return;
    }

    this.items.push(user);
    this.bus.publish(UsersStoreBusMessagesEnum.usersStoreHasChanged);
  }

  public update(users: UserType[]): void {
    let usersUpdated;

    for (const user of users) {
      usersUpdated = [...this.items].map((u) => {
        if (u.id === user.id) {
          return user;
        }

        return u;
      });
    }

    this.setItems(usersUpdated);
  }

  public remove(userId: string): void {
    const appIsIncluded = this.isInclude(userId);

    if (!appIsIncluded) {
      return;
    }

    const usersUpdated = [...this.items].filter((u) => u.id !== userId);
    this.setItems(usersUpdated);
  }

  public clear(): void {
    this.setItems([]);
  }

  public subscribe(message: string, eventHandler: EventHandlerType): void {
    this.bus.subscribe(message, eventHandler);
  }
}
