var L06_NodeAPI;
(function (L06_NodeAPI) {
    console.log("Hallo");
    let x = 0;
    console.log(x);
    x++;
    console.warn(x);
    // Informationen zu dem Server werden ausgegeben
    console.log(process.env.COMPUTERNAME);
    console.log(process.env.USERNAME);
    console.log(process.env.PORT);
    //Array von Informationen
    console.log(process.env.argv);
    // Nach dem node Test.ts eigenen Namen schreiben -> wird dann ausgegeben
    console.log("Hallo " + process.argv[2]);
    // Zum Tschüss sagen
    process.addListener("exit", handleExit);
    // Nach einigen Sekunden wird im Terminal was angezeigt
    setTimeout(handleTimeout, 2000);
    function handleTimeout(_event) {
        console.log("Timeout");
    }
    function handleExit(_event) {
        console.log("Tschüss!");
    }
})(L06_NodeAPI || (L06_NodeAPI = {}));
//# sourceMappingURL=Test.js.map