import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonPresentationComponent } from './pokemon-presentation.component';

describe('PokemonPresentationComponent', () => {
  let component: PokemonPresentationComponent;
  let fixture: ComponentFixture<PokemonPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
