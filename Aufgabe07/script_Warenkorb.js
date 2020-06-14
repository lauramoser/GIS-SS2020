"use strict";
var Produkte;
(function (Produkte) {
    let summe = 0;
    let zwischenSp = 0;
    for (let i = 0; i < localStorage.clickZaehler; i++) {
        let newDiv = document.createElement("div");
        newDiv.id = "tsr" + i;
        newDiv.classList.add("warenkorbClass");
        document.getElementById("wagenProdukte")?.appendChild(newDiv);
        //Bild
        let imgElement = document.createElement("img");
        imgElement.src = localStorage.getItem("imgW" + i);
        document.getElementById("tsr" + i)?.appendChild(imgElement);
        //p von Name 
        let name = document.createElement("h1");
        name.innerHTML = localStorage.getItem("nameW" + i);
        document.getElementById("tsr" + i)?.appendChild(name);
        //p von Preis
        let preis = document.createElement("p");
        preis.innerHTML = localStorage.getItem("preisW" + i) + "€";
        document.getElementById("tsr" + i)?.appendChild(preis);
        zwischenSp = parseFloat(localStorage.getItem("preisW" + i));
        summe = summe + zwischenSp;
        newDiv.setAttribute("preis", zwischenSp.toString());
        //p Beschreibung
        let desc = document.createElement("p");
        desc.innerHTML = localStorage.getItem("beschreibungW" + i);
        document.getElementById("tsr" + i)?.appendChild(desc);
        //löschen button
        let loeschen = document.createElement("button");
        loeschen.innerHTML = "löschen";
        loeschen.setAttribute("tsrIndex", i.toString());
        loeschen.addEventListener("click", handlerLoeschButton);
        newDiv.appendChild(loeschen);
    }
    let allesLoeschen = document.createElement("button");
    allesLoeschen.id = "wegmachen";
    allesLoeschen.innerHTML = "Warenkorb löschen";
    allesLoeschen.addEventListener("click", handlerAllesLoeschen);
    document.getElementById("leeren")?.appendChild(allesLoeschen);
    let gesamtPreis = document.createElement("p");
    gesamtPreis.innerHTML = "GESAMTPREIS: " + summe + "€";
    document.getElementById("gesamtPreis")?.appendChild(gesamtPreis);
    gesamtPreis.id = "summeID";
    function handlerAllesLoeschen(_event) {
        document.getElementById("wagenProdukte")?.remove();
        localStorage.clear();
        summe = 0;
        gesamtPreis.innerHTML = "GESAMTPREIS: " + summe + "€";
    }
    function handlerLoeschButton(_event) {
        (_event.currentTarget.parentElement).remove();
        summe = summe - parseFloat(_event.currentTarget.parentElement.getAttribute("preis"));
        document.getElementById("summeID").innerHTML = "GESAMTPREIS: " + summe + "€";
    }
    let zuruecksetzen = document.createElement("button");
    zuruecksetzen.innerHTML = "Zum Shop";
    document.getElementById("logo")?.appendChild(zuruecksetzen);
    zuruecksetzen.addEventListener("click", handlerZurueck);
    function handlerZurueck(_event) {
        localStorage.clear();
    }
})(Produkte || (Produkte = {}));
//# sourceMappingURL=script_Warenkorb.js.map