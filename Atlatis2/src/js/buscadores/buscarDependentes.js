"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const armazem_1 = __importDefault(require("../dominio/armazem"));
const entrada_1 = __importDefault(require("../io/entrada"));
class BuscarDependente {
    constructor() {
        this.entrada = new entrada_1.default();
        this.clientes = armazem_1.default.InstanciaUnica.Clientes;
    }
    buscar() {
        let numeroDocumento = this.entrada.receberTexto("Digite o numero do documento do dependente desejado: ");
        this.clientes.forEach((cliente) => {
            cliente.Documentos.forEach((documento) => {
                if (documento.Numero === numeroDocumento) {
                    this.dependente = cliente;
                }
            });
        });
        return this.dependente;
    }
}
exports.default = BuscarDependente;
