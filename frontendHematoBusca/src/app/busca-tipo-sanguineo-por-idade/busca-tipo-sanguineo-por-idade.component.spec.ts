import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaTipoSanguineoPorIdadeComponent } from './busca-tipo-sanguineo-por-idade.component';

describe('BuscaTipoSanguineoPorIdadeComponent', () => {
  let component: BuscaTipoSanguineoPorIdadeComponent;
  let fixture: ComponentFixture<BuscaTipoSanguineoPorIdadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscaTipoSanguineoPorIdadeComponent]
    });
    fixture = TestBed.createComponent(BuscaTipoSanguineoPorIdadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
