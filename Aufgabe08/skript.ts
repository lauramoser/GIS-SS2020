    import * as Http from "http";

    export namespace Aufgabe08Server {
        //Konsolen Ausgabe: "Starting server"
        console.log("Starting server");
        let port: number = Number(process.env.PORT);
        //Wenn die Deklaration "port" nicht vorhanden ist wird es auf die Zahl 8100 gesetzt
        if (!port)
    port = 8100;

        //Server wird erstellt
        let server: Http.Server = Http.createServer();
        //Funktionen werden zum Server als Listener hinzugefügt
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(port);

        //Funktion "handleListen" wird erzeugt mit der Konsolen Ausgabe "Listening"
        function handleListen(): void {
    console.log("Listening");
  }

        //Funktion "handleRequest" wird erzeugt mit der Konsolen Ausgabe "I hear voices!"
        function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    console.log("I hear voices!");

    //Parameter für die Antwort des Servers werden deklariert
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");

    //Antwort vom Server wird geschrieben
    _response.write(_request.url);
    //ServerResponse wird beendet
    _response.end();
  }

}