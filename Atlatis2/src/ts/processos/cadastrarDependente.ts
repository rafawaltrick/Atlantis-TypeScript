import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import Endereco from "../modelos/endereco";

export default class CadastrarDependente extends Processo {
    private listaClientes!: Cliente []
    private cliente!: Cliente
constructor() {
super()
this.listaClientes  = Armazem.InstanciaUnica.Clientes

}
    processar(): void {
        console.log('Iniciando o cadastro de um novo cliente...')

        let numero = this.entrada.receberTexto ('Qual número do documento do Titular')
        let titular = this.listaClientes.find(titular => titular.Documentos.find(documento => documento.Numero == numero))
        console.log(titular?.Nome);
        

        if(titular){

            let nome = this.entrada.receberTexto('Qual seu nome?')
            let nomeSocial = this.entrada.receberTexto ('Qual seu nome Social?')
            let dataNascimento = this.entrada.receberData ('Qual sua data de nascimento?')
            let dependente = new Cliente (nome, nomeSocial, dataNascimento)

            dependente.Endereco = titular?.Endereco.clonar() as Endereco
            
            titular.Dependentes.push(dependente)
            dependente.setTitular = titular
            
            this.listaClientes.push(dependente)
                    
            console.log(`Finalizado cadastro do dependente do(a) ${titular.Nome}`);   

        }else{
            console.log('Titular não encontrado');
        }
    }

}