namespace L09 {

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let fps: number = 25;
    let snowflakes: Snowflake[] = [];
    let imgData;
    function init(_e: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        Background();
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        for (let i: number = 0; i < 12; i++) {
            let snowflake: Snowflake = new Snowflake();
            snowflake.x = Math.random() * (100 - 300) + 300; // Math.random() * (max - min) + min
            snowflake.y = Math.random() * 325;
            snowflakes.push(snowflake);
        }
        update();
    }
    function update(): void {
        window.setTimeout(update, 1000 / fps);
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0);
    }
    for (let i: number = 0; i < 700; i++) {
        let snowflake: Snowflake = snowflakes[i];
        snowflake.move();
        snowflake.draw();
    }
}    