import App from './infrastructure/ui/AppComponent';
import loggerService from './infrastructure/logger/loggerService';
import AppsStore from './infrastructure/store/app/AppsStore';
import BusService from './infrastructure/bus/BusService';

import './index.css';

const bus = new BusService(loggerService);
const appsStore = new AppsStore(bus);

const app = new App({
  rootId: 'abh-root',
  name: 'app',
  template: `<div id="abh-app" class="abh-app"></div>`,
  stores: {
    apps: appsStore,
  },
  logger: loggerService,
});

app.start();
