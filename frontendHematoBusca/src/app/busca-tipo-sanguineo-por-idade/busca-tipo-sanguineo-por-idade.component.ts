import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-busca-tipo-sanguineo-por-idade',
  templateUrl: './busca-tipo-sanguineo-por-idade.component.html',
  styleUrls: ['./busca-tipo-sanguineo-por-idade.component.css']
})
export class BuscaTipoSanguineoPorIdadeComponent {
  listaMediaIdade: any[] | undefined;
  mostrarLista: boolean = false;
  tituloPagina = 'Média de Idade por Tipo Sanguíneo';

  constructor(private apiService: ApiService) { }

  buscarMediaIdadePorTipoSanguineo() {
    this.apiService.getMediaIdadePorTipoSanguineo().subscribe(
      (data: any[]) => {
        this.listaMediaIdade = data;
        this.mostrarLista = true;
      },
      (error) => {
        console.log('Erro ao buscar média de idade por tipo sanguíneo:', error);
      }
    );
  }

  obterMediaIdadeArredondada(mediaIdade: number): number {
    return Math.floor(mediaIdade);
  }
}
