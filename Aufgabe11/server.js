"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe11 = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Aufgabe11;
(function (Aufgabe11) {
    console.log("Starting server");
    let formular;
    let port = Number(process.env.PORT);
    let databaseUrl = "mongodb+srv://MyMongoDBUser:Studium2019@gis-ist-geil.zqrzt.mongodb.net/Test?retryWrites=true&w=majority";
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
        formular = mongoClient.db("Test").collection("Students");
        console.log("Database connection", formular != undefined);
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
            if (pathname == "/anzeigen") {
                let cursor = await formular.find();
                let array = await cursor.toArray();
                _response.write(JSON.stringify(array));
                //_response.write(await)
                //_response.setHeader("content-type", "text/json; charset=utf-8");
                //formular.find(url.query)
            }
            if (pathname == "/speichern") {
                //db.Students.insert(doc)                                               //Befehl "insert" fügt die Daten in die Datenbank
                formular.insertOne(url.query); //url.query ist das was eingegeben wurde                                              
            }
        }
        //Abschicken an Client
        _response.end();
    }
})(Aufgabe11 = exports.Aufgabe11 || (exports.Aufgabe11 = {}));
//mongodb+srv://MyMongoDBUser:Studium2019@gis-ist-geil.zqrzt.mongodb.net/Test?retryWrites=true&w=majority
//mongodb://localhost:27017
//_response.write(JSON.stringify(await orders.find().toArray()));
//# sourceMappingURL=server.js.map