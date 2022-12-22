import Component, { ComponentConfigInterface } from '../../components/Component';
import { HomeHeaderComponent } from './components/header';
import { HomeMainComponent } from './components/main/MainComponent';
import getHostnamesTopAppsQuery from '../../../query/hostname/getHostnamesTopAppsQuery';
import getAppsApiService from '../../../http/app/getAppsApiService';
import LoadingComponent from '../../components/loading';
import { AppsStoreBusMessagesEnum } from '../../../store/app/AppsStore';

import type { HomeHeaderComponentDataType } from './components/header';
import type { HomeMainComponentDataType, HomeMainViewModeType } from './components/main';
import type UserType from '../../../../domain/user/UserType';

import './homeStyles.css';

export type HomeScreenDataType = {
  user?: UserType;
};

export class HomeScreen extends Component {
  loadingComponent: Component;

  homeHeaderComponent: Component;

  homeHeaderComponentData: HomeHeaderComponentDataType;

  homeMainComponent: Component;

  homeMainComponentData: HomeMainComponentDataType;

  mainViewModeSelectorNode: HTMLElement | null;

  mainViewModeSelectorLabels: Record<string, string>;

  mainViewMode: HomeMainViewModeType;

  constructor(componentConfig: ComponentConfigInterface) {
    super({
      rootId: componentConfig.rootId,
      name: componentConfig.name,
      template: componentConfig?.template,
      children: componentConfig?.children,
      data: componentConfig?.data as HomeScreenDataType,
      stores: componentConfig?.stores,
      logger: componentConfig.logger,
    });

    this.loadingComponent = new LoadingComponent({
      rootId: `${this.prefix}-${this.name}`,
      name: 'loading',
      logger: this.logger,
    });

    this.mainViewModeSelectorLabels = {
      GRID_MODE: 'Show as list',
      LIST_MODE: 'Show as an awesome grid',
    };

    this.template = `<div id="${this.prefix}-${this.name}" class="${this.prefix}-${this.name}"></div>`;

    this.homeMainComponentData = {
      hostnamesTopApps: undefined,
      viewMode: 'grid',
    };

    this.homeHeaderComponentData = {
      userEmail: this?.data?.user?.email,
      mainViewModeSelector: {
        label: this.mainViewModeSelectorLabels.GRID_MODE,
        checked: false,
      },
      mode: this.homeMainComponentData.viewMode,
    };

    this.stores.apps.subscribe(AppsStoreBusMessagesEnum.appsStoreHasChanged, this.handleAppsStoreChanges.bind(this));

    if (!this.data) {
      this.children = [this.loadingComponent];
    }
  }

  onComponentDidMount(): void {
    const hasHostnamesTopApps = this?.homeMainComponentData?.hostnamesTopApps;

    if (!hasHostnamesTopApps) {
      this.getScreenData();
      return;
    }

    this.addEventListeners();
  }

  onComponentWillUnMount(): void {
    if (!this.mainViewModeSelectorNode) {
      return;
    }

    this.mainViewModeSelectorNode.removeEventListener('click', this.handleChangeMainViewMode.bind(this));
  }

  addEventListeners(): void {
    this.mainViewModeSelectorNode = document.getElementById(`${this.prefix}-checkbox-label`);

    if (!this.mainViewModeSelectorNode) {
      return;
    }

    this.mainViewModeSelectorNode.addEventListener('click', this.handleChangeMainViewMode.bind(this));
  }

  handleAppsStoreChanges(message: String) {
    this.logger.info(`apps store has changes: '${message}'`);
  }

  getScreenData(): void {
    getHostnamesTopAppsQuery({
      key: 'hostnames-top-apps',
      apiService: getAppsApiService,
      store: this.stores.apps,
    }).then((hostnamesTopApps) => {
      this.homeMainComponentData.hostnamesTopApps = hostnamesTopApps;

      this.homeHeaderComponent = new HomeHeaderComponent({
        rootId: `${this.prefix}-${this.name}`,
        name: `${this.name}-header`,
        data: this.homeHeaderComponentData,
        logger: this.logger,
      });

      this.homeMainComponent = new HomeMainComponent({
        rootId: `${this.prefix}-${this.name}`,
        name: `${this.name}-main`,
        data: this.homeMainComponentData,
        logger: this.logger,
      });

      this.children = [this.homeHeaderComponent, this.homeMainComponent];
      this.render();
    });
  }

  handleChangeMainViewMode(): void {
    this.toggleMainViewMode();

    this.homeHeaderComponentData = {
      userEmail: this?.data?.user?.email,
      mainViewModeSelector: {
        label:
          this.homeMainComponentData.viewMode === 'list'
            ? this.mainViewModeSelectorLabels.LIST_MODE
            : this.mainViewModeSelectorLabels.GRID_MODE,
        checked: this.homeMainComponentData.viewMode === 'list' ? true : false,
      },
      mode: this.homeMainComponentData.viewMode,
    };

    this.homeHeaderComponent = new HomeHeaderComponent({
      rootId: `${this.prefix}-${this.name}`,
      name: `${this.name}-header`,
      data: this.homeHeaderComponentData,
      logger: this.logger,
    });

    this.homeMainComponent = new HomeMainComponent({
      rootId: `${this.prefix}-${this.name}`,
      name: `${this.name}-main`,
      data: this.homeMainComponentData,
      logger: this.logger,
    });

    this.children = [this.homeHeaderComponent, this.homeMainComponent];

    this.render();
  }

  toggleMainViewMode(): void {
    if (this.homeMainComponentData.viewMode === 'grid') {
      this.homeMainComponentData.viewMode = 'list';
      return;
    }

    this.homeMainComponentData.viewMode = 'grid';
  }
}
