import UserType from '../../../domain/user/UserType';
import users from '../../../../data/users-data.json';

export default function getUserApiService(id: string): Promise<UserType> {
  return new Promise((resolve) => {
    const user = users.find((u) => u.id === id);
    resolve(user);
  });
}
