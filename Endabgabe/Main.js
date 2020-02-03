var L11;
(function (L11) {
    window.addEventListener("load", handleLoad);
    window.addEventListener('contextmenu', function (e) { e.preventDefault(); });
    let snowflakeArray = [];
    let birdArray = [];
    let throwSnowball;
    let bird; //nicht sicher, ob richtig
    let throwBirdfood;
    //let fps: number = 25;
    function handleLoad(_event) {
        console.log("starting");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L11.crc2 = canvas.getContext("2d");
        canvas.addEventListener("click", handleClick);
        canvas.addEventListener("contextmenu", handleRightClick);
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
        window.setInterval(update, 20);
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
        }
    }
    function handleClick(_event) {
        let snowballVector = new L11.Vector(_event.offsetX, _event.offsetY);
        throwSnowball = new L11.Snowball(5, snowballVector);
        console.log(snowballVector);
        //let hotspot: Vector = new Vector(_event.x - crc2.canvas.offsetLeft, _event.y - crc2.canvas.offsetTop);
        let birdHit = getBirdHit(snowballVector);
        if (birdHit)
            breakBird(birdHit);
        console.log("Shooting Snowball");
        //window.setTimeout(breakBird, 500 / fps);
    }
    function handleRightClick(_event) {
        let birdfoodVector = new L11.Vector(_event.x, _event.y);
        throwBirdfood = new L11.Birdfood(5, birdfoodVector);
    }
    function breakBird(_bird) {
        let index = birdArray.indexOf(_bird);
        birdArray.splice(index, 1); //index sucht an welcher Stelle Bird im Array ist --> löscht an dieser Stelle eine Instanz heraus
    }
    function getBirdHit(_hotspot) {
        for (let bird of birdArray) {
            if (bird.isHit(_hotspot))
                return bird;
        }
        return null;
    }
    /* function CheckIfHit (): void{
         if (throwSnowball.radius <= 6){
             console.log(Snowball);
             let hit: boolean = false;
 
         for (let i: number = 0; i < Snowball.length; i++){
             if (Snowball) {
 
         }
         }
     }
     }  */
})(L11 || (L11 = {}));
//# sourceMappingURL=Main.js.map