var L_10;
(function (L_10) {
    window.addEventListener("load", handleLoad);
    let goldencut = 0.38;
    L_10.moveablesArray = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L_10.crc2 = canvas.getContext("2d");
        let horizon = L_10.crc2.canvas.height * goldencut;
        let posMountains = { x: 0, y: horizon };
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
        L_10.crc2.save();
        L_10.image = L_10.crc2.getImageData(0, 0, canvas.width, canvas.height);
    }
    function drawBackground() {
        console.log("Background");
        let gradient = L_10.crc2.createLinearGradient(0, 0, 0, L_10.crc2.canvas.height);
        gradient.addColorStop(0, "#3673a4");
        gradient.addColorStop(goldencut, "white");
        gradient.addColorStop(1, "#aaaaaa");
        L_10.crc2.fillStyle = gradient;
        L_10.crc2.fillRect(0, 0, L_10.crc2.canvas.width, L_10.crc2.canvas.height);
    }
    function drawSun(_position) {
        console.log("Background", _position);
        let r1 = 30;
        let r2 = 150;
        let gradient = L_10.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(40, 100%, 75%, 1)");
        gradient.addColorStop(1, "HSLA(40, 100%, 50%, 0)");
        L_10.crc2.save();
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.fillStyle = gradient;
        L_10.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L_10.crc2.fill();
        L_10.crc2.restore();
    }
    function drawCloud(_position, _size) {
        console.log("Background", _position, _size);
        let nParticles = 25;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = L_10.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        L_10.crc2.save();
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            L_10.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            L_10.crc2.translate(x, y);
            L_10.crc2.fill(particle);
            L_10.crc2.restore();
        }
        L_10.crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains", _position, _min, _max);
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        L_10.crc2.save();
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.moveTo(0, 0);
        L_10.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L_10.crc2.lineTo(x, y);
        } while (x < L_10.crc2.canvas.width);
        L_10.crc2.lineTo(x, 0);
        L_10.crc2.closePath();
        let gradient = L_10.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        L_10.crc2.fillStyle = gradient;
        L_10.crc2.fill();
        L_10.crc2.restore();
    }
    function drawSnowman(_position, _position2, _position3) {
        console.log("Background", _position);
        //nose
        L_10.crc2.save();
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.moveTo(-10, -110);
        L_10.crc2.lineTo(60, -110);
        L_10.crc2.lineTo(20, -140);
        L_10.crc2.fillStyle = "#ffbc40";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
        //Kugeln
        L_10.crc2.save();
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.arc(0, 30, 75, 0, 2 * Math.PI);
        L_10.crc2.fillStyle = "white";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
        L_10.crc2.save();
        L_10.crc2.translate(_position2.x, _position2.y);
        L_10.crc2.beginPath();
        L_10.crc2.arc(0, 15, 50, 0, 2 * Math.PI);
        L_10.crc2.fillStyle = "white";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
        L_10.crc2.save();
        L_10.crc2.translate(_position3.x, _position3.y);
        L_10.crc2.beginPath();
        L_10.crc2.arc(0, 0, 40, 0, 2 * Math.PI);
        L_10.crc2.fillStyle = "white";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
    }
    function drawTree(_position) {
        L_10.crc2.save();
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.stroke();
        L_10.crc2.fillStyle = "brown";
        L_10.crc2.fillRect(45, 75, 10, 30);
        L_10.crc2.restore();
        L_10.crc2.closePath();
        L_10.crc2.save();
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.moveTo(50, 25);
        L_10.crc2.lineTo(25, 75);
        L_10.crc2.lineTo(75, 75);
        L_10.crc2.fillStyle = "green";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
    }
    function drawTree2(_position) {
        L_10.crc2.save();
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.stroke();
        L_10.crc2.fillStyle = "brown";
        L_10.crc2.fillRect(45, 75, 10, 30);
        L_10.crc2.restore();
        L_10.crc2.closePath();
        L_10.crc2.save();
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.moveTo(50, 25);
        L_10.crc2.lineTo(25, 75);
        L_10.crc2.lineTo(75, 75);
        L_10.crc2.fillStyle = "green";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
    }
    function drawTree3(_position) {
        L_10.crc2.save();
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.stroke();
        L_10.crc2.fillStyle = "brown";
        L_10.crc2.fillRect(45, 75, 10, 30);
        L_10.crc2.restore();
        L_10.crc2.closePath();
        L_10.crc2.save();
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.moveTo(50, 25);
        L_10.crc2.lineTo(25, 75);
        L_10.crc2.lineTo(75, 75);
        L_10.crc2.fillStyle = "green";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
    }
    function drawTree4(_position) {
        L_10.crc2.save();
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.stroke();
        L_10.crc2.fillStyle = "brown";
        L_10.crc2.fillRect(45, 75, 10, 30);
        L_10.crc2.restore();
        L_10.crc2.closePath();
        L_10.crc2.save();
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.moveTo(50, 25);
        L_10.crc2.lineTo(25, 75);
        L_10.crc2.lineTo(75, 75);
        L_10.crc2.fillStyle = "darkgreen";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
    }
    function drawTree5(_position) {
        L_10.crc2.save();
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.stroke();
        L_10.crc2.fillStyle = "brown";
        L_10.crc2.fillRect(45, 75, 10, 30);
        L_10.crc2.restore();
        L_10.crc2.closePath();
        L_10.crc2.save();
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.moveTo(50, 25);
        L_10.crc2.lineTo(25, 75);
        L_10.crc2.lineTo(75, 75);
        L_10.crc2.fillStyle = "green";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
    }
    function drawTree6(_position) {
        L_10.crc2.save();
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.stroke();
        L_10.crc2.fillStyle = "brown";
        L_10.crc2.fillRect(45, 75, 10, 30);
        L_10.crc2.restore();
        L_10.crc2.closePath();
        L_10.crc2.save();
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.moveTo(50, 25);
        L_10.crc2.lineTo(25, 75);
        L_10.crc2.lineTo(75, 75);
        L_10.crc2.fillStyle = "#468641";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
    }
    function drawBirdhouse(_position) {
        L_10.crc2.save();
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.stroke();
        L_10.crc2.fillStyle = "#2c1410";
        L_10.crc2.fillRect(0, 0, 180, 150);
        L_10.crc2.restore();
        L_10.crc2.closePath();
        L_10.crc2.save();
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.stroke();
        L_10.crc2.fillStyle = "#b47d49";
        L_10.crc2.fillRect(50, 75, 80, 75);
        L_10.crc2.restore();
        L_10.crc2.closePath();
        L_10.crc2.save();
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.stroke();
        L_10.crc2.fillStyle = "#2c1410";
        L_10.crc2.fillRect(80, 150, 20, 200);
        L_10.crc2.restore();
        L_10.crc2.closePath();
        L_10.crc2.save();
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.moveTo(-10, 0);
        L_10.crc2.lineTo(90, -90);
        L_10.crc2.lineTo(190, 0);
        L_10.crc2.stroke();
        L_10.crc2.fillStyle = "#2c1410";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
    }
    function drawstandingBird(_position) {
        //head
        L_10.crc2.save();
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.arc(0, 80, 15, 0, 2 * Math.PI);
        L_10.crc2.fillStyle = "#af8a54";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
        //body
        L_10.crc2.save();
        L_10.crc2.scale(1, 1.5);
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.arc(0, 0, 20, 0, 2 * Math.PI);
        L_10.crc2.fillStyle = "#af8a54";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
        //whiteeye
        L_10.crc2.save();
        L_10.crc2.scale(1, 1.5);
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.arc(-5, -24, 3, 0, 2 * Math.PI);
        L_10.crc2.fillStyle = "white";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
        //whiteeye       
        L_10.crc2.save();
        L_10.crc2.scale(1, 1.5);
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.arc(5, -24, 3, 0, 2 * Math.PI);
        L_10.crc2.fillStyle = "white";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
        //blackeye
        L_10.crc2.save();
        L_10.crc2.scale(1, 1.5);
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.arc(5, -23, 1.5, 0, 2 * Math.PI);
        L_10.crc2.fillStyle = "black";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
        //blackeye
        L_10.crc2.save();
        L_10.crc2.scale(1, 1.5);
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.arc(-5, -23, 1.5, 0, 2 * Math.PI);
        L_10.crc2.fillStyle = "black";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
        //wings
        L_10.crc2.save();
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.moveTo(-17, 100);
        L_10.crc2.lineTo(-40, 100);
        L_10.crc2.lineTo(-17, 110);
        L_10.crc2.fillStyle = "#af8a54";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
        L_10.crc2.save();
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.moveTo(17, 100);
        L_10.crc2.lineTo(40, 100);
        L_10.crc2.lineTo(17, 110);
        L_10.crc2.fillStyle = "#af8a54";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
        L_10.crc2.save();
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.moveTo(-5, 85);
        L_10.crc2.lineTo(0, 95);
        L_10.crc2.lineTo(5, 85);
        L_10.crc2.fillStyle = "#ffbc40";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
        //head
        L_10.crc2.save();
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.arc(0, 80, 15, 0, 2 * Math.PI);
        L_10.crc2.fillStyle = "#af8a54";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
        //body
        L_10.crc2.save();
        L_10.crc2.scale(1, 1.5);
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.arc(0, 0, 20, 0, 2 * Math.PI);
        L_10.crc2.fillStyle = "#af8a54";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
        //whiteeye
        L_10.crc2.save();
        L_10.crc2.scale(1, 1.5);
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.arc(-5, -24, 3, 0, 2 * Math.PI);
        L_10.crc2.fillStyle = "white";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
        //whiteeye       
        L_10.crc2.save();
        L_10.crc2.scale(1, 1.5);
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.arc(5, -24, 3, 0, 2 * Math.PI);
        L_10.crc2.fillStyle = "white";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
        //blackeye
        L_10.crc2.save();
        L_10.crc2.scale(1, 1.5);
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.arc(5, -23, 1.5, 0, 2 * Math.PI);
        L_10.crc2.fillStyle = "black";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
        //blackeye
        L_10.crc2.save();
        L_10.crc2.scale(1, 1.5);
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.arc(-5, -23, 1.5, 0, 2 * Math.PI);
        L_10.crc2.fillStyle = "black";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
        //wings
        L_10.crc2.save();
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.moveTo(-17, 100);
        L_10.crc2.lineTo(-40, 100);
        L_10.crc2.lineTo(-17, 110);
        L_10.crc2.fillStyle = "#af8a54";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
        L_10.crc2.save();
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.moveTo(17, 100);
        L_10.crc2.lineTo(40, 100);
        L_10.crc2.lineTo(17, 110);
        L_10.crc2.fillStyle = "#af8a54";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
        L_10.crc2.save();
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.moveTo(-5, 85);
        L_10.crc2.lineTo(0, 95);
        L_10.crc2.lineTo(5, 85);
        L_10.crc2.fillStyle = "#ffbc40";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
    }
    function drawstandingBird1(_position) {
        //head
        L_10.crc2.save();
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.arc(0, 80, 15, 0, 2 * Math.PI);
        L_10.crc2.fillStyle = "#af8a54";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
        //body
        L_10.crc2.save();
        L_10.crc2.scale(1, 1.5);
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.arc(0, 0, 20, 0, 2 * Math.PI);
        L_10.crc2.fillStyle = "#af8a54";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
        //whiteeye
        L_10.crc2.save();
        L_10.crc2.scale(1, 1.5);
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.arc(-5, -24, 3, 0, 2 * Math.PI);
        L_10.crc2.fillStyle = "white";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
        //whiteeye       
        L_10.crc2.save();
        L_10.crc2.scale(1, 1.5);
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.arc(5, -24, 3, 0, 2 * Math.PI);
        L_10.crc2.fillStyle = "white";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
        //blackeye
        L_10.crc2.save();
        L_10.crc2.scale(1, 1.5);
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.arc(5, -23, 1.5, 0, 2 * Math.PI);
        L_10.crc2.fillStyle = "black";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
        //blackeye
        L_10.crc2.save();
        L_10.crc2.scale(1, 1.5);
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.arc(-5, -23, 1.5, 0, 2 * Math.PI);
        L_10.crc2.fillStyle = "black";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
        //wings
        L_10.crc2.save();
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.moveTo(-17, 100);
        L_10.crc2.lineTo(-40, 100);
        L_10.crc2.lineTo(-17, 110);
        L_10.crc2.fillStyle = "#af8a54";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
        L_10.crc2.save();
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.moveTo(17, 100);
        L_10.crc2.lineTo(40, 100);
        L_10.crc2.lineTo(17, 110);
        L_10.crc2.fillStyle = "#af8a54";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
        L_10.crc2.save();
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.moveTo(-5, 85);
        L_10.crc2.lineTo(0, 95);
        L_10.crc2.lineTo(5, 85);
        L_10.crc2.fillStyle = "#ffbc40";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
        //head
        L_10.crc2.save();
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.arc(0, 80, 15, 0, 2 * Math.PI);
        L_10.crc2.fillStyle = "#af8a54";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
        //body
        L_10.crc2.save();
        L_10.crc2.scale(1, 1.5);
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.arc(0, 0, 20, 0, 2 * Math.PI);
        L_10.crc2.fillStyle = "#af8a54";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
        //whiteeye
        L_10.crc2.save();
        L_10.crc2.scale(1, 1.5);
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.arc(-5, -24, 3, 0, 2 * Math.PI);
        L_10.crc2.fillStyle = "white";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
        //whiteeye       
        L_10.crc2.save();
        L_10.crc2.scale(1, 1.5);
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.arc(5, -24, 3, 0, 2 * Math.PI);
        L_10.crc2.fillStyle = "white";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
        //blackeye
        L_10.crc2.save();
        L_10.crc2.scale(1, 1.5);
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.arc(5, -23, 1.5, 0, 2 * Math.PI);
        L_10.crc2.fillStyle = "black";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
        //blackeye
        L_10.crc2.save();
        L_10.crc2.scale(1, 1.5);
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.arc(-5, -23, 1.5, 0, 2 * Math.PI);
        L_10.crc2.fillStyle = "black";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
        //wings
        L_10.crc2.save();
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.moveTo(-17, 100);
        L_10.crc2.lineTo(-40, 100);
        L_10.crc2.lineTo(-17, 110);
        L_10.crc2.fillStyle = "#af8a54";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
        L_10.crc2.save();
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.moveTo(17, 100);
        L_10.crc2.lineTo(40, 100);
        L_10.crc2.lineTo(17, 110);
        L_10.crc2.fillStyle = "#af8a54";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
        L_10.crc2.save();
        L_10.crc2.translate(_position.x, _position.y);
        L_10.crc2.beginPath();
        L_10.crc2.moveTo(-5, 85);
        L_10.crc2.lineTo(0, 95);
        L_10.crc2.lineTo(5, 85);
        L_10.crc2.fillStyle = "#ffbc40";
        L_10.crc2.fill();
        L_10.crc2.restore();
        L_10.crc2.closePath();
    }
})(L_10 || (L_10 = {}));
//# sourceMappingURL=canvas.js.map