"use strict";
var Produkte;
(function (Produkte) {
    communicate("main.json");
    async function communicate(_url) {
        let response = await fetch(_url);
        let antwort = await response.json();
        Produkte.weine = JSON.parse(JSON.stringify(antwort));
        Produkte.produkteErstellen();
    }
})(Produkte || (Produkte = {}));
//# sourceMappingURL=script_inhalt.js.map