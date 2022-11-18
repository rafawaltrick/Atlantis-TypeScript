"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cliente {
    constructor(nome, nomeSocial, dataNascimento) {
        this.telefones = [];
        this.documentos = [];
        this.dependentes = [];
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.dataNascimento = dataNascimento;
        this.dataCadastro = new Date();
    }
    get Nome() { return this.nome; }
    get NomeSocial() { return this.nomeSocial; }
    get DataNascimento() { return this.dataNascimento; }
    get DataCadastro() { return this.dataCadastro; }
    get Telefones() { return this.telefones; }
    get Endereco() { return this.endereco; }
    get Documentos() { return this.documentos; }
    get Dependentes() { return this.dependentes; }
    get Titular() { return this.titular; }
    set setNome(nome) { this.nome = nome; }
    set setNomeSocial(nomeSocial) { this.nomeSocial = nomeSocial; }
    set setDataNascimento(dataNascimento) { this.dataNascimento = dataNascimento; }
    set Endereco(endereco) { this.endereco = endereco; }
    set setTelefones(telefones) { this.telefones = telefones; }
    set setDocumentos(documentos) { this.documentos = documentos; }
    set setTitular(titular) { this.titular = titular; }
    set setDependente(dependente) { this.dependentes.push(dependente); }
}
exports.default = Cliente;
