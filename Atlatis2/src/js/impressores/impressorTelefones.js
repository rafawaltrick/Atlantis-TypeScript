"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const impressorTelefone_1 = __importDefault(require("./impressorTelefone"));
class ImpressorTelefones {
    constructor(telefones) {
        this.telefones = telefones;
    }
    imprimir() {
        let impressao = ``;
        for (let index = 0; index < this.telefones.length; index++) {
            this.impressor = new impressorTelefone_1.default(this.telefones[index]);
            if (index == 0) {
                impressao = impressao + `${this.impressor.imprimir()}`;
            }
            else {
                impressao = impressao + `\n${this.impressor.imprimir()}`;
            }
        }
        return impressao;
    }
}
exports.default = ImpressorTelefones;
