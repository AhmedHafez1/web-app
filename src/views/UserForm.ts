import { User } from '../models/User';
export class UserForm {
  constructor(public parentElement: Element, public user: User) {
    this.onUserChange();
  }

  template(): string {
    return `
    <h2>Welcome</h2> 
    <h5>Name: ${this.user.get('name')}</h5>
    <h5>Age: ${this.user.get('age')}</h5>
    <input/>
    <button class="set-age">Click</button>
    `;
  }

  onUserChange(): void {
    this.user.on('change', () => this.render());
  }

  get eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClicked,
    };
  }

  onSetAgeClicked = (): void => {
    this.user.setRandomAge();
  };

  bindEvents(elementContent: DocumentFragment): void {
    for (const key in this.eventsMap) {
      const [event, selector] = key.split(`:`);

      elementContent
        .querySelectorAll(selector)
        .forEach((element: Element) =>
          element.addEventListener(event, this.eventsMap[key])
        );
    }
  }

  render(): void {
    this.parentElement.innerHTML = '';
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parentElement?.append(templateElement.content);
  }
}
