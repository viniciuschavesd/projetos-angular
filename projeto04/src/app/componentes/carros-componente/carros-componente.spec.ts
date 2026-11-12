import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarrosComponente } from './carros-componente';

describe('CarrosComponente', () => {
  let component: CarrosComponente;
  let fixture: ComponentFixture<CarrosComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrosComponente],
    }).compileComponents();

    fixture = TestBed.createComponent(CarrosComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
