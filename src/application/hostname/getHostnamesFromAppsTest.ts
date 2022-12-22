import hostApps from '../../../data/host-app-data.json';
import getHostnamesFromApps from './getHostnamesFromApps';
import getAppsSliced from '../utils/getAppsSliced';
import AppType from '../../domain/app/AppType';
import getDeepCopyOfArrayOfObjects from '../utils/getDeepCopyOfArrayOfObjects';

describe('getHostnamesFromApps', () => {
  test('should return an empty array if we pass and empty array of apps', () => {
    const appsHostnames = getHostnamesFromApps([]);
    expect(appsHostnames).toStrictEqual([]);
  });

  test('should return uniques hostnames that can found into apps passed', () => {
    const appsMock = getAppsSliced(
      0,
      10,
      getDeepCopyOfArrayOfObjects<AppType>(hostApps)
    );

    const appsHostnames = getHostnamesFromApps(appsMock);

    expect(appsHostnames).toStrictEqual([
      '7e6272f7-098e.dakota.biz',
      '9a450527-cdd9.kareem.info',
      'e7bf58af-f0be.dallas.biz',
      'e0419f48-6a5a.craig.info',
      'b0b655c5-928a.nadia.biz',
      '95b346a0-17f4.abbigail.name',
      '128406fc-0d3f.tiana.biz',
      '2b4cfcf7-81d5.kelli.org',
      '92116865-5462.conor.com',
      '1d717554-bf17.sydnie.name',
    ]);
  });
});
