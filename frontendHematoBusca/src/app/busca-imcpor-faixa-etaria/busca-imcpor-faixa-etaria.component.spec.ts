import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaIMCPorFaixaEtariaComponent } from './busca-imcpor-faixa-etaria.component';

describe('BuscaIMCPorFaixaEtariaComponent', () => {
  let component: BuscaIMCPorFaixaEtariaComponent;
  let fixture: ComponentFixture<BuscaIMCPorFaixaEtariaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscaIMCPorFaixaEtariaComponent]
    });
    fixture = TestBed.createComponent(BuscaIMCPorFaixaEtariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
