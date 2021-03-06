var L11;
(function (L11) {
    let crc2;
    let goldencut = 0.58;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        let horizon = crc2.canvas.height * goldencut;
        let posMountains = { x: 0, y: horizon };
        drawBackground();
        drawSun({ x: 100, y: 75 });
        drawCloud({ x: 400, y: 125 }, { x: 250, y: 75 });
        drawCloud({ x: 750, y: 110 }, { x: 200, y: 85 });
        drawCloud({ x: 1000, y: 140 }, { x: 220, y: 55 });
        drawMountains(posMountains, 75, 200, "grey", "white");
        drawMountains(posMountains, 50, 150, "grey", "lightgrey");
        drawSnowman({ x: 400, y: 600 });
        drawTree({ x: 700, y: 500 }, { x: 1.0, y: 1.8 });
        drawTree({ x: 100, y: 550 }, { x: 1.0, y: 1.4 });
        drawTree({ x: 400, y: 370 }, { x: 1.2, y: 1.2 });
        drawTree({ x: 840, y: 350 }, { x: 0.5, y: 0.7 });
        drawBirdhouse({ x: 900, y: 400 });
        //drawFlyingBird({ x: 300, y: 100 });
        //drawFlyingBird({ x: 800, y: 140 });
        //drawStandingBird({ x: 550, y: 500 });
        //drawSnowflake();
        //drawFlyingBirdies({ x: 20, y: 20}, { x: canvas.width -90, y: canvas.height -480})
        crc2.save();
        L11.image = crc2.getImageData(0, 0, canvas.width, canvas.height);
    }
    function drawBackground() {
        console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#3673a4");
        gradient.addColorStop(goldencut, "white");
        gradient.addColorStop(1, "#aaaaaa");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 30;
        let r2 = 150;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(40, 100%, 75%, 1)");
        gradient.addColorStop(1, "HSLA(40, 100%, 50%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawCloud(_position, _size) {
        console.log("Clouds", _position, _size);
        let nParticles = 25;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains", _position, _min, _max);
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    function drawSnowman(_position) {
        console.log("Snowman", _position);
        //snowballs
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.arc(0, 0, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.arc(0, -60, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.arc(0, -110, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        //Schnabel
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, -105);
        crc2.lineTo(20, -110);
        crc2.lineTo(0, -115);
        crc2.fillStyle = "#ffbc40";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
    }
    function drawTree(_position, _scale) {
        //tree trunk
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.scale(_scale.x, _scale.y);
        crc2.stroke();
        crc2.fillStyle = "saddlebrown";
        crc2.fillRect(0, 0, 20, 50);
        crc2.restore();
        crc2.closePath();
        //tree needles
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.scale(_scale.x, _scale.y);
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
        crc2.scale(_scale.x, _scale.y);
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
        crc2.scale(_scale.x, _scale.y);
        crc2.moveTo(-40, -55);
        crc2.lineTo(10, -110);
        crc2.lineTo(60, -55);
        crc2.fillStyle = "green";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
    }
    function drawBirdhouse(_position) {
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
        crc2.lineTo(100, -100);
        crc2.lineTo(210, 0);
        crc2.stroke();
        crc2.fillStyle = "#2c1410";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
    }
    function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 3; i++) {
            color += letters[Math.round(Math.random() * 15)];
        }
        return color;
    }
})(L11 || (L11 = {}));
//# sourceMappingURL=Canvas.js.map