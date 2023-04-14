//decorators

function ExibirNome(target: any){
    console.log(target);
}

function apiVersion(version: string){
    return(target: any) => {
        Object.assign(target.prototype, {__verison: version});
    }
}

@apiVersion("1.10")
class Api{}

const api = new Api();
console.log(api);

//attribute decorators

function minLength(lenght: number){
    return (target: any, key:string) =>{
        let _value = target[key];

        const getter = () => _value;
        const setter = (value: string) => {
            if(value.length < lenght){
                throw new Error(`Tamanho menor que ${lenght}`);
            }else{
                _value = value;
            }
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        })

    }
}

class Morango{
    @minLength(3)
    nome: string;

    constructor(nome: string){
        this.nome = nome;
    }
}

const Fruta = new Morango("Azul")
console.log(Fruta.nome)
