"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../abstracoes/processo"));
const buscarDependentes_1 = __importDefault(require("../buscadores/buscarDependentes"));
const impressorDependenteTitular_1 = __importDefault(require("../impressores/impressorDependenteTitular"));
class ListagemDependenteTitular extends processo_1.default {
    constructor() {
        super();
    }
    processar() {
        let buscar = new buscarDependentes_1.default();
        let dependente = buscar.buscar();
        if (dependente === undefined) {
            console.log("Titular não encontrado...");
        }
        else {
            this.impressor = new impressorDependenteTitular_1.default(dependente);
            console.log(this.impressor.imprimir());
        }
    }
}
exports.default = ListagemDependenteTitular;
