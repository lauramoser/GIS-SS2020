"use strict";
//Artikel mit allen Werten
let gewürztraminer1 = { img: "Gewürztraminer1.jpg", name: "St. Michael-Eppan", preis: 20, beschreibung: "So süß wie dein Schatz" };
let gewürztraminer2 = { img: "Gewürztraminer2.jpg", name: "Nussbaumer", preis: 20, beschreibung: "Herb und süß zugleich" };
let gewürztraminer3 = { img: "Gewürztraminer3.jpg", name: "Wolfberger", preis: 20, beschreibung: "wölfe sind underways" };
let gewürztraminer4 = { img: "Gewürztraminer6.jpg", name: "Wörner", preis: 20, beschreibung: "Schmeckt gut zu Bolognese" };
let gewürztraminer5 = { img: "Gewürztraminer8.jpg", name: "Kurtatsch", preis: 20, beschreibung: "Sieht sehr hochwertig aus" };
let gewürztraminer6 = { img: "Gewürztraminer7.jpg", name: "Königschaffhauser Hasenberg", preis: 20, beschreibung: "Bei dem Namen kann er ja nur gut sein" };
//Array
let gewürztraminer = [gewürztraminer1, gewürztraminer2, gewürztraminer3, gewürztraminer4, gewürztraminer5, gewürztraminer6];
let sauvignon1 = { img: "Sauvignon1.png", name: "Maybach", preis: 20, beschreibung: "Perfekt für den ersten Mai" };
let sauvignon2 = { img: "Sauvignon2.png", name: "Ancyra", preis: 20, beschreibung: "Wieso nicht?" };
let sauvignon3 = { img: "Sauvignon3.png", name: "Lorenz & Söhne", preis: 20, beschreibung: "Bei dem Anblick wird man schwach" };
let sauvignon4 = { img: "Sauvignon4.png", name: "Winkl", preis: 20, beschreibung: "Danach zwinkert man jedem zu" };
let sauvignon5 = { img: "Sauvignon5.png", name: "Hörner", preis: 20, beschreibung: "Wenn Hörner drauf sind kanns nur gut sein" };
let sauvignon6 = { img: "Sauvignon6.png", name: "Isabey", preis: 20, beschreibung: "Ein sehr fruchtiger und süßer Wein" };
let sauvignon = [sauvignon1, sauvignon2, sauvignon3, sauvignon4, sauvignon5, sauvignon6];
let riesling1 = { img: "Riesling1.jpg", name: "Grantschen", preis: 20, beschreibung: "Sehr außergewöhnlicher Geschmack" };
let riesling2 = { img: "Riesling2.jpg", name: "Stagard", preis: 20, beschreibung: "Noch nie so was Gutes getrunken" };
let riesling3 = { img: "Riesling3.jpg", name: "Juwel", preis: 20, beschreibung: "Jeder Trinker ist begeistert" };
let riesling4 = { img: "Riesling4.jpg", name: "Heuchelberg", preis: 20, beschreibung: "Überzeugt mich jedes Mal" };
let riesling5 = { img: "Riesling5.jpg", name: "Heilbronner Stiftsberg", preis: 20, beschreibung: "Gibts was besseres?" };
let riesling6 = { img: "Riesling6.jpg", name: "Allendorf", preis: 20, beschreibung: "Kann dem Etikett nur zustimmen" };
let riesling = [riesling1, riesling2, riesling3, riesling4, riesling5, riesling6];
//Traminer
for (let index = 0; index < gewürztraminer.length; index++) {
    let newDiv = document.createElement("div");
    newDiv.id = "traminer" + index;
    document.getElementById("kategorie1")?.appendChild(newDiv);
    //Bild
    let imgElement = document.createElement("img");
    imgElement.src = gewürztraminer[index].img;
    document.getElementById("traminer" + index)?.appendChild(imgElement);
    //p von Name 
    let name = document.createElement("h1");
    name.innerHTML = gewürztraminer[index].name;
    document.getElementById("traminer" + index)?.appendChild(name);
    //p von Preis
    let preis = document.createElement("p");
    preis.innerHTML = gewürztraminer[index].preis + "€";
    document.getElementById("traminer" + index)?.appendChild(preis);
    //p Beschreibung
    let desc = document.createElement("p");
    desc.innerHTML = gewürztraminer[index].beschreibung;
    document.getElementById("traminer" + index)?.appendChild(desc);
    //kaufen button
    let kaufen = document.createElement("button");
    kaufen.innerHTML = "kaufen";
    document.getElementById("traminer" + index)?.appendChild(kaufen);
}
//Sauvignon
for (let index = 0; index < sauvignon.length; index++) {
    let newDiv = document.createElement("div");
    newDiv.id = "sauvignon" + index;
    document.getElementById("kategorie2")?.appendChild(newDiv);
    let imgElement = document.createElement("img");
    imgElement.src = sauvignon[index].img;
    document.getElementById("sauvignon" + index)?.appendChild(imgElement);
    let name = document.createElement("h1");
    name.innerHTML = sauvignon[index].name;
    document.getElementById("sauvignon" + index)?.appendChild(name);
    let preis = document.createElement("p");
    preis.innerHTML = gewürztraminer[index].preis + "€";
    document.getElementById("sauvignon" + index)?.appendChild(preis);
    let desc = document.createElement("p");
    desc.innerHTML = sauvignon[index].beschreibung;
    document.getElementById("sauvignon" + index)?.appendChild(desc);
    let kaufen = document.createElement("button");
    kaufen.innerHTML = "kaufen";
    document.getElementById("sauvignon" + index)?.appendChild(kaufen);
}
//Riesling
for (let index = 0; index < riesling.length; index++) {
    let newDiv = document.createElement("div");
    newDiv.id = "riesling" + index;
    document.getElementById("kategorie3")?.appendChild(newDiv);
    let imgElement = document.createElement("img");
    imgElement.src = riesling[index].img;
    document.getElementById("riesling" + index)?.appendChild(imgElement);
    let name = document.createElement("h1");
    name.innerHTML = riesling[index].name;
    document.getElementById("riesling" + index)?.appendChild(name);
    let preis = document.createElement("p");
    preis.innerHTML = gewürztraminer[index].preis + "€";
    document.getElementById("riesling" + index)?.appendChild(preis);
    let desc = document.createElement("p");
    desc.innerHTML = riesling[index].beschreibung;
    document.getElementById("riesling" + index)?.appendChild(desc);
    let kaufen = document.createElement("button");
    kaufen.innerHTML = "kaufen";
    document.getElementById("riesling" + index)?.appendChild(kaufen);
}
//# sourceMappingURL=script.js.map