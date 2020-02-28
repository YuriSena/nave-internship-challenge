function args(x, y){
    if(x.length < y.length){
        console.log(`A string "${y}" é maior`);
    }else if(x.length > y.length){
        console.log(`A string "${x}" é maior`)
    }else if(x.length == y.length){
        console.log(`As strings "${x}" e "${y}" tem o mesmo tamanho`)
    }
}


args("lucas", "pedro");