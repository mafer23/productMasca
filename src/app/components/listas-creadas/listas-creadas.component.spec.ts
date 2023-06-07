import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasCreadasComponent } from './listas-creadas.component';

describe('ListasCreadasComponent', () => {
  let component: ListasCreadasComponent;
  let fixture: ComponentFixture<ListasCreadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListasCreadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListasCreadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
