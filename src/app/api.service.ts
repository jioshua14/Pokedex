import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getPokemon() {
    return this.httpClient.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=100');
  }
}

