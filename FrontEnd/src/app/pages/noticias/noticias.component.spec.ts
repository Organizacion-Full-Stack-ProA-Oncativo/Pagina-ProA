import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasComponent } from './noticias.component';

describe('NoticiasComponent', () => {
  let component: NoticiasComponent;
  let fixture: ComponentFixture<NoticiasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoticiasComponent]
    });
    fixture = TestBed.createComponent(NoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
