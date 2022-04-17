import { Component, OnInit } from '@angular/core';
import { ChamadosService } from '../chamados.service';
import { Chamado } from '../models/Chamados.models';


@Component({
  selector: 'app-mural-chamados',
  templateUrl: './mural-chamados.component.html',
  styleUrls: ['./mural-chamados.component.css'],
})
export class MuralChamadosComponent implements OnInit {
  public chamados: Chamado[] = [];

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
}
