"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../abstracoes/processo"));
const armazem_1 = __importDefault(require("../dominio/armazem"));
const listagemTitulares_1 = __importDefault(require("./listagemTitulares"));
class ExcluirTitular extends processo_1.default {
    constructor() {
        super();
        this.clientes = armazem_1.default.InstanciaUnica.Clientes;
    }
    processar() {
        this.processo = new listagemTitulares_1.default();
        this.processo.processar();
        let numeroDocumento = this.entrada.receberTexto(`Digite o numero do documento do titular: `);
        let indice = this.clientes.findIndex((cliente) => cliente.Documentos.find((documento) => documento.Numero === numeroDocumento));
        let filtrados = this.clientes.filter(cliente => (cliente.Documentos.find((documento) => documento.Numero === numeroDocumento)));
        let documentos = [];
        filtrados.forEach(element => {
            element.Dependentes.forEach(d => d.Documentos.forEach(doc => { documentos.push({ numero: doc.Numero }); }));
        });
        documentos.forEach(excluido => {
            for (let i = 0; i < this.clientes.length; i++) {
                const cliente = this.clientes[i];
                for (let index = 0; index < cliente.Documentos.length; index++) {
                    const documento = cliente.Documentos[index];
                    if (documento.Numero === excluido.numero) {
                        this.clientes.splice(i, 1);
                    }
                    break;
                }
            }
        });
        if (indice === -1) {
            console.log(`Titular não Encontrado.`);
        }
        else {
            this.clientes.splice(indice, 1);
            console.log(`Titular com Documento ${numeroDocumento} Excluido com Sucessso!`);
        }
    }
}
exports.default = ExcluirTitular;
