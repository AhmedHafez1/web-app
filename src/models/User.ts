import { Eventing } from './Eventing';
import { Http as Http } from './Http';

export interface UserData {
  id?: number;
  name?: string;
  age?: number;
}

const userUrl = 'http://localhost:3000/users';
export class User {
  public eventing = new Eventing();
  public http = new Http<UserData>(userUrl);
}
