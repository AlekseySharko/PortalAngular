import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdatedEventProviderService {
  public updatedProductRelatedDataEmitter: EventEmitter<any> = new EventEmitter<any>();
}
