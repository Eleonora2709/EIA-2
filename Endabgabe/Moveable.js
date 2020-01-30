var L11;
(function (L11) {
    class Moveable {
        constructor(_position) {
        }
        move(_timeslice) {
            //console.log("Moveable move");
            let offset = new L11.Vector(this.velocity.x, this.velocity.y);
            //offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.y > L11.crc2.canvas.height + 50)
                this.position.y -= L11.crc2.canvas.height + 60;
            if (this.position.x > L11.crc2.canvas.width)
                this.position.x -= L11.crc2.canvas.width;
            if (this.position.y < -50)
                this.position.y += L11.crc2.canvas.height + 50;
            if (this.position.x < -50)
                this.position.x += L11.crc2.canvas.width + 50;
        }
        draw() {
        }
    }
    L11.Moveable = Moveable;
})(L11 || (L11 = {}));
//# sourceMappingURL=Moveable.js.map