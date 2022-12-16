import { HasId } from "../models/ApiSync";
import { Model } from "../models/Model";

export abstract class View<T extends Model<K>, K extends HasId> {
  constructor(public parentElement: Element, public model: T) {
    this.onModelChange();
  }

  abstract template(): string;

  abstract eventsMap: { [key: string]: () => void };

  onModelChange(): void {
    this.model.on("change", () => this.render());
  }

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
    this.parentElement.innerHTML = "";
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parentElement.append(templateElement.content);
  }
}
