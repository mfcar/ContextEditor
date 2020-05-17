import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextoItemAcaoComponent } from './contexto-item-acao.component';

describe('ContextoItemAcaoComponent', () => {
  let component: ContextoItemAcaoComponent;
  let fixture: ComponentFixture<ContextoItemAcaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextoItemAcaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextoItemAcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
