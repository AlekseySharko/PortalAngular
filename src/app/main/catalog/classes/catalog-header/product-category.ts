import {NameAware} from "../../../../services/name-aware";

export class ProductCategory implements NameAware {
  public productCategoryId: number = 0;
  public name: string = '';
}
