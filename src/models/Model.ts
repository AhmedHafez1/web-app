import { AxiosPromise, AxiosResponse } from 'axios';

export interface ModelAttributes<T> {
  get<K extends keyof T>(key: K): T[K];
  set(update: T): void;
  getAll(): T;
}

export interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

export interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

export interface HasId {
  id?: number;
}
export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private sync: Sync<T>,
    private eventing: Events
  ) {}

  get = this.attributes.get;

  on = this.eventing.on;

  trigger = this.eventing.trigger;

  set(update: T): void {
    this.attributes.set(update);
    this.trigger('change');
  }

  fetch(): void {
    const id = this.get('id');
    if (!id) throw new Error("can't fetch a user without an id");

    this.sync.fetch(id).then((res: AxiosResponse) => {
      this.set(res.data);
    });
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((res: AxiosResponse): void => this.trigger('save'))
      .catch(() => this.trigger('error'));
  }
}
