import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Endabgabe{
    console.log("Starting server");
    let daten: Mongo.Collection;
    let port: number = Number(process.env.PORT);
    let databaseUrl: string = "//mongodb://localhost:27017";
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
    async function connectToDatabase(_url: string): Promise <void> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        daten = mongoClient.db("Chatroom").collection("User");
        console.log("Database connection", daten != undefined);
    }
    

    function handleListen(): void {
    console.log("Listening");
}

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise <void> {
    //setHeader: gibt mir die Informationen wie die Eingabe aufgebaut ist
    //und WER auf WAS Zugriff darauf hat
    _response.setHeader("content-type", "text/json; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");
    
    if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true); 
            let pathname: String | null  = url.pathname;                             
                       
            if ( pathname == "/speichern") {
                //Befehl "insert" fügt die Daten in die Datenbank
                //url.query ist das was eingegeben wurde  
                daten.insertOne(url.query);                                                                                     
            }

            if ( pathname == "/login") {  
                
            }                                                                            
            
            
   }

    //Abschicken an Client
    _response.end();
    }

}
//mongodb+srv://MyMongoDBUser:Studium2019@gis-ist-geil.zqrzt.mongodb.net/Test?retryWrites=true&w=majority
//mongodb://localhost:27017
