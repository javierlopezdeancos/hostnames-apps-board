import type { GetUserApiServiceType } from '../../http/user/getUserApiService';
import type UsersStore from '../../store/user/UsersStore';
import type UserType from '../../../domain/user/UserType';

type GetUserQueryPayload = {
  id: string;
};

export type GetUserQueryConfig = {
  key: string;
  apiService: GetUserApiServiceType;
  store: UsersStore;
  payload: GetUserQueryPayload;
};

export default function getUserQuery(queryConfig: GetUserQueryConfig): Promise<UserType> {
  return new Promise(async (resolve) => {
    const stale = true;

    if (!stale) {
      resolve(queryConfig.store.get(queryConfig.payload.id));
    }

    const user = await queryConfig.apiService(queryConfig.payload.id);
    const userIsStore = queryConfig.store.isInclude(user.id);

    if (!userIsStore) {
      queryConfig.store.add(user);
    }

    queryConfig.store.update(user);

    resolve(user);
  });
}
