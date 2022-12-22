import type HostnameType from '../../../domain/hostname/HostnameType';
import type AppType from '../../../domain/app/AppType';

export type RemoveAppFromHostnamesApiServiceType = (appName: string, hostnames: HostnameType[]) => Promise<AppType[]>;
