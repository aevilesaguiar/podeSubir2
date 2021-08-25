function podeSubir(altura, vemAcompanhado){

    let subir= false;

    if(altura>=1.40 && altura<2.00){
        subir=true;
    }
    else if(altura<1.40 && vemAcompanhado && altura >=1.20 ){
        subir=true;
    }
    else{
        subir=false;
    }
    return subir
}

console.log(podeSubir(1.19, true))