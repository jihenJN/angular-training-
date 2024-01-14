import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fruits } from '../models/fruits';

@Injectable({
  providedIn: 'root',
})
export class FruitsService {
  constructor(private http: HttpClient) {}
  get() {
    return this.http.get<Fruits[]>('http://localhost:3000/fruits');
  }
}
