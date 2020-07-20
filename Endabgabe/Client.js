"use strict";
var Endabgabe;
(function (Endabgabe) {
    document.getElementById("registrieren")?.addEventListener("click", handleSpeichern);
    document.getElementById("login")?.addEventListener("click", handlePrüfen);
    document.getElementById("schicken")?.addEventListener("click", handleSchicken);
    async function handleSpeichern() {
        let formData = new FormData(document.forms[0]);
        let url = "http://localhost:8100";
        //let url: string = "https://gissose2020laura.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "/speichern" + "?" + query.toString();
        await fetch(url);
    }
    async function handlePrüfen() {
        let formData = new FormData(document.forms[0]);
        let url = "http://localhost:8100";
        let query = new URLSearchParams(formData);
        url = url + "/login" + "?" + query.toString();
        await fetch(url);
        if (x == true)
            ;
    }
    async function handleSchicken() {
        let formData = new FormData(document.forms[0]);
        let url = "http://localhost:8100";
        //let url: string = "https://gissose2020laura.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "/schicken" + "?" + query.toString();
        await fetch(url);
    }
})(Endabgabe || (Endabgabe = {}));
//"http://localhost:8100"
//"https://gissose2020laura.herokuapp.com"
//node Endabgabe/Server.js
//C:Users\laura\Test\MongoDB\bin\mongo.exe
//C:Users\laura\Test\MongoDB\bin\mongod.exe --dbpath C:Users\laura\Test\Database 
//# sourceMappingURL=Client.js.map