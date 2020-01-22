namespace L_10 {
    export class Snowflake extends Moveable {
        position: Vector;
        velocity: Vector;
        size: number;
    //  move: any;

        constructor(_size: number, _position?: Vector) {
          
            super(_position);
            
            if (_position)
                this.position = _position;
            else
                this.position = new Vector(Math.random()*crc2.canvas.width, Math.random()*crc2.canvas.height);
                
                this.velocity = new Vector(0,Math.random()+ 1*1);
            this.size = _size;
        }

        draw(): void {

            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
            crc2.arc(0, 0, this.size, 0, 2 * Math.PI);
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.restore();
            crc2.closePath();
        }
    }
    
}