let fructe = ["Măr", "Pară", "Banana", "Portocală", "Kiwi"];

console.log("Ex1 - Lista:", fructe);
console.log("Ex1 - Primul:", fructe[0]);
console.log("Ex1 - Ultimul:", fructe[fructe.length - 1]);
console.log("Ex1 - Număr elemente:", fructe.length);


let orase = ["Chișinău", "Bălți", "Cahul"];

orase.push("Orhei");
orase.unshift("Soroca");
orase.pop();
orase.shift();

console.log("Ex2 - Lista finală:", orase);


let produse = ["Pâine", "Lapte", "Ouă"];

function afiseazaProduse() {
    let zona = document.getElementById("lista-produse");
    if (produse.length === 0) {
        zona.textContent = "Lista este goală!";
    } else {
        zona.textContent = produse.join(" | ");
    }
}

document.getElementById("btn-adauga-sfarsit").addEventListener("click", function() {
    let valoare = document.getElementById("input-produs").value;
    if (valoare !== "") {
        produse.push(valoare);
        document.getElementById("input-produs").value = "";
        afiseazaProduse();
    }
});

document.getElementById("btn-adauga-inceput").addEventListener("click", function() {
    let valoare = document.getElementById("input-produs").value;
    if (valoare !== "") {
        produse.unshift(valoare);
        document.getElementById("input-produs").value = "";
        afiseazaProduse();
    }
});

document.getElementById("btn-sterge-primul").addEventListener("click", function() {
    produse.shift();
    afiseazaProduse();
});

document.getElementById("btn-sterge-ultimul").addEventListener("click", function() {
    produse.pop();
    afiseazaProduse();
});

afiseazaProduse();


let elevi = [
    { nume: "Popescu Ana", varsta: 17, nota: 9 },
    { nume: "Rusu Mihai", varsta: 18, nota: 8 },
    { nume: "Ciobanu Maria", varsta: 17, nota: 10 }
];

function afiseazaElevi() {
    let catalog = document.getElementById("catalog");
    catalog.innerHTML = "";

    elevi.forEach(function(elev, index) {
        let div = document.createElement("div");
        div.className = "elev";
        div.innerHTML =
            "<strong>" + (index + 1) + ". " + elev.nume + "</strong><br>" +
            "Vârsta: " + elev.varsta + "<br>" +
            "Nota: " + elev.nota;
        catalog.appendChild(div);
    });

    document.getElementById("numar-elevi").textContent = elevi.length;
}

function adaugaElev() {
    let nume = document.getElementById("input-nume").value;
    let varsta = Number(document.getElementById("input-varsta").value);
    let nota = Number(document.getElementById("input-nota").value);

    if (nume !== "" && varsta !== 0 && nota !== 0) {
        let elevNou = {
            nume: nume,
            varsta: varsta,
            nota: nota
        };
        elevi.push(elevNou);
        document.getElementById("input-nume").value = "";
        document.getElementById("input-varsta").value = "";
        document.getElementById("input-nota").value = "";
        afiseazaElevi();
    }
}

function stergeElev() {
    let numeCautat = document.getElementById("input-sterge").value;
    let index = elevi.findIndex(function(elev) {
        return elev.nume === numeCautat;
    });

    if (index !== -1) {
        elevi.splice(index, 1);
        document.getElementById("input-sterge").value = "";
        afiseazaElevi();
    } else {
        alert("Elevul nu a fost găsit!");
    }
}

function cautaElev() {
    let numeCautat = document.getElementById("input-cauta").value;
    let rezultat = document.getElementById("rezultat-cautare");

    let gasit = elevi.find(function(elev) {
        return elev.nume === numeCautat;
    });

    if (gasit) {
        rezultat.textContent = "Elev găsit! Nume: " + gasit.nume + ", Vârsta: " + gasit.varsta + ", Nota: " + gasit.nota;
    } else {
        rezultat.textContent = "Elevul nu a fost găsit!";
    }
}

document.getElementById("btn-adauga-elev").addEventListener("click", adaugaElev);
document.getElementById("btn-sterge-elev").addEventListener("click", stergeElev);
document.getElementById("btn-cauta-elev").addEventListener("click", cautaElev);

afiseazaElevi();