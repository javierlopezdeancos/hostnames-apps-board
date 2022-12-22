import type { EventHandlerType } from '../bus';
import type { BusInterface } from '../bus';

export interface StoreInterface {
  items: any[];
  bus: BusInterface;
  isInclude(itemId: string): boolean;
  setItems(items: any[]): void;
  get(itemId: string): any;
  add(item: any): void;
  remove(itemId: string): void;
  update(items: any[]): void;
  clear(): void;
  subscribe(message: string, eventHandler: EventHandlerType): void;
}
