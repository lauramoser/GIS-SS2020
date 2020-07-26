import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Endabgabe {
    console.log("Starting server");
    let daten: Mongo.Collection;
    let chat1: Mongo.Collection;
    let chat2: Mongo.Collection;
    let port: number = Number(process.env.PORT);
    let databaseUrl: string = "mongodb+srv://MyMongoDBUser:Studium2019@gis-ist-geil.zqrzt.mongodb.net/Chatroom?retryWrites=true&w=majority";
    if (!port)
        port = 8100;

    startServer(port);
    connectToDatabase(databaseUrl);

    function startServer(_port: number | string): void {
        let server: Http.Server = Http.createServer();

        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(_port);
    }
    async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        daten = mongoClient.db("Chatroom").collection("User"); //Datenbank Chatroom und collection User in "daten" speichern
        chat1 = mongoClient.db("Chatroom").collection("Nachrichten");
        chat2 = mongoClient.db("Chatroom").collection("Nachrichten2");
        console.log("Database connection", daten != undefined);
    }
    function handleListen(): void {
        console.log("Listening");
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        //setHeader: gibt mir die Informationen wie die Eingabe aufgebaut ist
        //und WER auf WAS Zugriff darauf hat
        _response.setHeader("content-type", "text/json; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            //console.log("url " + JSON.stringify(url.query));
            //let urlquery: string = JSON.stringify(url.query);
            //console.log("urlquery: " + urlquery);
            let pathname: String | null = url.pathname;
            let inhalt: string = "";

            if (pathname == "/speichern") {
                //Befehl "insert" fügt die Daten in die Datenbank
                //url.query ist das was eingegeben wurde  
                daten.insertOne(url.query);
            }

            if (pathname == "/login") {
                let x: boolean = false;
                console.log("x:" + x);

                for (let key in url.query) {
                    //inhalt der gegeben wurde mit ":" "/" trennen                                          
                    inhalt += (key + ":" + url.query[key] + "#");
                }
                //Da wo "#" ist teilen Vname:Laura--> [0] / Nname:Moser --> [1] / password:1234--> [2]
                let inhaltGeteilt1: string[] = inhalt.split("#");
                //Den [0] in "inhaltVorname" speichern
                let inhaltVorname: string = inhaltGeteilt1[0];
                let inhaltNachname: string = inhaltGeteilt1[1];
                let inhaltPasswort: string = inhaltGeteilt1[2];
                //Da wo ":" den "inhaltVorname" nochmal spliten 
                //Vname--> [0] / Laura-->[1]
                let vornameZsm: string[] = inhaltVorname.split(":");
                let nachnameZsm: string[] = inhaltNachname.split(":");
                let passwortZsm: string[] = inhaltPasswort.split(":");
                //Den [1] in "vornameZsm" speichern / muss "Laura" sein
                let vorname: string = vornameZsm[1];
                let nachname: string = nachnameZsm[1];
                console.log("nachname: " + nachname);
                let passwort: string = passwortZsm[1];
                

                let allesInDb: string[] = await daten.find().toArray();
                let allesInDbString: string = JSON.stringify(allesInDb);

                //let vornameInDb: Mongo.Cursor = daten.find({Vname: []});
                //let vornameInDbString: string = vornameInDb.toString();     
                //console.log("Test: " + vornameInDbString);

                if (allesInDbString.includes(vorname)) {
                    if (allesInDbString.includes(passwort)) {
                        if (allesInDbString.includes(nachname)) {
                            x = true;
                            let gefunden: string = x.toString();
                            _response.write(gefunden);
                            console.log("True/False: " + gefunden);
                        }
                    }
                }
                else {
                    let nichtVorhanden: string = x.toString();
                    _response.write(nichtVorhanden);
                    console.log("False/True: " + nichtVorhanden);
                    //stopp/ return 
                }              
            }
            
            if (pathname == "/schicken") {
                //nachricht speichern in collection "chat1"
                chat1.insertOne(url.query);

                //alles aus Datenbank holen
                let cursor: Mongo.Cursor = chat1.find();
                let array: any[] = await cursor.toArray();
                console.log(array);

                //Datenbankinhalt an Client schicken                
                _response.write(JSON.stringify(array));               
            }
        }
        //Abschicken an Client
        _response.end();
    }

}
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

/*if (allesInDbString.includes(vorname) && allesInDbString.includes(passwort) && allesInDbString.includes(nachname)) {
    x = true;
    let gefunden: string = x.toString();
    _response.write(gefunden);
    console.log("True/False: " + gefunden);
}
else {
    let nichtVorhanden: string = x.toString();
    _response.write(nichtVorhanden);
    console.log("False/True: " + nichtVorhanden);
    //stopp/ return 
}*/

/*let textElement: HTMLParagraphElement = document.createElement("input");
                textElement.innerHTML = <string> localStorage.getItem(");
                document.getElementById("tsr" + i)?.appendChild(textElement);*/