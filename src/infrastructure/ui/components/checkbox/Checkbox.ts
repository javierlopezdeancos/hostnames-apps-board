import Component, { ComponentConfigInterface } from '../Component';

import './checkboxStyles.css';

export type CheckboxComponentDataType = {
  label: string;
  checked: boolean;
};

export class CheckboxComponent extends Component {
  constructor(componentConfig: ComponentConfigInterface) {
    super({
      rootId: componentConfig.rootId,
      name: componentConfig.name,
      template: componentConfig?.template,
      data: componentConfig?.data as CheckboxComponentDataType,
      logger: componentConfig.logger,
    });

    const inputClasses = this.getInputClasses();

    this.template = `
      <div id="${this.prefix}-${this.name}" class="${this.prefix}-${this.name}">
        <input id="${this.prefix}-${this.name}-input" class="${inputClasses}" type="checkbox">
        <label id="${this.prefix}-${this.name}-label" for="${this.prefix}-${this.name}-input" class="${this.prefix}-${this.name}-label">${this?.data?.label}</label>
      </div>`;
  }

  getInputClasses(): string {
    let classes = `${this.prefix}-${this.name}-input`;

    if (this?.data?.checked) {
      classes = `${classes} ${this.prefix}-${this.name}-input-checked`;
    }

    return classes;
  }
}
