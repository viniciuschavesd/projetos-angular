import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarrosComponente } from './componentes/carros-componente/carros-componente';

@Component({
  imports: [RouterOutlet, CarrosComponente],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('projeto04');
}
