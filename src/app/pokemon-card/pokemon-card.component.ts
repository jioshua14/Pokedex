import { Component, OnInit, Input } from '@angular/core';
import { Result } from '../pokemon-list/pokemon-results';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: Result;
  @Input() pokemonNum: number;
  constructor() { }

  ngOnInit() {
  }

}
