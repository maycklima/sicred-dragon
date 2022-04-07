import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetalheDragaoComponent } from "./pages/dragao/detalhe-dragao/detalhe-dragao.component";
import { IncluirEditarDragaoComponent } from "./pages/dragao/incluir-editar-dragao/incluir-editar-dragao.component";
import { ListarDragaoComponent } from "./pages/dragao/listar-dragao/listar-dragao.component";
import { LoginComponent } from "./pages/login/login.component";

const APP_ROUTES: Routes = [
{path:'', component: LoginComponent},
{path:'listagem', component: ListarDragaoComponent},
{path:'cadastro', component: IncluirEditarDragaoComponent},
{path:'cadastro/:idDragao', component: IncluirEditarDragaoComponent},
{path:'detalhar/:idDragao', component: DetalheDragaoComponent}
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);