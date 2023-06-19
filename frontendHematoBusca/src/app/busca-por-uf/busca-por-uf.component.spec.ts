import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaPorUfComponent } from './busca-por-uf.component';

describe('BuscaPorUfComponent', () => {
  let component: BuscaPorUfComponent;
  let fixture: ComponentFixture<BuscaPorUfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscaPorUfComponent]
    });
    fixture = TestBed.createComponent(BuscaPorUfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
