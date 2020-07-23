"use strict";
//Werte initialisiert
var Produkte;
(function (Produkte) {
    function produkteErstellen() {
        let artikelClass;
        let artikelKategorie;
        for (let i = 0; i < Produkte.weine.length; i++) {
            switch (Produkte.weine[i].kategorie) {
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
            let newDiv = document.createElement("div");
            newDiv.id = "tsr" + i;
            newDiv.classList.add(artikelClass);
            document.getElementById(artikelKategorie)?.appendChild(newDiv);
            newDiv.setAttribute("zaehler", i.toString());
            //Bild
            let imgElement = document.createElement("img");
            imgElement.src = Produkte.weine[i].img;
            document.getElementById("tsr" + i)?.appendChild(imgElement);
            //p von Name 
            let name = document.createElement("h1");
            name.innerHTML = Produkte.weine[i].name;
            document.getElementById("tsr" + i)?.appendChild(name);
            //p von Preis
            let preis = document.createElement("p");
            preis.innerHTML = Produkte.weine[i].preis + "€";
            document.getElementById("tsr" + i)?.appendChild(preis);
            //p Beschreibung
            let desc = document.createElement("p");
            desc.innerHTML = Produkte.weine[i].beschreibung;
            document.getElementById("tsr" + i)?.appendChild(desc);
            //kaufen button
            let kaufen = document.createElement("button");
            kaufen.innerHTML = "kaufen";
            kaufen.setAttribute("tsrIndex", i.toString());
            kaufen.addEventListener("click", handleWarenkorb);
            document.getElementById("tsr" + i)?.appendChild(kaufen);
        }
    }
    Produkte.produkteErstellen = produkteErstellen;
    let clickZaehler;
    clickZaehler = 0;
    let gesamtPreis;
    gesamtPreis = 0;
    let zaehlerWagen = document.createElement("div");
    zaehlerWagen.id = "zaehlerWagenID";
    let i2;
    i2 = 0;
    function handleWarenkorb(_event) {
        clickZaehler++;
        let target = _event.target;
        let tsrIndex = parseInt(target.getAttribute("tsrIndex"));
        if (localStorage.clickZaehler) {
            localStorage.clickZaehler = Number(localStorage.clickZaehler) + 1;
        }
        else {
            localStorage.clickZaehler = 1;
        }
        console.log(localStorage.clickZaehler);
        zaehlerWagen.innerHTML = localStorage.clickZaehler + "";
        if (clickZaehler > 0) {
            document.getElementById("header")?.appendChild(zaehlerWagen);
            gesamtPreis = gesamtPreis + Produkte.weine[tsrIndex].preis;
            console.log(gesamtPreis + "€");
        }
        let rechner = _event.currentTarget.parentElement.getAttribute("zaehler");
        localStorage.setItem("imgW" + i2, Produkte.weine[parseInt(rechner)].img + "");
        localStorage.setItem("nameW" + i2, Produkte.weine[parseInt(rechner)].name + "");
        localStorage.setItem("preisW" + i2, Produkte.weine[parseInt(rechner)].preis + "");
        localStorage.setItem("beschreibungW" + i2, Produkte.weine[parseInt(rechner)].beschreibung + "");
        i2++;
    }
    document.getElementById("traminer")?.addEventListener("click", handlerLoeschen);
    document.getElementById("gnon")?.addEventListener("click", handlerLoeschen);
    document.getElementById("ling")?.addEventListener("click", handlerLoeschen);
    document.getElementById("alle")?.addEventListener("click", handlerLoeschen);
    function handlerLoeschen(_event) {
        let target = _event.target;
        let kategorie = target.getAttribute("href");
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
        else if (kategorie == "#alleWeine") {
            document.getElementById("GKat")?.setAttribute("style", "display : block");
            document.getElementById("SKat")?.setAttribute("style", "display : block");
            document.getElementById("RKat")?.setAttribute("style", "display : block");
        }
    }
})(Produkte || (Produkte = {}));
//# sourceMappingURL=script.js.map