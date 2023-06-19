import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getDoadoresPorEstado(estado: string): Observable<number> {
    const url = `${this.apiUrl}/doadores-por-estado?estado=${estado}`;
    return this.http.get<any>(url).pipe(
      map(response => response as number)
    );
  }

  getImcPorFaixaIdade(): Observable<any[]> {
    const url = `${this.apiUrl}/imc-por-faixa-idade`;
    return this.http.get<any[]>(url);
  }

  getPercentObesosPorGenero(): Observable<any[]> {
    const url = `${this.apiUrl}/percent-obesos-por-genero`;
    return this.http.get<any[]>(url);
  }

  getMediaIdadePorTipoSanguineo(): Observable<any[]> {
    const url = `${this.apiUrl}/media-idade-por-tipo-sanguineo`;
    return this.http.get<any[]>(url);
  }

  getDoadoresPorTipoSanguineo(tipoSanguineo: string): Observable<any[]> {
    const url = `${this.apiUrl}/doadores-por-tipo-sanguineo?tipoSanguineo=${tipoSanguineo}`;
    return this.http.get<any[]>(url);
  }
}
