import Armazem from "../dominio/armazem"
import Busca from "../interfaces/buscador"
import Entrada from "../io/entrada"
import Cliente from "../modelos/cliente"
import Documento from "../modelos/documento"

export default class BuscarDependente implements Busca<Cliente>{
    private clientes!:Cliente[]
    private dependente!:Cliente
    private entrada = new Entrada()

    constructor(){
        this.clientes = Armazem.InstanciaUnica.Clientes
    }

    buscar(): Cliente {

        let numeroDocumento = this.entrada.receberTexto("Digite o numero do documento do dependente desejado: ")

        this.clientes.forEach( (cliente:Cliente) => {
            cliente.Documentos.forEach( (documento:Documento) => {
                if(documento.Numero === numeroDocumento){
                    this.dependente = cliente
                }
            })
        })

        return this.dependente
    }
}