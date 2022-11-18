"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const armazem_1 = __importDefault(require("../dominio/armazem"));
const entrada_1 = __importDefault(require("../io/entrada"));
class BuscaTitular {
    constructor() {
        this.entrada = new entrada_1.default();
        this.clientes = armazem_1.default.InstanciaUnica.Clientes;
    }
    buscar() {
        let nome = this.entrada.receberTexto("Digite o Nome do Cliente: ");
        this.clientes.map(c => {
            if (c.Nome === nome) {
                this.cliente;
            }
        });
        return this.cliente;
    }
}
exports.default = BuscaTitular;
