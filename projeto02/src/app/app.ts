import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet, FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
  protected readonly title = signal('AppTeste');
  texto: string = 'Este é meu primeiro projeto Angular';
  numero: number = 0;
  gerarNumeroAleatorio() {
    this.numero = Math.round(Math.random() * 100);
  }
}
