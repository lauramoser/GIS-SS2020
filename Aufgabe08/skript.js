"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe08Server = void 0;
const Http = require("http");
var Aufgabe08Server;
(function (Aufgabe08Server) {
    //Konsolen Ausgabe: "Starting server"
    console.log("Starting server");
    let port = Number(process.env.PORT);
    //Wenn die Deklaration "port" nicht vorhanden ist wird es auf die Zahl 8100 gesetzt
    if (!port)
        port = 8100;
    //Server wird erstellt
    let server = Http.createServer();
    //Funktionen werden zum Server als Listener hinzugefügt
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    //Funktion "handleListen" wird erzeugt mit der Konsolen Ausgabe "Listening"
    function handleListen() {
        console.log("Listening");
    }
    //Funktion "handleRequest" wird erzeugt mit der Konsolen Ausgabe "I hear voices!"
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        //Parameter für die Antwort des Servers werden deklariert
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        //Antwort vom Server wird geschrieben
        _response.write(_request.url);
        //ServerResponse wird beendet
        _response.end();
    }
})(Aufgabe08Server = exports.Aufgabe08Server || (exports.Aufgabe08Server = {}));
//# sourceMappingURL=skript.js.map