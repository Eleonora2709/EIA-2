var L11;
(function (L11) {
    class Birdfood {
        constructor(_size, _position) {
            //super(_position);
            this.position = _position;
            this.size = _size;
            this.stand = Math.random() * 50 + 480;
            this.velocity = new L11.Vector(0, 10);
            console.log("birdfood constructor");
        }
        //480, 530 Koordinaten wo der Schneeball hinfällt
        draw() {
            L11.crc2.beginPath();
            L11.crc2.save();
            L11.crc2.translate(this.position.x, this.position.y);
            L11.crc2.scale(this.size, this.size);
            L11.crc2.arc(0, 0, this.size * 1.5, 0, 15 * Math.PI);
            L11.crc2.fillStyle = "yellow";
            L11.crc2.fill();
            if (this.position.y < this.stand) {
                let offset = new L11.Vector(this.velocity.x, this.velocity.y);
                //offset.scale(_timeslice);
                this.position.add(offset);
            }
            L11.crc2.restore();
            L11.crc2.closePath();
            //this.size --;
        }
    }
    L11.Birdfood = Birdfood;
})(L11 || (L11 = {}));
//# sourceMappingURL=Birdfood.js.map