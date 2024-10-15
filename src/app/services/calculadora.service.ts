import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  private apiUrl = 'https://localhost:7298/api/cdb/calcular'; // Atualize a URL da sua API

  constructor(private http: HttpClient) {}

  calcularInvestimento(dados: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, dados);
  }
}
