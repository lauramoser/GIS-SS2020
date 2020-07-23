"use strict";
var Endabgabe;
(function (Endabgabe) {
    document.getElementById("registrieren")?.addEventListener("click", handleSpeichern);
    document.getElementById("einloggenButton")?.addEventListener("click", handlePrüfen);
    document.getElementById("schicken")?.addEventListener("click", handleSchicken);
    document.getElementById("r1")?.addEventListener("click", handlerLoeschen);
    document.getElementById("r2")?.addEventListener("click", handlerLoeschen);
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
        let antwort = await fetch(url, { method: "get" });
        let antwort2 = await antwort.text();
        console.log(antwort2);
        if (antwort2 == "true") {
            window.location.href = "https://lauramoser.github.io/GIS-SS2020/Endabgabe/Chatrooms.html";
        }
        else if (antwort2 == "false") {
            alert("Du musst dich erst registrieren!");
        }
    }
    async function handleSchicken() {
        let formData = new FormData(document.forms[0]);
        let url = "http://localhost:8100";
        //let url: string = "https://gissose2020laura.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "/schicken" + "?" + query.toString();
        let antwort = await fetch(url, { method: "get" });
        let antwort2 = await antwort.text();
        document.getElementById("ausgabe").innerHTML = antwort2;
    }
    document.getElementById("raum1")?.setAttribute("style", "display : none");
    document.getElementById("raum2")?.setAttribute("style", "display : none");
    function handlerLoeschen(_event) {
        let target = _event.target;
        let kategorie = target.getAttribute("href");
        if (kategorie == "#raum1") {
            document.getElementById("raum2")?.setAttribute("style", "display : none");
            document.getElementById("raum1")?.setAttribute("style", "display : block");
        }
        else if (kategorie == "#raum2") {
            document.getElementById("raum1")?.setAttribute("style", "display : none");
            document.getElementById("raum2")?.setAttribute("style", "display : block");
        }
    }
})(Endabgabe || (Endabgabe = {}));
//"http://localhost:8100"
//"https://gissose2020laura.herokuapp.com"
//node Endabgabe/Server.js
//C:Users\laura\Test\MongoDB\bin\mongo.exe
//C:Users\laura\Test\MongoDB\bin\mongod.exe --dbpath C:Users\laura\Test\Database 
//# sourceMappingURL=Client.js.map