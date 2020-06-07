"use strict";
//Werte initialisiert
var Produkte;
(function (Produkte) {
    //Artikel mit allen Werten
    let gewürztraminer1 = { img: "Gewürztraminer1.jpg", name: "St. Michael-Eppan", preis: 5, beschreibung: "So süß wie dein Schatz", kategorie: "Gewürztraminer" };
    let gewürztraminer2 = { img: "Gewürztraminer2.jpg", name: "Nussbaumer", preis: 2.99, beschreibung: "Herb und süß zugleich", kategorie: "Gewürztraminer" };
    let gewürztraminer3 = { img: "Gewürztraminer3.jpg", name: "Wolfberger", preis: 45, beschreibung: "wölfe sind underways", kategorie: "Gewürztraminer" };
    let gewürztraminer4 = { img: "Gewürztraminer6.jpg", name: "Wörner", preis: 20, beschreibung: "Schmeckt gut zu Bolognese", kategorie: "Gewürztraminer" };
    let gewürztraminer5 = { img: "Gewürztraminer8.jpg", name: "Kurtatsch", preis: 50, beschreibung: "Sieht sehr hochwertig aus", kategorie: "Gewürztraminer" };
    let gewürztraminer6 = { img: "Gewürztraminer7.jpg", name: "Königschaffhauser Hasenberg", preis: 20, beschreibung: "Bei dem Namen kann er ja nur gut sein", kategorie: "Gewürztraminer" };
    let sauvignon1 = { img: "Sauvignon1.png", name: "Maybach", preis: 60, beschreibung: "Perfekt für den ersten Mai", kategorie: "Sauvignon" };
    let sauvignon2 = { img: "Sauvignon2.png", name: "Ancyra", preis: 480, beschreibung: "Wieso nicht?", kategorie: "Sauvignon" };
    let sauvignon3 = { img: "Sauvignon3.png", name: "Lorenz & Söhne", preis: 6.60, beschreibung: "Bei dem Anblick wird man schwach", kategorie: "Sauvignon" };
    let sauvignon4 = { img: "Sauvignon4.png", name: "Winkl", preis: 2.06, beschreibung: "Danach zwinkert man jedem zu", kategorie: "Sauvignon" };
    let sauvignon5 = { img: "Sauvignon5.png", name: "Hörner", preis: 2.34, beschreibung: "Wenn Hörner drauf sind kanns nur gut sein", kategorie: "Sauvignon" };
    let sauvignon6 = { img: "Sauvignon6.png", name: "Isabey", preis: 10, beschreibung: "Ein sehr fruchtiger und süßer Wein", kategorie: "Sauvignon" };
    let riesling1 = { img: "Riesling1.jpg", name: "Grantschen", preis: 2.60, beschreibung: "Sehr außergewöhnlicher Geschmack", kategorie: "Riesling" };
    let riesling2 = { img: "Riesling2.jpg", name: "Stagard", preis: 2230, beschreibung: "Noch nie so was Gutes getrunken", kategorie: "Riesling" };
    let riesling3 = { img: "Riesling3.jpg", name: "Juwel", preis: 290, beschreibung: "Jeder Trinker ist begeistert", kategorie: "Riesling" };
    let riesling4 = { img: "Riesling4.jpg", name: "Heuchelberg", preis: 9.87, beschreibung: "Überzeugt mich jedes Mal", kategorie: "Riesling" };
    let riesling5 = { img: "Riesling5.jpg", name: "Heilbronner Stiftsberg", preis: 90, beschreibung: "Gibts was besseres?", kategorie: "Riesling" };
    let riesling6 = { img: "Riesling6.jpg", name: "Allendorf", preis: 23, beschreibung: "Kann dem Etikett nur zustimmen", kategorie: "Riesling" };
    //Array
    let weine = [gewürztraminer1, gewürztraminer2, gewürztraminer3, gewürztraminer4, gewürztraminer5, gewürztraminer6, sauvignon1, sauvignon2, sauvignon3, sauvignon4, sauvignon5, sauvignon6, riesling1, riesling2, riesling3, riesling4, riesling5, riesling6];
    for (let i = 0; i < weine.length; i++) {
        switch (weine[i].kategorie) {
            case "Gewürztraminer":
                let newDiv1 = document.createElement("div");
                newDiv1.id = "tsr" + i;
                newDiv1.classList.add("traminerClass");
                document.getElementById("kategorie1")?.appendChild(newDiv1);
                break;
            case "Sauvignon":
                let newDiv2 = document.createElement("div");
                newDiv2.id = "tsr" + i;
                newDiv2.classList.add("sauvignonClass");
                document.getElementById("kategorie2")?.appendChild(newDiv2);
                break;
            case "Riesling":
                let newDiv3 = document.createElement("div");
                newDiv3.id = "tsr" + i;
                newDiv3.classList.add("rieslingClass");
                document.getElementById("kategorie3")?.appendChild(newDiv3);
                break;
        }
        //Bild
        let imgElement = document.createElement("img");
        imgElement.src = weine[i].img;
        document.getElementById("tsr" + i)?.appendChild(imgElement);
        //p von Name 
        let name = document.createElement("h1");
        name.innerHTML = weine[i].name;
        document.getElementById("tsr" + i)?.appendChild(name);
        //p von Preis
        let preis = document.createElement("p");
        preis.innerHTML = weine[i].preis + "€";
        document.getElementById("tsr" + i)?.appendChild(preis);
        //p Beschreibung
        let desc = document.createElement("p");
        desc.innerHTML = weine[i].beschreibung;
        document.getElementById("tsr" + i)?.appendChild(desc);
        //kaufen button
        let kaufen = document.createElement("button");
        kaufen.innerHTML = "kaufen";
        kaufen.addEventListener("click", handleWarenkorb);
        document.getElementById("tsr" + i)?.appendChild(kaufen);
    }
    let zaehler = 0;
    function handleWarenkorb(_event) {
        zaehler++;
        if (zaehler == 1) {
            document.getElementById("header")?.appendChild(newDiv);
            zähler.innerHTML = zaehler + "";
            document.getElementById("count")?.appendChild(zähler);
        }
        if (zaehler > 1) {
            zähler.innerHTML = zaehler + "";
        }
        let irgendwas = _event.target;
        let irgendwas2 = irgendwas.dataset.karl;
        summe = summe + parseFloat(irgendwas2);
        console.log(summe + " Euro");
    }
})(Produkte || (Produkte = {}));
//# sourceMappingURL=script.js.map