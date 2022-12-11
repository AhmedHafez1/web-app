import { Eventing } from './Eventing';
import { Http as Sync } from './Sync';

export interface UserData {
  id?: number;
  name?: string;
  age?: number;
}

const userUrl = 'http://localhost:3000/users';
export class User {
  public eventing = new Eventing();
  public sync = new Sync<UserData>(userUrl);

  constructor(private data: UserData) {}

  get(prop: string): string | number {
    return this.data[prop];
  }

  set(update: UserData): void {
    this.data = { ...this.data, ...update };
  }
}
