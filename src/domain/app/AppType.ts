import HostnameType from '../hostname/HostnameType';
import ContributorType from '../contributor/ContributorType';

type AppType = {
  name: string;
  contributors: ContributorType[];
  version: number;
  apdex: number;
  host: HostnameType[];
};

export default AppType;
