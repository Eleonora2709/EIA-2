namespace L11{
    export class Birdfood{
       public position: Vector;
       public velocity: Vector;
       public size: number;
       public stand: number;

       constructor(_size: number, _position: Vector) {

            //super(_position);
            this.position = _position;
            this.size = _size;
            this.stand = Math.random() *  50 + 480;
            this.velocity = new Vector(0, 10);
        

            console.log("birdfood constructor");
        
        }

        
        //480, 530 Koordinaten wo der Schneeball hinfällt

        public draw(): void {
                crc2.beginPath();
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                crc2.scale(this.size, this.size);
                crc2.arc(0, 0, this.size * 1.5, 0, 15 * Math.PI);
                crc2.fillStyle = "yellow";
                crc2.fill();
                if (this.position.y < this.stand){
                    let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
                    //offset.scale(_timeslice);
                    this.position.add(offset);
                }
                crc2.restore();
                crc2.closePath();
                //this.size --;
                
            }    
            

    }
}