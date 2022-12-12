import { Attributes } from './Attributes';
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
  public attributes: Attributes<UserData>;

  constructor(data: UserData) {
    this.attributes = new Attributes<UserData>(data);
  }

  get get() {
    return this.attributes.get;
  }

  get on() {
    return this.eventing.on;
  }

  get trigger() {
    return this.eventing.trigger;
  }
}
