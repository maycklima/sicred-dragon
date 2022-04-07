import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IncluirEditarDragaoComponent } from './pages/dragao/incluir-editar-dragao/incluir-editar-dragao.component';
import { ListarDragaoComponent } from './pages/dragao/listar-dragao/listar-dragao.component';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { DetalheDragaoComponent } from './pages/dragao/detalhe-dragao/detalhe-dragao.component';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    IncluirEditarDragaoComponent,
    ListarDragaoComponent,
    DetalheDragaoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
