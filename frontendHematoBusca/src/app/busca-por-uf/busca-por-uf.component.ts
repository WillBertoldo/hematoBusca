import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-busca-por-uf',
  templateUrl: './busca-por-uf.component.html',
  styleUrls: ['./busca-por-uf.component.css']
})
export class BuscaPorUfComponent {
  doadoresPorEstado: number | undefined;
  estadoSelecionado: string = '';
  estados: { sigla: string, nome: string }[] = [
    { sigla: 'AC', nome: 'Acre' },
    { sigla: 'AL', nome: 'Alagoas' },
    { sigla: 'AP', nome: 'Amapá' },
    { sigla: 'AM', nome: 'Amazonas' },
    { sigla: 'BA', nome: 'Bahia' },
    { sigla: 'CE', nome: 'Ceará' },
    { sigla: 'DF', nome: 'Distrito Federal' },
    { sigla: 'ES', nome: 'Espírito Santo' },
    { sigla: 'GO', nome: 'Goiás' },
    { sigla: 'MA', nome: 'Maranhão' },
    { sigla: 'MT', nome: 'Mato Grosso' },
    { sigla: 'MS', nome: 'Mato Grosso do Sul' },
    { sigla: 'MG', nome: 'Minas Gerais' },
    { sigla: 'PA', nome: 'Pará' },
    { sigla: 'PB', nome: 'Paraíba' },
    { sigla: 'PR', nome: 'Paraná' },
    { sigla: 'PE', nome: 'Pernambuco' },
    { sigla: 'PI', nome: 'Piauí' },
    { sigla: 'RJ', nome: 'Rio de Janeiro' },
    { sigla: 'RN', nome: 'Rio Grande do Norte' },
    { sigla: 'RS', nome: 'Rio Grande do Sul' },
    { sigla: 'RO', nome: 'Rondônia' },
    { sigla: 'RR', nome: 'Roraima' },
    { sigla: 'SC', nome: 'Santa Catarina' },
    { sigla: 'SP', nome: 'São Paulo' },
    { sigla: 'SE', nome: 'Sergipe' },
    { sigla: 'TO', nome: 'Tocantins' }
  ];
  
  

   constructor(private apiService: ApiService) { }

  buscarDoadoresPorEstado() {
    this.doadoresPorEstado = undefined; // Limpa o resultado anterior

    if (this.estadoSelecionado) {
      this.apiService.getDoadoresPorEstado(this.estadoSelecionado).subscribe(
        (data: number) => {
          this.doadoresPorEstado = data;
        },
        (error) => {
          console.log('Erro ao buscar doadores por estado:', error);
        }
      );
    }
  }

  getNomeEstadoSelecionado(): string {
    const estado = this.estados.find(e => e.sigla === this.estadoSelecionado);
    return estado ? estado.nome : '';
  }
  atualizarResultado(){
    this.doadoresPorEstado = undefined;
  }
}