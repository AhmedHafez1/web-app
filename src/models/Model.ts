export interface ModelAttributes<T> {
  get<K extends keyof T>(key: K): T[K];
  set(update: T): void;
  getAll(): T;
}

export interface Sync<T, RT> {
  fetch(id: number): RT;
  save(data: T): RT;
}

export interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

export class Model {}
