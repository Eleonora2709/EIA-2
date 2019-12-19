var L10;
(function (L10) {
    class Snowflake extends Moveable {
        constructor(_position) {
            super(_position);
            this.gradient = crc2.createRadialGradient(0, 0, 2, 0, 0, 5);
            this.velocity = new L10.Vector(0, Math.random() * 3);
            this.gradient.addColorStop(0, "RGBA(250, 250, 250, 0.8)");
            this.gradient.addColorStop(1, "RGBA(250, 250, 250, 0.2)");
            this.draw();
        }
        draw() {
            crc2.save();
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = this.gradient;
            crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore();
        }
    }
    L10.Snowflake = Snowflake;
})(L10 || (L10 = {}));
//# sourceMappingURL=snowflake.js.map