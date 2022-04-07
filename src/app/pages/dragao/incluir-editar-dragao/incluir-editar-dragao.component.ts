import { DragaoModel } from './../../../shared/models/dragao.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DragaoService } from 'src/app/shared/services/dragao.service';

@Component({
  selector: 'app-incluir-editar-dragao',
  templateUrl: './incluir-editar-dragao.component.html',
  styleUrls: ['./incluir-editar-dragao.component.css']
})
export class IncluirEditarDragaoComponent implements OnInit {

  constructor(
    private routerActive: ActivatedRoute,
    private router: Router,
    private dragaoService : DragaoService, 
    private _formBuilder: FormBuilder
    ) { }

  formulario: FormGroup;
  dragaoFormulario: DragaoModel;
  isEdicao: boolean;

  ngOnInit() {
    this.inicializarFormulario();
  }

  inicializarFormulario(){
    this.formulario = this._formBuilder.group({
      id:   [],
      name: [null, Validators.required],
      type: [null, Validators.required],
    });

    this.verificaEdicao();
  }

  verificaEdicao(){
    this.routerActive.paramMap
      .subscribe((params: ParamMap) => {
        const idDragao: number = +params.get('idDragao');
        if (!!idDragao) {
          this.isEdicao = true;
          this.dragaoService.buscarDragaoPorId(idDragao).subscribe((resultado: DragaoModel) => {
          this.preencherFormulario(resultado);  
          });
        }

      });
  }

  preencherFormulario(dragao: DragaoModel){
    this.formulario.patchValue(dragao);
  }

  cancelar(){
    this.router.navigate(['listagem']);
  }

  salvar(){  
    this.dragaoFormulario = this.formulario.getRawValue();
    
    if(this.formulario.valid){
      if(!this.isEdicao){
        this.dragaoService.cadastrarDragao(this.dragaoFormulario).subscribe((resultado: DragaoModel) => {
          if(resultado){
            this.cancelar();
          }
      });
      }else{
        this.dragaoService.atualizarDragao(this.dragaoFormulario).subscribe((resultado: DragaoModel) => {
          if(resultado){
            this.cancelar();
          }
      });
      }
    }
  }
}

