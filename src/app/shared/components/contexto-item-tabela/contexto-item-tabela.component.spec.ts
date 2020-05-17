import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextoItemTabelaComponent } from './contexto-item-tabela.component';

describe('ContextoItemTabelaComponent', () => {
  let component: ContextoItemTabelaComponent;
  let fixture: ComponentFixture<ContextoItemTabelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextoItemTabelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextoItemTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
