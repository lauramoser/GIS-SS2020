import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Aufgabe11{
    
    console.log("Starting server");
    let port: number = Number(process.env.PORT);
    if (!port)
    port = 8100;
    
    
    let server: Http.Server = Http.createServer();

    //let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
    //await mongoClient.connect();
    
    //let orders: Mongo.Collection = mongoClient.db("Test").collection("Students");
    //orders.insert({...});
    
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    
    function handleListen(): void {
    console.log("Listening");
    }
    
    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    //setHeader: gibt mir die Informationen wie die Eingabe aufgebaut ist
    //und WER auf WAS Zugriff darauf hat
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");
    
    if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true); 
            let pathname: String | null  = url.pathname;                                //mein pathname ist ein String & ich bestimme welcher Teil des Urls hier initialisiert wird
                                                                                        
            if ( pathname == "/html") {                                                 //wenn der pathname gleich /html ist 
                for (let key in url.query) {                                            //beginnt die for Schleife, die meine keys mit dem passendem Inhalt als Html Text ausgibt
                    _response.write(key + ":" + url.query[key] + "<br/>");
                    }
            }                                                                            
            
            if ( pathname == "/json") {
                let jsonString: string = JSON.stringify(url.query);
                _response.write(jsonString);
                _response.setHeader("content-type", "text/json; charset=utf-8");
            }
            
            
        }
    //Abschicken an Client
    _response.end();

    }
}

