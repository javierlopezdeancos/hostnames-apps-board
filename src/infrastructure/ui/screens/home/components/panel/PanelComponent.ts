import Component, {
  ComponentConfigInterface,
} from '../../../../components/Component';
import { HomeAppsTableComponent } from '../appsTable';

import './panelStyles.css';

export class HomePanelComponent extends Component {
  homeAppsTableComponent: Component;

  constructor(componentConfig: ComponentConfigInterface) {
    super({
      rootId: componentConfig.rootId,
      name: componentConfig.name,
      suffix: componentConfig?.suffix,
      template: componentConfig?.template,
      data: componentConfig?.data,
      children: componentConfig?.children,
      logger: componentConfig.logger,
    });

    this.homeAppsTableComponent = new HomeAppsTableComponent({
      rootId: `${this.prefix}-${this.name}-body-${this.suffix}`,
      name: 'home-apps-table',
      data: this?.data,
      logger: this.logger,
    });

    this.children = [this.homeAppsTableComponent];

    this.template = `
      <div id="${this.prefix}-${this.name}-${this.suffix}" class="${this.prefix}-${this.name}">
        <header class="${this.prefix}-${this.name}-header">
          <h2 class="abh-h2">${this?.data?.host}</h2>
        </header>
        <section id="${this.prefix}-${this.name}-body-${this.suffix}" class="${this.prefix}-${this.name}-body">
        </section>
      </div>`;
  }
}
