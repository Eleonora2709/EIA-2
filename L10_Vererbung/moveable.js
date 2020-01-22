var L_10;
(function (L_10) {
    class Moveable {
        constructor(_position) {
            //
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            //offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < -50)
                this.position.x += L_10.crc2.canvas.width + 50;
            if (this.position.y < -50)
                this.position.y += L_10.crc2.canvas.height + 50;
            if (this.position.x > L_10.crc2.canvas.width)
                this.position.x -= L_10.crc2.canvas.width;
            if (this.position.y > L_10.crc2.canvas.height)
                this.position.y -= L_10.crc2.canvas.height;
        }
    }
    L_10.Moveable = Moveable;
})(L_10 || (L_10 = {}));
//# sourceMappingURL=moveable.js.map