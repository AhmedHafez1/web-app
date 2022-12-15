import { User } from './models/User';
import { UserForm } from './views/UserForm';

const user = User.buildUser({ name: 'Abdulghany', age: 65 });

const parentElement = document.getElementById('root') as Element;

const form = new UserForm(parentElement, user);

form.render();
