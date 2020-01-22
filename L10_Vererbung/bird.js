var L_10;
(function (L_10) {
    class Bird extends L_10.Moveable {
        constructor(_size, _position) {
            console.log("Bird constructor");
            super(_position);
            this.bodycolor = getRandomColor();
            this.billcolor = getRandomColor();
            if (_position) {
                this.position = _position;
            }
            else {
                this.position = new L_10.Vector(Math.random() * L_10.crc2.canvas.width, Math.floor(Math.random() * 220) + 10);
                this.velocity = new L_10.Vector(Math.random() - 1 * 5, (Math.random() * -2) + Math.random() * 2);
            }
        }
        draw() {
            //birdhead
            L_10.crc2.save();
            L_10.crc2.translate(this.position.x, this.position.y);
            L_10.crc2.beginPath();
            L_10.crc2.arc(-25, 20, 15, 0, 2 * Math.PI);
            L_10.crc2.fillStyle = "#af8a54";
            L_10.crc2.fill();
            L_10.crc2.restore();
            L_10.crc2.closePath();
            //eye
            L_10.crc2.save();
            L_10.crc2.translate(this.position.x, this.position.y);
            L_10.crc2.beginPath();
            L_10.crc2.arc(-30, 13, 3, 0, 2 * Math.PI);
            L_10.crc2.fillStyle = "#3673a4";
            L_10.crc2.fill();
            L_10.crc2.restore();
            L_10.crc2.closePath();
            //bill//Schnabel
            L_10.crc2.save();
            L_10.crc2.translate(this.position.x, this.position.y);
            L_10.crc2.beginPath();
            L_10.crc2.moveTo(-36, 10);
            L_10.crc2.lineTo(-50, 1);
            L_10.crc2.lineTo(-40, 17);
            L_10.crc2.fillStyle = this.billcolor;
            L_10.crc2.fill();
            L_10.crc2.restore();
            L_10.crc2.closePath();
            //body
            L_10.crc2.save();
            L_10.crc2.translate(this.position.x, this.position.y);
            L_10.crc2.beginPath();
            L_10.crc2.ellipse(0, 30, 30, 15, Math.PI / 1, 0, 2 * Math.PI);
            L_10.crc2.fillStyle = this.bodycolor;
            L_10.crc2.fill();
            L_10.crc2.restore();
            L_10.crc2.closePath();
            //wings
            L_10.crc2.save();
            L_10.crc2.translate(this.position.x, this.position.y);
            L_10.crc2.beginPath();
            L_10.crc2.moveTo(15, 20);
            L_10.crc2.lineTo(-15, 20);
            L_10.crc2.lineTo(-2, 50);
            L_10.crc2.fillStyle = "#af8a54";
            L_10.crc2.fill();
            L_10.crc2.restore();
            L_10.crc2.closePath();
        }
    }
    L_10.Bird = Bird;
    function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.round(Math.random() * 15)];
        }
        return color;
    }
})(L_10 || (L_10 = {}));
//# sourceMappingURL=bird.js.map