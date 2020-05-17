import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorVisualComponent } from './editor-visual.component';

describe('EditorVisualComponent', () => {
  let component: EditorVisualComponent;
  let fixture: ComponentFixture<EditorVisualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorVisualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
