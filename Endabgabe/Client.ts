namespace Endabgabe {

    document.getElementById("registrieren")?.addEventListener("click", handleSpeichern);
    document.getElementById("login")?.addEventListener("click", handlePrüfen );
    document.getElementById("schicken")?.addEventListener("click", handleSchicken);
    
    async function handleSpeichern(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "http://localhost:8100";
        //let url: string = "https://gissose2020laura.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any> formData);
        url = url + "/speichern" + "?" + query.toString();
        await fetch(url);
    }

    async function handlePrüfen(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "http://localhost:8100";
        let query: URLSearchParams = new URLSearchParams(<any> formData);
        url = url + "/login" + "?" + query.toString();
        await fetch(url);

        if(x == true);

    }

    async function handleSchicken(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "http://localhost:8100";
        //let url: string = "https://gissose2020laura.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any> formData);
        url = url + "/schicken" + "?" + query.toString();
        await fetch(url);
    }

    

}
//"http://localhost:8100"
//"https://gissose2020laura.herokuapp.com"
//node Endabgabe/Server.js
//C:Users\laura\Test\MongoDB\bin\mongo.exe
//C:Users\laura\Test\MongoDB\bin\mongod.exe --dbpath C:Users\laura\Test\Database 
