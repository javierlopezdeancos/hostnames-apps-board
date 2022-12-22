export interface StoreInterface {
  items: any[];
  isInclude(itemId: string): boolean;
  add(item: any): void;
  remove(itemId: string): void;
  clear(): void;
}
