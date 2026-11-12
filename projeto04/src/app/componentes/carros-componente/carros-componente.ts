import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarroServico } from '../../servicos/carro-servico';
import { Carro } from '../../Carro';

@Component({
  imports: [RouterOutlet],
  selector: 'app-carros-componente',
  styleUrl: './carros-componente.css',
  templateUrl: './carros-componente.html',
})

export class CarrosComponente {
  carros: Carro[] = [];
  constructor(private carroServico: CarroServico) { }

  ngOnInit(): void {
    this.carroServico.getCarros().subscribe((dado) => {
      this.carros = dado;
      console.log(this.carros);
    });
  }
}
