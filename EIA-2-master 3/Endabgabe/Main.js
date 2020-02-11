var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var L11;
(function (L11) {
    //https://eia-eleonora.herokuapp.com/ -> Adresse meiner App
    window.addEventListener("load", init);
    let snowflakeArray = [];
    let birdArray = [];
    let bird; //nicht sicher, ob richtig
    let throwBirdfood;
    let fps = 25;
    L11.score = 1000;
    let node;
    let wroteScore = false;
    let startbutton;
    L11.url = "https://eia-eleonora.herokuapp.com/";
    function init(_event) {
        document.getElementById("game").style.display = "none";
        document.getElementById("endscreen").style.display = "none";
        startbutton = document.getElementById("startbutton");
        startbutton.addEventListener("click", handleLoad);
    }
    function handleLoad(_event) {
        L11.score = 1030;
        console.log("starting");
        let submit = document.querySelector("button[id=sendData]");
        submit.addEventListener("click", nameAndScore);
        document.getElementById("startscreen").style.display = "none";
        document.getElementById("game").style.display = "initial";
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L11.crc2 = canvas.getContext("2d");
        canvas.addEventListener("click", handleClick);
        canvas.addEventListener("contextmenu", handleRightClick);
        //canvas.addEventListener(TASK.EAT, breakBird);
        let highscorebutton = document.getElementById("highscorelistbutton");
        highscorebutton.addEventListener("click", gethighscorelist);
        document.getElementById("highscorelist").addEventListener("click", gethighscorelist);
        //generateBird
        for (let i = 0; i < 1; i++) {
            bird = new L11.Bird(2);
            console.log("new bird");
            birdArray.push(bird);
        }
        //generateSnowflake
        for (let i = 0; i < 120; i++) {
            let snowflake = new L11.Snowflake(2);
            //  console.log("new flake");
            snowflakeArray.push(snowflake);
        }
    }
    let finalscore = window.setInterval(generateScore, 1000);
    function generateScore() {
        console.log(L11.score);
        L11.score--;
    }
    window.setInterval(update, fps);
    function update() {
        // console.log("Update");
        L11.crc2.clearRect(0, 0, L11.crc2.canvas.width, L11.crc2.canvas.height);
        L11.crc2.putImageData(L11.image, 0, 0);
        //window.setInterval(generateScore, 1000);
        for (let i = 0; i < birdArray.length; i++) {
            birdArray[i].draw();
            birdArray[i].move(100);
        }
        for (let i = 0; i < snowflakeArray.length; i++) {
            snowflakeArray[i].draw();
            snowflakeArray[i].move(100);
        }
        if (L11.throwSnowball) {
            L11.throwSnowball.draw();
            if (L11.throwSnowball.size >= 0.2)
                L11.throwSnowball.size -= 0.2;
        }
        if (throwBirdfood) {
            throwBirdfood.draw();
            if (throwBirdfood.size >= 2.7)
                throwBirdfood.size -= 0.2;
            if (throwBirdfood.size <= 2.6 && throwBirdfood.size >= 0.002)
                throwBirdfood.size -= 0.002;
            //this.bird.move();
        }
    }
    function handleRightClick(_event) {
        L11.score--;
        console.log(_event);
        let birdfoodVector = new L11.Vector(_event.offsetX, _event.offsetY);
        throwBirdfood = new L11.Birdfood(5, birdfoodVector);
        //if (isNear(throwBirdFood.position.x))
        for (let bird of birdArray) {
            if (isNear(bird.position)) {
                this.job = L11.TASK.FLYTOFOOD;
                bird.velocity = L11.Vector.getDifference(new L11.Vector(throwBirdfood.position.x + Math.random() * (80 - 10) + 10, throwBirdfood.stand), bird.position);
                bird.velocity.scale(0.01); //Strecke wird in Bereiche unterteilt
                setTimeout(bird.isPicking, 100 * fps); // wird mit scale multipliziert damit das 1 ergibt
                if (bird.velocity.x != 0) {
                    bird.job = L11.TASK.EAT;
                }
            }
        }
    }
    function isNear(_hotspot) {
        let nearsize = 100;
        let getDifference = L11.Vector.getDifference(_hotspot, new L11.Vector(throwBirdfood.position.x, throwBirdfood.stand));
        return (nearsize >= getDifference.length);
    }
    function handleClick(_event) {
        L11.score--;
        console.log(_event);
        let snowballVector = new L11.Vector(_event.offsetX, _event.offsetY);
        L11.throwSnowball = new L11.Snowball(5, snowballVector);
        window.setTimeout(getBirdHit, 500, snowballVector);
        //let hotspot: Vector = new Vector(_event.x - crc2.canvas.offsetLeft, _event.y - crc2.canvas.offsetTop);
        //score =+ 10;
    }
    function getBirdHit(_hotspot) {
        for (let bird of birdArray) {
            if (bird.isHit(_hotspot)) {
                breakBird(bird);
                //return;
            }
        }
    }
    function breakBird(_bird) {
        let index = birdArray.indexOf(_bird);
        birdArray.splice(index, 1); //index sucht an welcher Stelle Bird im Array ist --> löscht an dieser Stelle eine Instanz heraus
        if (birdArray.length <= 0) {
            console.log("ALL BIRDS ARE HIT");
            //location.replace("EndScreen.html"); //Verlinkung zum Endscreen
            showGameOverScreen();
        }
    }
    function showGameOverScreen() {
        let submit = document.querySelector("button[id=sendData]");
        submit.addEventListener("click", nameAndScore);
        document.getElementById("game").style.display = "none";
        document.getElementById("endscreen").style.display = "initial";
        node = document.getElementsByClassName("yourScore")[0];
        clearInterval(finalscore);
        scoreToHTML();
    }
    L11.showGameOverScreen = showGameOverScreen;
    function scoreToHTML() {
        if (!wroteScore) {
            let content = "";
            content = "Your score: " + L11.score;
            node.innerHTML += content;
            wroteScore = true;
        }
    }
    function nameAndScore() {
        console.log("end");
        let insertedname = prompt("Your Score: " + L11.score + "\n Enter your name.");
        if (insertedname != null) {
            sendtohighscorelist(insertedname, L11.score);
        }
    }
    function sendtohighscorelist(_insertedName, _score) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = "name=" + _insertedName + "&highScore=" + _score;
            let response = yield fetch(L11.url + "?" + query);
            console.log(response);
        });
    }
    function gethighscorelist() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Highscores ausgeben");
            let query = "command=retrieve";
            let response = yield fetch(L11.url + "?" + query);
            let responseText = yield response.text();
            //let finalresponse: any[] = JSON.parse(responseText);
            alert(responseText);
            let scores = document.querySelector("span#showScores");
            scores.innerText = responseText;
        });
    }
})(L11 || (L11 = {}));
//# sourceMappingURL=Main.js.map