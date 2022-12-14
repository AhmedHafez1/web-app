import { User } from './models/User';

const users = User.buildUserCollection();

users.on('change', () => console.log(users));
users.fetch();
