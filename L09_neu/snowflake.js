var L09;
(function (L09) {
    class Snowflake {
        move() {
            if (this.y > L09.crc2.canvas.height) {
                this.x = 2000 * Math.random();
                this.y = -2;
            }
        }
        draw() {
            L09.crc2.strokeStyle = "#ffffff";
            L09.crc2.lineWidth = 5;
            L09.crc2.beginPath();
            L09.crc2.moveTo(this.x - 2, this.y);
            L09.crc2.lineTo(this.x + 2, this.y);
            L09.crc2.closePath();
            L09.crc2.stroke();
            L09.crc2.moveTo(this.x, this.y - 2);
            L09.crc2.lineTo(this.x, this.y + 2);
            L09.crc2.closePath();
            L09.crc2.stroke();
        }
    }
    L09.Snowflake = Snowflake;
})(L09 || (L09 = {}));
//# sourceMappingURL=snowflake.js.map