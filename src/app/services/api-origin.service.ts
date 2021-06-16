import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiOriginService {
  readonly apiOrigin = "http://localhost:9044";
}
