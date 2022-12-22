import type HostnameType from '../../../domain/hostname/HostnameType';
import type AppType from '../../../domain/app/AppType';

export type AddAppToHostnamesApiServiceType = (appName: string, hostnames: HostnameType[]) => Promise<AppType[]>;
