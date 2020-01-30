namespace L11{
    export class Snowflake extends Moveable {
        position: Vector;
        velocity: Vector;
        size: number;

        constructor(_size: number, _position?: Vector) {

            super(_position);

            console.log("Snowflake constructor");
            
            if (_position)
                this.position = _position;
            else
                this.position = new Vector(Math.random()*crc2.canvas.width, Math.random()*crc2.canvas.height);
                
            this.velocity = new Vector(0,Math.random()+ 1*2);
            //this.velocity.random(100, 200); 
            this.size = _size;
        }

        draw(): void {
            //console.log("Snowflake draw"); 
        
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