import { DragaoModel } from './../../../shared/models/dragao.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DragaoService } from 'src/app/shared/services/dragao.service';

@Component({
  selector: 'app-detalhe-dragao',
  templateUrl: './detalhe-dragao.component.html',
  styleUrls: ['./detalhe-dragao.component.css']
})
export class DetalheDragaoComponent implements OnInit {

  constructor(
    private routerActive: ActivatedRoute,
    private router: Router,
    private dragaoService : DragaoService
  ) { }

  dragao: DragaoModel;

  ngOnInit() {
    this.inicializar();
  }

  inicializar(){
    this.routerActive.paramMap
      .subscribe((params: ParamMap) => {
        const idDragao: number = +params.get('idDragao');
          this.dragaoService.buscarDragaoPorId(idDragao).subscribe((resultado: DragaoModel) => {
            this.dragao = resultado;
          });;
      });
  }

  cancelar(){
    this.router.navigate(['listagem']);
  }

}
