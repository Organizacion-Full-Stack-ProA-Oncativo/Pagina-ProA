import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreinscripcionesComponent } from './preinscripciones.component';

describe('PreinscripcionesComponent', () => {
  let component: PreinscripcionesComponent;
  let fixture: ComponentFixture<PreinscripcionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreinscripcionesComponent]
    });
    fixture = TestBed.createComponent(PreinscripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
