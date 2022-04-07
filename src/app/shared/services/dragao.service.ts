import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { DragaoModel } from "../models/dragao.model";

@Injectable({
    providedIn: 'root'
  })

  export class DragaoService{
    private readonly APIreport = `${environment.API}`;

    constructor(private http: HttpClient) {
    }

    listarDragoes(): Observable<DragaoModel[]> {
        return this.http.get<DragaoModel[]>(`${this.APIreport}`);
    }

    buscarDragaoPorId(dragaoId: number): Observable<DragaoModel> {
      return this.http.get<DragaoModel>(`${this.APIreport}/`+ dragaoId);
  }

    cadastrarDragao(dragao: DragaoModel): Observable<DragaoModel> {
      return this.http.post<DragaoModel>(`${this.APIreport}`, dragao);
    }

    atualizarDragao(dragao: DragaoModel): Observable<DragaoModel> {
      console.log('atualizando dragão');
      console.log(dragao);
      return this.http.put<DragaoModel>(`${this.APIreport}/${dragao.id}`, dragao);
    }
  
    deletarDragaoPorId(dragaoId: number): Observable<DragaoModel> {
      return this.http.delete<DragaoModel>(`${this.APIreport}/` + dragaoId);
    }
}
