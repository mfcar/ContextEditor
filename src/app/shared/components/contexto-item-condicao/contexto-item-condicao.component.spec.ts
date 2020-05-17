import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextoItemCondicaoComponent } from './contexto-item-condicao.component';

describe('ContextoItemCondicaoComponent', () => {
  let component: ContextoItemCondicaoComponent;
  let fixture: ComponentFixture<ContextoItemCondicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextoItemCondicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextoItemCondicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
