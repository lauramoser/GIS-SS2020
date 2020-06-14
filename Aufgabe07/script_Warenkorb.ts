namespace Produkte {

    let summe: number = 0;
    let zwischenSp: number = 0;

    for (let i: number = 0; i < localStorage.clickZaehler; i++) {
       
        let newDiv: HTMLDivElement = document.createElement("div");
        newDiv.id = "tsr" + i;
        newDiv.classList.add("warenkorbClass");
        document.getElementById("wagenProdukte")?.appendChild(newDiv);
                
        //Bild
        let imgElement: HTMLImageElement = document.createElement("img");
        imgElement.src = <string> localStorage.getItem("imgW" + i);
        document.getElementById("tsr" + i)?.appendChild(imgElement);

        //p von Name 
        let name: HTMLParagraphElement = document.createElement("h1");
        name.innerHTML = <string> localStorage.getItem("nameW" + i);
        document.getElementById("tsr" + i)?.appendChild(name);

        //p von Preis
        let preis: HTMLParagraphElement = document.createElement("p");
        preis.innerHTML = <string> localStorage.getItem("preisW" + i) + "€";
        document.getElementById("tsr" + i)?.appendChild(preis);
        zwischenSp = parseFloat(localStorage.getItem("preisW" + i)!);
        summe = summe + zwischenSp; 
        newDiv.setAttribute("preis", zwischenSp.toString() );


        //p Beschreibung
        let desc: HTMLParagraphElement = document.createElement("p");
        desc.innerHTML = <string> localStorage.getItem("beschreibungW" + i);
        document.getElementById("tsr" + i)?.appendChild(desc);
        

        //löschen button
        let loeschen: HTMLButtonElement = document.createElement("button");
        loeschen.innerHTML = "löschen";
        loeschen.setAttribute("tsrIndex", i.toString());
        loeschen.addEventListener("click", handlerLoeschButton);
        newDiv.appendChild(loeschen);
    }

    let allesLoeschen: HTMLButtonElement = document.createElement("button");
    allesLoeschen.id = "wegmachen"; 
    allesLoeschen.innerHTML = "Warenkorb löschen";
    allesLoeschen.addEventListener("click", handlerAllesLoeschen);
    document.getElementById("leeren")?.appendChild(allesLoeschen);

    let gesamtPreis: HTMLParagraphElement = document.createElement("p");
    gesamtPreis.innerHTML = "GESAMTPREIS: " + summe + "€";
    document.getElementById("gesamtPreis")?.appendChild(gesamtPreis);
    gesamtPreis.id = "summeID";

    function handlerAllesLoeschen(_event: Event): void {
        document.getElementById("wagenProdukte")?.remove();
        localStorage.clear();
        summe = 0;
        gesamtPreis.innerHTML = "GESAMTPREIS: " + summe + "€";
    }

    
    function handlerLoeschButton(_event: Event): void {
        ((<HTMLDivElement>_event.currentTarget).parentElement!).remove();
        summe = summe - parseFloat((<HTMLDivElement>(<HTMLElement>_event.currentTarget).parentElement).getAttribute("preis")!);
        document.getElementById("summeID")!.innerHTML = "GESAMTPREIS: " + summe + "€";
    }


    let zuruecksetzen: HTMLButtonElement = document.createElement("button");
    zuruecksetzen.innerHTML = "Zum Shop";
    document.getElementById("logo")?.appendChild(zuruecksetzen);
    zuruecksetzen.addEventListener("click", handlerZurueck);

    function handlerZurueck(_event: Event): void {
        localStorage.clear();

    }
}