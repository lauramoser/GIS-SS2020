namespace Aufgabe09Server {
    
    document.getElementById("buttonhtml")?.addEventListener("click", handleHtml);
    document.getElementById("buttonjson")?.addEventListener("click", handleJson);


    function handleHtml(): void {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "http://localhost:8100/";
        let query: URLSearchParams = new URLSearchParams(<any> formData);
        url = url + "?" + query.toString();
        communicateHTML(url);
        
    } 

    function handleJson(): void {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "http://localhost:8100/";
        let query: URLSearchParams = new URLSearchParams(<any> formData);
        url = url + "?" + query.toString();
        communicateJSON(url);
    } 

    async function communicateHTML(_url: RequestInfo): Promise<void> {
        let antwort: Response = await fetch(_url, { method: "get" });
        let antwort2: string = await antwort.text();
        let arraySplit: string[] = antwort2.split("&&&");
        (<HTMLElement>document.getElementById("ausgabe")).innerHTML  = arraySplit[0];
      }

    async function communicateJSON(_url: RequestInfo): Promise<void> {
        let antwort: Response = await fetch(_url, { method: "get" });
        let antwort2: string = await antwort.text();
        let arraySplit: string[] = antwort2.split("&&&");
        let jsonString: string = JSON.parse(arraySplit[1]);
        console.log(jsonString);
        
      }
      
      
}