import { Injectable } from '@angular/core';
import {NameAware} from "./name-aware";
import {AbstractControl, FormControl} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class GeneralDataValidatorService {
  constructor() { }

  imagePatternRegex = new RegExp("(https://|http://).+(.bmp|.jpg|.jpeg|.gif|.png|.svg)$", "i")

  getInCollectionNameValidator(collection: NameAware[], error: string) {
    return function(control: AbstractControl) {
      if(collection.find(item => item.name === control.value)) {
        return null;
      }
      return { [error]: true };
    }
  }

  getEmptyOrWhiteSpaceValidator() {
    return function (control: AbstractControl) {
      if (/\S/.test(control.value)) {
        return null;
      }
      return { EmptyOrWhitespace: true }
    }
  }

  getIdValidator(idPropertyName: string, error:string) {
    return function(control: AbstractControl) {
      if(control?.value?.[`${idPropertyName}`] > 0) {
        return null;
      }
      return { [error]: true };
    }
  }

  getSameValueValidator(otherControl: AbstractControl, error: string, triggerOnEmpty: boolean = false) {
    return function(control: AbstractControl) {
      if(!triggerOnEmpty && !control?.value) {
        return null;
      }
      if(control?.value == otherControl?.value) {
        return null;
      }
      return { [error]: true };
    }
  }
}
