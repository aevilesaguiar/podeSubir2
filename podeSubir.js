function podeSubir(altura, vemAcompanhado){
    let podeSubir= false;

    if(altura>=1.40 && altura<2.00){
        return "Acesso autorizado";
    }
    else if(altura<1.40 && vemAcompanhado ){
        return "Acesso autorizado somente com acompanhante";
    }
    else{
        return "Acesso negado"
    }
}

console.log(podeSubir(1.10, false))