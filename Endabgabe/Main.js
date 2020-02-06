var L11;
(function (L11) {
    window.addEventListener("load", handleLoad);
    let snowflakeArray = [];
    let birdArray = [];
    let throwSnowball;
    let bird; //nicht sicher, ob richtig
    let throwBirdfood;
    let fps = 25;
    let score = 1000;
    function handleLoad(_event) {
        console.log("starting");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L11.crc2 = canvas.getContext("2d");
        canvas.addEventListener("click", handleClick);
        canvas.addEventListener("contextmenu", handleRightClick);
        //canvas.addEventListener(TASK.EAT, breakBird);
        window.setInterval(generateScore, 1000);
        function generateScore() {
            console.log(score);
            score--;
        }
        for (let i = 0; i < 20; i++) {
            bird = new L11.Bird(2);
            console.log("new bird");
            birdArray.push(bird);
        }
        for (let i = 0; i < 120; i++) {
            let snowflake = new L11.Snowflake(2);
            //  console.log("new flake");
            snowflakeArray.push(snowflake);
        }
        window.setInterval(update, fps);
        function update() {
            // console.log("Update");
            L11.crc2.clearRect(0, 0, L11.crc2.canvas.width, L11.crc2.canvas.height);
            L11.crc2.putImageData(L11.image, 0, 0);
            for (let i = 0; i < birdArray.length; i++) {
                birdArray[i].draw();
                birdArray[i].move(100);
            }
            for (let i = 0; i < snowflakeArray.length; i++) {
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
    }
    function handleClick(_event) {
        console.log(_event);
        let snowballVector = new L11.Vector(_event.offsetX, _event.offsetY);
        throwSnowball = new L11.Snowball(5, snowballVector);
        window.setTimeout(getBirdHit, 500, snowballVector);
        //let hotspot: Vector = new Vector(_event.x - crc2.canvas.offsetLeft, _event.y - crc2.canvas.offsetTop);
        score = +10;
    }
    function handleRightClick(_event) {
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
    function breakBird(_bird) {
        let index = birdArray.indexOf(_bird);
        birdArray.splice(index, 1); //index sucht an welcher Stelle Bird im Array ist --> löscht an dieser Stelle eine Instanz heraus
        if (birdArray.length <= 0) {
            location.replace("startscreen.html");
        }
    }
    function getBirdHit(_hotspot) {
        for (let bird of birdArray) {
            if (bird.isHit(_hotspot)) {
                breakBird(bird);
                //return;
            }
        }
    }
    function isNear(_hotspot) {
        let nearsize = 100;
        let getDifference = L11.Vector.getDifference(_hotspot, new L11.Vector(throwBirdfood.position.x, throwBirdfood.stand));
        return (nearsize >= getDifference.length);
    }
})(L11 || (L11 = {}));
//# sourceMappingURL=Main.js.map