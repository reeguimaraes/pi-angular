export class Chamado{
    filter(arg0: (chamdo: any) => void): Chamado {
      throw new Error('Method not implemented.');
    }
    id: number = 0;
    loja: string = "";
    departamento: string = "";
    foto: string = "";
    assunto: string = "";
    mensagem: string = "";

    constructor(id: number,loja: string,departamento: string,foto: string,assunto: string,mensagem: string ){
       this.id = id;
       this.loja = loja;
       this.departamento = departamento;
       this.foto = foto;
       this.assunto = assunto;
       this.mensagem = mensagem;
    }
}