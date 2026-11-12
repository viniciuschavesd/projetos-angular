import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carro } from '../Carro';

@Injectable()

export class CarroServico {
    urlAPI = 'http://localhost:3000/carros';
    constructor(private http: HttpClient) { }
    getCarros(): Observable<Carro[]> {
        return this.http.get<Carro[]>(this.urlAPI);
    }
}
