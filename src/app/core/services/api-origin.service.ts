import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiOriginService {
  readonly apiOrigin = "https://localhost:5000";
}
