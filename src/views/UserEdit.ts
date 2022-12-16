import { User, UserData } from '../models/User';
import { View } from './View';

export class UserEdit extends View<User, UserData> {
  template(): string {
    return `
    <div>
      <div class="user-show"></div>
      <div class="user-form"></div>
    </div>
    `;
  }
}
