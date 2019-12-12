import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonInterface } from './pokemon-list/pokemon-results';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getPokemon(): Observable<PokemonInterface> {
    return this.httpClient.get<PokemonInterface>('https://pokeapi.co/api/v2/pokemon?offset=0&limit=807');
  }
}

