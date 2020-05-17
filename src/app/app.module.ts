import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditorVisualComponent } from './editor-visual/editor-visual.component';
import { ContextoItemTabelaComponent } from './shared/components/contexto-item-tabela/contexto-item-tabela.component';
import { ContextoItemAcaoComponent } from './shared/components/contexto-item-acao/contexto-item-acao.component';
import { ContextoItemColunaComponent } from './shared/components/contexto-item-coluna/contexto-item-coluna.component';
import { ContextoItemCondicaoComponent } from './shared/components/contexto-item-condicao/contexto-item-condicao.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EditorVisualComponent,
    ContextoItemTabelaComponent,
    ContextoItemAcaoComponent,
    ContextoItemColunaComponent,
    ContextoItemCondicaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
