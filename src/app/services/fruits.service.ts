import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fruits } from '../models/fruits';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FruitsService {
  constructor(private http: HttpClient) {}
  get() {
    return this.http
      .get<Fruits[]>('http://localhost:3000/fruit')
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message);
  }
}
