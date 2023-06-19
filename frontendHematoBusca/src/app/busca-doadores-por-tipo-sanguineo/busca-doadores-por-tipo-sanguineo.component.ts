import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Doador {
  mediaIdade: number;
  tipoSanguineo: string;
}

@Component({
  selector: 'app-busca-doadores-por-tipo-sanguineo',
  templateUrl: './busca-doadores-por-tipo-sanguineo.component.html',
  styleUrls: ['./busca-doadores-por-tipo-sanguineo.component.css']
})
export class BuscaDoadoresPorTipoSanguineoComponent {
  tipoSanguineo: string = '';
  mediaIdade: number | null = null;
  tiposSanguineos: string[] = ['O-', 'A+', 'AB+', 'AB-', 'B-', 'A-', 'B+', 'O+'];

  constructor(private http: HttpClient) {}

  buscarDadosTipoSanguineo() {

    this.http.get<Doador[]>('http://localhost:8080/media-idade-por-tipo-sanguineo')
      .subscribe((doadores: Doador[]) => {
        const doadorEncontrado = doadores.find(d => d.tipoSanguineo === this.tipoSanguineo);
        if (doadorEncontrado) {
          this.mediaIdade = doadorEncontrado.mediaIdade;
        }else
          this.mediaIdade = null;
      });
  }
  atualizarResultado(){
    this.mediaIdade = null;
  }

}
