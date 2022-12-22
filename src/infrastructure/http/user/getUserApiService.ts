import UserType from '../../../domain/user/UserType';
import users from '../../../../data/users-data.json';

export type GetUserApiServiceType = (id: string) => Promise<UserType>;

export default function getUserApiService(id: string): Promise<UserType> {
  return new Promise((resolve) => {
    const user = users.find((u) => u.id === id);
    resolve(user);
  });
}
