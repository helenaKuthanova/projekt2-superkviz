let poleOtazek = [
    {
        otazka: "Jaká je ikonická hračka z 80. let?", 
        odpovedi: ["Kimchi", "Lichi", "Monchichi"],
        spravnaOdpoved: "odpoved2",
        ilustrace: "moncicak.jpg"
    },

    {
        otazka: "Jaké je moje nejoblíbenější ovoce?", 
        odpovedi: ["malina", "meloun", "mango"],
        spravnaOdpoved: "odpoved0",
        ilustrace: "ovoce.jpg"
    },

    {
        otazka: "Kurz JavaScriptu je v: ", 
        odpovedi: ["pondělí", "úterý", "pátek"],
        spravnaOdpoved: "odpoved1",
        ilustrace: "pivo.jpg"
    }
];

let skore = 0;

let zadani = document.querySelector("#otazka");
let odpoved0 = document.querySelector("#odpoved0");
let odpoved1 = document.querySelector("#odpoved1");
let odpoved2 = document.querySelector("#odpoved2");

function nacteniOtazky(index) {
    zadani.textContent = poleOtazek[index].otazka;
    odpoved0.textContent = poleOtazek[index].odpovedi[0];
    odpoved1.textContent = poleOtazek[index].odpovedi[1];
    odpoved2.textContent = poleOtazek[index].odpovedi[2];
}

function konec() {
}

// let poleOdpovedi = document.createElement("div.vysledek");
// let nadpis = poleOdpovedi.createElement("h2.nadpis");
// nadpis.textContent = "Výsledek";

function zvoleno(idecko) {
    // jaká možnost byla zvolena

    // porovnám zvolenou možnost a správnou odpověď
    if (idecko == poleOtazek[0].spravnaOdpoved) {
            skore++;
            nacteniOtazky(1);
        }
        if (idecko == poleOtazek[1].spravnaOdpoved) {
            skore++;
            nacteniOtazky(2);
        }

            if (idecko == poleOtazek[2].spravnaOdpoved) {
                skore++;
                console.log("konec");
            }
    }
        // do divu .vysledek přidej otázku + Tvoje odpověď + To je správná odpověď
  

    //else
        // do divu. vysledek přidej otázku + odpověď + Správna odpověď: ...


    // if šlo o 1. nebo 2. otázku
    // if (poleOtazek.indexOf(otazka) == 0) {
    //     console.log("id otazky: " + idecko + " skore: " + skore + "č. " + otazka);
    //     // funkce, která vymění otázku
    //     vymenOtazku();
    // }

    // else

        // funkce pro výpočet úspěšnosti

        // funkce pro zobrazení výsledné obrazovky





