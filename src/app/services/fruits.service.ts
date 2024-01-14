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
      .get<Fruits[]>('http://localhost:3000/fruits')
      .pipe(catchError(this.errorHandler));
  }

  create(payload: Fruits) {
    return this.http
      .post<Fruits>('http://localhost:3000/fruits', payload)
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message);
  }
}
