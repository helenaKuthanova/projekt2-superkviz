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


function zvoleno(idecko) {
    return idecko
}
// jak zvenčí přistoupit k té zvolené možnosti?


// zkoušela jsem pokračovat v těle té funkce, takto se mi zvýší skóre i načte další otázka
function zvoleno(idecko) {
    if (idecko == poleOtazek[0].spravnaOdpoved) {
    skore++;
    }
    nacteniOtazky(1)
}

// ale když to chci dát do forcyklu, vrací se mi chyba:
// Cannot read properties of undefined (reading 'otazka') at nacteniOtazky

function zvoleno(idecko) {
    for (i = 0; i <= poleOtazek.length; i++) {
        if (idecko == poleOtazek[i].spravnaOdpoved) {
        skore++;
        }
        nacteniOtazky(i+1)
    }
}

// let tvojeOdpoved = ??? document.getElementById("idecko")


// let poleOdpovedi = document.createElement("div.vysledek");
// let nadpis = poleOdpovedi.createElement("h2.nadpis");
// nadpis.textContent = "Výsledek";



        // do divu .vysledek přidám pomocí appendChild otázku + Tvoje odpověď + To je správná odpověď

    //else
        // do divu. vysledek přidám otázku + Tvoje odpověď + Správna odpověď: ...
