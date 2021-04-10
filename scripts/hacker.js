//import {myText, myArray, letraPorLetra} from "./index.js"


function hacker1 (){
    myText = `Você está fazendo as perguntas certas. Já percebeu como várias coisas no mundo não fazem sentido? Como o Exaltasamba toca Pagode e o Zeca Pagodinho toca Samba?`;
    myArray = myText.split("");
    local = "morpheus2";
    return letraPorLetra();
}
function hacker2 (){
    var ans = prompt("1 SIM | 2 NAO");
    if (ans == 1){
        document.getElementById("ans2"). innerHTML = `Sempre achei que algo estava errado`;
        myText = `E se eu te falasse que tudo o que você vê, acredita e vive não é real?`;
        myArray = myText.split("");
        local = "morpheus3";
        return letraPorLetra();
    }
    else{
        return reset();
    }
}

function hacker3 (){
    var ans = prompt("1 SIM | 2 NAO");
    if (ans == 1){
        document.getElementById("ans3"). innerHTML = `mano vc ta doido?`;
        myText = `Texto final de impacto`;
        myArray = myText.split("");
        local = "morpheus4";
        return letraPorLetra();
    }
    else{
        return reset();
    }
}