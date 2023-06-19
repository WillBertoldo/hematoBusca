import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaDoadoresPorTipoSanguineoComponent } from './busca-doadores-por-tipo-sanguineo.component';

describe('BuscaDoadoresPorTipoSanguineoComponent', () => {
  let component: BuscaDoadoresPorTipoSanguineoComponent;
  let fixture: ComponentFixture<BuscaDoadoresPorTipoSanguineoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscaDoadoresPorTipoSanguineoComponent]
    });
    fixture = TestBed.createComponent(BuscaDoadoresPorTipoSanguineoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
