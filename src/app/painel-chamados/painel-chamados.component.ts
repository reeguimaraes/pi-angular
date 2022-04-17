import { Component, OnInit } from '@angular/core';
import { Chamado } from '../models/Chamados.models';
import { ChamadosService } from '../chamados.service';

@Component({
  selector: 'app-painel-chamados',
  templateUrl: './painel-chamados.component.html',
  styleUrls: ['./painel-chamados.component.css'],
})
export class PainelChamadosComponent implements OnInit {
  public chamado: Chamado = new Chamado(0, '', '', '', '', '');

  constructor(private _chamadosService: ChamadosService) {}

  ngOnInit(): void {}

  cadastrar() {
    this._chamadosService.cadastrarChamados(this.chamado).subscribe(
      (chamado) => {
        this.chamado = new Chamado(0, '', '', '', '', '');
      },
      (err) => {
        console.log('erro ao cadastrar');
      }
    );

    window.location.href = '/mural';
  }

  atualizar(id: number) {
    this._chamadosService
      .atualizarChamados(id, this.chamado)
      .subscribe((chamado) => {
        this.chamado = new Chamado(0, '', '', '', '', '');
      });
      
    window.location.href = '/mural';
  }

  excluir(id: number) {
    this._chamadosService.removeChamado(id).subscribe((chamado) => {
      this.chamado = new Chamado(0, '', '', '', '', '');
    });

    window.location.href = '/mural';
  }
}
