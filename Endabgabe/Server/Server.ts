
import * as Http from "http";
import * as Url from "url";

export namespace L06_CocktailBar {
    let server: Http.Server = Http.createServer();

    let port: number | string | undefined = process.env.PORT;
    if (port == undefined)
        port = 5001;

    console.log("Server starting on port:" + port);

    server.listen(port);
    server.addListener("request", handleRequest);

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("What's up?");  //localhost:5001 in die Leiste eingeben -> wenn in Debug Console What's up steht ist der Server installiert

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "<br/>");
                _response.write("this is my response");
            }

            let jsonString: string = JSON.stringify(url.query); 
            _response.write(jsonString);
        }

        _response.end();
    }
}

/*import * as Http from "http";
import * as Url from "url";
//import { Server } from "mongodb";
//import * as Database from "./Database";


export namespace L11 {
    let server: Http.Server = Http.createServer();


    let port: number | string | undefined = process.env.PORT;
    if (port == undefined)
        port = 5001;
    console.log("Server starting on poin" + port);



    server.listen(port);
    server.addListener("request", handleRequest); // wenn du eine Request erhälst rufe handlerequest auf

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("What's up?"); // localhost:5001 in die Leiste eingeben -> wenn in Debug Console What's up steht ist der Server installiert
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");


        if (_request.url){
            let url: Url.UrlWithParsedQuery = Url.parse (_request.url, true);
            for (let key in url.query){
                //console.log(key + ":" + url.query[key]);
                _response.write(key + ":" + url.query[key] + "<br/>");
            }
        }



        _response.write("this is my response");
        _response.end(); // response wird gesendet
    }
}

server.addListener("listening", handleListen);
server.addListener("request", handleRequest);
server.listen(port);



function handleListen(): void {
    console.log("Listening on port: " + port);
}

function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    console.log("Request received");

    let query: AssocStringString = Url.parse(_request.url, true).query;
    var command: string = query["command"];

    switch (command) {
        case "insert":
            let score: Highscore = {
                name: query["name"],
                score: parseInt(query["score"])
            };
            Database.insert(score);
            respond(_response, "storing data");
            break;

        case "getHighscore":
            Database.findAll(findCallback);
            break;



        default:
            respond(_response, "unknown command: " + command);
            break;
    }

    // findCallback is an inner function so that _response is in scope
    function findCallback(json: string): void {
        respond(_response, json);
    }
}

function respond(_response: Http.ServerResponse, _text: string): void {
    //console.log("Preparing response: " + _text);
    _response.setHeader("Access-Control-Allow-Origin", "*");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.write(_text);
    _response.end();
}*/