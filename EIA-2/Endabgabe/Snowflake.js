var L11;
(function (L11) {
    class Snowflake extends L11.Moveable {
        constructor(_size, _position) {
            super(_position);
            console.log("Snowflake constructor");
            if (_position)
                this.position = _position;
            else
                this.position = new L11.Vector(Math.random() * L11.crc2.canvas.width, Math.random() * L11.crc2.canvas.height);
            this.velocity = new L11.Vector(0, Math.random() + 1 * 2);
            //this.velocity.random(100, 200); 
            this.size = _size;
        }
        draw() {
            //console.log("Snowflake draw"); 
            L11.crc2.beginPath();
            L11.crc2.save();
            L11.crc2.translate(this.position.x, this.position.y);
            L11.crc2.scale(this.size, this.size);
            L11.crc2.arc(0, 0, this.size, 0, 2 * Math.PI);
            L11.crc2.fillStyle = "white";
            L11.crc2.fill();
            L11.crc2.restore();
            L11.crc2.closePath();
        }
    }
    L11.Snowflake = Snowflake;
})(L11 || (L11 = {}));
//# sourceMappingURL=Snowflake.js.map