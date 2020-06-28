"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe09Server = void 0;
const Http = require("http");
const Url = require("url");
var Aufgabe09Server;
(function (Aufgabe09Server) {
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
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            console.log(url.query);
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "<br/>");
            }
            _response.write("&&&");
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
        }
        _response.end();
    }
})(Aufgabe09Server = exports.Aufgabe09Server || (exports.Aufgabe09Server = {}));
//# sourceMappingURL=skript.js.map