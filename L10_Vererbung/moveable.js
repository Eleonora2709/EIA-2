var ML10;
(function (ML10) {
    class Moveable extends Object {
        move() {
            this.position.add(this.velocity);
            if (this.position.x >= canvas.width + 60) {
                this.position.x = -50;
            }
            if (this.position.x <= -60) {
                this.position.x = canvas.width + 50;
            }
            if (this.position.y >= canvas.height + 60) {
                this.position.y = -50;
            }
            if (this.position.y <= -60) {
                this.position.y = canvas.height + 50;
            }
        }
        update() {
            this.move();
            this.draw();
        }
    }
    ML10.Moveable = Moveable;
})(ML10 || (ML10 = {}));
//# sourceMappingURL=moveable.js.map