var pessoas = [
    {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
    {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
    {id: 3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
]

console.log(pessoas.sort(function compara(a, b){
    if(a.idade < b.idade){
        return 1;
    }else if(a.idade > b.idade){
        return -1;
    }else if(a.idade == b.idade){
            if(a.id > b.id){
                return 1;
            }else if(a.id < b.id){
                return -1;
        }
    }
}))