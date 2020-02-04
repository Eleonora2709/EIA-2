var L11;
(function (L11) {
    class Bird extends L11.Moveable {
        constructor(_size, _position) {
            super(_position);
            this.size = 5;
            this.isPicking = () => {
                this.velocity = new L11.Vector(0, 0);
                //neue Transformation setzten, neu skalieren auf -1 damit der Vogel sich umdreht und in die andere Richtung fliegt
                //this.velocity = new Vector(Math.random() + 1 * 5, (Math.random() * 2 ) + Math.random() + 1) ;
            };
            console.log("Bird constructor");
            this.bodycolor = getRandomColor();
            this.wingcolor = getRandomColor();
            if (_position)
                this.position = _position;
            else
                this.position = new L11.Vector(Math.random() * L11.crc2.canvas.width, Math.floor(Math.random() * 250) + 20);
            this.velocity = new L11.Vector(Math.random() - 1 * 5, (Math.random() * 2) + Math.random() - 1);
            //this.velocity.random(2, 5); 
        }
        draw() {
            //body
            L11.crc2.save();
            L11.crc2.translate(this.position.x, this.position.y);
            if (this.velocity.x >= 0) {
                L11.crc2.scale(-1, 1);
                console.log("Rückwärts");
            }
            L11.crc2.beginPath();
            L11.crc2.ellipse(31, 1, 25, 15, Math.PI / 1, 0, 2 * Math.PI);
            L11.crc2.fillStyle = this.bodycolor;
            L11.crc2.fill();
            L11.crc2.closePath();
            //head
            L11.crc2.beginPath();
            L11.crc2.arc(0, 0, 15, 0, 2 * Math.PI);
            L11.crc2.fillStyle = this.bodycolor;
            L11.crc2.fill();
            L11.crc2.closePath();
            //eye
            L11.crc2.beginPath();
            L11.crc2.arc(-6, -2, 2, 0, 2 * Math.PI);
            L11.crc2.fillStyle = "black";
            L11.crc2.fill();
            L11.crc2.restore();
            L11.crc2.closePath();
            //beak
            L11.crc2.beginPath();
            L11.crc2.moveTo(-15, -2);
            L11.crc2.lineTo(-26, 4);
            L11.crc2.lineTo(-12, 6);
            L11.crc2.fillStyle = "gold";
            L11.crc2.fill();
            L11.crc2.closePath();
            //wings
            L11.crc2.beginPath();
            L11.crc2.arc(30, -3, 15, 6, Math.PI);
            L11.crc2.fillStyle = this.wingcolor;
            L11.crc2.fill();
            L11.crc2.restore();
            L11.crc2.closePath();
        }
        isHit(_hotspot) {
            let hitsize = 10 * this.size;
            let difference = new L11.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize); //Entfernung vertikale
        }
    }
    L11.Bird = Bird;
    function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.round(Math.random() * 15)];
        }
        return color;
    }
})(L11 || (L11 = {}));
//# sourceMappingURL=Bird.js.map