var L10;
(function (L10) {
    //interface Vector {
    //  x: number;
    //y: number;
    //}
    //test
    window.addEventListener("load", init);
    let imgData;
    L10.goldencut = 0.58;
    let moveablesArray = [];
    function init(_event) {
        L10.canvas = document.getElementsByTagName("canvas")[0];
        L10.crc2 = L10.canvas.getContext("2d");
        console.log(L10.crc2);
        drawBackground();
        imgData = L10.crc2.getImageData(0, 0, L10.canvas.width, L10.goldencut);
        //moveablesArray.push(Moveable);
    }
    for (let i = 0; i < 8; i++) {
        let onesnowflake = new Snowflake(4, 3);
        moveablesArray.push(onesnowflake);
    }
    function drawBackground() {
        console.log("Background");
        let gradient = L10.crc2.createLinearGradient(0, 0, 0, L10.crc2.canvas.height);
        gradient.addColorStop(0, "#3673a4");
        gradient.addColorStop(L10.goldencut, "white");
        gradient.addColorStop(1, "#aaaaaa");
        L10.crc2.fillStyle = gradient;
        L10.crc2.fillRect(0, 0, L10.crc2.canvas.width, L10.crc2.canvas.height);
    }
    function drawSun(_position) {
        console.log("Background", _position);
        let r1 = 30;
        let r2 = 150;
        let gradient = L10.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(40, 100%, 75%, 1)");
        gradient.addColorStop(1, "HSLA(40, 100%, 50%, 0)");
        L10.crc2.save();
        L10.crc2.translate(_position.x, _position.y);
        L10.crc2.fillStyle = gradient;
        L10.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L10.crc2.fill();
        L10.crc2.restore();
    }
    function drawCloud(_position, _size) {
        console.log("Background", _position, _size);
        let nParticles = 25;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = L10.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        L10.crc2.save();
        L10.crc2.translate(_position.x, _position.y);
        L10.crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            L10.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            L10.crc2.translate(x, y);
            L10.crc2.fill(particle);
            L10.crc2.restore();
        }
        L10.crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains", _position, _min, _max);
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        L10.crc2.save();
        L10.crc2.translate(_position.x, _position.y);
        L10.crc2.beginPath();
        L10.crc2.moveTo(0, 0);
        L10.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L10.crc2.lineTo(x, y);
        } while (x < L10.crc2.canvas.width);
        L10.crc2.lineTo(x, 0);
        L10.crc2.closePath();
        let gradient = L10.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        L10.crc2.fillStyle = gradient;
        L10.crc2.fill();
        L10.crc2.restore();
    }
    function drawSnowman(_position, _position2, _position3) {
        console.log("Background", _position);
        //Schnabel
        L10.crc2.save();
        L10.crc2.translate(_position.x, _position.y);
        L10.crc2.beginPath();
        L10.crc2.moveTo(-10, -110);
        L10.crc2.lineTo(60, -110);
        L10.crc2.lineTo(20, -140);
        L10.crc2.fillStyle = "#ffbc40";
        L10.crc2.fill();
        L10.crc2.restore();
        L10.crc2.closePath();
        //Kugeln
        L10.crc2.save();
        L10.crc2.translate(_position.x, _position.y);
        L10.crc2.beginPath();
        L10.crc2.arc(0, 30, 75, 0, 2 * Math.PI);
        L10.crc2.fillStyle = "white";
        L10.crc2.fill();
        L10.crc2.restore();
        L10.crc2.closePath();
        L10.crc2.save();
        L10.crc2.translate(_position2.x, _position2.y);
        L10.crc2.beginPath();
        L10.crc2.arc(0, 15, 50, 0, 2 * Math.PI);
        L10.crc2.fillStyle = "white";
        L10.crc2.fill();
        L10.crc2.restore();
        L10.crc2.closePath();
        L10.crc2.save();
        L10.crc2.translate(_position3.x, _position3.y);
        L10.crc2.beginPath();
        L10.crc2.arc(0, 0, 40, 0, 2 * Math.PI);
        L10.crc2.fillStyle = "white";
        L10.crc2.fill();
        L10.crc2.restore();
        L10.crc2.closePath();
    }
    function drawTree(_position, _scale) {
        //tree trunk
        L10.crc2.save();
        L10.crc2.translate(_position.x, _position.y);
        L10.crc2.beginPath();
        L10.crc2.scale(_scale.x, _scale.y);
        L10.crc2.stroke();
        L10.crc2.fillStyle = "saddlebrown";
        L10.crc2.fillRect(0, 0, 20, 50);
        L10.crc2.restore();
        L10.crc2.closePath();
        //tree needles
        L10.crc2.save();
        L10.crc2.translate(_position.x, _position.y);
        L10.crc2.beginPath();
        L10.crc2.scale(_scale.x, _scale.y);
        L10.crc2.moveTo(-60, 0);
        L10.crc2.lineTo(10, -70);
        L10.crc2.lineTo(80, 0);
        L10.crc2.fillStyle = "green";
        L10.crc2.fill();
        L10.crc2.restore();
        L10.crc2.closePath();
        L10.crc2.save();
        L10.crc2.translate(_position.x, _position.y);
        L10.crc2.beginPath();
        L10.crc2.scale(_scale.x, _scale.y);
        L10.crc2.moveTo(-50, -30);
        L10.crc2.lineTo(10, -90);
        L10.crc2.lineTo(70, -30);
        L10.crc2.fillStyle = "green";
        L10.crc2.fill();
        L10.crc2.restore();
        L10.crc2.closePath();
        L10.crc2.save();
        L10.crc2.translate(_position.x, _position.y);
        L10.crc2.beginPath();
        L10.crc2.scale(_scale.x, _scale.y);
        L10.crc2.moveTo(-40, -55);
        L10.crc2.lineTo(10, -110);
        L10.crc2.lineTo(60, -55);
        L10.crc2.fillStyle = "green";
        L10.crc2.fill();
        L10.crc2.restore();
        L10.crc2.closePath();
    }
    function drawBirdhouse(_position) {
        //Gerüst
        L10.crc2.save();
        L10.crc2.translate(_position.x, _position.y);
        L10.crc2.beginPath();
        L10.crc2.stroke();
        L10.crc2.fillStyle = "#765748";
        L10.crc2.fillRect(0, 0, 200, 170);
        L10.crc2.restore();
        L10.crc2.closePath();
        //Loch
        L10.crc2.save();
        L10.crc2.translate(_position.x, _position.y);
        L10.crc2.beginPath();
        L10.crc2.arc(100, 70, 40, 0, 2 * Math.PI);
        L10.crc2.fillStyle = "#b47d49";
        L10.crc2.fill();
        L10.crc2.restore();
        L10.crc2.closePath();
        //Stecken
        L10.crc2.save();
        L10.crc2.translate(_position.x, _position.y);
        L10.crc2.beginPath();
        L10.crc2.stroke();
        L10.crc2.fillStyle = "#2c1410";
        L10.crc2.fillRect(90, 150, 20, 200);
        L10.crc2.restore();
        L10.crc2.closePath();
        //Dach
        L10.crc2.save();
        L10.crc2.translate(_position.x, _position.y);
        L10.crc2.beginPath();
        L10.crc2.moveTo(-10, 0);
        L10.crc2.lineTo(100, -100);
        L10.crc2.lineTo(210, 0);
        L10.crc2.stroke();
        L10.crc2.fillStyle = "#2c1410";
        L10.crc2.fill();
        L10.crc2.restore();
        L10.crc2.closePath();
    }
    function drawFlyingBirdies(_start, _border) {
        for (let i = 0; i < 10; i++) {
            let x = _start.x + Math.random() * _border.x;
            let y = _start.y + Math.random() * _border.y;
            drawFlyingBird({ x, y });
        }
    }
    function drawFlyingBirdies1(_start, _border) {
        for (let i = 0; i < 10; i++) {
            let x = _start.x + Math.random() * _border.x;
            let y = _start.y + Math.random() * _border.y;
            drawStandingBird({ x, y });
        }
    }
    function drawFlyingBird(_position) {
        //body
        L10.crc2.save();
        L10.crc2.translate(_position.x, _position.y);
        L10.crc2.beginPath();
        L10.crc2.ellipse(31, 1, 25, 15, Math.PI / 1, 0, 2 * Math.PI);
        L10.crc2.fillStyle = getRandomColor();
        L10.crc2.fill();
        L10.crc2.restore();
        L10.crc2.closePath();
        //head
        L10.crc2.save();
        L10.crc2.translate(_position.x, _position.y);
        L10.crc2.beginPath();
        L10.crc2.arc(0, 0, 11, 0, 2 * Math.PI);
        L10.crc2.fillStyle = getRandomColor();
        L10.crc2.fill();
        L10.crc2.restore();
        L10.crc2.closePath();
        //eye
        L10.crc2.save();
        L10.crc2.translate(_position.x, _position.y);
        L10.crc2.beginPath();
        L10.crc2.arc(-4, -2, 2, 0, 2 * Math.PI);
        L10.crc2.fillStyle = "black";
        L10.crc2.fill();
        L10.crc2.restore();
        L10.crc2.closePath();
        //beak
        L10.crc2.save();
        L10.crc2.translate(_position.x, _position.y);
        L10.crc2.beginPath();
        L10.crc2.moveTo(-11, -2);
        L10.crc2.lineTo(-26, 4);
        L10.crc2.lineTo(-9, 6);
        L10.crc2.fillStyle = "gold";
        L10.crc2.fill();
        L10.crc2.restore();
        L10.crc2.closePath();
        //wings
        L10.crc2.save();
        L10.crc2.translate(_position.x, _position.y);
        L10.crc2.beginPath();
        L10.crc2.moveTo(13, -4);
        L10.crc2.lineTo(30, -35);
        L10.crc2.lineTo(47, -4);
        L10.crc2.fillStyle = getRandomColor();
        L10.crc2.fill();
        L10.crc2.restore();
        L10.crc2.closePath();
    }
    function drawStandingBird(_position) {
        //body
        L10.crc2.save();
        L10.crc2.translate(_position.x, _position.y);
        L10.crc2.beginPath();
        L10.crc2.ellipse(0, 35, 18, 30, Math.PI / 1, 0, 2 * Math.PI);
        L10.crc2.fillStyle = getRandomColor();
        L10.crc2.fill();
        L10.crc2.restore();
        L10.crc2.closePath();
        //head
        L10.crc2.save();
        L10.crc2.translate(_position.x, _position.y);
        L10.crc2.beginPath();
        L10.crc2.arc(0, 0, 15, 0, 2 * Math.PI);
        L10.crc2.fillStyle = getRandomColor();
        L10.crc2.fill();
        L10.crc2.restore();
        L10.crc2.closePath();
        //beak
        L10.crc2.save();
        L10.crc2.translate(_position.x, _position.y);
        L10.crc2.beginPath();
        L10.crc2.moveTo(-6, 0);
        L10.crc2.lineTo(0, 10);
        L10.crc2.lineTo(6, 0);
        L10.crc2.fillStyle = "gold";
        L10.crc2.fill();
        L10.crc2.restore();
        L10.crc2.closePath();
        //eyes
        L10.crc2.save();
        L10.crc2.translate(_position.x, _position.y);
        L10.crc2.beginPath();
        L10.crc2.arc(-4, -5, 2, 0, 2 * Math.PI);
        L10.crc2.fillStyle = "black";
        L10.crc2.fill();
        L10.crc2.restore();
        L10.crc2.closePath();
        L10.crc2.save();
        L10.crc2.translate(_position.x, _position.y);
        L10.crc2.beginPath();
        L10.crc2.arc(4, -5, 2, 0, 2 * Math.PI);
        L10.crc2.fillStyle = "black";
        L10.crc2.fill();
        L10.crc2.restore();
        L10.crc2.closePath();
        //wings
        L10.crc2.save();
        L10.crc2.translate(_position.x, _position.y);
        L10.crc2.beginPath();
        L10.crc2.moveTo(-14, 20);
        L10.crc2.lineTo(-65, 30);
        L10.crc2.lineTo(-14, 48);
        L10.crc2.fillStyle = "sienna";
        L10.crc2.fill();
        L10.crc2.restore();
        L10.crc2.closePath();
        L10.crc2.save();
        L10.crc2.translate(_position.x, _position.y);
        L10.crc2.beginPath();
        L10.crc2.moveTo(16, 20);
        L10.crc2.lineTo(67, 30);
        L10.crc2.lineTo(16, 48);
        L10.crc2.fillStyle = "sienna";
        L10.crc2.fill();
        L10.crc2.restore();
        L10.crc2.closePath();
        //legs
        L10.crc2.save();
        L10.crc2.translate(_position.x, _position.y);
        L10.crc2.beginPath();
        L10.crc2.moveTo(-5, 63);
        L10.crc2.lineTo(-5, 86);
        L10.crc2.lineWidth = 3;
        L10.crc2.strokeStyle = "gold";
        L10.crc2.stroke();
        L10.crc2.restore();
        L10.crc2.closePath();
        L10.crc2.save();
        L10.crc2.translate(_position.x, _position.y);
        L10.crc2.beginPath();
        L10.crc2.moveTo(5, 63);
        L10.crc2.lineTo(5, 86);
        L10.crc2.lineWidth = 3;
        L10.crc2.strokeStyle = "gold";
        L10.crc2.stroke();
        L10.crc2.restore();
        L10.crc2.closePath();
    }
    function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.round(Math.random() * 15)];
        }
        return color;
    }
    function drawSnow(_position, _size) {
        console.log("Snow", _position, _size);
        let nParticles = 400;
        let particle = new Path2D();
        particle.arc(0, 0, 2, 0, 2 * Math.PI);
        L10.crc2.save();
        L10.crc2.translate(_position.x, _position.y);
        L10.crc2.fillStyle = "white";
        for (let drawn = 0; drawn < nParticles; drawn++) {
            L10.crc2.save();
            let x = (Math.random()) * _size.x;
            let y = -(Math.random() * _size.y);
            L10.crc2.translate(x, y);
            L10.crc2.fill(particle);
            L10.crc2.restore();
        }
        L10.crc2.restore();
    }
})(L10 || (L10 = {}));
//# sourceMappingURL=main.js.map