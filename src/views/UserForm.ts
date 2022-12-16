import { User, UserData } from '../models/User';
import { View } from './View';
export class UserForm extends View<User, UserData> {
  template(): string {
    return `
    <h2>Welcome</h2> 
    <input placeholder="${this.model.get('name')}" />
    <button class="set-name">Change Name</button>
    <button class="set-age">Set Random Age</button>
    <button class="save">Save</button>
    `;
  }

  get eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.save': this.saveModel,
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onSetNameClick = (): void => {
    const input = this.parentElement.querySelector('input');
    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };
}
