import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
  })

  export class DragaoService{
    private readonly APIreport = `${environment.API}`;

    constructor(private http: HttpClient) {
    }

    listarDragoes(): Observable<any[]> {
        return this.http.get<any[]>(`${this.APIreport}`);
    }

    buscarDragaoPorId(dragaoId): Observable<any[]> {
      return this.http.get<any[]>(`${this.APIreport}/`+ dragaoId);
  }

    cadastrarDragao(dragao: any): Observable<any[]> {
      return this.http.post<any[]>(`${this.APIreport}`, dragao);
    }

    atualizarDragao(dragao: any): Observable<any[]> {
      console.log('atualizando dragão');
      console.log(dragao);
      return this.http.put<any[]>(`${this.APIreport}/${dragao.id}`, dragao);
    }
  
    deletarDragaoPorId(dragaoId: any): Observable<any[]> {
      return this.http.delete<any[]>(`${this.APIreport}/` + dragaoId);
    }
}
