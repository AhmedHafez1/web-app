import { Collection } from "./models/Collection";
import { User, UserData } from "./models/User";

const users = new Collection<User, UserData>(
  "http://localhost:3000/users",
  (data: UserData) => User.buildUser(data)
);

users.on("change", () => console.log(users));
users.fetch();
