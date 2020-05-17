import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextoItemColunaComponent } from './contexto-item-coluna.component';

describe('ContextoItemColunaComponent', () => {
  let component: ContextoItemColunaComponent;
  let fixture: ComponentFixture<ContextoItemColunaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextoItemColunaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextoItemColunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
