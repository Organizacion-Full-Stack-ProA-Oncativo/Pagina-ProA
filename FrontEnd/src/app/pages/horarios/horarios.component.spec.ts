import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorariosComponent } from './horarios.component';

describe('HorariosComponent', () => {
  let component: HorariosComponent;
  let fixture: ComponentFixture<HorariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorariosComponent]
    });
    fixture = TestBed.createComponent(HorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
