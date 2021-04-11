function rot13(str){
    const lista_pa = str.split("");

    return lista_pa.map((palavra=>{
        return palavra.split("").map((letra)=>{
            if(letra.match(/[A-Z]/) === null){
                return letra;
            }
            if((letra.charCodeAt()-13)<65){
                let dif = 64 - (letra.charCodeAt()-13);
                return String.fromCharCode(90-dif);
            }else{
                return String.fromCharCode(letra.charCodeAt()-13);
            }
        }).join("")
    })).join("")
}


const q = rot13("SERR YBIR?");

console.log(q)
