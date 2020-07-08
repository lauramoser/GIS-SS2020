"use strict";
var Aufgabe11;
(function (Aufgabe11) {
    document.getElementById("vonServerzuDatenbank")?.addEventListener("click", handleSpeichern);
    document.getElementById("datenAusgeben")?.addEventListener("click", handleAusgeben);
    async function handleAusgeben() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2020laura.herokuapp.com"; //Url wird als String gespeichert
        let query = new URLSearchParams(formData); //der Inhalt wird in die Variabel "query" gespeichert
        url = url + "/anzeigen" + "?" + query.toString(); //Ich initialier "url" mit der urprünglichen url, trenne es mit einem "?"
        //...,dem query (Inhalt) und füge dann /ausgeben hinzu
        let antwort = await fetch(url, { method: "get" }); //der Inhalt wurde mit der Methode "get" mitgeschickt und mit "fetch" gesendet 
        let antwort2 = await antwort.text(); //und dann in einen jsonString umgewandelt
        document.getElementById("ausgabe").innerHTML = antwort2; //und als Html Text ausgegeben 
    }
    async function handleSpeichern() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2020laura.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "/speichern" + "?" + query.toString();
        await fetch(url);
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//"http://localhost:8100"
//"https://gissose2020laura.herokuapp.com"
//node Aufgabe11/server.js
//# sourceMappingURL=script.js.map