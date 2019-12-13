import { Component, OnInit, Input } from '@angular/core';
import { Result } from '../pokemon-list/pokemon-results';
import { stringify } from 'querystring';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: Result;
  @Input() pokeLink: string;
  constructor() { }

  ngOnInit() {
  }

  getPokemonNum(): string {
    if (this.pokeLink.length == 36) {
      return this.pokeLink.substr(34, 1);
    } else if (this.pokeLink.length == 37) {
      return this.pokeLink.substr(34, 2);
    } else {
      return this.pokeLink.substr(34, 3);
    }

  }
}

