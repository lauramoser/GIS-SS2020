"use strict";
var Aufgabe09;
(function (Aufgabe09) {
    document.getElementById("buttonhtml")?.addEventListener("click", handleHtml);
    document.getElementById("buttonjson")?.addEventListener("click", handleJson);
    async function handleHtml() {
        let formData = new FormData(document.forms[0]);
        let url = "http://localhost:8100/"; //Url wird als String gespeichert
        let query = new URLSearchParams(formData); //der Inhalt wird in die Variabel "query" gespeichert
        url = url + "/html" + "?" + query.toString(); //Ich initialier "url" mit der urprünglichen url, trenne es mit einem "?"
        //...,dem query (Inhalt) und füge dann /html hinzu
        let antwort = await fetch(url, { method: "get" }); //der Inhalt wurde mit der Methode "get" mitgeschickt und mit "fetch" gesendet 
        let antwort2 = await antwort.text(); //und dann in einen String umgewandelt
        document.getElementById("ausgabe").innerHTML = antwort2; //und als Html Text ausgegeben ausgegeben
    }
    async function handleJson() {
        let formData = new FormData(document.forms[0]);
        let url = "http://localhost:8100/";
        let query = new URLSearchParams(formData);
        url = url + "/json" + "?" + query.toString();
        let antwort = await fetch(url, { method: "get" });
        let antwort2 = await antwort.json();
        console.log(antwort2); //Antwort wird in der Console ausgegeben                                       
    }
})(Aufgabe09 || (Aufgabe09 = {}));
//"http://localhost:8100/"
//"https://gissose2020laura.herokuapp.com"
//# sourceMappingURL=script.js.map