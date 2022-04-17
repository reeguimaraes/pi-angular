import { Component, OnInit } from '@angular/core';
import { ChamadosService } from '../chamados.service';
import { Chamado } from '../models/Chamados.models';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-mural-chamados',
  templateUrl: './mural-chamados.component.html',
  styleUrls: ['./mural-chamados.component.css'],
})
export class MuralChamadosComponent implements OnInit {
  public chamados: Chamado[] = [];
  public chamado: Chamado = new Chamado(0, '', '', '', '', '');

  faSearch = faSearch;
  searchTerm: string ="";

  constructor(private _chamadosService: ChamadosService) {}

  ngOnInit(): void {
    this.listarChamados();
  }

  listarChamados() {
    this._chamadosService.getChamados().subscribe((retornaChamados) => {
      this.chamados = retornaChamados.map((item) => {
        return new Chamado(
          item.id,
          item.loja,
          item.departamento,
          item.foto,
          item.assunto,
          item.mensagem

        );
      });
    });
  }
  search(e: Event):void {
    
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.chamado = this.chamado.filter(chamdo =>{
      this.chamado.assunto.toLowerCase().includes(value);
    });

  }
}
