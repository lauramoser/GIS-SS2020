namespace Endabgabe {

    document.getElementById("registrieren")?.addEventListener("click", handleSpeichern);
    document.getElementById("einloggenButton")?.addEventListener("click", handlePrüfen );
    document.getElementById("schicken")?.addEventListener("click", handleSchicken);
    document.getElementById("schicken2")?.addEventListener("click", handleSchicken);
    document.getElementById("abmelden")?.addEventListener("click", handleAbmelden);
    document.getElementById("r1")?.addEventListener("click", handlerLoeschen);
    document.getElementById("r2")?.addEventListener("click", handlerLoeschen);
   
    
    async function handleSpeichern(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "http://localhost:8100";
        //let url: string = "https://gissose2020laura.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any> formData);
        url = url + "/speichern" + "?" + query.toString();
        await fetch(url);
        window.location.href = "http://127.0.0.1:5500/Endabgabe/Login.html";
        //window.location.href = "https://lauramoser.github.io/GIS-SS2020/Endabgabe/Login.html";
    }

    async function handlePrüfen(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "http://localhost:8100";
        let query: URLSearchParams = new URLSearchParams(<any> formData);
        url = url + "/login" + "?" + query.toString();
        
        let antwort: Response = await fetch(url, { method: "get" });
        let antwort2: string = await antwort.text(); 
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

    async function handleSchicken(): Promise<void> {
        console.log(localStorage.getItem("x"));
        if (localStorage.getItem("x") == "true") {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "http://localhost:8100";
        //let url: string = "https://gissose2020laura.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any> formData);
        url = url + "/schicken" + "?" + query.toString();
        
        let antwort: Response = await fetch(url, { method: "get" });
        let antwort2: string = await antwort.text();
        
        console.log("Test: " + antwort2);
        (<HTMLElement>document.getElementById("ausgabe")).innerHTML  = antwort2;
        //String splitten
        /*for (let i: number = 0; i < antwort2.length; i++) {
            let inhaltGeteilt: string[] = antwort2[i].split(":");
            
            let inhaltNachr: string = inhaltGeteilt[2];
            console.log("inhaltNachr: " + inhaltNachr); //[ 
            let nachrZsm: string [] = inhaltNachr.split(":"); //!!!
            console.log("Felix: " + nachrZsm);
            let nachr: string = nachrZsm[1];
            console.log("Laura: " + nachr);
            (<HTMLElement>document.getElementById("ausgabe")).innerHTML  = nachr; 
        }*/
        }
        else { 
            alert("Du musst dich erst einloggen um Nachrichten zu versenden!");
            window.location.href = "http://127.0.0.1:5500/Endabgabe/Login.html";
            //window.location.href = "https://lauramoser.github.io/GIS-SS2020/Endabgabe/Login.html";
        }
    }

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

    function handleAbmelden(_event: Event): void {
        localStorage.clear();
        window.location.href = "http://127.0.0.1:5500/Endabgabe/Login.html";
        //window.location.href = "https://lauramoser.github.io/GIS-SS2020/Endabgabe/Login.html";
    }
}
//"http://localhost:8100"
//"https://gissose2020laura.herokuapp.com"
//node Endabgabe/Server.js
//C:Users\laura\Test\MongoDB\bin\mongo.exe
//C:Users\laura\Test\MongoDB\bin\mongod.exe --dbpath C:Users\laura\Test\Database 
