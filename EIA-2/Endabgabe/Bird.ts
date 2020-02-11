namespace L11 {

    export enum TASK {
        FLY,
        FLYTOFOOD,
        EAT

    }

    export class Bird extends Moveable {
        public position: Vector;
        public velocity: Vector;
        public bodycolor: string;
        public wingcolor: string;
        public size: number = 5;
        public target: Vector;
        public job: TASK = TASK.FLY;





        constructor(_size: number, _position?: Vector) {

            super(_position);

            console.log("Bird constructor");

            this.bodycolor = getRandomColor();
            this.wingcolor = getRandomColor();


            // this.job = TASK.FLY


            if (_position) {
                this.position = _position;
            }
            else {
                this.position = new Vector(Math.random() * crc2.canvas.width, Math.floor(Math.random() * 250) + 20);

                this.velocity = new Vector(Math.random() - 1 * 5, (Math.random() * 2) + Math.random() - 1);
                //this.velocity.random(2, 5); 
                // }
            }

            this.size = _size;
        }


         draw(): void {


            if (this.job == TASK.EAT) {
                //console.log("EAT");
                setTimeout(() => {
                    this.job = TASK.FLY;
                    this.velocity = new Vector(Math.random() - 1 * 5, (Math.random() * 2) + Math.random() - 1);
                    //console.log("FLYYYYAWAAYYYY");
                }, 5000); // anonyme Funktion, die auf das setTimeout zugreift
            }
            //body
            crc2.save();
            crc2.translate(this.position.x, this.position.y);



            if (this.velocity.x >= 0.1) {
                crc2.scale(-1, 1);
                //console.log("Rückwärts");
            }
            if (this.velocity.x <= -0.1) {
                crc2.scale(1, 1);
                //console.log("Vorwärts");
            }

            if (this.job != TASK.EAT) {

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
                crc2.closePath();



            }

            if (this.job == TASK.EAT) {
                //body
                //crc2.save();
                //crc2.translate(this.position.x, this.position.y);
                crc2.beginPath();
                crc2.ellipse(15, 35, 20, 35, Math.PI / -5, 0, 2 * Math.PI);
                crc2.fillStyle = this.bodycolor;
                crc2.fill();
                crc2.closePath();

                //head
                crc2.beginPath();
                crc2.arc(0, 0, 15, 0, 2 * Math.PI);
                crc2.fillStyle = this.bodycolor;
                crc2.fill();
                crc2.closePath();

                //beak
                crc2.beginPath();
                crc2.moveTo(-15, -2);
                crc2.lineTo(-26, 4);
                crc2.lineTo(-12, 6);
                crc2.fillStyle = "gold";
                crc2.fill();
                crc2.closePath();

                //eyes
                crc2.beginPath();
                crc2.arc(-4, -5, 3, 0, 2 * Math.PI);
                crc2.fillStyle = "black";
                crc2.fill();
                crc2.closePath();

                //wing
                crc2.beginPath();
                crc2.arc(20, 20, 17, 6, Math.PI);
                //crc2.moveTo(13, -4);
                //crc2.lineTo(30, -35);
                //crc2.lineTo(47, -4);
                crc2.fillStyle = this.wingcolor;
                crc2.fill();
                crc2.closePath();

                //legs
                crc2.beginPath();
                crc2.moveTo(20, 63);
                crc2.lineTo(20, 86);
                crc2.lineWidth = 3;
                crc2.strokeStyle = "gold";
                crc2.stroke();
                crc2.closePath();

                crc2.beginPath();
                crc2.moveTo(30, 63);
                crc2.lineTo(30, 86);
                crc2.lineWidth = 3;
                crc2.strokeStyle = "gold";
                crc2.stroke();
                crc2.closePath();


            }
            crc2.restore();
        }

        //this.task = TASK.FLY;


       isHit(_hotspot: Vector): boolean {
            let hitsize: number = 20 * this.size;
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


