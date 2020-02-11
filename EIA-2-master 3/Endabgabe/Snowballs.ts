namespace L11 {
    export class Snowball {
        public position: Vector;
        public velocity: Vector;
        public size: number;
        //radius: number;

        public constructor(_size: number, _position: Vector) {

            //super(_position);
            this.position = _position;
            this.size = _size;
            //this.radius = 20;

            console.log("Snowball constructor");

        }

        public draw(): void {
            //console.log("Snowflake draw"); 

            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
            crc2.arc(0, 0, this.size * 1.5, 0, 15 * Math.PI);
            crc2.fillStyle = "purple";
            crc2.fill();
            crc2.restore();
            crc2.closePath();
            //this.size --;

        }
    }
}

