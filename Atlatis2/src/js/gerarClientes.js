"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("./abstracoes/processo"));
const armazem_1 = __importDefault(require("./dominio/armazem"));
const TipoDocumento_1 = require("./enumeracoes/TipoDocumento");
const cliente_1 = __importDefault(require("./modelos/cliente"));
const documento_1 = __importDefault(require("./modelos/documento"));
const endereco_1 = __importDefault(require("./modelos/endereco"));
const telefone_1 = __importDefault(require("./modelos/telefone"));
class GerarClientes extends processo_1.default {
    constructor() {
        super();
        this.clientes = armazem_1.default.InstanciaUnica.Clientes;
    }
    processar() {
        listaClientes.forEach(cliente => {
            let telefones, endereco, documentos, dependentes, titular;
            let objCliente = new cliente_1.default(cliente.nome, cliente.nomeSocial, cliente.dataNascimento);
            telefones = cliente.telefones.map(telefone => { return new telefone_1.default(telefone.ddd, telefone.numero); });
            endereco = new endereco_1.default(cliente.endereco.rua, cliente.endereco.bairro, cliente.endereco.cidade, cliente.endereco.estado, cliente.endereco.pais, cliente.endereco.codigoPostal);
            documentos = cliente.documentos.map(documento => { return new documento_1.default(documento.numero, documento.tipo, documento.dataExpedicao); });
            objCliente.setTelefones = telefones;
            objCliente.Endereco = endereco;
            objCliente.setDocumentos = documentos;
            if (cliente.dependentes.length > 0) {
                cliente.dependentes.forEach(dependente => {
                    let novoDependente = new cliente_1.default(dependente.nome, dependente.nomeSocial, dependente.dataNascimento);
                    let documentos = dependente.documentos.map(documento => {
                        return new documento_1.default(documento.numero, documento.tipo, documento.dataExpedicao);
                    });
                    novoDependente.setDocumentos = documentos;
                    novoDependente.setTelefones = objCliente.Telefones.map(telefone => {
                        return telefone.clonar();
                    }) || [];
                    novoDependente.Endereco = objCliente.Endereco.clonar();
                    novoDependente.setTitular = objCliente;
                    objCliente.setDependente = novoDependente;
                    this.clientes.push(novoDependente);
                });
            }
            this.clientes.push(objCliente);
        });
        console.log('Cadastro de clientes finalizados');
    }
}
exports.default = GerarClientes;
const listaClientes = [
    {
        "nome": "Jaco",
        "nomeSocial": "Jacol",
        "dataNascimento": new Date(2018, 9 - 1, 2),
        "telefones": [
            {
                "ddd": '(15)',
                "numero": "997756754"
            }
        ],
        "endereco": {
            "rua": "Al. das Palmeiras",
            "bairro": "Vista Azul",
            "cidade": "São josé dos campos",
            "estado": "SP",
            "pais": "BR",
            "codigoPostal": "13445547"
        },
        "documentos": [
            {
                "numero": "123456",
                "tipo": TipoDocumento_1.TipoDocumento.CPF,
                "dataExpedicao": new Date(2034, 4 - 1, 7)
            }
        ],
        "dependentes": [
            {
                "nome": "Mendes",
                "nomeSocial": "Rodolfo",
                "dataNascimento": new Date(2021, 10 - 1, 1),
                "documentos": [
                    {
                        "numero": "123",
                        "tipo": TipoDocumento_1.TipoDocumento.RG,
                        "dataExpedicao": new Date(2019, 11 - 1, 13)
                    }
                ]
            }
        ],
        "titular": {}
    }
];
