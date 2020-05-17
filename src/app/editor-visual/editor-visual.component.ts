import { Component, OnInit } from '@angular/core';
import { Tabela } from '../shared/models/models';

@Component({
  selector: 'app-editor-visual',
  templateUrl: './editor-visual.component.html',
  styleUrls: ['./editor-visual.component.scss'],
})
export class EditorVisualComponent implements OnInit {
  public tabelas: Tabela[] = [];

  constructor() {
    this.tabelas.splice(0, 0, {
      nome: 'SCHEMMA1.USUARIO',
      apelido: 'USER',
      id: 0,
    });
    this.tabelas.splice(0, 0, { nome: 'SCHEMMA1.LOG', apelido: 'LOG', id: 2 });
  }

  ngOnInit(): void {}
}
