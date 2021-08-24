function podeSubir(altura, vemAcompanhado){
    let podeSubir= false;

    if(altura>=1.40 && altura<2.00){
        podeSubir=true;
    }
    else if(altura<1.40 && vemAcompanhado ){
        podeSubir=true;
    }
    else{
        podeSubir=false;
    }
    return podeSubir
}

console.log(podeSubir(1.42, false))