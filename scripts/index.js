
/*
var myText = `Olá. Interessante você aqui. Vamos ao que interessa: vejo aqui você está vendo coisas a mais, vendo o que não deveria. 
O meu nome é Morpheus, é o que você precisa saber por agora. Você é um ...`;
*/
//import {hacker1} from "./hacker.js"
var myText = `Já teve aquela sensação que não sabe se está acordado ou dormindo? Se você está aqui deve estar procurando por respostas. Primeiro, quem é você?`;
var myArray = myText.split("");
var loopTimer;
var local = "morpheus1";
var fase = 0;
var personagem;
/*
function piscarElemento(idElemento, intervalo){
    let elem = document.getElementById(idElemento);
    setInterval(()=>{ elem.hidden = !elem.hidden }, intervalo);
}
piscarElemento("piscar", 70);
*/
//var nome = prompt("Qual o seu nome?");
//document.write("<h1>Acorde " + nome+"<\h1>")
function letraPorLetra() {
    if (myArray.length > 0) {
        document.getElementById(local).innerHTML += myArray.shift();
    } else {
        clearTimeout(loopTimer);
        return next();
    }
    loopTimer = setTimeout('letraPorLetra()', 70);
}
//addEventListener("DOMContentLoaded", letraPorLetra());
function next(){
    if (fase == 0){
        fase++
        return pers ();
    }
    else if (fase == 1 && personagem == 1){
        fase++;
        return hacker2();
    }
    else if (fase == 2 && personagem == 1){
        fase++;
        return hacker3();
    }
    else if (fase == 1 && personagem ==2){
        fase++;
        return estagiario2();
    }
    else if (fase == 2 && personagem ==2){
        fase++;
        return estagiario3();
    }
    else{
        return gameOver();
    }
}
function pers (){
    do{
        personagem = prompt("1 - um Hacker| 2 - um Estagiário que procurou respostas além do StackOverflow | 3 - Um Adolescente que foi longe demais para baixar filmes piratas");
    }while(personagem < 1 ||personagem > 3)
    if(personagem == 1){
        document.getElementById("ans1").
        innerHTML = `Sim, sou um hacker. Como você entrou no meu computador? Eu tirei o cabo de rede`;
        return hacker1();    
    }
    else if(personagem == 2){
        document.getElementById("ans1").
        innerHTML = `Sim! Li muita coisa na deep web. Com certeza os reptilianos estão por trás de algo.`;
        return estagiario1();   
    }
    else if(personagem == 3){
        document.getElementById("ans1").
        innerHTML = `Agora vamos testar o fim do jogo`;
        return gameOver();   
    }
    return false;
}
//export {myText, myArray, letraPorLetra}
