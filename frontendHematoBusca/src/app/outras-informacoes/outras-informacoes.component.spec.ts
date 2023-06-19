import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutrasInformacoesComponent } from './outras-informacoes.component';

describe('OutrasInformacoesComponent', () => {
  let component: OutrasInformacoesComponent;
  let fixture: ComponentFixture<OutrasInformacoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutrasInformacoesComponent]
    });
    fixture = TestBed.createComponent(OutrasInformacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
