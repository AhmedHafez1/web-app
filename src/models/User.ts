interface UserData {
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
  private events: { [key: string]: Callback[] } = {};
  constructor(private data: UserData) {}

  get(prop: string): string | number {
    return this.data[prop];
  }

  set(update: UserData): void {
    this.data = { ...this.data, ...update };
  }

  on(eventName: string, callback: Callback) {
    const eventHandlers = this.events[eventName] || [];
    eventHandlers.push(callback);
    this.events[eventName] = eventHandlers;
  }

  trigger(eventName: string) {
    const eventHandlers = this.events[eventName];

    if (!eventHandlers?.length) return;

    eventHandlers.forEach((callback) => callback());
  }
}
