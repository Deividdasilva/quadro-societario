import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Componentes de Sócio
import { AddSocioComponent } from './components/socio/add-socio/add-socio.component';
import { ListSocioComponent } from './components/socio/list-socio/list-socio.component';
import { EditSocioComponent } from './components/socio/edit-socio/edit-socio.component';

// Componentes de Empresa
import { AddEmpresaComponent } from './components/empresa/add-empresa/add-empresa.component';
import { EditEmpresaComponent } from './components/empresa/edit-empresa/edit-empresa.component';
import { ListEmpresaComponent } from './components/empresa/list-empresa/list-empresa.component';

// Outros Componentes
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,

    // Declarações dos componentes de Sócio
    AddSocioComponent,
    ListSocioComponent,
    EditSocioComponent,

    // Declarações dos componentes de Empresa
    AddEmpresaComponent,
    EditEmpresaComponent,
    ListEmpresaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
