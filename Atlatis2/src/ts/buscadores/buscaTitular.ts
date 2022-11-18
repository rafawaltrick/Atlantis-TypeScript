import Armazem from "../dominio/armazem";
import Busca from "../interfaces/buscador";
import Entrada from "../io/entrada";
import Cliente from "../modelos/cliente";


export default class BuscaTitular implements Busca <Cliente> {
    private entrada: Entrada = new Entrada()
    private clientes!: Cliente []
    private cliente!: Cliente
    constructor() {
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    buscar(): Cliente {
        let nome  = this.entrada.receberTexto("Digite o Nome do Cliente: ")
            this.clientes.map(c => {
                if(c.Nome === nome) {
                    this.cliente
                }
            })
            return this.cliente
            }
        }

