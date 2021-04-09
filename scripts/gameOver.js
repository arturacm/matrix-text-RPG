function gameOver(){
    document.getElementById("ans2"). innerHTML = `Eu quero saber da verdade!`;
    document.write(`
    <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <script src="./scripts/gameOver.js"></script>
    <script src="./scripts/estagiario.js"></script>
    <script src="./scripts/hacker.js"></script>
    <script src="./scripts/index.js"></script>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!--<button onclick="letraPorLetra()">Press start</button>-->
    <main onclick="letraPorLetra()">
    
    <img src="./assets/pillChoice">
    </h2> 
    </main>
    </body>
    </html>
    `)
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