import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/users/controllers/utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'Iqbal Adudu', email: 'iqbal.adudu@gmail.com' },
  ];
  fetchUser() {
    return this.fakeUsers;
  }

  createUser(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
    return this.fakeUsers;
  }

  fetchUserById(id: number) {
    console.log(id);
    return {
      id: 1,
      username: 'iqbaladudu',
      email: 'iqbal.adudu@gmail.com',
    };
  }
}
