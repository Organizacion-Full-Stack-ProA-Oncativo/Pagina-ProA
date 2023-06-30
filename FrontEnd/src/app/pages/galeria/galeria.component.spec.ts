import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaComponent } from './galeria.component';

describe('GaleriaComponent', () => {
  let component: GaleriaComponent;
  let fixture: ComponentFixture<GaleriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GaleriaComponent]
    });
    fixture = TestBed.createComponent(GaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
