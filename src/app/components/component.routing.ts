import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListasCreadasComponent } from './listas-creadas/listas-creadas.component';


const routes: Routes = [
  {
    path: 'home',
    component: ListasCreadasComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})

export class ComponentRoutingModule {}
