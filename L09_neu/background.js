var L09;
(function (L09) {
    function Background() {
        let goldencut = 0.58;
        let horizon = L09.crc2.canvas.height * goldencut;
        let posMountains = { x: 0, y: horizon };
        drawBackground();
        drawSun({ x: 100, y: 75 });
        drawCloud({ x: 400, y: 125 }, { x: 250, y: 75 });
        drawCloud({ x: 750, y: 110 }, { x: 200, y: 85 });
        drawCloud({ x: 1000, y: 140 }, { x: 220, y: 55 });
        drawMountains(posMountains, 75, 200, "grey", "white");
        drawMountains(posMountains, 50, 150, "grey", "lightgrey");
        drawSnowman({ x: 150, y: 500 }, { x: 150, y: 430 }, { x: 150, y: 370 });
        drawTree({ x: 1000, y: 600 }, { x: 1.2, y: 1.2 });
        drawTree({ x: 300, y: 550 }, { x: 1.6, y: 1.6 });
        drawTree({ x: 1060, y: 370 }, { x: 1.2, y: 1.2 });
        drawTree({ x: 260, y: 280 }, { x: 0.3, y: 0.3 });
        drawTree({ x: 340, y: 310 }, { x: 0.35, y: 0.35 });
        drawTree({ x: 760, y: 300 }, { x: 0.5, y: 0.5 });
        drawTree({ x: 960, y: 270 }, { x: 0.3, y: 0.3 });
        drawBirdhouse({ x: 500, y: 400 });
        drawSnowflake();
    }
    L09.Background = Background;
    function drawBackground() {
        console.log("Background");
        let gradient = L09.crc2.createLinearGradient(0, 0, 0, L09.crc2.canvas.height);
        gradient.addColorStop(0, "#3673a4");
        gradient.addColorStop(0.58, "white");
        gradient.addColorStop(1, "#aaaaaa");
        L09.crc2.fillStyle = gradient;
        L09.crc2.fillRect(0, 0, L09.crc2.canvas.width, L09.crc2.canvas.height);
    }
    function drawSun(_position) {
        console.log("Background", _position);
        let r1 = 30;
        let r2 = 150;
        let gradient = L09.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(40, 100%, 75%, 1)");
        gradient.addColorStop(1, "HSLA(40, 100%, 50%, 0)");
        L09.crc2.save();
        L09.crc2.translate(_position.x, _position.y);
        L09.crc2.fillStyle = gradient;
        L09.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L09.crc2.fill();
        L09.crc2.restore();
    }
    function drawCloud(_position, _size) {
        console.log("Background", _position, _size);
        let nParticles = 25;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = L09.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        L09.crc2.save();
        L09.crc2.translate(_position.x, _position.y);
        L09.crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            L09.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            L09.crc2.translate(x, y);
            L09.crc2.fill(particle);
            L09.crc2.restore();
        }
        L09.crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains", _position, _min, _max);
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        L09.crc2.save();
        L09.crc2.translate(_position.x, _position.y);
        L09.crc2.beginPath();
        L09.crc2.moveTo(0, 0);
        L09.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L09.crc2.lineTo(x, y);
        } while (x < L09.crc2.canvas.width);
        L09.crc2.lineTo(x, 0);
        L09.crc2.closePath();
        let gradient = L09.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        L09.crc2.fillStyle = gradient;
        L09.crc2.fill();
        L09.crc2.restore();
    }
    function drawSnowman(_position, _position2, _position3) {
        console.log("Background", _position);
        //Schnabel
        L09.crc2.save();
        L09.crc2.translate(_position.x, _position.y);
        L09.crc2.beginPath();
        L09.crc2.moveTo(-10, -110);
        L09.crc2.lineTo(60, -110);
        L09.crc2.lineTo(20, -140);
        L09.crc2.fillStyle = "#ffbc40";
        L09.crc2.fill();
        L09.crc2.restore();
        L09.crc2.closePath();
        //Kugeln
        L09.crc2.save();
        L09.crc2.translate(_position.x, _position.y);
        L09.crc2.beginPath();
        L09.crc2.arc(0, 30, 75, 0, 2 * Math.PI);
        L09.crc2.fillStyle = "white";
        L09.crc2.fill();
        L09.crc2.restore();
        L09.crc2.closePath();
        L09.crc2.save();
        L09.crc2.translate(_position2.x, _position2.y);
        L09.crc2.beginPath();
        L09.crc2.arc(0, 15, 50, 0, 2 * Math.PI);
        L09.crc2.fillStyle = "white";
        L09.crc2.fill();
        L09.crc2.restore();
        L09.crc2.closePath();
        L09.crc2.save();
        L09.crc2.translate(_position3.x, _position3.y);
        L09.crc2.beginPath();
        L09.crc2.arc(0, 0, 40, 0, 2 * Math.PI);
        L09.crc2.fillStyle = "white";
        L09.crc2.fill();
        L09.crc2.restore();
        L09.crc2.closePath();
    }
    function drawTree(_position, _scale) {
        //tree trunk
        L09.crc2.save();
        L09.crc2.translate(_position.x, _position.y);
        L09.crc2.beginPath();
        L09.crc2.scale(_scale.x, _scale.y);
        L09.crc2.stroke();
        L09.crc2.fillStyle = "saddlebrown";
        L09.crc2.fillRect(0, 0, 20, 50);
        L09.crc2.restore();
        L09.crc2.closePath();
        //tree needles
        L09.crc2.save();
        L09.crc2.translate(_position.x, _position.y);
        L09.crc2.beginPath();
        L09.crc2.scale(_scale.x, _scale.y);
        L09.crc2.moveTo(-60, 0);
        L09.crc2.lineTo(10, -70);
        L09.crc2.lineTo(80, 0);
        L09.crc2.fillStyle = "green";
        L09.crc2.fill();
        L09.crc2.restore();
        L09.crc2.closePath();
        L09.crc2.save();
        L09.crc2.translate(_position.x, _position.y);
        L09.crc2.beginPath();
        L09.crc2.scale(_scale.x, _scale.y);
        L09.crc2.moveTo(-50, -30);
        L09.crc2.lineTo(10, -90);
        L09.crc2.lineTo(70, -30);
        L09.crc2.fillStyle = "green";
        L09.crc2.fill();
        L09.crc2.restore();
        L09.crc2.closePath();
        L09.crc2.save();
        L09.crc2.translate(_position.x, _position.y);
        L09.crc2.beginPath();
        L09.crc2.scale(_scale.x, _scale.y);
        L09.crc2.moveTo(-40, -55);
        L09.crc2.lineTo(10, -110);
        L09.crc2.lineTo(60, -55);
        L09.crc2.fillStyle = "green";
        L09.crc2.fill();
        L09.crc2.restore();
        L09.crc2.closePath();
    }
    function drawBirdhouse(_position) {
        //Gerüst
        L09.crc2.save();
        L09.crc2.translate(_position.x, _position.y);
        L09.crc2.beginPath();
        L09.crc2.stroke();
        L09.crc2.fillStyle = "#765748";
        L09.crc2.fillRect(0, 0, 200, 170);
        L09.crc2.restore();
        L09.crc2.closePath();
        //Loch
        L09.crc2.save();
        L09.crc2.translate(_position.x, _position.y);
        L09.crc2.beginPath();
        L09.crc2.arc(100, 70, 40, 0, 2 * Math.PI);
        L09.crc2.fillStyle = "#b47d49";
        L09.crc2.fill();
        L09.crc2.restore();
        L09.crc2.closePath();
        //Stecken
        L09.crc2.save();
        L09.crc2.translate(_position.x, _position.y);
        L09.crc2.beginPath();
        L09.crc2.stroke();
        L09.crc2.fillStyle = "#2c1410";
        L09.crc2.fillRect(90, 150, 20, 200);
        L09.crc2.restore();
        L09.crc2.closePath();
        //Dach
        L09.crc2.save();
        L09.crc2.translate(_position.x, _position.y);
        L09.crc2.beginPath();
        L09.crc2.moveTo(-10, 0);
        L09.crc2.lineTo(100, -100);
        L09.crc2.lineTo(210, 0);
        L09.crc2.stroke();
        L09.crc2.fillStyle = "#2c1410";
        L09.crc2.fill();
        L09.crc2.restore();
        L09.crc2.closePath();
    }
})(L09 || (L09 = {}));
//# sourceMappingURL=background.js.map