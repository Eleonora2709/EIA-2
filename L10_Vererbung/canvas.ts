namespace L_10 {
    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    let goldencut: number = 0.38;
    export let moveable: Moveable;
    export let moveablesArray: Moveable[] = [];
    export let image: ImageData;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        let horizon: number = crc2.canvas.height * goldencut;
        let posMountains: Vector = { x: 0, y: horizon };

        drawBackground();
        drawSun({ x: 100, y: 75 });
        drawCloud({ x: 400, y: 125 }, { x: 250, y: 75 });
        drawCloud({ x: 750, y: 110 }, { x: 200, y: 85 });
        drawCloud({ x: 1000, y: 140 }, { x: 220, y: 55 });
        drawMountains(posMountains, 75, 200, "grey", "white");
        drawMountains(posMountains, 50, 150, "grey", "lightgrey");
        drawSnowman({ x: 800, y: 500 }, { x: 800, y: 430 }, { x: 800, y: 370 });
        drawTree({ x: 600, y: 170 });
        drawTree2({ x: 800, y: 170 });
        drawTree3({ x: 400, y: 180 });
        drawTree4({ x: 430, y: 170 });
        drawTree5({ x: 0, y: 300 });
        drawTree6({ x: 15, y: 350 });
        drawBirdhouse({ x: 200, y: 400 });
       // drawflyingBird({ x: 600, y: 100 });
        drawstandingBird({ x: 340, y: 230 });
        drawstandingBird1({ x: 240, y: 230 });
       // drawflyingBirds({ x: 20, y: 20}, { x: canvas.width -90, y: canvas.height -480})
       // drawSnow ({ x: 0, y: 700 }, { x: 1200, y: 700 });
       crc2.save();
        image = crc2.getImageData(0, 0, canvas.width, canvas.height);
        

    }

    function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#3673a4");
        gradient.addColorStop(goldencut, "white");
        gradient.addColorStop(1, "#aaaaaa");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function drawSun(_position: Vector): void {
        console.log("Background", _position);

        let r1: number = 30;
        let r2: number = 150;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(40, 100%, 75%, 1)");
        gradient.addColorStop(1, "HSLA(40, 100%, 50%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }

    function drawCloud(_position: Vector, _size: Vector): void {
        console.log("Background", _position, _size);

        let nParticles: number = 25;
        let radiusParticle: number = 50;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }

    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("Mountains", _position, _min, _max);
        let stepMin: number = 50;
        let stepMax: number = 150;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    }

    function drawSnowman(_position: Vector, _position2: Vector, _position3: Vector): void {
        console.log("Background", _position);

       //nose
       crc2.save();
       crc2.translate(_position.x, _position.y);
       crc2.beginPath();
       crc2.moveTo(-10, -110);
       crc2.lineTo(60, -110);
       crc2.lineTo(20,-140);
       crc2.fillStyle = "#ffbc40";
       crc2.fill();
       crc2.restore();
       crc2.closePath();

       //Kugeln

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.arc(0, 30, 75, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.restore();
        crc2.closePath();

        
        crc2.save();
        crc2.translate(_position2.x, _position2.y);
        crc2.beginPath();
        crc2.arc(0, 15, 50, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.restore();
        crc2.closePath();

        crc2.save();
        crc2.translate(_position3.x, _position3.y);
        crc2.beginPath();
        crc2.arc(0, 0, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.restore();
        crc2.closePath();

    }

    function drawTree(_position: Vector): void {

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.stroke();
        crc2.fillStyle = "brown";
        crc2.fillRect(45, 75, 10, 30);
        crc2.restore();
        crc2.closePath();

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(50, 25);
        crc2.lineTo(25, 75);
        crc2.lineTo(75, 75);
        crc2.fillStyle = "green";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
    }

    function drawTree2(_position: Vector): void {

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.stroke();
        crc2.fillStyle = "brown";
        crc2.fillRect(45, 75, 10, 30);
        crc2.restore();
        crc2.closePath();

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(50, 25);
        crc2.lineTo(25, 75);
        crc2.lineTo(75, 75);
        crc2.fillStyle = "green";
        crc2.fill();
        crc2.restore();
        crc2.closePath();

    }

    function drawTree3(_position: Vector): void {

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.stroke();
        crc2.fillStyle = "brown";
        crc2.fillRect(45, 75, 10, 30);
        crc2.restore();
        crc2.closePath();

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(50, 25);
        crc2.lineTo(25, 75);
        crc2.lineTo(75, 75);
        crc2.fillStyle = "green";
        crc2.fill();
        crc2.restore();
        crc2.closePath();

    }

    function drawTree4(_position: Vector): void {

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.stroke();
        crc2.fillStyle = "brown";
        crc2.fillRect(45, 75, 10, 30);
        crc2.restore();
        crc2.closePath();

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(50, 25);
        crc2.lineTo(25, 75);
        crc2.lineTo(75, 75);
        crc2.fillStyle = "darkgreen";
        crc2.fill();
        crc2.restore();
        crc2.closePath();

    }

    function drawTree5(_position: Vector): void {

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.stroke();
        crc2.fillStyle = "brown";
        crc2.fillRect(45, 75, 10, 30);
        crc2.restore();
        crc2.closePath();

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(50, 25);
        crc2.lineTo(25, 75);
        crc2.lineTo(75, 75);
        crc2.fillStyle = "green";
        crc2.fill();
        crc2.restore();
        crc2.closePath();

    }

    function drawTree6(_position: Vector): void {

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.stroke();
        crc2.fillStyle = "brown";
        crc2.fillRect(45, 75, 10, 30);
        crc2.restore();
        crc2.closePath();

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(50, 25);
        crc2.lineTo(25, 75);
        crc2.lineTo(75, 75);
        crc2.fillStyle = "#468641";
        crc2.fill();
        crc2.restore();
        crc2.closePath();

    }

    function drawBirdhouse(_position: Vector): void {

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.stroke();
        crc2.fillStyle = "#2c1410";
        crc2.fillRect(0, 0, 180, 150);
        crc2.restore();
        crc2.closePath();

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.stroke();
        crc2.fillStyle = "#b47d49";
        crc2.fillRect(50, 75, 80, 75);
        crc2.restore()
        crc2.closePath();

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.stroke();
        crc2.fillStyle = "#2c1410";
        crc2.fillRect(80, 150, 20, 200);
        crc2.restore();
        crc2.closePath();

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(-10, 0);
        crc2.lineTo(90, -90)
        crc2.lineTo(190, 0);
        crc2.stroke();
        crc2.fillStyle = "#2c1410";
        crc2.fill();
        crc2.restore();
        crc2.closePath();

    }
    function drawstandingBird(_position: Vector): void {
        //head
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.arc(0, 80, 15, 0, 2 * Math.PI);
        crc2.fillStyle = "#af8a54";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        //body
        crc2.save();
        crc2.scale(1, 1.5);
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.arc(0, 0, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#af8a54";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        //whiteeye
        crc2.save();
        crc2.scale(1, 1.5);
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.arc(-5, -24, 3, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        //whiteeye       
        crc2.save();
        crc2.scale(1, 1.5);
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.arc(5, -24, 3, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        //blackeye
        crc2.save();
        crc2.scale(1, 1.5);
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.arc(5, -23, 1.5, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        //blackeye
        crc2.save();
        crc2.scale(1, 1.5);
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.arc(-5, -23, 1.5, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.restore();
        crc2.closePath();

        //wings

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(-17, 100);
        crc2.lineTo(-40, 100);
        crc2.lineTo(-17, 110);
        crc2.fillStyle = "#af8a54";
        crc2.fill();
        crc2.restore();
        crc2.closePath();

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(17, 100);
        crc2.lineTo(40, 100);
        crc2.lineTo(17, 110);
        crc2.fillStyle = "#af8a54";
        crc2.fill();
        crc2.restore();
        crc2.closePath();

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(-5, 85);
        crc2.lineTo(0, 95);
        crc2.lineTo(5,85);
        crc2.fillStyle = "#ffbc40";
        crc2.fill();
        crc2.restore();
        crc2.closePath();

     //head
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.arc(0, 80, 15, 0, 2 * Math.PI);
        crc2.fillStyle = "#af8a54";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        //body
        crc2.save();
        crc2.scale(1, 1.5);
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.arc(0, 0, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#af8a54";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        //whiteeye
        crc2.save();
        crc2.scale(1, 1.5);
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.arc(-5, -24, 3, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        //whiteeye       
        crc2.save();
        crc2.scale(1, 1.5);
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.arc(5, -24, 3, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        //blackeye
        crc2.save();
        crc2.scale(1, 1.5);
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.arc(5, -23, 1.5, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        //blackeye
        crc2.save();
        crc2.scale(1, 1.5);
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.arc(-5, -23, 1.5, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.restore();
        crc2.closePath();

        //wings

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(-17, 100);
        crc2.lineTo(-40, 100);
        crc2.lineTo(-17, 110);
        crc2.fillStyle = "#af8a54";
        crc2.fill();
        crc2.restore();
        crc2.closePath();

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(17, 100);
        crc2.lineTo(40, 100);
        crc2.lineTo(17, 110);
        crc2.fillStyle = "#af8a54";
        crc2.fill();
        crc2.restore();
        crc2.closePath();

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(-5, 85);
        crc2.lineTo(0, 95);
        crc2.lineTo(5,85);
        crc2.fillStyle = "#ffbc40";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
    }
        function drawstandingBird1(_position: Vector): void {
        //head
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.arc(0, 80, 15, 0, 2 * Math.PI);
        crc2.fillStyle = "#af8a54";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        //body
        crc2.save();
        crc2.scale(1, 1.5);
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.arc(0, 0, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#af8a54";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        //whiteeye
        crc2.save();
        crc2.scale(1, 1.5);
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.arc(-5, -24, 3, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        //whiteeye       
        crc2.save();
        crc2.scale(1, 1.5);
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.arc(5, -24, 3, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        //blackeye
        crc2.save();
        crc2.scale(1, 1.5);
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.arc(5, -23, 1.5, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        //blackeye
        crc2.save();
        crc2.scale(1, 1.5);
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.arc(-5, -23, 1.5, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.restore();
        crc2.closePath();

        //wings

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(-17, 100);
        crc2.lineTo(-40, 100);
        crc2.lineTo(-17, 110);
        crc2.fillStyle = "#af8a54";
        crc2.fill();
        crc2.restore();
        crc2.closePath();

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(17, 100);
        crc2.lineTo(40, 100);
        crc2.lineTo(17, 110);
        crc2.fillStyle = "#af8a54";
        crc2.fill();
        crc2.restore();
        crc2.closePath();

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(-5, 85);
        crc2.lineTo(0, 95);
        crc2.lineTo(5,85);
        crc2.fillStyle = "#ffbc40";
        crc2.fill();
        crc2.restore();
        crc2.closePath();

     //head
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.arc(0, 80, 15, 0, 2 * Math.PI);
        crc2.fillStyle = "#af8a54";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
    //body
        crc2.save();
        crc2.scale(1, 1.5);
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.arc(0, 0, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#af8a54";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        //whiteeye
        crc2.save();
        crc2.scale(1, 1.5);
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.arc(-5, -24, 3, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        //whiteeye       
        crc2.save();
        crc2.scale(1, 1.5);
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.arc (5, -24, 3, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        //blackeye
        crc2.save();
        crc2.scale(1, 1.5);
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.arc(5, -23, 1.5, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        //blackeye
        crc2.save();
        crc2.scale(1, 1.5);
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.arc(-5, -23, 1.5, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        //wings
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(-17, 100);
        crc2.lineTo(-40, 100);
        crc2.lineTo(-17, 110);
        crc2.fillStyle = "#af8a54";
        crc2.fill();
        crc2.restore();
        crc2.closePath();

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(17, 100);
        crc2.lineTo(40, 100);
        crc2.lineTo(17, 110);
        crc2.fillStyle = "#af8a54";
        crc2.fill();
        crc2.restore();
        crc2.closePath();

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(-5, 85);
        crc2.lineTo(0, 95);
        crc2.lineTo(5,85);
        crc2.fillStyle = "#ffbc40";
        crc2.fill();
        crc2.restore();
        crc2.closePath();

} 
