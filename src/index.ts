import { UserForm } from './views/UserForm';

const parentElement = document.getElementById('root');
const form = new UserForm(parentElement);

form.render();
