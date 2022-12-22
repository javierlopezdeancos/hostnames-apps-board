import Component, { ComponentConfigInterface } from '../../../../components/Component';
import CheckboxComponent from '../../../../components/checkbox';

import type { HomeMainViewModeType } from '../main';

import './headerStyles.css';

type MainViewModeSelector = {
  label: string;
  checked: boolean;
};

export type HomeHeaderComponentDataType = {
  userEmail?: string;
  mainViewModeSelector: MainViewModeSelector;
  mode: HomeMainViewModeType;
};

export class HomeHeaderComponent extends Component {
  constructor(componentConfig: ComponentConfigInterface) {
    super({
      rootId: componentConfig.rootId,
      name: componentConfig.name,
      template: componentConfig?.template,
      children: componentConfig?.children,
      data: componentConfig?.data as HomeHeaderComponentDataType,
      logger: componentConfig.logger,
    });

    this.template = `
      <header id="${this.prefix}-${this.name}" class="${this.prefix}-${this.name}">
        <h1 class="abh-h1">Apps by Host
          <span class="${this.prefix}-${this.name}-user">
            for user ${this?.data?.userEmail}
          </span>
        </h1>
        <section id="${this.prefix}-${this.name}-actions"></section>
      </header>`;

    this.setChildrenComponents();
  }

  setChildrenComponents(): void {
    this.children = [];

    const checkboxComponent = new CheckboxComponent({
      rootId: `${this.prefix}-${this.name}-actions`,
      name: 'checkbox',
      data: {
        label: this.data.mainViewModeSelector.label,
        checked: this.data.mainViewModeSelector.checked,
      },
      logger: this.logger,
    });

    this.children.push(checkboxComponent);
  }
}
