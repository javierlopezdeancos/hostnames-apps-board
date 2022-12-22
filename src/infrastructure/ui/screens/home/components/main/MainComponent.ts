import Component, { ComponentConfigInterface } from '../../../../components/Component';
import { HomePanelComponent } from '../panel/PanelComponent';

import type HostnameTopAppsType from '../../../../../../domain/hostname/HostnameTopAppsType';

import './mainStyles.css';

export type HomeMainViewModeType = 'grid' | 'list';

export type HomeMainComponentDataType = {
  hostnamesTopApps: HostnameTopAppsType[];
  viewMode: HomeMainViewModeType;
};

export class HomeMainComponent extends Component {
  homePanelComponents: Component[];

  constructor(componentConfig: ComponentConfigInterface) {
    super({
      rootId: componentConfig.rootId,
      name: componentConfig.name,
      data: componentConfig?.data as HomeMainComponentDataType,
      logger: componentConfig.logger,
    });

    const homeMainClasses = this.getHomeMainClasses();
    this.template = `<main id="${this.prefix}-${this.name}" class="${homeMainClasses}"></main>`;
    this.homePanelComponents = [];
    this.setHomePanelComponents();
  }

  getHomeMainClasses(): string {
    let classes = `${this.prefix}-${this.name}`;

    if (this?.data?.viewMode === 'list') {
      classes = `${classes} ${this.prefix}-${this.name}-list-view-mode`;
    }

    return classes;
  }

  setHomePanelComponents() {
    if (this.data.hostnamesTopApps && Array.isArray(this.data.hostnamesTopApps)) {
      let count = 0;

      for (const hostnameTopApps of this.data.hostnamesTopApps) {
        const homePanelComponent = new HomePanelComponent({
          rootId: `${this.prefix}-${this.name}`,
          name: 'home-panel',
          suffix: String(count),
          data: hostnameTopApps,
          logger: this.logger,
        });

        count++;
        this.homePanelComponents.push(homePanelComponent);
      }

      this.children = this.homePanelComponents;
    }
  }
}
