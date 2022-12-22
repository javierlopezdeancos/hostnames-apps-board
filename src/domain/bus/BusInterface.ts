export type EventHandlerType = (message: string, data?: Object) => void;

export type SubscriptionsType = Record<string, EventHandlerType[]>;

export interface BusInterface {
  publish: (message: string, data?: Object) => void;
  subscribe: (message: string, trigger: EventHandlerType) => void;
  clear: () => void;
}
