import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { PokemonInterface } from './pokemon-results';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokeArray: PokemonInterface;
  constructor(private getService: ApiService) { }

  ngOnInit() {
    this.getPoke();
  }

  getPoke() {
    this.getService.getPokemon().subscribe(pokemon => {
      console.log(pokemon.results);
      this.pokeArray = pokemon;

      Object.keys(pokemon.results).forEach(item => {
        console.log(item); // key
        console.log(pokemon.results[item]);

      });
    });
  }


}
