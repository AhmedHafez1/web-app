import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";

export class Collection<T, K> {
  models: T[] = [];
  eventing: Eventing = new Eventing();

  constructor(public rootUrl: string, private deserialize: (data: K) => T) {}

  on = this.eventing.on;
  trigger = this.eventing.trigger;

  fetch(): void {
    axios.get(this.rootUrl).then((res: AxiosResponse<K[]>) => {
      res.data.forEach((item) => {
        this.models.push(this.deserialize(item));
        this.trigger("change");
      });
    });
  }
}
