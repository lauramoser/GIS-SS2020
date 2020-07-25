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
    let chat1;
    let chat2;
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
        daten = mongoClient.db("Chatroom").collection("User"); //Datenbank Chatroom und collection User in "daten" speichern
        chat1 = mongoClient.db("Chatroom").collection("Nachrichten");
        chat2 = mongoClient.db("Chatroom").collection("Nachrichten2");
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
            console.log("url " + url);
            let pathname = url.pathname;
            let inhalt = "";
            if (pathname == "/speichern") {
                //Befehl "insert" fügt die Daten in die Datenbank
                //url.query ist das was eingegeben wurde  
                daten.insertOne(url.query);
            }
            if (pathname == "/login") {
                let x = false;
                console.log("x:" + x);
                for (let key in url.query) {
                    //inhalt der gegeben wurde mit ":" "/" trennen                                          
                    inhalt += (key + ":" + url.query[key] + "#");
                }
                //Da wo "#" ist teilen Vname:Laura--> [0] / Nname:Moser --> [1] / password:1234--> [2]
                let inhaltGeteilt1 = inhalt.split("#");
                //Den [0] in "inhaltVorname" speichern
                let inhaltVorname = inhaltGeteilt1[0];
                let inhaltNachname = inhaltGeteilt1[1];
                let inhaltPasswort = inhaltGeteilt1[2];
                //Da wo ":" den "inhaltVorname" nochmal spliten 
                //Vname--> [0] / Laura-->[1]
                let vornameZsm = inhaltVorname.split(":");
                let nachnameZsm = inhaltNachname.split(":");
                let passwortZsm = inhaltPasswort.split(":");
                //Den [1] in "vornameZsm" speichern / muss "Laura sein"
                let vorname = vornameZsm[1];
                let nachname = nachnameZsm[1];
                let passwort = passwortZsm[1];
                let allesInDb = await daten.find().toArray();
                let allesInDbString = JSON.stringify(allesInDb);
                //let vornameInDb: Mongo.Cursor = daten.find({Vname: []});
                //let vornameInDbString: string = vornameInDb.toString();     
                //console.log("Test: " + vornameInDbString);
                if (allesInDbString.includes(vorname) && allesInDbString.includes(passwort) && allesInDbString.includes(nachname)) {
                    x = true;
                    let gefunden = x.toString();
                    _response.write(gefunden);
                    console.log("True/False: " + gefunden);
                }
                else {
                    let nichtVorhanden = x.toString();
                    _response.write(nichtVorhanden);
                    console.log("False/True: " + nichtVorhanden);
                    //stopp/ return 
                }
            }
            if (pathname == "/schicken") {
                //nachricht speichern in collection "chat"
                chat1.insertOne(url.query);
                //alles aus Datenbank holen
                let cursor = chat1.find();
                let array = await cursor.toArray();
                //Datenbankinhalt an Client schicken                
                _response.write(JSON.stringify(array));
                /*let textElement: HTMLParagraphElement = document.createElement("input");
                textElement.innerHTML = <string> localStorage.getItem(");
                document.getElementById("tsr" + i)?.appendChild(textElement);*/
            }
        }
        //Abschicken an Client
        _response.end();
    }
})(Endabgabe = exports.Endabgabe || (exports.Endabgabe = {}));
//mongodb+srv://MyMongoDBUser:Studium2019@gis-ist-geil.zqrzt.mongodb.net/Chatroom?retryWrites=true&w=majority
//mongodb://localhost:27017
/*for (let key in url.query) {
    //inhalt der gegeben wurde mit ":" "/" trennen
    inhalt += (key + ":" + url.query[key] + "#");
    }
let inhaltGeteilt1: string[] = inhalt.split("#");
for (let i: number = 0, i < inhaltGeteilt1.length -1, i++) {
    let inhaltAlles: string[] = inhaltGeteilt1[i];

}*/ 
//# sourceMappingURL=Server.js.map