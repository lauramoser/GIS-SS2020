namespace Aufgabe09 {
    
    document.getElementById("buttonhtml")?.addEventListener("click", handleHtml);
    document.getElementById("buttonjson")?.addEventListener("click", handleJson);


    async function handleHtml(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gissose2020laura.herokuapp.com";                              //Url wird als String gespeichert
        let query: URLSearchParams = new URLSearchParams(<any> formData);        //der Inhalt wird in die Variabel "query" gespeichert
        url = url + "/html" + "?" + query.toString();                            //Ich initialier "url" mit der urprünglichen url, trenne es mit einem "?"
                                                                                 //...,dem query (Inhalt) und füge dann /html hinzu
        
        let antwort: Response = await fetch(url, { method: "get" });             //der Inhalt wurde mit der Methode "get" mitgeschickt und mit "fetch" gesendet 
        let antwort2: string = await antwort.text();                             //und dann in einen String umgewandelt
        (<HTMLElement>document.getElementById("ausgabe")).innerHTML  = antwort2; //und als Html Text ausgegeben ausgegeben
    } 

    async function handleJson(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gissose2020laura.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any> formData);
        url = url + "/json" + "?" + query.toString();
       
        let antwort: Response = await fetch(url, { method: "get" });
        let antwort2: string = await antwort.json();
        console.log(antwort2);                                                    //Antwort wird in der Console ausgegeben                                       
    }       
}
//"http://localhost:8100"
//"https://gissose2020laura.herokuapp.com"
//node Aufgabe09/server.js