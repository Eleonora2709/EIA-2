namespace L09 {
    export class Snowflake {
        x: number;
        y: number;


        move(): void {
            if (this.y > crc2.canvas.height) {
                this.x = 2000 * Math.random();
                this.y = -2;
            }
        }

        draw(): void {
            crc2.strokeStyle = "#ffffff";
            crc2.lineWidth = 5;
            crc2.beginPath();
            crc2.moveTo(this.x - 2, this.y);
            crc2.lineTo(this.x + 2, this.y);
            crc2.closePath();
            crc2.stroke();
            crc2.moveTo(this.x, this.y - 2);
            crc2.lineTo(this.x, this.y + 2);
            crc2.closePath();
            crc2.stroke();

        }
    }
}