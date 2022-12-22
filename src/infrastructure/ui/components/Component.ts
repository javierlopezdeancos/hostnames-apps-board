import { LoggerInterface } from '../../../domain/logger';
import { StoreInterface } from '../../../domain/store';

export interface ComponentConfigInterface {
  children?: Component[];
  data?: any;
  logger: LoggerInterface;
  name: string;
  prefix?: string;
  rootId: string;
  suffix?: string;
  template?: string;
  stores?: Record<string, StoreInterface>;
}

class Component {
  prefix: string;

  suffix: string | undefined;

  name: string;

  rootId: string;

  node: HTMLElement | null;

  template: string | undefined;

  children: Component[] | undefined;

  data: any | undefined;

  stores: Record<string, StoreInterface> | undefined;

  errors: Record<string, string>;

  logger: LoggerInterface;

  constructor(componentConfig: ComponentConfigInterface) {
    this.errors = {
      NODE_IS_NOT_FOUND: "Node can't be found in DOM",
    };

    this.node = document.getElementById(this.rootId);
    this.logger = componentConfig.logger;
    this.prefix = componentConfig?.prefix || 'abh';
    this.suffix = componentConfig?.suffix;
    this.name = componentConfig.name;
    this.rootId = componentConfig.rootId;
    this.template = componentConfig?.template;
    this.children = componentConfig?.children;
    this.data = componentConfig?.data;
    this.stores = componentConfig?.stores;
  }

  onComponentWillMount(): void {}

  onComponentDidMount(): void {}

  onComponentWillUnMount(): void {}

  onComponentDidUnMount(): void {}

  mountComponent(template?: string): void {
    if (template) {
      this.node.innerHTML = this.node.innerHTML + template;
    }

    if (!template && this.template) {
      this.node.innerHTML = this.node.innerHTML + this.template;
    }

    if (this.children && Array.isArray(this.children)) {
      for (const child of this.children) {
        try {
          child.render();
        } catch (error) {
          this.logger.error(`Error mounting ${child.name} component: ${this.errors.NODE_IS_NOT_FOUND}`);
          throw Error(error);
        }
      }
    }
  }

  render(template?: string): Promise<void> {
    this.clean();

    try {
      if (!this.node) {
        this.node = document.getElementById(this.rootId);
      }

      if (!this.node) {
        this.logger.error(`Error rendering ${this.name} component: ${this.errors.NODE_IS_NOT_FOUND}`);
        return;
      }

      this.onComponentWillMount();
      this.mountComponent(template);
      this.onComponentDidMount();
    } catch (error) {
      this.logger.error(`Error rendering ${this.name} component: ${error}`);
      throw Error(error);
    }
  }

  clean(): Promise<void> {
    if (!this.node) {
      return;
    }

    this.onComponentWillUnMount();
    this.node.innerHTML = '';
    this.onComponentDidUnMount();
  }
}

export default Component;
