"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const impressorDocumentos_1 = __importDefault(require("./impressorDocumentos"));
const impressorEndereco_1 = __importDefault(require("./impressorEndereco"));
const impressorTelefones_1 = __importDefault(require("./impressorTelefones"));
class ImpressorDependenteTitular {
    constructor(cliente) {
        this.cliente = cliente;
    }
    imprimir() {
        let impressao = `****************************\n`
            + `| -- Titular do cliente dependente ${this.cliente.Nome} --\n`
            + `| \n`
            + `| Nome: ${this.cliente.Titular.Nome}\n`
            + `| Nome social: ${this.cliente.Titular.NomeSocial}\n`
            + `| Data de nascimento: ${this.cliente.Titular.DataNascimento.toLocaleDateString()}`
            + `| Data de cadastro: ${this.cliente.Titular.DataCadastro.toLocaleDateString()}`;
        this.impressor = new impressorTelefones_1.default(this.cliente.Titular.Telefones);
        impressao = impressao + `\n${this.impressor.imprimir()}`;
        this.impressor = new impressorEndereco_1.default(this.cliente.Titular.Endereco);
        impressao = impressao + `\n${this.impressor.imprimir()}`;
        this.impressor = new impressorDocumentos_1.default(this.cliente.Titular.Documentos);
        impressao = impressao + `\n${this.impressor.imprimir()}`;
        return impressao;
    }
}
exports.default = ImpressorDependenteTitular;
