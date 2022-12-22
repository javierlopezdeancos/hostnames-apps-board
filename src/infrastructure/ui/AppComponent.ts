import Component, { ComponentConfigInterface } from './components/Component';
import { HomeScreen } from './screens/home/HomeScreen';
import LoadingComponent from './components/loading';
import getUserApiService from '../http/user/getUserApiService';

import type { HomeScreenDataType } from './screens/home/HomeScreen';
import type UserType from '../../domain/user/UserType';

import './appStyles.css';

export default class App extends Component {
  homeScreen: Component;

  homeScreenData: HomeScreenDataType;

  loadingComponent: Component;

  user: UserType;

  constructor(componentConfig: ComponentConfigInterface) {
    super({
      rootId: componentConfig.rootId,
      name: componentConfig.name,
      template: componentConfig?.template,
      stores: componentConfig?.stores,
      logger: componentConfig.logger,
    });

    this.loadingComponent = new LoadingComponent({
      rootId: `${this.prefix}-${this.name}`,
      name: 'loading',
      logger: this.logger,
    });

    this.homeScreenData = {
      user: undefined,
    };

    if (!this.user) {
      this.children = [this.loadingComponent];
      return;
    }
  }

  onComponentDidMount(): void {
    if (!this.user) {
      this.getUser();
    }
  }

  getUser() {
    getUserApiService('1').then((user) => {
      this.user = user;

      this.homeScreen = new HomeScreen({
        rootId: 'abh-app',
        name: 'home',
        data: {
          user: this.user,
        },
        stores: {
          apps: this.stores.apps,
        },
        logger: this.logger,
      });

      this.children = [this.homeScreen];
      this.render();
    });
  }

  start() {
    this.render();
  }
}
