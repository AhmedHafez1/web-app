import { AxiosResponse } from 'axios';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { ApiSync } from './ApiSync';
import { Model } from './Model';
import { Collection } from './Collection';

export interface UserData {
  id?: number;
  name?: string;
  age?: number;
}

const userUrl = 'http://localhost:3000/users';
export class User extends Model<UserData> {
  static buildUser(data: UserData): User {
    return new User(
      new Attributes<UserData>(data),
      new ApiSync<UserData>(userUrl),
      new Eventing()
    );
  }

  static buildUserCollection(): Collection<User, UserData> {
    return new Collection<User, UserData>(userUrl, (data: UserData) =>
      User.buildUser(data)
    );
  }
}
