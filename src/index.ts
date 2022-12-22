import App from './infrastructure/ui/AppComponent';
import loggerService from './infrastructure/logger/loggerService';
import AppsStore from './infrastructure/store/app/AppsStore';

import './index.css';

const appsStore = new AppsStore();

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
