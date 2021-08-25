
function podeSubir(alturaPessoa, acompanhada){
    if(alturaPessoa>=1.40 && alturaPessoa<2.00){
         return "Acesso autorizado";
    
    }else if(alturaPessoa>=1.20 && alturaPessoa<1.40 && acompanhada==true ){
        return "Acesso autorizado somente com acompanhante";
    
    }else {
         return"acesso negado";
    }
}
console.log(podeSubir(1.8, false));