import getTopAppsByHost from './getTopAppsByHost';
import hostApps from '../../../data/host-app-data.json';
import AppType from '../../domain/app/AppType';
import getAppsSliced from '../utils/getAppsSliced';
import getDeepCopyOfArrayOfObjects from '../utils/getDeepCopyOfArrayOfObjects';
import HOSTNAME_TOP_APPS_RANGE_MAX_LIMIT from '../../domain/hostname/HostnameTopAppsRangeMaxLimitValue';

describe('getTopAppsByHost', () => {
  test('should return null if we pass an empty array to get apps', () => {
    const appsMock = [];

    const topAppsByHost = getTopAppsByHost(
      '7e6272f7-098e.dakota.biz',
      HOSTNAME_TOP_APPS_RANGE_MAX_LIMIT,
      appsMock
    );

    expect(topAppsByHost).toBe(null);
  });

  test('should return one top app by hostname if apps are only one with this hostname', () => {
    const appsMock = getAppsSliced(
      0,
      1,
      getDeepCopyOfArrayOfObjects<AppType>(hostApps)
    );

    const topAppsByHost = getTopAppsByHost(
      '7e6272f7-098e.dakota.biz',
      HOSTNAME_TOP_APPS_RANGE_MAX_LIMIT,
      appsMock
    );

    expect(topAppsByHost.length).toBe(1);
  });

  test('should return null if there are not any app in apps with the hostname passed', () => {
    const appsMock = [
      {
        name: 'My awesome app',
        contributors: ['Raphael de la Getto'],
        version: 7,
        apdex: 68,
        host: ['7e6272f7-098e.dakota.biz', '9a450527-cdd9.kareem.info'],
      },
    ];

    const topAppsByHost = getTopAppsByHost(
      'e7bf58af-f0be.dallas.biz',
      HOSTNAME_TOP_APPS_RANGE_MAX_LIMIT,
      appsMock
    );

    expect(topAppsByHost).toBe(null);
  });

  test('should return null if we pass apps with an empty array as host property', () => {
    const appsMock = getAppsSliced(
      0,
      2,
      getDeepCopyOfArrayOfObjects<AppType>(hostApps)
    );

    appsMock[0].host.splice(0, appsMock[0].host.length);
    appsMock[1].host.splice(0, appsMock[1].host.length);

    const topAppsByHost = getTopAppsByHost(
      'e7bf58af-f0be.dallas.biz',
      HOSTNAME_TOP_APPS_RANGE_MAX_LIMIT,
      appsMock
    );

    expect(topAppsByHost).toBe(null);
  });

  test('should return all apps that contain this hostname if this is less than max range limit', () => {
    const appsMock = getAppsSliced(
      0,
      40,
      getDeepCopyOfArrayOfObjects<AppType>(hostApps)
    );

    const topAppsByHost = getTopAppsByHost(
      '7e6272f7-098e.dakota.biz',
      HOSTNAME_TOP_APPS_RANGE_MAX_LIMIT,
      appsMock
    );

    expect(topAppsByHost.length).toBe(14);
  });

  test('should return all apps sort ranked by apdex that contain the hostname if we pass less than max range limit apps', () => {
    const appsMock = getAppsSliced(
      0,
      4,
      getDeepCopyOfArrayOfObjects<AppType>(hostApps)
    );

    const topAppsByHost = getTopAppsByHost(
      '7e6272f7-098e.dakota.biz',
      HOSTNAME_TOP_APPS_RANGE_MAX_LIMIT,
      appsMock
    );

    expect(topAppsByHost.length).toBe(2);
  });

  test('should return the most max range limit apps ranked by apdex that contain this hostname if are more than max range limit', () => {
    const appsMock = getAppsSliced(
      0,
      90,
      getDeepCopyOfArrayOfObjects<AppType>(hostApps)
    );

    const topAppsByHost = getTopAppsByHost(
      '7e6272f7-098e.dakota.biz',
      HOSTNAME_TOP_APPS_RANGE_MAX_LIMIT,
      appsMock
    );

    expect(topAppsByHost.length).toBe(HOSTNAME_TOP_APPS_RANGE_MAX_LIMIT);
  });
});
