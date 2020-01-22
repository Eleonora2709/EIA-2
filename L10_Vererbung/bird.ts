namespace L_10 {
    export class Bird extends Moveable {
        position: Vector;
        velocity: Vector;
        bodycolor: string;
        billcolor: string;
        move: any;

        constructor(_size: number, _position?: Vector) {
            console.log("Bird constructor");

            super(_position);

            this.bodycolor = getRandomColor();
            this.billcolor = getRandomColor();
            
            if (_position) {
                this.position = _position;
            }
            else {
                this.position = new Vector(Math.random()*crc2.canvas.width, Math.floor(Math.random() * 220)+10);
                
            this.velocity = new Vector(Math.random() - 1 * 5, (Math.random()*-2) + Math.random () *2);
                   
        }
    }
    draw(): void {

        //birdhead
        crc2.save();
        crc2.translate(this.position.x, this.position.y);
        crc2.beginPath();
        crc2.arc(-25,20,15, 0, 2 * Math.PI);
        crc2.fillStyle = "#af8a54";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        //eye
        crc2.save();
        crc2.translate(this.position.x, this.position.y);
        crc2.beginPath();
        crc2.arc(-30,13, 3, 0, 2 * Math.PI);
        crc2.fillStyle = "#3673a4";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        //bill//Schnabel
        crc2.save();
        crc2.translate(this.position.x, this.position.y);
        crc2.beginPath();
        crc2.moveTo(-36, 10);
        crc2.lineTo(-50, 1);
        crc2.lineTo(-40, 17);
        crc2.fillStyle = this.billcolor;
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        //body
        crc2.save();
        crc2.translate(this.position.x, this.position.y);
        crc2.beginPath();
        crc2.ellipse(0, 30, 30, 15, Math.PI / 1, 0, 2 * Math.PI);
        crc2.fillStyle = this.bodycolor;
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        
        //wings
        crc2.save();
        crc2.translate(this.position.x, this.position.y);
        crc2.beginPath();
        crc2.moveTo(15, 20);
        crc2.lineTo(-15, 20);
        crc2.lineTo(-2, 50);
        crc2.fillStyle = "#af8a54";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        
    }

    }

    function getRandomColor(): string {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++ ) {
                color += letters[Math.round(Math.random() * 15)];
            }
            return color;
        
        }
    }