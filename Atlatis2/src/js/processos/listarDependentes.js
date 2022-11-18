"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../abstracoes/processo"));
const armazem_1 = __importDefault(require("../dominio/armazem"));
const impressorDependente_1 = __importDefault(require("../impressores/impressorDependente"));
class ListagemDepedente extends processo_1.default {
    constructor() {
        super();
        this.clientes = armazem_1.default.InstanciaUnica.Clientes;
    }
    processar() {
        console.clear();
        let titular = this.entrada.receberTexto(`Digite o Número do Documento.`);
        console.log("Iniciando a listagem dos clientes dependentes...");
        this.clientes.map((clienteMap) => {
            clienteMap.Documentos.filter((docFilter) => {
                if (docFilter.Numero === titular) {
                    clienteMap.Dependentes.forEach((dependentes) => {
                        this.impressor = new impressorDependente_1.default(dependentes);
                        console.log(this.impressor.imprimir());
                    });
                }
            });
        });
    }
}
exports.default = ListagemDepedente;
