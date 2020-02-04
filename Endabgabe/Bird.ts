namespace L11 {
    export class Bird extends Moveable {
        position: Vector;
        velocity: Vector;
        bodycolor: string;
        wingcolor: string;
        size: number = 5;

        constructor(_size: number, _position?: Vector) {

            super(_position);

            console.log("Bird constructor");

            this.bodycolor = getRandomColor();
            this.wingcolor = getRandomColor();

            if (_position)
                this.position = _position;
            else
                this.position = new Vector(Math.random() * crc2.canvas.width, Math.floor(Math.random() * 250) + 20);

            this.velocity = new Vector(Math.random() - 1 * 5, (Math.random() * 2) + Math.random() - 1);
            //this.velocity.random(2, 5); 

        }

        draw(): void {

            //body
            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            if (this.velocity.x >= 0) {
                crc2.scale(-1, 1);
                console.log("Rückwärts");
            }

            crc2.beginPath();
            crc2.ellipse(31, 1, 25, 15, Math.PI / 1, 0, 2 * Math.PI);
            crc2.fillStyle = this.bodycolor;
            crc2.fill();
            crc2.closePath();

            //head
            crc2.beginPath();
            crc2.arc(0, 0, 15, 0, 2 * Math.PI);
            crc2.fillStyle = this.bodycolor
            crc2.fill();
            crc2.closePath();

            //eye
            crc2.beginPath();
            crc2.arc(-6, -2, 2, 0, 2 * Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.restore();
            crc2.closePath();

            //beak
            crc2.beginPath();
            crc2.moveTo(-15, -2);
            crc2.lineTo(-26, 4);
            crc2.lineTo(-12, 6);
            crc2.fillStyle = "gold";
            crc2.fill();
            crc2.closePath();

            //wings
            crc2.beginPath();
            crc2.arc(30, -3, 15, 6, Math.PI);
            crc2.fillStyle = this.wingcolor;
            crc2.fill();
            crc2.restore();
            crc2.closePath();

        }
        isHit(_hotspot: Vector): boolean {
            let hitsize: number = 10 * this.size;
            let difference: Vector = new Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize) //Entfernung vertikale
        }

        isPicking: Function = (): void => {
            this.velocity = new Vector(0, 0);
            //neue Transformation setzten, neu skalieren auf -1 damit der Vogel sich umdreht und in die andere Richtung fliegt
            //this.velocity = new Vector(Math.random() + 1 * 5, (Math.random() * 2 ) + Math.random() + 1) ;
        }

    }

    function getRandomColor(): string {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.round(Math.random() * 15)];
        }
        return color;
    }


}