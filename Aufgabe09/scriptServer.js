"use strict";
var Aufgabe09Server;
(function (Aufgabe09Server) {
    document.getElementById("buttonhtml")?.addEventListener("click", handleHtml);
    document.getElementById("buttonjson")?.addEventListener("click", handleJson);
    function handleHtml() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2020laura.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        communicateHTML(url);
    }
    function handleJson() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2020laura.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        communicateJSON(url);
    }
    async function communicateHTML(_url) {
        let antwort = await fetch(_url, { method: "get" });
        let antwort2 = await antwort.text();
        let arraySplit = antwort2.split("&&&");
        document.getElementById("ausgabe").innerHTML = arraySplit[0];
    }
    async function communicateJSON(_url) {
        let antwort = await fetch(_url, { method: "get" });
        let antwort2 = await antwort.text();
        let arraySplit = antwort2.split("&&&");
        let jsonString = JSON.parse(arraySplit[1]);
        console.log(jsonString);
    }
})(Aufgabe09Server || (Aufgabe09Server = {}));
//# sourceMappingURL=scriptServer.js.map