import { Injectable } from '@angular/core';
import {NameAware} from "./name-aware";
import {FormControl} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class GeneralDataValidatorService {
  constructor() { }

  getInCollectionNameValidator(collection: NameAware[], error: string) {
    return function(control: FormControl) {
      console.log(collection);
      console.log(control);
      if(collection.find(item => item.name === control.value)) {
        return null;
      }
      return { [error]: true };
    }
  }
}
