import { User } from './models/User';

const user = new User({ id: 4, name: 'Mariam', age: 7 });

user.save();
