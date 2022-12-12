type Callback = () => void;

export class Eventing {
  private events: { [key: string]: Callback[] } = {};

  on = (eventName: string, callback: Callback) => {
    const eventHandlers = this.events[eventName] || [];
    eventHandlers.push(callback);
    this.events[eventName] = eventHandlers;
  };

  trigger = (eventName: string) => {
    const eventHandlers = this.events[eventName];

    if (!eventHandlers?.length) return;

    eventHandlers.forEach((callback) => callback());
  };
}
