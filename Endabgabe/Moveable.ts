namespace L11{
    export abstract class Moveable {
        position: Vector;
        velocity: Vector;

        constructor(_position?: Vector) {
    
        }

        public move(_timeslice: number): void {
            //console.log("Moveable move");
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            //offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.y > crc2.canvas.height + 50)
                this.position.y -= crc2.canvas.height + 60;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;

            if (this.position.y < - 50)
                this.position.y += crc2.canvas.height + 50; 
            if (this.position.x < - 50)
                this.position.x += crc2.canvas.width + 50;                  
        }

        draw(): void {
          
        }

    }
    
}