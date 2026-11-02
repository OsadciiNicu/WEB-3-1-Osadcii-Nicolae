let studenti = [
    { id: 1, nume: "Ana Popescu", grupa: "SI-231", varsta: 19, specialitate: "Securitate informațională" },
    { id: 2, nume: "Mihai Rusu", grupa: "SI-231", varsta: 20, specialitate: "Securitate informațională" },
    { id: 3, nume: "Irina Ciobanu", grupa: "PR-232", varsta: 18, specialitate: "Programare" },
    { id: 4, nume: "Andrei Munteanu", grupa: "PR-232", varsta: 21, specialitate: "Programare" }
];

let urmatorulId = 5;

function afiseazaStudenti() {
    let container = document.getElementById("container-studenti");
    container.innerHTML = "";

    if (studenti.length === 0) {
        document.getElementById("mesaj-gol").style.display = "block";
        document.getElementById("numar-studenti").textContent = "Număr de studenți: 0";
        return;
    } else {
        document.getElementById("mesaj-gol").style.display = "none";
    }

    let iconitaDefault = '<svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>';

    studenti.forEach(function(student) {
        let card = document.createElement("div");
        card.className = "card";
        
        card.innerHTML = 
            '<div class="card-header">' +
                '<div class="avatar">' + iconitaDefault + '</div>' +
                '<div>' +
                    '<h3>' + student.nume + '</h3>' +
                    '<p>Grupa: ' + student.grupa + '</p>' +
                '</div>' +
            '</div>' +
            '<div class="card-body">' +
                '<p><span>Vârsta</span> <strong>' + student.varsta + ' ani</strong></p>' +
                '<p><span>Specialitatea</span> <span style="text-align: right;">' + student.specialitate + '</span></p>' +
                '<p><span>Statut</span> <span class="status">Înmatriculat</span></p>' +
                '<button class="btn-sterge" onclick="stergeStudent(' + student.id + ')">Șterge</button>' +
            '</div>';
        
        container.appendChild(card);
    });

    document.getElementById("numar-studenti").textContent = "Număr de studenți: " + studenti.length;
}

function adaugaStudent() {
    let nume = document.getElementById("input-nume").value.trim();
    let grupa = document.getElementById("input-grupa").value.trim();
    let varsta = parseInt(document.getElementById("input-varsta").value);
    let specialitate = document.getElementById("input-specialitate").value.trim();

    if (nume === "" || grupa === "" || specialitate === "" || isNaN(varsta)) {
        alert("Completați toate câmpurile!");
        return;
    }

    if (varsta < 14 || varsta > 100) {
        alert("Vârsta trebuie să fie un număr între 14 și 100!");
        return;
    }

    let studentNou = {
        id: urmatorulId++,
        nume: nume,
        grupa: grupa,
        varsta: varsta,
        specialitate: specialitate
    };

    studenti.push(studentNou);

    document.getElementById("input-nume").value = "";
    document.getElementById("input-grupa").value = "";
    document.getElementById("input-varsta").value = "";
    document.getElementById("input-specialitate").value = "";

    afiseazaStudenti();
}

function stergeStudent(id) {
    let index = studenti.findIndex(function(s) {
        return s.id === id;
    });

    if (index !== -1) {
        studenti.splice(index, 1);
        afiseazaStudenti();
    }
}

function aplicaFlexbox() {
    let container = document.getElementById("container-studenti");
    
    container.style.justifyContent = document.getElementById("select-justify").value;
    container.style.alignItems = document.getElementById("select-align").value;
    container.style.flexWrap = document.getElementById("select-wrap").value;
    
    let gap = document.getElementById("input-gap").value;
    container.style.gap = gap !== "" ? gap + "px" : "0px";
}

afiseazaStudenti();