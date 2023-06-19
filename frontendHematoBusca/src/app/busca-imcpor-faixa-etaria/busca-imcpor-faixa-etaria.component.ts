import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-busca-imcpor-faixa-etaria',
  templateUrl: './busca-imcpor-faixa-etaria.component.html',
  styleUrls: ['./busca-imcpor-faixa-etaria.component.css']
})
export class BuscaIMCPorFaixaEtariaComponent {
  imcPorFaixaIdade: any[] | undefined;
  imcPorFaixaIdadeOrdenado: any[] | undefined;

  constructor(private apiService: ApiService) { }

  buscarIMCPorFaixaEtaria() {
    this.apiService.getImcPorFaixaIdade().subscribe(
      (data: any[]) => {
        this.imcPorFaixaIdade = data;
        this.ordenarPorIdade();
      },
      (error) => {
        console.log('Erro ao buscar IMC por faixa etária:', error);
      }
    );
  }

  ordenarPorIdade() {
    if (this.imcPorFaixaIdade) {
      this.imcPorFaixaIdadeOrdenado = this.imcPorFaixaIdade.slice().sort((a, b) => {
        const faixaIdadeA = parseInt(a.faixaIdade.split(' ')[0]);
        const faixaIdadeB = parseInt(b.faixaIdade.split(' ')[0]);
        return faixaIdadeA - faixaIdadeB;
      });
    }
  }
  
}
