import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorVisualComponent } from './editor-visual/editor-visual.component';


const routes: Routes = [
  {
    path: '',
    component: EditorVisualComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
