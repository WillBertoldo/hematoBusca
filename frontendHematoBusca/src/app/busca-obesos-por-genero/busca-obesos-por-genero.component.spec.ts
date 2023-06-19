import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaObesosPorGeneroComponent } from './busca-obesos-por-genero.component';

describe('BuscaObesosPorGeneroComponent', () => {
  let component: BuscaObesosPorGeneroComponent;
  let fixture: ComponentFixture<BuscaObesosPorGeneroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscaObesosPorGeneroComponent]
    });
    fixture = TestBed.createComponent(BuscaObesosPorGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
