function gameOver() {
    document.getElementById('content').innerHTML = `<img onclick = "pillChoice() "src="./assets/pillChoice"> <h5>Clique na imagem</h5>`
    /*
    var ans = prompt("1 SIM | 2 NAO");
    if (ans == 1){
        document.getElementById("ans2"). innerHTML = `Sempre achei que algo estava errado`;
        myText = `E se eu te falasse que tudo o que você vê, acredita e vive não é real?`;
        myArray = myText.split("");
        local = "morpheus3";
        letraPorLetra();
        return 0;
    }
*/
}
function pillChoice() {

    alert(`vou te dar uma opção, leia atentamente. Tome a pilula azul e você vai acordar como se nada tivesse acontecido mas vai continuar essa sua vida de mentiras e ilusão. `)
    alert(`Tome a pilula vermelha e os seus olhos abrirão. Verá o mundo como realmente é.`)
    var pill = prompt("Digite Vermelha ou Azul").toLowerCase();
    if (pill == "azul") {
        return reset();
    }
    else if (pill == "vermelha"){
        document.write(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <link rel="shortcut icon" href="./assets/favicon.png" type="image/x-icon">
            <link rel="stylesheet" href="style.css">
            <script src="./scripts/gameOver.js"></script>
            <script src="./scripts/estagiario.js"></script>
            <script src="./scripts/hacker.js"></script>
            <script src="./scripts/index.js"></script>
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Mundo real</title>
        </head>
        <body>
            
            <main>
            <h1>Parabéns, você acordou para a realidade</h1>
            <iframe width="100%" height="auto" autoplay="1" src="https://www.youtube.com/embed/7sZIkeFeuOc?controls=0&amp;start=84" title="YouTube video player" frameborder="0"></iframe>
            </main>
        </body>
        </html>`);
        
    }
}
function reset() {

    document.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <link rel="shortcut icon" href="./assets/favicon.png" type="image/x-icon">
        <link rel="stylesheet" href="style.css">
        <script src="./scripts/gameOver.js"></script>
        <script src="./scripts/estagiario.js"></script>
        <script src="./scripts/hacker.js"></script>
        <script src="./scripts/index.js"></script>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>RPG Matrix</title>
    </head>
    <body>
        <!--<button onclick="letraPorLetra()">Press start</button>-->
        <main onclick="letraPorLetra()">
            <h1>Acorde...</h1>
            <h2>
                <div id="morpheus1"> </div>
                <div id="ans1" class= "ans"> </div>
                <div id="morpheus2"> </div>
                <div id="ans2" class= "ans"> </div>
                <div id="morpheus3"></div>
                <div id="ans3" class= "ans"> </div>
                <div id="morpheus4"></div>
            </h2> 
        </main>
    </body>
    </html>`)


myText = `Já teve aquela sensação que não sabe se está acordado ou dormindo? Se você está aqui deve estar procurando por respostas. Primeiro, quem é você?`;
myArray = myText.split("");

local = "morpheus1";
fase = 0;
}