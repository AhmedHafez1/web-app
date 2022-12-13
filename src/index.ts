import { User } from './models/User';

const user = new User({ id: 2, name: 'Yosuf', age: 5 });

user.on('change', () => console.log(user));
user.on('save', () => console.log(user));

user.save();
