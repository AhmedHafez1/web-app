export class UserForm {
  constructor(public parentElement: Element | null) {}

  template(): string {
    return `
    <h2>Welcome</h2> 
    `;
  }

  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.parentElement?.append(templateElement.content);
  }
}
