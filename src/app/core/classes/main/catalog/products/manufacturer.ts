import {NameAware} from "../../../../services/name-aware";

export class Manufacturer implements NameAware {
  manufacturerId: number = 0;
  name: string = '';
  country: string = '';
}
