import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscaPorUfComponent } from './busca-por-uf/busca-por-uf.component';
import { BuscaIMCPorFaixaEtariaComponent } from './busca-imcpor-faixa-etaria/busca-imcpor-faixa-etaria.component';
import { BuscaObesosPorGeneroComponent } from './busca-obesos-por-genero/busca-obesos-por-genero.component';
import { BuscaTipoSanguineoPorIdadeComponent } from './busca-tipo-sanguineo-por-idade/busca-tipo-sanguineo-por-idade.component';
import { BuscaDoadoresPorTipoSanguineoComponent } from './busca-doadores-por-tipo-sanguineo/busca-doadores-por-tipo-sanguineo.component';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { OutrasInformacoesComponent } from './outras-informacoes/outras-informacoes.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscaPorUfComponent,
    BuscaIMCPorFaixaEtariaComponent,
    BuscaObesosPorGeneroComponent,
    BuscaTipoSanguineoPorIdadeComponent,
    BuscaDoadoresPorTipoSanguineoComponent,
    NavBarComponent,
    HomeComponent,
    OutrasInformacoesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
