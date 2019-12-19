namespace L10 {

    export function drawBackground(): void {
        //export let goldencut: number = 0.58; 
        let horizon: number = crc2.canvas.height * goldencut;
        let posMountains: Vector = { x: 0, y: horizon };
        
        drawBackground();
        drawSun({ x: 100, y: 75 });
        drawCloud({ x: 400, y: 125 }, { x: 250, y: 75 });
        drawCloud({ x: 750, y: 110 }, { x: 200, y: 85 });
        drawCloud({ x: 1000, y: 140 }, { x: 220, y: 55 });
        drawMountains(posMountains, 75, 200, "grey", "white");
        drawMountains(posMountains, 50, 150, "grey", "lightgrey");
        drawSnowman({ x: 850, y: 500 }, { x: 850, y: 430 }, { x: 850, y: 370 });
        drawTree({ x: 1000, y: 600}, { x: 1.2, y: 1.2});
        drawTree({ x: 200, y: 550 }, { x: 2.6, y: 2.6});
        drawTree({ x: 1060, y: 370 }, { x: 1.2, y: 1.2});
        drawTree({ x: 260, y: 280 }, { x: 0.3, y: 0.3});
        drawTree({ x: 340, y: 310 }, { x: 0.35, y: 0.35});
        drawTree({ x: 760, y: 300 }, { x: 0.5, y: 0.5});
        drawTree({ x: 960, y: 270 }, { x: 0.3, y: 0.3});
        drawBirdhouse({ x: 500, y: 400 });
        drawSnow ({ x: 0, y: 700 }, { x: 1200, y: 700 });
