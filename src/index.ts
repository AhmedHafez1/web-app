import { User } from './models/User';

const user = User.buildUser({ name: 'Love', age: 29 });

user.on('change', () => console.log(user));
user.on('save', () => console.log(user));

user.save();
