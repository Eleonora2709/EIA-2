namespace L11{
    export class Birdfood{
        position: Vector;
        velocity: Vector;
        size: number;

        constructor(_size: number, _position: Vector) {

            //super(_position);
            this.position = _position;
            this.size = _size;

            console.log("birdfood constructor");
            
        }

            draw(): void {
                //console.log("birdfood draw"); 

                crc2.beginPath();
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                crc2.scale(this.size, this.size);
                crc2.arc(0, 0, this.size * 1.5, 0, 15 * Math.PI);
                crc2.fillStyle = "green";
                crc2.fill();
                crc2.restore();
                crc2.closePath();
                //this.size --;
                
            }    

    }
}