import { NgStyle } from '@angular/common';
import { Component, signal} from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterOutlet } from '@angular/router';


@Component({
  imports: [RouterOutlet, FormsModule, NgStyle],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
  protected readonly title = signal('AppTeste');
  texto: string = 'Este é meu primeiro projeto Angular';
  numero: number = 0;
  vetNumerosGerados: number[] = [];
  vetNomes: string[] = ['PAULO ANDRE','MARIA','SERGIO','SANDRA'];
  nomeEscolhido: string = "";
  tamanhoFonteNum: number = 30;
  tamanhoFonteCSS: string = "";
  corFonte: string = 'black';
  cores: string[] = ['pink','green','blue','black','red','yellow'];

  gerarNumeroAleatorio() {
    this.numero = Math.round(Math.random() * 100);
    this.vetNumerosGerados.push(this.numero);
  }

  aumentarFonte() {
    this.tamanhoFonteNum += 2;
    this.tamanhoFonteCSS = this.tamanhoFonteNum + 'px';
    }
  
  mudarCorFonte() {
    this.corFonte = this.cores[ Math.round( Math.random() * 10 / 2) ];
      // número randomico de 0 a 5
    }

}
