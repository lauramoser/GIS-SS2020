interface Gewürztraminer {
    img: string;
    name: string;
    preis: string;
    beschreibung: string;

}

let gewürztraminer1: Gewürztraminer = { img: "Gewürztraminer1.jpg", name: "St. Michael-Eppan", preis: "20€", beschreibung: "So süß wie dein Schatz" };
let gewürztraminer2: Gewürztraminer = { img: "Gewürztraminer2.jpg", name: "Nussbaumer", preis: "20€", beschreibung: "Herb und süß zugleich" };
let gewürztraminer3: Gewürztraminer = { img: "Gewürztraminer3.jpg", name: "Wolfberger", preis: "20€", beschreibung: "wölfe sind underways" };
let gewürztraminer4: Gewürztraminer = { img: "Gewürztraminer6.jpg", name: "Wörner", preis: "20€", beschreibung: "Schmeckt gut zu Bolognese" };
let gewürztraminer5: Gewürztraminer = { img: "Gewürztraminer8.jpg", name: "Kurtatsch", preis: "20€", beschreibung: "Sieht sehr hochwertig aus" };
let gewürztraminer6: Gewürztraminer = { img: "Gewürztraminer7.jpg", name: "Königschaffhauser Hasenberg", preis: "20€", beschreibung: "Bei dem Namen kann er ja nur gut sein" };


let gewürztraminer: Gewürztraminer[] = [gewürztraminer1, gewürztraminer2, gewürztraminer3, gewürztraminer4, gewürztraminer5, gewürztraminer6];

for (let index: number = 0; index < gewürztraminer.length; index++) {
    let newDiv: HTMLDivElement = document.createElement("div");
    newDiv.id = "traminer" + index;
    document.getElementById("kategorie1")?.appendChild(newDiv);

    //IMG IN DIV PACKEN
    let imgElement: HTMLImageElement = document.createElement("img");
    imgElement.src = gewürztraminer[index].img;
    document.getElementById("kategorie1" + index)?.appendChild(imgElement);

    //NAME UND PREIS
    let namePrice: HTMLParagraphElement = document.createElement("p");
    namePrice.innerHTML = gewürztraminer[index].name;
    document.getElementById("kategorie1" + index)?.appendChild(namePrice);

    //BESCHREIBUNG
    let desc: HTMLParagraphElement = document.createElement("p");
    desc.innerHTML = gewürztraminer[index].beschreibung;
    document.getElementById("kategorie1" + index)?.appendChild(desc);

    //BUTTON
    let kaufen: HTMLButtonElement = document.createElement("button");
    kaufen.innerHTML = "kaufen";
    document.getElementById("kategorie1" + index)?.appendChild(kaufen);
}


interface Sauvignon {
    img: string;
    name: string;
    preis: string;
    beschreibung: string;

}

let sauvignon1: Sauvignon = { img: "Sauvignon1.jpg", name: "Maybach", preis: "20€", beschreibung: "Perfekt für den ersten Mai" };
let sauvignon2: Sauvignon = { img: "Sauvignon2.jpg", name: "Ancyra", preis: "20€", beschreibung: "Wieso nicht?" };
let sauvignon3: Sauvignon = { img: "Sauvignon3.jpg", name: "Lorenz & Söhne", preis: "20€", beschreibung: "Bei dem Anblick wird man schwach" };
let sauvignon4: Sauvignon = { img: "Sauvignon4.jpg", name: "Winkl", preis: "20€", beschreibung: "Danach zwinkert man jedem zu" };
let sauvignon5: Sauvignon = { img: "Sauvignon5.jpg", name: "Hörner", preis: "20€", beschreibung: "Wenn Hörner drauf sind kanns nur gut sein" };
let sauvignon6: Sauvignon = { img: "Sauvignon6.jpg", name: "Isabey", preis: "20€", beschreibung: "Ein sehr fruchtiger und süßer Wein" };


let sauvignon: Sauvignon[] = [sauvignon1 , sauvignon2, sauvignon3, sauvignon4, sauvignon5, sauvignon6 ];

for (let index: number = 0; index < sauvignon.length; index++) {
    let newDiv: HTMLDivElement = document.createElement("div");
    newDiv.id = "sauvignon" + index;
    document.getElementById("kategorie2")?.appendChild(newDiv);

    //IMG IN DIV PACKEN
    let imgElement: HTMLImageElement = document.createElement("img");
    imgElement.src = sauvignon[index].img;
    document.getElementById("kategorie2" + index)?.appendChild(imgElement);

    //NAME UND PREIS
    let namePrice: HTMLParagraphElement = document.createElement("p");
    namePrice.innerHTML = sauvignon[index].name;
    document.getElementById("kategorie2" + index)?.appendChild(namePrice);

    //BESCHREIBUNG
    let desc: HTMLParagraphElement = document.createElement("p");
    desc.innerHTML = sauvignon[index].beschreibung;
    document.getElementById("kategorie2" + index)?.appendChild(desc);

    //BUTTON
    let kaufen: HTMLButtonElement = document.createElement("button");
    kaufen.innerHTML = "kaufen";
    document.getElementById("kategorie2" + index)?.appendChild(kaufen);
}

interface Riesling {
    img: string;
    name: string;
    preis: string;
    beschreibung: string;

}

let riesling1: Riesling = { img: "Riesling1.jpg", name: "Grantschen", preis: "20€", beschreibung: "Sehr außergewöhnlicher Geschmack" };
let riesling2: Riesling = { img: "Riesling2.jpg", name: "Stagard", preis: "20€", beschreibung: "Noch nie so was Gutes getrunken" };
let riesling3: Riesling = { img: "Riesling3.jpg", name: "Juwel", preis: "20€", beschreibung: "Jeder Trinker ist begeistert" };
let riesling4: Riesling = { img: "Riesling4.jpg", name: "Heuchelberg", preis: "20€", beschreibung: "Überzeugt mich jedes Mal" };
let riesling5: Riesling = { img: "Riesling5.jpg", name: "Heilbronner Stiftsberg", preis: "20€", beschreibung: "Gibts was besseres?" };
let riesling6: Riesling = { img: "Riesling6.jpg", name: "Allendorf", preis: "20€", beschreibung: "Kann dem Etikett nur zustimmen" };


let riesling: Sauvignon[] = [riesling1, riesling2, riesling3, riesling4, riesling5, riesling6];

for (let index: number = 0; index < riesling.length; index++) {
    let newDiv: HTMLDivElement = document.createElement("div");
    newDiv.id = "riesling" + index;
    document.getElementById("kategorie3")?.appendChild(newDiv);

    //IMG IN DIV PACKEN
    let imgElement: HTMLImageElement = document.createElement("img");
    imgElement.src = riesling[index].img;
    document.getElementById("kategorie3" + index)?.appendChild(imgElement);

    //NAME UND PREIS
    let namePrice: HTMLParagraphElement = document.createElement("p");
    namePrice.innerHTML = riesling[index].name;
    document.getElementById("kategorie3" + index)?.appendChild(namePrice);

    //BESCHREIBUNG
    let desc: HTMLParagraphElement = document.createElement("p");
    desc.innerHTML = riesling[index].beschreibung;
    document.getElementById("kategorie3" + index)?.appendChild(desc);

    //BUTTON
    let kaufen: HTMLButtonElement = document.createElement("button");
    kaufen.innerHTML = "kaufen";
    document.getElementById("kategorie3" + index)?.appendChild(kaufen);
}