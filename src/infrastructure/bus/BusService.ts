import type { BusInterface, SubscriptionsType, EventHandlerType } from '../../domain/bus';
import type { LoggerInterface } from '../../domain/logger';

class BusService implements BusInterface {
  subscriptions: SubscriptionsType;

  logger: LoggerInterface;

  verbose: boolean;

  constructor(logger: LoggerInterface, verbose?: boolean) {
    this.subscriptions = {} as SubscriptionsType;
    this.logger = logger;
    this.verbose = verbose || false;
  }

  public publish(message: string, data?: Object): void {
    const handlers = this.subscriptions[message];

    if (handlers) {
      for (const handler of handlers) {
        if (message && this.verbose) {
          this.logger.info(`BusService: Reached trigger for ${message}`);
        }

        if (handlers?.length && this.verbose) {
          this.logger.info(`BusService: Reached trigger with count: ${handlers.length}`);
        }

        if (data && this.verbose) {
          this.logger.info(`BusService: Reached trigger data:  ${data}`);
        }

        handler(message, data);
      }
    }
  }

  public subscribe(message: string, trigger: EventHandlerType) {
    if (this?.subscriptions[message] === undefined) {
      this.subscriptions[message] = [];
    }

    this.subscriptions[message].push(trigger);

    if (this.verbose) {
      this.logger.info(`BusService: Message ${message} was subscribed`);
    }
  }

  public clear() {
    this.subscriptions = {} as SubscriptionsType;

    if (this.verbose) {
      this.logger.info('BusService: Bus was cleared');
    }
  }
}

export default BusService;
