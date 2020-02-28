function aplica(func, x, y){
    console.log(func(x, y))
}

function junta(a, b){
   return a.concat(b)
}

aplica(junta,"Olá meu nome é", ' Yuri')