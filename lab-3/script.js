function calculeazaSuma(a, b) {
    return a + b;
}

console.log("Ex1 - Suma 5 + 3 =", calculeazaSuma(5, 3));
console.log("Ex1 - Suma 10 + 20 =", calculeazaSuma(10, 20));


let elev = {
    nume: "Nicolae",
    varsta: 18,
    nota: 9,

    prezinta: function() {
        console.log("Sunt " + this.nume + " și am " + this.varsta + " ani.");
    }
};

elev.prezinta();

elev.nota = 10;
console.log("Ex2 - Nota nouă:", elev.nota);


const variante = ["piatra", "hartia", "foarfeca"];

let scorJoc = {
    jucator: 0,
    calculator: 0,
    egalitati: 0,
    rundeJucate: 0,

    afiseazaScor: function() {
        alert(
            "Scor actual:\n" +
            "Jucător: " + this.jucator + "\n" +
            "Calculator: " + this.calculator + "\n" +
            "Egalități: " + this.egalitati
        );
    },

    reseteaza: function() {
        this.jucator = 0;
        this.calculator = 0;
        this.egalitati = 0;
        this.rundeJucate = 0;
    }
};

function alegeCalculator() {
    let index = Math.floor(Math.random() * 3);
    return variante[index];
}

function stabilesteCastigator(jucator, calculator) {
    if (jucator === calculator) {
        return "egalitate";
    }
    if (
        (jucator === "piatra" && calculator === "foarfeca") ||
        (jucator === "foarfeca" && calculator === "hartia") ||
        (jucator === "hartia" && calculator === "piatra")
    ) {
        return "jucator";
    }
    return "calculator";
}

function joacaRunda(alegereJucator) {
    let alegereCalculator = alegeCalculator();
    let rezultat = stabilesteCastigator(alegereJucator, alegereCalculator);

    if (rezultat === "jucator") {
        scorJoc.jucator++;
    } else if (rezultat === "calculator") {
        scorJoc.calculator++;
    } else {
        scorJoc.egalitati++;
    }
    scorJoc.rundeJucate++;

    document.getElementById("alegere-jucator").textContent = alegereJucator;
    document.getElementById("alegere-calculator").textContent = alegereCalculator;

    let mesajRezultat = "";
    if (rezultat === "jucator") {
        mesajRezultat = "Ai câștigat!";
    } else if (rezultat === "calculator") {
        mesajRezultat = "Calculatorul a câștigat!";
    } else {
        mesajRezultat = "Egalitate!";
    }
    document.getElementById("rezultat").textContent = mesajRezultat;

    document.getElementById("scor-jucator").textContent = scorJoc.jucator;
    document.getElementById("scor-calculator").textContent = scorJoc.calculator;
    document.getElementById("scor-egal").textContent = scorJoc.egalitati;
    document.getElementById("runde").textContent = scorJoc.rundeJucate;

    scorJoc.afiseazaScor();

    verificaCastigatorFinal();
}

function verificaCastigatorFinal() {
    if (scorJoc.jucator === 5) {
        alert("🏆 Felicitări! Ai câștigat jocul cu 5 victorii!");
        scorJoc.reseteaza();
        actualizeazaScorAfisat();
    } else if (scorJoc.calculator === 5) {
        alert("💻 Calculatorul a câștigat jocul cu 5 victorii!");
        scorJoc.reseteaza();
        actualizeazaScorAfisat();
    }
}

function actualizeazaScorAfisat() {
    document.getElementById("scor-jucator").textContent = scorJoc.jucator;
    document.getElementById("scor-calculator").textContent = scorJoc.calculator;
    document.getElementById("scor-egal").textContent = scorJoc.egalitati;
    document.getElementById("runde").textContent = scorJoc.rundeJucate;
    document.getElementById("alegere-jucator").textContent = "-";
    document.getElementById("alegere-calculator").textContent = "-";
    document.getElementById("rezultat").textContent = "-";
}

document.getElementById("btn-piatra").addEventListener("click", function() {
    joacaRunda("piatra");
});

document.getElementById("btn-hartia").addEventListener("click", function() {
    joacaRunda("hartia");
});

document.getElementById("btn-foarfeca").addEventListener("click", function() {
    joacaRunda("foarfeca");
});

document.getElementById("btn-reset").addEventListener("click", function() {
    scorJoc.reseteaza();
    actualizeazaScorAfisat();
    alert("Joc resetat! Scorul a fost setat la 0.");
});