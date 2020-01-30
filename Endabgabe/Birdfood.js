var L11;
(function (L11) {
    class Birdfood {
        constructor(_size, _position) {
            //super(_position);
            this.position = _position;
            this.size = _size;
            console.log("birdfood constructor");
        }
        draw() {
            //console.log("birdfood draw"); 
            L11.crc2.beginPath();
            L11.crc2.save();
            L11.crc2.translate(this.position.x, this.position.y);
            L11.crc2.scale(this.size, this.size);
            L11.crc2.arc(0, 0, this.size * 1.5, 0, 15 * Math.PI);
            L11.crc2.fillStyle = "green";
            L11.crc2.fill();
            L11.crc2.restore();
            L11.crc2.closePath();
            //this.size --;
        }
    }
    L11.Birdfood = Birdfood;
})(L11 || (L11 = {}));
//# sourceMappingURL=Birdfood.js.map