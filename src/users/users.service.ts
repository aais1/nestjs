import { Injectable } from '@nestjs/common';
import { User } from './interfaces';

@Injectable()
export class UsersService {
  private readonly users: User[] = [{ id: '1', name: 'John Doe', email: 'john@gmail.com', role: 'INTERN' }];

  findAll() {
    return this.users;
  }
  findOne(id: string) {
    return this.users.find((user) => user.id === id);
  }
  createOne(user: User) {
    const newUser: User = {
      id: (this.users.length + 1).toString(),
      name: user.name,
      email: user.email,
      role: user.role,
    };
    this.users.push(newUser);
    return newUser;
  }
  updateOne(user: User) {
    return { ...user };
  }
  deleteOne(id: string) {
    return { id };
  }
}
