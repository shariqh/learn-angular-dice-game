import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const MAX_ROLL = 6;

@Injectable({
  providedIn: 'root'
})
export class RollService {

  constructor() { }

  public roll(): Observable<number> {
    return of(Math.ceil(Math.random() * MAX_ROLL));
  }
}
