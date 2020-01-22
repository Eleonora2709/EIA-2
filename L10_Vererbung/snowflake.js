var L_10;
(function (L_10) {
    class Snowflake extends L_10.Moveable {
        //  move: any;
        constructor(_size, _position) {
            super(_position);
            if (_position)
                this.position = _position;
            else
                this.position = new L_10.Vector(Math.random() * L_10.crc2.canvas.width, Math.random() * L_10.crc2.canvas.height);
            this.velocity = new L_10.Vector(0, Math.random() + 1 * 1);
            this.size = _size;
        }
        draw() {
            L_10.crc2.beginPath();
            L_10.crc2.save();
            L_10.crc2.translate(this.position.x, this.position.y);
            L_10.crc2.scale(this.size, this.size);
            L_10.crc2.arc(0, 0, this.size, 0, 2 * Math.PI);
            L_10.crc2.fillStyle = "white";
            L_10.crc2.fill();
            L_10.crc2.restore();
            L_10.crc2.closePath();
        }
    }
    L_10.Snowflake = Snowflake;
})(L_10 || (L_10 = {}));
//# sourceMappingURL=snowflake.js.map