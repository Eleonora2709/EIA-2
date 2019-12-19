namespace L09 {

    interface Vector {
        x: number;
        y: number;
    }

    export function Background(): void {

        let goldencut: number = 0.58;

        let horizon: number = crc2.canvas.height * goldencut;
        let posMountains: Vector = { x: 0, y: horizon };

        drawBackground();
        drawSun({ x: 100, y: 75 });
        drawCloud({ x: 400, y: 125 }, { x: 250, y: 75 });
        drawCloud({ x: 750, y: 110 }, { x: 200, y: 85 });
        drawCloud({ x: 1000, y: 140 }, { x: 220, y: 55 });
        drawMountains(posMountains, 75, 200, "grey", "white");
        drawMountains(posMountains, 50, 150, "grey", "lightgrey");
        drawSnowman({ x: 150, y: 500 }, { x: 150, y: 430 }, { x: 150, y: 370 });
        drawTree({ x: 1000, y: 600}, { x: 1.2, y: 1.2});
        drawTree({ x: 300, y: 550 }, { x: 1.6, y: 1.6});
        drawTree({ x: 1060, y: 370 }, { x: 1.2, y: 1.2});
        drawTree({ x: 260, y: 280 }, { x: 0.3, y: 0.3});
        drawTree({ x: 340, y: 310 }, { x: 0.35, y: 0.35});
        drawTree({ x: 760, y: 300 }, { x: 0.5, y: 0.5});
        drawTree({ x: 960, y: 270 }, { x: 0.3, y: 0.3});
        drawBirdhouse({ x: 500, y: 400 });
        drawSnowflake();
        

    }

    function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#3673a4");
        gradient.addColorStop(0.58, "white");
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
}