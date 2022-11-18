"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../abstracoes/processo"));
const armazem_1 = __importDefault(require("../dominio/armazem"));
const cliente_1 = __importDefault(require("../modelos/cliente"));
class CadastrarDependente extends processo_1.default {
    constructor() {
        super();
        this.listaClientes = armazem_1.default.InstanciaUnica.Clientes;
    }
    processar() {
        console.log('Iniciando o cadastro de um novo cliente...');
        let numero = this.entrada.receberTexto('Qual número do documento do Titular');
        let titular = this.listaClientes.find(titular => titular.Documentos.find(documento => documento.Numero == numero));
        console.log(titular === null || titular === void 0 ? void 0 : titular.Nome);
        if (titular) {
            let nome = this.entrada.receberTexto('Qual seu nome?');
            let nomeSocial = this.entrada.receberTexto('Qual seu nome Social?');
            let dataNascimento = this.entrada.receberData('Qual sua data de nascimento?');
            let dependente = new cliente_1.default(nome, nomeSocial, dataNascimento);
            dependente.Endereco = titular === null || titular === void 0 ? void 0 : titular.Endereco.clonar();
            titular.Dependentes.push(dependente);
            dependente.Titular = titular;
            this.listaClientes.push(dependente);
            console.log(`Finalizado cadastro do dependente do(a) ${titular.Nome}`);
        }
        else {
            console.log('Titular não encontrado');
        }
    }
}
exports.default = CadastrarDependente;
