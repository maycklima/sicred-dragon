import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DragaoModel } from 'src/app/shared/models/dragao.model';
import { DragaoService } from 'src/app/shared/services/dragao.service';

@Component({
  selector: 'app-listar-dragao',
  templateUrl: './listar-dragao.component.html',
  styleUrls: ['./listar-dragao.component.css']
})
export class ListarDragaoComponent implements OnInit {

  constructor(
    private dragaoService : DragaoService, 
    private router: Router
    ) { }

  ngOnInit() {
    this.listarDragoes();
  }

  listaDragoes: any;

  listarDragoes(){
  this.dragaoService.listarDragoes().subscribe((resultado: DragaoModel[]) => {
      this.listaDragoes = resultado;
  });
}

inserirEditarDragao(idDragao:number){
  this.router.navigate(['cadastro', idDragao]);
}

sair(){
  this.router.navigate(['']);
}

detalharDragao(idDragao:number){
  this.router.navigate(['detalhar', idDragao]);
  
}

deletarDragao(dragao: any){
  this.dragaoService.deletarDragaoPorId(dragao.id).subscribe((resultado: DragaoModel) => {
    if(resultado){
      this.listarDragoes();
    }});
  }
}
