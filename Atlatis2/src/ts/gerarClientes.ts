import Processo from "./abstracoes/processo"
import Armazem from "./dominio/armazem"
import { TipoDocumento } from "./enumeracoes/TipoDocumento"
import Cliente from "./modelos/cliente"
import Documento from "./modelos/documento"
import Endereco from "./modelos/endereco"
import Telefone from "./modelos/telefone"

export default class GerarClientes extends Processo{
    private clientes!: Cliente[]

    constructor(){
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }

    processar(): void{

        listaClientes.forEach(cliente => {
            let telefones:Telefone[], endereco:Endereco, documentos:Documento[], dependentes:Cliente[], titular:Cliente

            let objCliente = new Cliente(cliente.nome, cliente.nomeSocial, cliente.dataNascimento)

            telefones = cliente.telefones.map(telefone => { return new Telefone(telefone.ddd,telefone.numero) })
            endereco = new Endereco(
                cliente.endereco.rua,
                cliente.endereco.bairro,
                cliente.endereco.cidade,
                cliente.endereco.estado,
                cliente.endereco.pais,
                cliente.endereco.codigoPostal,
            )
            documentos = cliente.documentos.map(documento => { return new Documento(documento.numero, documento.tipo, documento.dataExpedicao) })

            objCliente.setTelefones = telefones
            objCliente.Endereco = endereco
            objCliente.setDocumentos = documentos

            if(cliente.dependentes.length > 0){
                cliente.dependentes.forEach(dependente => { 
                    let novoDependente = new Cliente(dependente.nome,dependente.nomeSocial, dependente.dataNascimento)

                    let documentos = dependente.documentos.map( documento => {
                        return new Documento(documento.numero, documento.tipo, documento.dataExpedicao)
                    })
                    novoDependente.setDocumentos = documentos
                    novoDependente.setTelefones = objCliente.Telefones.map(telefone => {
                        return telefone.clonar() as Telefone
                    }) || []
                    novoDependente.Endereco = objCliente.Endereco.clonar() as Endereco
                    novoDependente.setTitular = objCliente
                    objCliente.setDependente = novoDependente
                    this.clientes.push(novoDependente)
                    
                })
            }

            this.clientes.push(objCliente)
        })

        console.log('Cadastro de clientes finalizados');

    }

}

const listaClientes = [
    {
        "nome":"Jaco",
        "nomeSocial":"Jacol",
        "dataNascimento": new Date(2018, 9 -1, 2),
        "telefones":[
            {
                "ddd": '(15)',
                "numero": "997756754"
            }
        ],
        "endereco":{
            "rua": "Al. das Palmeiras",
            "bairro": "Vista Azul",
            "cidade": "São josé dos campos",
            "estado": "SP",
            "pais": "BR",
            "codigoPostal": "13445547"
        },
        "documentos":[
            {
                "numero":"123456",
                "tipo": TipoDocumento.CPF,
                "dataExpedicao": new Date(2034, 4 -1, 7)
            }
        ],
        "dependentes":[
            {
                "nome":"Mendes",
                "nomeSocial": "Rodolfo",
                "dataNascimento": new Date(2021, 10 -1, 1),
                "documentos":[
                    {
                        "numero":"123",
                        "tipo": TipoDocumento.RG,
                        "dataExpedicao": new Date(2019, 11 -1, 13)
                    }
                ]
            }
        ],
        "titular": {}
    }
]