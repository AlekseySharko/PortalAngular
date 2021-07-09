import {NameAware} from "../../../../core/services/name-aware";

export class Filter {
  static nameFilter(collection: NameAware[], namePart: string) {
    return collection
      .filter(item => item?.name?.toLowerCase().includes(namePart?.toLowerCase()))
      .map(item => item?.name);
  }
}
