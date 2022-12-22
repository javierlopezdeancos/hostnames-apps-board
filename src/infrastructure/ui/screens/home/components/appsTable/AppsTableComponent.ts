import Component, {
  ComponentConfigInterface,
} from '../../../../components/Component';

import './appsTableStyles.css';

export class HomeAppsTableComponent extends Component {
  constructor(componentConfig: ComponentConfigInterface) {
    super({
      rootId: componentConfig.rootId,
      name: componentConfig.name,
      template: componentConfig?.template,
      data: componentConfig?.data,
      logger: componentConfig.logger,
    });

    this.template = this.getTemplate();
  }

  getStartTableTemplate(): string {
    const startTableTemplate = `
    <table class="${this.prefix}-${this.name}">
      <tbody>`;

    return startTableTemplate;
  }

  getRowTemplate(accumulatedTemplate: string, rowData): string {
    const rowTemplate =
      accumulatedTemplate +
      `<tr>
        <td class="${this.prefix}-${this.name}-cell ${this.prefix}-${this.name}-cell-position">${rowData?.apdex}</td>
        <td class="${this.prefix}-${this.name}-cell">${rowData?.name}</td>
      </tr>`;

    return rowTemplate;
  }

  getEndTableTemplate(accumulatedTemplate: string): string {
    const rowTemplate =
      accumulatedTemplate +
      `</tbody>
      <table>`;

    return rowTemplate;
  }

  getTemplate(): string {
    let template = '';

    template = this.getStartTableTemplate();

    if (!this.data?.apps || !Array.isArray(this.data?.apps)) {
      return;
    }

    for (const app of this.data.apps) {
      template = this.getRowTemplate(template, app);
    }

    template = this.getEndTableTemplate(template);

    return template;
  }
}
