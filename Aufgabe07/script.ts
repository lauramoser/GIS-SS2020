
//Werte initialisiert
namespace Produkte {

    export function produkteErstellen(): void {

        
        let artikelClass: string;
        let artikelKategorie: string;

        for (let i: number = 0; i < weine.length; i++) {
         switch (weine[i].kategorie) {
            case "Gewürztraminer":
                artikelClass = "traminerClass";
                artikelKategorie = "kategorie1";

                break;

            case "Sauvignon":
                artikelClass = "sauvignonClass";
                artikelKategorie = "kategorie2";

                break;

            case "Riesling":
                artikelClass = "rieslingClass";
                artikelKategorie = "kategorie3";

                break;

            default: 
                artikelClass = "";
                artikelKategorie = "";

                break;
            }

         let newDiv: HTMLDivElement = document.createElement("div");
         newDiv.id = "tsr" + i;
         newDiv.classList.add(artikelClass);
         document.getElementById(artikelKategorie)?.appendChild(newDiv);
         newDiv.setAttribute("zaehler", i.toString());

        //Bild
         let imgElement: HTMLImageElement = document.createElement("img");
         imgElement.src = weine[i].img;
         document.getElementById("tsr" + i)?.appendChild(imgElement);

        //p von Name 
         let name: HTMLParagraphElement = document.createElement("h1");
         name.innerHTML = weine[i].name;
         document.getElementById("tsr" + i)?.appendChild(name);

        //p von Preis
         let preis: HTMLParagraphElement = document.createElement("p");
         preis.innerHTML = weine[i].preis + "€";
         document.getElementById("tsr" + i)?.appendChild(preis);

        //p Beschreibung
         let desc: HTMLParagraphElement = document.createElement("p");
         desc.innerHTML = weine[i].beschreibung;
         document.getElementById("tsr" + i)?.appendChild(desc);
        

        //kaufen button
         let kaufen: HTMLButtonElement = document.createElement("button");
         kaufen.innerHTML = "kaufen";
         kaufen.setAttribute("tsrIndex", i.toString());
         kaufen.addEventListener("click", handleWarenkorb);
         document.getElementById("tsr" + i)?.appendChild(kaufen);
    }

   }
  
    let clickZaehler: number;
    clickZaehler = 0;
    let gesamtPreis: number;
    gesamtPreis = 0;
    let zaehlerWagen: HTMLDivElement = document.createElement("div");
    zaehlerWagen.id = "zaehlerWagenID";
    let i2: number;
    i2 = 0;
    
    function handleWarenkorb(_event: Event): void {
        clickZaehler++;
        let target: HTMLElement = (<HTMLElement>_event.target);
        let tsrIndex: number = parseInt(target.getAttribute("tsrIndex")!);
        
        if (localStorage.clickZaehler) {
            localStorage.clickZaehler = Number(localStorage.clickZaehler) + 1;

          } else {
            localStorage.clickZaehler = 1;
          }

        console.log(localStorage.clickZaehler);
        zaehlerWagen.innerHTML = localStorage.clickZaehler + "";

        

        if (clickZaehler > 0) {
            document.getElementById("header")?.appendChild(zaehlerWagen);

            gesamtPreis = gesamtPreis + weine[tsrIndex].preis;
            console.log (gesamtPreis + "€");
        }

        let rechner: string = (<HTMLDivElement>(<HTMLElement>_event.currentTarget).parentElement).getAttribute("zaehler")!;
        localStorage.setItem("imgW" + i2, weine[parseInt(rechner)].img + "");
        localStorage.setItem("nameW" + i2, weine[parseInt(rechner)].name + "");
        localStorage.setItem("preisW" + i2, weine[parseInt(rechner)].preis + "");
        localStorage.setItem("beschreibungW" + i2, weine[parseInt(rechner)].beschreibung + "");
        i2++;
    }

    


    document.getElementById("traminer")?.addEventListener("click", handlerLoeschen);
    document.getElementById("gnon")?.addEventListener("click", handlerLoeschen);
    document.getElementById("ling")?.addEventListener("click", handlerLoeschen);
    document.getElementById("alle")?.addEventListener("click", handlerLoeschen);

    function handlerLoeschen(_event: Event): void {
        let target: HTMLElement = (<HTMLElement>_event.target);
        let kategorie: string = target.getAttribute("href")!;
        console.log(target);

        if (kategorie == "#Gewürztraminer") {
            document.getElementById("SKat")?.setAttribute("style", "display : none");
            document.getElementById("RKat")?.setAttribute("style", "display : none");
            document.getElementById("GKat")?.setAttribute("style", "display : block");

        }

        if (kategorie == "#Sauvignon") {
            document.getElementById("GKat")?.setAttribute("style", "display : none");
            document.getElementById("RKat")?.setAttribute("style", "display : none");
            document.getElementById("SKat")?.setAttribute("style", "display : block");
        }

        if (kategorie == "#Riesling") {
            document.getElementById("GKat")?.setAttribute("style", "display : none");
            document.getElementById("SKat")?.setAttribute("style", "display : none");
            document.getElementById("RKat")?.setAttribute("style", "display : block");
        }

        else if (kategorie == "#alleWeine" ) {
            document.getElementById("GKat")?.setAttribute("style", "display : block");
            document.getElementById("SKat")?.setAttribute("style", "display : block");
            document.getElementById("RKat")?.setAttribute("style", "display : block");
        }

    }
}
