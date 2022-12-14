import { AxiosResponse } from "axios";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { ApiSync } from "./ApiSync";
import { Model } from "./Model";

export interface UserData {
  id?: number;
  name?: string;
  age?: number;
}

const userUrl = "http://localhost:3000/users";
export class User extends Model<UserData> {
  static buildUser(data: UserData): User {
    return new User(
      new Attributes<UserData>(data),
      new ApiSync<UserData>(userUrl),
      new Eventing()
    );
  }
}
