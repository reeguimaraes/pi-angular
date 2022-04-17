import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chamado } from './models/Chamados.models';


@Injectable({
  providedIn: 'root'
})
export class ChamadosService {

  private url = "http://localhost:3000/chamados";

  constructor(private _httpClient: HttpClient) { }

    getChamados(): Observable<Chamado []>{
      return this._httpClient.get<Chamado[]>(this.url);
    }
   
    cadastrarChamados(chamado: Chamado): Observable<Chamado[]>{
      return this._httpClient.post<Chamado[]>(this.url,chamado);

    }

    atualizarChamados(id:any, chamado: Chamado): Observable<Chamado[]>{
      const urlAtualizar = `${this.url}/${id}`;
      return this._httpClient.put<Chamado[]>(urlAtualizar, chamado);
    }
    
    removeChamado(id:any): Observable<Chamado[]>{
      const urlDeletar = `${this.url}/${id}`;
      return this._httpClient.delete<Chamado[]>(urlDeletar);
    }
  }

