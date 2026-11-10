import { TestBed } from '@angular/core/testing';
import { CarroServico } from './carro-servico';

describe('CarroServico', () => {
  let service: CarroServico;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarroServico);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
