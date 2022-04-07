import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  console.log('listando')
  this.dragaoService.listarDragoes().subscribe(resposta => {
      console.log(resposta);
      this.listaDragoes = resposta;
  });
}



inserirEditarDragao(idDragao:any){
  console.log(idDragao)
  this.router.navigate(['cadastro', idDragao]);
  
}

sair(){
  this.router.navigate(['']);
  
}

detalharDragao(idDragao:any){
  console.log(idDragao)
  this.router.navigate(['detalhar', idDragao]);
  
}

deletarDragao(dragao: any){
  this.dragaoService.deletarDragaoPorId(dragao.id).subscribe(resposta => {
    console.log(resposta);
    if(resposta){
      this.listarDragoes();
    }
});
}

}
