namespace Produkte {

    export interface Wein {
        img: string;
        name: string;
        preis: number;
        beschreibung: string;
        kategorie: string;
    }

    export let weine: Wein[];

    communicate("main.json");
   
    async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let antwort: string = await response.json();
        console.log(antwort);
        weine = JSON.parse(JSON.stringify(antwort));
        produkteErstellen();
      }
}
