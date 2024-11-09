import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSocioComponent } from './components/socio/add-socio/add-socio.component';
import { ListSocioComponent } from './components/socio/list-socio/list-socio.component';
import { EditSocioComponent } from './components/socio/edit-socio/edit-socio.component';
import { AddEmpresaComponent } from './components/empresa/add-empresa/add-empresa.component';
import { EditEmpresaComponent } from './components/empresa/edit-empresa/edit-empresa.component';
import { ListEmpresaComponent } from './components/empresa/list-empresa/list-empresa.component';

const routes: Routes = [
  { path: '', redirectTo: 'empresas', pathMatch: 'full' },

  // Rotas para Sócio
  { path: 'socios/add', component: AddSocioComponent },
  { path: 'socios/edit/:id', component: EditSocioComponent },
  { path: 'socios', component: ListSocioComponent },

  // Rotas para Empresa
  { path: 'empresas/add', component: AddEmpresaComponent },
  { path: 'empresas/edit/:id', component: EditEmpresaComponent },
  { path: 'empresas', component: ListEmpresaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
