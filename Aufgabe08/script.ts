namespace Aufgabe08 {
    
    document.getElementById("abschickenButton")?.addEventListener("click", handleAuslesen);

    async function handleAuslesen (): Promise<void> {
    let formData: FormData = new FormData(document.forms[0]);
    let url: string = "https://gissose2020laura.herokuapp.com";
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    url = url + "?" + query.toString();

    let antwort: Response = await fetch(url);
    let antwortEingaben: string = await antwort.text();
    console.log(antwortEingaben);
    }
    
}