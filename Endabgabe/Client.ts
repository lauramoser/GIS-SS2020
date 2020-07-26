namespace Endabgabe {

    //interface für die anzeige der Nachrichten
    interface Chat {
    id: string;
    username: string;
    textnachricht: string;
    }
    let nachricht: Chat[];
    //= [{id: "leer", username: "leer", textnachricht: "leer"}];

    document.getElementById("registrieren")?.addEventListener("click", handleSpeichern);
    document.getElementById("einloggenButton")?.addEventListener("click", handlePrüfen );
    document.getElementById("schicken")?.addEventListener("click", handleSchicken);
    document.getElementById("schicken2")?.addEventListener("click", handleSchicken2);
    document.getElementById("abmelden")?.addEventListener("click", handleAbmelden);
    document.getElementById("r1")?.addEventListener("click", handlerLoeschen);
    document.getElementById("r2")?.addEventListener("click", handlerLoeschen);
   
    //Daten werden beim registrieren gespeichert
    async function handleSpeichern(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        //let url: string = "http://localhost:8100";
        let url: string = "https://gissose2020laura.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any> formData);
        url = url + "/speichern" + "?" + query.toString();
        await fetch(url);
        //window.location.href = "http://127.0.0.1:5500/Endabgabe/Login.html";
        window.location.href = "https://lauramoser.github.io/GIS-SS2020/Endabgabe/Login.html";
    }
    //Variabel Deklaration um den Username zu verwenden
    let vNameString: string;

    //Prüfen ob Daten beim Login in Datenbank enthalten sind
    async function handlePrüfen(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        //let url: string = "http://localhost:8100";
        let url: string = "https://gissose2020laura.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any> formData);
        url = url + "/login" + "?" + query.toString();    
        vNameString = (<HTMLInputElement>document.getElementById("vnameID")).value;
        //vorname in localStorage speichern
        localStorage.setItem("vorname", vNameString);
        let antwort: Response = await fetch(url, { method: "get" });
        let antwort2: string = await antwort.text(); 
        //console.log(antwort2);
        
        //Wenn enthalten dann true und in localStorage speichern um später abzufragen ob man sich eingeloggt hat
        if (antwort2 == "true") {
            localStorage.setItem("x", "true");
            window.location.href = "https://lauramoser.github.io/GIS-SS2020/Endabgabe/Chatrooms.html";
            //window.location.href = "http://127.0.0.1:5500/Endabgabe/Chatrooms.html";
        }
        else if (antwort2 == "false") {
            alert("Du musst dich erst registrieren!");
        }
        
    }

    async function handleSchicken(): Promise<void> {
        //if Abfrage ob x im localStorage den String "true" hat --> Frage ob man sich eingeloggt hat
        if (localStorage.getItem("x") == "true") {
        let formData: FormData = new FormData(document.forms[0]);
        //let url: string = "http://localhost:8100";
        let url: string = "https://gissose2020laura.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any> formData);

        //vorname an url gehängt und es in die Datenbank speichern zu können
        url = url + "/schicken" + "?" + "username=" + localStorage.getItem("vorname") + "&" + query.toString();

        let antwort: Response = await fetch(url, { method: "get" });
        let antwort2: string = await antwort.text();
        console.log("antwort2: " + antwort2);
        nachricht = <Chat[]>JSON.parse(antwort2);
        //console.log("nachricht: " + nachricht[0]);
        
        //alle Nachrichten generieren und in ein div umwandeln um es als p auszugeben
        for (let i: number = 0; i < nachricht.length; i++) {
        let ausgabe: string = nachricht[i].username + ": " + nachricht[i].textnachricht;
        let chatnach: HTMLDivElement = document.createElement("div");
        document.getElementById("nachrichtenID")?.appendChild(chatnach);
    
        let text: HTMLParagraphElement = document.createElement("p");
        text.innerHTML = ausgabe;
        chatnach.appendChild(text);
        }
        }
        else { 
            alert("Du musst dich erst einloggen um Nachrichten zu versenden!");
            window.location.href = "http://127.0.0.1:5500/Endabgabe/Login.html";
            //window.location.href = "https://lauramoser.github.io/GIS-SS2020/Endabgabe/Login.html";
        }
    }

    async function handleSchicken2(): Promise<void> {
        if (localStorage.getItem("x") == "true") {
        let formData: FormData = new FormData(document.forms[1]);
        //let url: string = "http://localhost:8100";
        let url: string = "https://gissose2020laura.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any> formData);

        url = url + "/schicken2" + "?" + "username=" + localStorage.getItem("vorname") + "&" + query.toString();
        console.log("url: " + url);
        let antwort: Response = await fetch(url, { method: "get" });
        let antwort2: string = await antwort.text();
        console.log("antwort2: " + antwort2);
        nachricht = <Chat[]>JSON.parse(antwort2);
        //console.log("nachricht: " + nachricht[0]);
        
        for (let i: number = 0; i < nachricht.length; i++) {
        let ausgabe: string = nachricht[i].username + ": " + nachricht[i].textnachricht;
        let chatnach: HTMLDivElement = document.createElement("div");
        document.getElementById("nachrichtenID2")?.appendChild(chatnach);
    
        let text: HTMLParagraphElement = document.createElement("p");
        text.innerHTML = ausgabe;
        chatnach.appendChild(text);
        }
        }
        else { 
            alert("Du musst dich erst einloggen um Nachrichten zu versenden!");
            window.location.href = "http://127.0.0.1:5500/Endabgabe/Login.html";
            //window.location.href = "https://lauramoser.github.io/GIS-SS2020/Endabgabe/Login.html";
        }
    }

    //Chats löschen um auswählen zu können
    document.getElementById("raum1")?.setAttribute("style", "display : none");
    document.getElementById("raum2")?.setAttribute("style", "display : none");    

    function handlerLoeschen(_event: Event): void {
        let target: HTMLElement = (<HTMLElement>_event.target);
        let kategorie: string = target.getAttribute("id")!;

        if (kategorie == "r1") {
            document.getElementById("raum2")?.setAttribute("style", "display : none");
            document.getElementById("raum1")?.setAttribute("style", "display : block");
        } else if (kategorie == "r2") {
            document.getElementById("raum1")?.setAttribute("style", "display : none");
            document.getElementById("raum2")?.setAttribute("style", "display : block");
        }
    }

    //beim abmelden localStorge löschen um x zurückzusetzen
    function handleAbmelden(_event: Event): void {
        localStorage.clear();
        //window.location.href = "http://127.0.0.1:5500/Endabgabe/Login.html";
        window.location.href = "https://lauramoser.github.io/GIS-SS2020/Endabgabe/Login.html";
    }
}
//"http://localhost:8100"
//"https://gissose2020laura.herokuapp.com"
//node Endabgabe/Server.js
//C:Users\laura\Test\MongoDB\bin\mongo.exe
//C:Users\laura\Test\MongoDB\bin\mongod.exe --dbpath C:Users\laura\Test\Database 
