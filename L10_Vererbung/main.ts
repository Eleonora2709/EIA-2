

namespace L10 {
    //interface Vector {
      //  x: number;
        //y: number;
    //}

    //test
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let imgData: ImageData;
    export let goldencut: number = 0.58; 
    

    let moveablesArray: Moveable[] = [];
    function init(_event: Event): void {

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        drawBackground();
        imgData = crc2.getImageData(0, 0, canvas.width, goldencut);
        //moveablesArray.push(Moveable);

        }




    for (let i: number = 0; i < 8; i++) {
        let onesnowflake: Snowflake = new Snowflake(4,3);
        moveablesArray.push(onesnowflake);
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

   //Schnabel

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

function drawTree(_position: Vector, _scale: Vector): void {

    //tree trunk
    crc2.save();
    crc2.translate(_position.x, _position.y);
    crc2.beginPath();
    crc2.scale(_scale.x, _scale.y)
    crc2.stroke();
    crc2.fillStyle = "saddlebrown";
    crc2.fillRect(0, 0, 20, 50);
    crc2.restore();
    crc2.closePath();

    //tree needles
    crc2.save();
    crc2.translate(_position.x, _position.y);
    crc2.beginPath();
    crc2.scale(_scale.x, _scale.y)
    crc2.moveTo(-60, 0);
    crc2.lineTo(10, -70);
    crc2.lineTo(80, 0);
    crc2.fillStyle = "green";
    crc2.fill();
    crc2.restore();
    crc2.closePath();

    crc2.save();
    crc2.translate(_position.x, _position.y);
    crc2.beginPath();
    crc2.scale(_scale.x, _scale.y)
    crc2.moveTo(-50, -30);
    crc2.lineTo(10, -90);
    crc2.lineTo(70, -30);
    crc2.fillStyle = "green";
    crc2.fill();
    crc2.restore();
    crc2.closePath();

    crc2.save();
    crc2.translate(_position.x, _position.y);
    crc2.beginPath();
    crc2.scale(_scale.x, _scale.y)
    crc2.moveTo(-40, -55);
    crc2.lineTo(10, -110);
    crc2.lineTo(60, -55);
    crc2.fillStyle = "green";
    crc2.fill();
    crc2.restore();
    crc2.closePath();

}

function drawBirdhouse(_position: Vector): void {

    //Gerüst
    crc2.save();
    crc2.translate(_position.x, _position.y);
    crc2.beginPath();
    crc2.stroke();
    crc2.fillStyle = "#765748";
    crc2.fillRect(0, 0, 200, 170);
    crc2.restore();
    crc2.closePath();

    //Loch
    crc2.save();
    crc2.translate(_position.x, _position.y);
    crc2.beginPath();
    crc2.arc(100, 70, 40, 0, 2 * Math.PI);
    crc2.fillStyle = "#b47d49";
    crc2.fill();
    crc2.restore();
    crc2.closePath();

    //Stecken
    crc2.save();
    crc2.translate(_position.x, _position.y);
    crc2.beginPath();
    crc2.stroke();
    crc2.fillStyle = "#2c1410";
    crc2.fillRect(90, 150, 20, 200);
    crc2.restore();
    crc2.closePath();

   //Dach
    crc2.save();
    crc2.translate(_position.x, _position.y);
    crc2.beginPath();
    crc2.moveTo(-10, 0);
    crc2.lineTo(100, -100)
    crc2.lineTo(210, 0);
    crc2.stroke();
    crc2.fillStyle = "#2c1410";
    crc2.fill();
    crc2.restore();
    crc2.closePath();

}

function drawFlyingBirdies(_start: Vector, _border: Vector): void {
    for (let i: number = 0; i < 10; i++){
        let x: number = _start.x + Math.random() * _border.x;
        let y: number = _start.y + Math.random() * _border.y;
        drawFlyingBird({x, y});
    }
}
function drawFlyingBirdies1(_start: Vector, _border: Vector): void {
    for (let i: number = 0; i < 10; i++){
        let x: number = _start.x + Math.random() * _border.x;
        let y: number = _start.y + Math.random() * _border.y;
        drawStandingBird({x, y});
    }
}

function drawFlyingBird(_position: Vector): void {

    //body
    crc2.save();
    crc2.translate(_position.x, _position.y);
    crc2.beginPath();
    crc2.ellipse(31, 1, 25, 15, Math.PI / 1, 0, 2 * Math.PI);
    crc2.fillStyle = getRandomColor();
    crc2.fill();
    crc2.restore();
    crc2.closePath();

    //head
    crc2.save();
    crc2.translate(_position.x, _position.y);
    crc2.beginPath();
    crc2.arc(0, 0, 11, 0, 2 * Math.PI);
    crc2.fillStyle = getRandomColor();
    crc2.fill();
    crc2.restore();
    crc2.closePath();

    //eye
    crc2.save();
    crc2.translate(_position.x, _position.y);
    crc2.beginPath();
    crc2.arc(-4, -2, 2, 0, 2 * Math.PI);
    crc2.fillStyle = "black";
    crc2.fill();
    crc2.restore();
    crc2.closePath();

    //beak
    crc2.save();
    crc2.translate(_position.x, _position.y);
    crc2.beginPath();
    crc2.moveTo(-11, -2);
    crc2.lineTo(-26, 4);
    crc2.lineTo(-9, 6);
    crc2.fillStyle = "gold";
    crc2.fill();
    crc2.restore();
    crc2.closePath();

    //wings
    crc2.save();
    crc2.translate(_position.x, _position.y);
    crc2.beginPath();
    crc2.moveTo(13, -4);
    crc2.lineTo(30, -35);
    crc2.lineTo(47, -4);
    crc2.fillStyle = getRandomColor();
    crc2.fill();
    crc2.restore();
    crc2.closePath();

}

function drawStandingBird(_position: Vector): void {

    //body
    crc2.save();
    crc2.translate(_position.x, _position.y);
    crc2.beginPath();
    crc2.ellipse(0, 35, 18, 30, Math.PI / 1, 0, 2 * Math.PI);
    crc2.fillStyle = getRandomColor();
    crc2.fill();
    crc2.restore();
    crc2.closePath();

    //head
    crc2.save();
    crc2.translate(_position.x, _position.y);
    crc2.beginPath();
    crc2.arc(0, 0, 15, 0, 2 * Math.PI);
    crc2.fillStyle = getRandomColor();
    crc2.fill();
    crc2.restore();
    crc2.closePath();

    //beak
    crc2.save();
    crc2.translate(_position.x, _position.y);
    crc2.beginPath();
    crc2.moveTo(-6, 0);
    crc2.lineTo(0, 10);
    crc2.lineTo(6, 0);
    crc2.fillStyle = "gold";
    crc2.fill();
    crc2.restore();
    crc2.closePath();

    //eyes
    crc2.save();
    crc2.translate(_position.x, _position.y);
    crc2.beginPath();
    crc2.arc(-4, -5, 2, 0, 2 * Math.PI);
    crc2.fillStyle = "black";
    crc2.fill();
    crc2.restore();
    crc2.closePath();

    crc2.save();
    crc2.translate(_position.x, _position.y);
    crc2.beginPath();
    crc2.arc(4, -5, 2, 0, 2 * Math.PI);
    crc2.fillStyle = "black";
    crc2.fill();
    crc2.restore();
    crc2.closePath();

    //wings
    crc2.save();
    crc2.translate(_position.x, _position.y);
    crc2.beginPath();
    crc2.moveTo(-14, 20);
    crc2.lineTo(-65, 30);
    crc2.lineTo(-14, 48);
    crc2.fillStyle = "sienna";
    crc2.fill();
    crc2.restore();
    crc2.closePath();

    crc2.save();
    crc2.translate(_position.x, _position.y);
    crc2.beginPath();
    crc2.moveTo(16, 20);
    crc2.lineTo(67, 30);
    crc2.lineTo(16, 48);
    crc2.fillStyle = "sienna";
    crc2.fill();
    crc2.restore();
    crc2.closePath();

    //legs
    crc2.save();
    crc2.translate(_position.x, _position.y);
    crc2.beginPath();
    crc2.moveTo(-5, 63);
    crc2.lineTo(-5, 86);
    crc2.lineWidth = 3;
    crc2.strokeStyle = "gold";
    crc2.stroke();
    crc2.restore();
    crc2.closePath();

    crc2.save();
    crc2.translate(_position.x, _position.y);
    crc2.beginPath();
    crc2.moveTo(5, 63);
    crc2.lineTo(5, 86);
    crc2.lineWidth = 3;
    crc2.strokeStyle = "gold";
    crc2.stroke();
    crc2.restore();
    crc2.closePath();

}

function getRandomColor(): string {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

function drawSnow(_position: Vector, _size: Vector): void {
    console.log("Snow", _position, _size);

    let nParticles: number = 400;
    let particle: Path2D = new Path2D();

    particle.arc(0, 0, 2, 0, 2 * Math.PI);
    crc2.save();
    crc2.translate(_position.x, _position.y);
    crc2.fillStyle = "white";

    for (let drawn: number = 0; drawn < nParticles; drawn++) {
        crc2.save();
        let x: number = (Math.random()) * _size.x;
        let y: number = - (Math.random() * _size.y);
        crc2.translate(x, y);
        crc2.fill(particle);
        crc2.restore();
    }
    crc2.restore();
}
}