import { User } from './models/User';

const user = new User({ name: 'Ahmed', age: 2 });

user.on('print', () => {
  console.log('Print 1');
});

user.trigger('print');
