import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class CarroService {
    urlAPI = 'http://localhost:3000/carros';
    constructor(private http: HttpClient) { }
    }
