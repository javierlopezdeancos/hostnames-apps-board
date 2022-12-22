import AppType from './AppType';

type TopAppType = Pick<AppType, 'name' | 'apdex'>;

export default TopAppType;
