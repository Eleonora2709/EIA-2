var L09;
(function (L09) {
    window.addEventListener("load", init);
    let fps = 25;
    let snowflakes = [];
    let imgData;
    function init(_e) {
        let canvas = document.getElementsByTagName("canvas")[0];
        L09.crc2 = canvas.getContext("2d");
        L09.Background();
        imgData = L09.crc2.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < 12; i++) {
            let snowflake = new L09.Snowflake();
            snowflake.x = Math.random() * (100 - 300) + 300; // Math.random() * (max - min) + min
            snowflake.y = Math.random() * 325;
            snowflakes.push(snowflake);
        }
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        L09.crc2.clearRect(0, 0, L09.crc2.canvas.width, L09.crc2.canvas.height);
        L09.crc2.putImageData(imgData, 0, 0);
    }
    for (let i = 0; i < 700; i++) {
        let snowflake = snowflakes[i];
        snowflake.move();
        snowflake.draw();
    }
})(L09 || (L09 = {}));
//# sourceMappingURL=main.js.map