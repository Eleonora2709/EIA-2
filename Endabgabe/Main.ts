namespace L11 {
    window.addEventListener("load", handleLoad);
    window.addEventListener('contextmenu',function (e) {e.preventDefault();});
    export let crc2: CanvasRenderingContext2D;

    let snowflakeArray: Snowflake[] = [];
    let birdArray: Bird[] = [];
    let throwSnowball: Snowball;
    let bird: Bird; //nicht sicher, ob richtig
    let throwBirdfood: Birdfood;

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
        window.setInterval(update, 20);


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
        }

    }

    function handleClick(_event: MouseEvent): void {
        let snowballVector: Vector = new Vector(_event.x, _event.y);
        throwSnowball = new Snowball(5, snowballVector);
       /* let hotspot: Vector = new Vector(_event.x - crc2.canvas.offsetLeft, _event.y - crc2.canvas.offsetTop);
        let birdHit: Bird | null = getBirdHit(hotspot);
        if (birdHit)
           breakBird(birdHit);
           console.log ("Shooting Snowball") */
    }
    


    function handleRightClick(_event: MouseEvent): void {
        let birdfoodVector: Vector = new Vector(_event.x, _event.y);
        throwBirdfood = new Birdfood(5, birdfoodVector);

    }

   /* function breakBird (_bird: Bird): void {

        let index: number = bird.indexOf(_bird);
        birdArray.splice(index, 1); //index sucht an welcher Stelle Bird im Array ist --> löscht an dieser Stelle eine Instanz heraus

    }

    function getBirdHit (_hotspot: Vector): Bird | null {
        for (let bird of birdArray) {
            if (bird.isHit(_hotspot))
                return bird;
        }
        return null;
    } */
}