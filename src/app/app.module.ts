import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {PokemonListComponent} from './pokemon-list/pokemon-list.component'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PokemonPresentationComponent } from './pokemon-presentation/pokemon-presentation.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    HeaderComponent,
    PokemonPresentationComponent,
    PokemonCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
