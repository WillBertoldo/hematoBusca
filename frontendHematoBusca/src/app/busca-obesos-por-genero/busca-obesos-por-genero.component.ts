import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-busca-obesos-por-genero',
  templateUrl: './busca-obesos-por-genero.component.html',
  styleUrls: ['./busca-obesos-por-genero.component.css']
})
export class BuscaObesosPorGeneroComponent {
  percentObeseMen: number | undefined;
  percentObeseWomen: number | undefined;

  constructor(private apiService: ApiService) { }

  buscarObesosPorGenero() {
    this.apiService.getPercentObesosPorGenero().subscribe(
      (data: any) => {
        this.percentObeseMen = data.percentObeseMen.toFixed(3);
        this.percentObeseWomen = data.percentObeseWomen.toFixed(3);
      },
      (error) => {
        console.log('Erro ao buscar obesidade por gênero:', error);
      }
    );
  }
}
