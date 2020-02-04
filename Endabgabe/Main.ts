namespace L11 {
    window.addEventListener("load", handleLoad);
    //window.addEventListener('contextmenu', function (e) { e.preventDefault(); });
    export let crc2: CanvasRenderingContext2D;

    let snowflakeArray: Snowflake[] = [];
    let birdArray: Bird[] = [];
    let throwSnowball: Snowball;
    let bird: Bird; //nicht sicher, ob richtig
    let throwBirdfood: Birdfood;
    let fps: number = 25;

    function handleLoad(_event: Event): void {
        console.log("starting");
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        canvas.addEventListener("click", handleClick);
        canvas.addEventListener("contextmenu", handleRightClick);

        for (let i: number = 0; i < 20; i++) {
            bird = new Bird(2);
            console.log("new bird");
            birdArray.push(bird);
        }

        for (let i: number = 0; i < 120; i++) {
            let snowflake: Snowflake = new Snowflake(2);
            //  console.log("new flake");
            snowflakeArray.push(snowflake);

        }

        window.setInterval(update, fps);


        function update(): void {
            // console.log("Update");

            crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            crc2.putImageData(image, 0, 0);


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
            }
        }

    }

    function handleClick(_event: MouseEvent): void {
        console.log(_event);
        let snowballVector: Vector = new Vector(_event.offsetX, _event.offsetY);
        throwSnowball = new Snowball(5, snowballVector);
        window.setTimeout(getBirdHit, 500, snowballVector);

        //let hotspot: Vector = new Vector(_event.x - crc2.canvas.offsetLeft, _event.y - crc2.canvas.offsetTop);

    }



    function handleRightClick(_event: MouseEvent): void {
        console.log(_event);
        let birdfoodVector: Vector = new Vector(_event.offsetX, _event.offsetY);
        throwBirdfood = new Birdfood(5, birdfoodVector);
        //if (isNear(throwBirdFood.position.x))

            for (let bird of birdArray) {
                if (isNear(bird.position)) {
                    bird.velocity = Vector.getDifference(new Vector (throwBirdfood.position.x, throwBirdfood.stand), bird.position); 
                    bird.velocity.scale (0.01); //Strecke wird in Bereiche unterteilt
                    setTimeout(bird.isPicking, 100 * fps); // wird mit scale multipliziert damit das 1 ergibt
                    //return;
                }
            }
        }

    

    function breakBird(_bird: Bird): void {
        let index: number = birdArray.indexOf(_bird);
        birdArray.splice(index, 1); //index sucht an welcher Stelle Bird im Array ist --> löscht an dieser Stelle eine Instanz heraus
        if(birdArray.length <= 0){
            location.replace("startscreen.html");
        }
    }

    function getBirdHit(_hotspot: Vector): void {
        for (let bird of birdArray) {
            if (bird.isHit(_hotspot)) {
                breakBird(bird);
                return;
            }
        }
    }
    function isNear (_hotspot: Vector): boolean {
        let nearsize: number = 100;
        let getDifference: Vector = Vector.getDifference(_hotspot, new Vector (throwBirdfood.position.x, throwBirdfood.stand));
        return (nearsize >= getDifference.length);
    }
}
