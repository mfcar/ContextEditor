import { Component, OnInit, Input } from '@angular/core';
import { Tabela } from '../../models/models';

@Component({
  selector: 'app-contexto-item-tabela',
  templateUrl: './contexto-item-tabela.component.html',
  styleUrls: ['./contexto-item-tabela.component.scss']
})
export class ContextoItemTabelaComponent implements OnInit {
  @Input() tabela: Tabela;

  constructor() { }

  ngOnInit(): void {
  }

}
