"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endabgabe = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Endabgabe;
(function (Endabgabe) {
    console.log("Starting server");
    let daten;
    let port = Number(process.env.PORT);
    let databaseUrl = "mongodb+srv://MyMongoDBUser:Studium2019@gis-ist-geil.zqrzt.mongodb.net/Chatroom?retryWrites=true&w=majority";
    if (!port)
        port = 8100;
    startServer(port);
    connectToDatabase(databaseUrl);
    function startServer(_port) {
        let server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(_port);
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        daten = mongoClient.db("Chatroom").collection("User"); //Datenbank Chatrrom und collection User in "daten" speichern
        console.log("Database connection", daten != undefined);
    }
    function handleListen() {
        console.log("Listening");
    }
    async function handleRequest(_request, _response) {
        //setHeader: gibt mir die Informationen wie die Eingabe aufgebaut ist
        //und WER auf WAS Zugriff darauf hat
        _response.setHeader("content-type", "text/json; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let pathname = url.pathname;
            if (pathname == "/speichern") {
                //Befehl "insert" fügt die Daten in die Datenbank
                //url.query ist das was eingegeben wurde  
                daten.insertOne(url.query);
            }
            if (pathname == "/login") {
                let x = false;
                let vorname = daten.find({ Vname: [] }); //der Vorname der beim Login eingegeben wurde
                if (daten.find({ Vname: vorname })) {
                    //
                    //<a href="Chatrooms.html"></a>
                }
                else {
                    //
                }
            }
        }
        //Abschicken an Client
        _response.end();
    }
})(Endabgabe = exports.Endabgabe || (exports.Endabgabe = {}));
//mongodb+srv://MyMongoDBUser:Studium2019@gis-ist-geil.zqrzt.mongodb.net/Chatroom?retryWrites=true&w=majority
//mongodb://localhost:27017
//# sourceMappingURL=Server.js.map