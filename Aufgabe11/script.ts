namespace Aufgabe11 {
    
    document.getElementById("vonServerzuDatenbank")?.addEventListener("click", handleSpeichern);
    document.getElementById("datenAusgeben")?.addEventListener("click", handleAusgeben);


    async function handleAusgeben(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gissose2020laura.herokuapp.com";              //Url wird als String gespeichert
        let query: URLSearchParams = new URLSearchParams(<any> formData);        //der Inhalt wird in die Variabel "query" gespeichert
        url = url + "/anzeigen" + "?" + query.toString();                        //Ich initialier "url" mit der urprünglichen url, trenne es mit einem "?"
                                                                                 //...,dem query (Inhalt) und füge dann /ausgeben hinzu
        let antwort: Response = await fetch(url, { method: "get" });             //der Inhalt wurde mit der Methode "get" mitgeschickt und mit "fetch" gesendet 
        let antwort2: string = await antwort.text();                             //und dann in einen jsonString umgewandelt
        (<HTMLElement>document.getElementById("ausgabe")).innerHTML  = antwort2; //und als Html Text ausgegeben 
    } 

    async function handleSpeichern(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gissose2020laura.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any> formData);
        url = url + "/speichern" + "?" + query.toString();
        await fetch(url);
                                                                                              
    }       
}
//"http://localhost:8100"
//"https://gissose2020laura.herokuapp.com"
//node Aufgabe11/server.js