import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoPrestamoComponent } from './estado-prestamo.component';

describe('EstadoPrestamoComponent', () => {
  let component: EstadoPrestamoComponent;
  let fixture: ComponentFixture<EstadoPrestamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoPrestamoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadoPrestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
