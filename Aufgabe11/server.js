"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe11 = void 0;
const Http = require("http");
const Url = require("url");
var Aufgabe11;
(function (Aufgabe11) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        //setHeader: gibt mir die Informationen wie die Eingabe aufgebaut ist
        //und WER auf WAS Zugriff darauf hat
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let pathname = url.pathname; //mein pathname ist ein String & ich bestimme welcher Teil des Urls hier initialisiert wird
            //String | null ???
            if (pathname == "/html") { //wenn der pathname gleich /html ist 
                for (let key in url.query) { //beginnt die for Schleife, die meine keys mit dem passendem Inhalt als Html Text ausgibt
                    _response.write(key + ":" + url.query[key] + "<br/>");
                }
            }
            if (pathname == "/json") {
                let jsonString = JSON.stringify(url.query);
                _response.write(jsonString);
                _response.setHeader("content-type", "text/json; charset=utf-8");
            }
        }
        //Abschicken an Client
        _response.end();
    }
})(Aufgabe11 = exports.Aufgabe11 || (exports.Aufgabe11 = {}));
//# sourceMappingURL=server.js.map