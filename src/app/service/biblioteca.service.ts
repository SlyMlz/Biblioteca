
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {

  constructor(
    private http:HttpClient
  ) { }
}
