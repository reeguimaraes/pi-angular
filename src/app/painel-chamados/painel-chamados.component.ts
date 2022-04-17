import { Component, OnInit } from '@angular/core';
import { Chamado } from '../models/Chamados.models';
import { ChamadosService } from '../chamados.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-painel-chamados',
  templateUrl: './painel-chamados.component.html',
  styleUrls: ['./painel-chamados.component.css'],
})
export class PainelChamadosComponent implements OnInit {
  public chamados: Chamado[] = [];
  public chamado: Chamado = new Chamado(0, '', '', '', '', '');

  faSearch = faSearch;
  searchTerm: string ="";

  constructor(private _chamadosService: ChamadosService) {}

  ngOnInit(): void {
    this.listarChamados();
  }

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

  search(e: Event):void {
    
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.chamado = this.chamado.filter(chamdo =>{
      this.chamado.assunto.toLowerCase().includes(value);
    });

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
