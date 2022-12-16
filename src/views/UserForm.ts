import { User, UserData } from "../models/User";
import { View } from "./View";
export class UserForm extends View<User, UserData> {
  template(): string {
    return `
    <h2>Welcome</h2> 
    <h5>Name: ${this.model.get("name")}</h5>
    <h5>Age: ${this.model.get("age")}</h5>
    <input/>
    <button class="set-name">Set Name</button>
    <button class="set-age">Set Random Age</button>
    `;
  }

  get eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-age": this.onSetAgeClick,
      "click:.set-name": this.onSetNameClick,
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onSetNameClick = (): void => {
    const input = this.parentElement.querySelector("input");
    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };
}
