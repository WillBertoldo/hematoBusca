import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscaDoadoresPorTipoSanguineoComponent } from './busca-doadores-por-tipo-sanguineo/busca-doadores-por-tipo-sanguineo.component';
import { BuscaIMCPorFaixaEtariaComponent } from './busca-imcpor-faixa-etaria/busca-imcpor-faixa-etaria.component';
import { BuscaObesosPorGeneroComponent } from './busca-obesos-por-genero/busca-obesos-por-genero.component';
import { BuscaPorUfComponent } from './busca-por-uf/busca-por-uf.component';
import { BuscaTipoSanguineoPorIdadeComponent } from './busca-tipo-sanguineo-por-idade/busca-tipo-sanguineo-por-idade.component';
import { HomeComponent } from './home/home.component';
import { OutrasInformacoesComponent } from './outras-informacoes/outras-informacoes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', component: BuscaPorUfComponent },
  { path: '', component: BuscaDoadoresPorTipoSanguineoComponent },
  { path: 'outrasInformacoes', component:OutrasInformacoesComponent},
  {path: 'outrasInformacoes', component: BuscaObesosPorGeneroComponent},
  {path: 'outrasInformacoes', component: BuscaIMCPorFaixaEtariaComponent},
  {path: 'outrasInformacoes', component: BuscaTipoSanguineoPorIdadeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
