"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ImpressorTelefone {
    constructor(telefone) {
        this.telefone = telefone;
    }
    imprimir() {
        let impressao = `| Telefone:\n`
            + `| DDD: ${this.telefone.Ddd}\n`
            + `| Numero: ${this.telefone.Numero}`;
        return impressao;
    }
}
exports.default = ImpressorTelefone;
