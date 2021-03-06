namespace L11 {

    //https://eia-eleonora.herokuapp.com/ -> Adresse meiner App
    window.addEventListener("load", init);
    //window.addEventListener('contextmenu', function (e) { e.preventDefault(); });
    export let crc2: CanvasRenderingContext2D;

    let snowflakeArray: Snowflake[] = [];
    let birdArray: Bird[] = [];
    export let throwSnowball: Snowball;
    let bird: Bird; //nicht sicher, ob richtig
    let throwBirdfood: Birdfood;
    let fps: number = 25;
    export let score: number = 1000;
    let node: HTMLDivElement;
    let wroteScore: boolean = false;
    let startbutton: HTMLButtonElement;


    export let url: string = "https://eia-eleonora.herokuapp.com/";

    function init(_event: Event): void {
        document.getElementById("game").style.display = "none";
        document.getElementById("endscreen").style.display = "none";

        startbutton = <HTMLButtonElement>document.getElementById("startbutton");
        startbutton.addEventListener("click", handleLoad);

    }
    function handleLoad(_event: Event): void {

        score = 1030;
        console.log("starting");

        let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[id=sendData]");
        submit.addEventListener("click", nameAndScore);


        document.getElementById("startscreen").style.display = "none";
        document.getElementById("game").style.display = "initial";


        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        canvas.addEventListener("click", handleClick);
        canvas.addEventListener("contextmenu", handleRightClick);
        //canvas.addEventListener(TASK.EAT, breakBird);


        let highscorebutton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("highscorelistbutton");
        highscorebutton.addEventListener("click", gethighscorelist);

        document.getElementById("highscorelist").addEventListener("click", gethighscorelist);


        //generateBird
        for (let i: number = 0; i < 10; i++) {
            bird = new Bird(2);
            console.log("new bird");
            birdArray.push(bird);
        }


        //generateSnowflake
        for (let i: number = 0; i < 120; i++) {
            let snowflake: Snowflake = new Snowflake(2);
            //  console.log("new flake");
            snowflakeArray.push(snowflake);

        }
    }


    let finalscore: number = window.setInterval(generateScore, 1000);

    function generateScore(): void {
        console.log(score);
        score--
    }
    window.setInterval(update, fps);


    function update(): void {
        // console.log("Update");

       // crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(image, 0, 0);
        //window.setInterval(generateScore, 1000);

        for (let i: number = 0; i < birdArray.length; i++) {
            birdArray[i].draw();
            birdArray[i].move(100);
        }

        for (let i: number = 0; i < snowflakeArray.length; i++) {
            snowflakeArray[i].draw();
            snowflakeArray[i].move(100);
        }

        if (throwSnowball) {
            throwSnowball.draw();
            if (throwSnowball.size >= 0.2)
                throwSnowball.size -= 0.2;

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


    function handleRightClick(_event: MouseEvent): void {

        score--;

        console.log(_event);
        let birdfoodVector: Vector = new Vector(_event.offsetX, _event.offsetY);
        throwBirdfood = new Birdfood(5, birdfoodVector);
        //if (isNear(throwBirdFood.position.x))

        for (let bird of birdArray) {
            if (isNear(bird.position)) {
                this.job = TASK.FLYTOFOOD;
                bird.velocity = Vector.getDifference(new Vector(throwBirdfood.position.x + Math.random() * (80 - 10) + 10, throwBirdfood.stand), bird.position);
                bird.velocity.scale(0.01); //Strecke wird in Bereiche unterteilt
                setTimeout(bird.isPicking, 100 * fps); // wird mit scale multipliziert damit das 1 ergibt



                if (bird.velocity.x != 0) {
                    bird.job = TASK.EAT;

                }

            }
        }
    }
    function isNear(_hotspot: Vector): boolean {
        let nearsize: number = 100;
        let getDifference: Vector = Vector.getDifference(_hotspot, new Vector(throwBirdfood.position.x, throwBirdfood.stand));
        return (nearsize >= getDifference.length);
    }


    function handleClick(_event: MouseEvent): void {

        score--;

        console.log(_event);
        let snowballVector: Vector = new Vector(_event.offsetX, _event.offsetY);
        throwSnowball = new Snowball(5, snowballVector);
        window.setTimeout(getBirdHit, 500, snowballVector);

        //let hotspot: Vector = new Vector(_event.x - crc2.canvas.offsetLeft, _event.y - crc2.canvas.offsetTop);
        //score =+ 10;
    }

    function getBirdHit(_hotspot: Vector): void {
        for (let bird of birdArray) {
            if (bird.isHit(_hotspot)) {
                breakBird(bird);
                //return;
            }
        }
    }
    function breakBird(_bird: Bird): void {
        let index: number = birdArray.indexOf(_bird);
        birdArray.splice(index, 1); //index sucht an welcher Stelle Bird im Array ist --> löscht an dieser Stelle eine Instanz heraus
        if (birdArray.length <= 0) {
            console.log("ALL BIRDS ARE HIT");
            //location.replace("EndScreen.html"); //Verlinkung zum Endscreen
            showGameOverScreen();
        }
    }





    export function showGameOverScreen(): void {

        let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[id=sendData]");

        submit.addEventListener("click", nameAndScore);
        document.getElementById("game").style.display = "none";
        document.getElementById("endscreen").style.display = "initial";
        node = <HTMLDivElement>document.getElementsByClassName("yourScore")[0];
        clearInterval(finalscore);
        scoreToHTML();
    }

    function scoreToHTML(): void {
        if (!wroteScore) {
            let content: string = "";
            content = "Your score: " + score;
            node.innerHTML += content;
            wroteScore = true;
        }
    }

    function nameAndScore(): void {
        console.log("end");
        let insertedname: any = prompt("Your Score: " + score + "\n Enter your name.");
        if (insertedname != null) {
            sendtohighscorelist(insertedname, score);
        }
    }
    async function sendtohighscorelist(_insertedName: string, _score: number): Promise<void> {

        let query: string = "name=" + _insertedName + "&highScore=" + _score;
        let response: Response = await fetch(url + "?" + query);
        console.log(response);

    }

    async function gethighscorelist(): Promise<void> {

        console.log("Highscores ausgeben");
        let query: string = "command=retrieve";
        let response: Response = await fetch(url + "?" + query);
        let responseText: string = await response.text();
        let entries: any[] = JSON.parse(responseText);

        alert(responseText);
        let scores: HTMLDivElement = <HTMLDivElement>document.querySelector("span#showScores");
        scores.innerText = responseText;


    }




}
