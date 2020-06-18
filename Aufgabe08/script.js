"use strict";
var Aufgabe08;
(function (Aufgabe08) {
    document.getElementById("abschickenButton")?.addEventListener("click", handleAuslesen);
    async function handleAuslesen() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2020laura.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let antwort = await fetch(url);
        let antwortEingaben = await antwort.text();
        console.log(antwortEingaben);
    }
})(Aufgabe08 || (Aufgabe08 = {}));
//# sourceMappingURL=script.js.map