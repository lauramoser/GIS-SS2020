"use strict";
var Endabgabe;
(function (Endabgabe) {
    let nachricht;
    //= [{id: "leer", username: "leer", textnachricht: "leer"}];
    document.getElementById("registrieren")?.addEventListener("click", handleSpeichern);
    document.getElementById("einloggenButton")?.addEventListener("click", handlePrüfen);
    document.getElementById("schicken")?.addEventListener("click", handleSchicken);
    document.getElementById("schicken2")?.addEventListener("click", handleSchicken);
    document.getElementById("abmelden")?.addEventListener("click", handleAbmelden);
    document.getElementById("r1")?.addEventListener("click", handlerLoeschen);
    document.getElementById("r2")?.addEventListener("click", handlerLoeschen);
    async function handleSpeichern() {
        let formData = new FormData(document.forms[0]);
        let url = "http://localhost:8100";
        //let url: string = "https://gissose2020laura.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "/speichern" + "?" + query.toString();
        await fetch(url);
        window.location.href = "http://127.0.0.1:5500/Endabgabe/Login.html";
        //window.location.href = "https://lauramoser.github.io/GIS-SS2020/Endabgabe/Login.html";
    }
    let vNameString;
    async function handlePrüfen() {
        let formData = new FormData(document.forms[0]);
        let url = "http://localhost:8100";
        let query = new URLSearchParams(formData);
        url = url + "/login" + "?" + query.toString();
        vNameString = document.getElementById("vnameID").value;
        localStorage.setItem("vorname", vNameString);
        let antwort = await fetch(url, { method: "get" });
        let antwort2 = await antwort.text();
        console.log(antwort2);
        if (antwort2 == "true") {
            localStorage.setItem("x", "true");
            console.log("x= " + localStorage.getItem("x"));
            //window.location.href = "https://lauramoser.github.io/GIS-SS2020/Endabgabe/Chatrooms.html";
            window.location.href = "http://127.0.0.1:5500/Endabgabe/Chatrooms.html";
        }
        else if (antwort2 == "false") {
            alert("Du musst dich erst registrieren!");
        }
    }
    async function handleSchicken() {
        if (localStorage.getItem("x") == "true") {
            let formData = new FormData(document.forms[0]);
            let url = "http://localhost:8100";
            //let url: string = "https://gissose2020laura.herokuapp.com";
            let query = new URLSearchParams(formData);
            url = url + "/schicken" + "?" + "username=" + localStorage.getItem("vorname") + "&" + query.toString();
            console.log(url);
            let antwort = await fetch(url, { method: "get" });
            let antwort2 = await antwort.text();
            console.log("antwort2: " + antwort2);
            nachricht = JSON.parse(JSON.stringify(antwort2));
            console.log("nachricht: " + nachricht);
            for (let i = 0; i < nachricht.length; i++) {
                let ausgabe = nachricht[i].username + ": " + nachricht[i].textnachricht;
                let chatnach = document.createElement("div");
                document.getElementById("nachrichtenID")?.appendChild(chatnach);
                let text = document.createElement("p");
                //text.innerHTML = nachricht[i].textnachricht;
                text.innerHTML = ausgabe;
                chatnach.appendChild(text);
            }
            //!!!!!
        }
        else {
            alert("Du musst dich erst einloggen um Nachrichten zu versenden!");
            window.location.href = "http://127.0.0.1:5500/Endabgabe/Login.html";
            //window.location.href = "https://lauramoser.github.io/GIS-SS2020/Endabgabe/Login.html";
        }
    }
    document.getElementById("raum1")?.setAttribute("style", "display : none");
    document.getElementById("raum2")?.setAttribute("style", "display : none");
    function handlerLoeschen(_event) {
        let target = _event.target;
        let kategorie = target.getAttribute("id");
        if (kategorie == "r1") {
            document.getElementById("raum2")?.setAttribute("style", "display : none");
            document.getElementById("raum1")?.setAttribute("style", "display : block");
        }
        else if (kategorie == "r2") {
            document.getElementById("raum1")?.setAttribute("style", "display : none");
            document.getElementById("raum2")?.setAttribute("style", "display : block");
        }
    }
    function handleAbmelden(_event) {
        localStorage.clear();
        window.location.href = "http://127.0.0.1:5500/Endabgabe/Login.html";
        //window.location.href = "https://lauramoser.github.io/GIS-SS2020/Endabgabe/Login.html";
    }
})(Endabgabe || (Endabgabe = {}));
//"http://localhost:8100"
//"https://gissose2020laura.herokuapp.com"
//node Endabgabe/Server.js
//C:Users\laura\Test\MongoDB\bin\mongo.exe
//C:Users\laura\Test\MongoDB\bin\mongod.exe --dbpath C:Users\laura\Test\Database 
//# sourceMappingURL=Client.js.map