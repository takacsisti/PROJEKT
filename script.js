const szavak = ["létra", "körte", "oliva", "tehén", "ponty", "penge", "pacal", "opera", "kréta", "ópium"];
let tszo = szavak[Math.floor(Math.random() * szavak.length)];
let probalkozasok = 0;
const maxp = 10;

function a() {
    var t = n(document.getElementById("t").value);  
    var v = document.getElementById("v");
    var p = document.getElementById("p");

    if (t.length !== 5) {
        v.textContent = "A szónak 5 betűsnek kell lennie!";
        return;
    }

    probalkozasok++;

    var vi = "";
    for (var i = 0; i < t.length; i++) {
        if (t[i] === tszo[i]) {
            vi += "<span style='color:green;'>" + t[i] + "</span>";
        } else if (tszo.includes(t[i])) {
            vi += "<span style='color:orange;'>" + t[i] + "</span>";
        } else {
            vi += "<span style='color:red;'>" + t[i] + "</span>";
        }
    }

    if (t === tszo) {
        v.innerHTML = "Gratulálok, kitaláltad a szót " + probalkozasok + " próbálkozásból!";
        document.getElementById("t").disabled = true;
        document.getElementById("ujJatekBtn").style.display = "block";
    } else if (probalkozasok >= maxp) {
        v.innerHTML = "Elfogytak a próbálkozások! A szó: " + tszo;
        document.getElementById("t").disabled = true;
        document.getElementById("ujJatekBtn").style.display = "block";
    } else {
        v.innerHTML = vi;
        p.innerHTML += "<p>" + vi + "</p>";
    }

    document.getElementById("t").value = "";
}

function ujJatek() {
    tszo = szavak[Math.floor(Math.random() * szavak.length)];
    probalkozasok = 0;

    document.getElementById("t").value = "";
    document.getElementById("t").disabled = false;
    document.getElementById("v").innerHTML = "";
    document.getElementById("p").innerHTML = "";
    document.getElementById("ujJatekBtn").style.display = "none";
}

function n(szoveg) {
    return szoveg.normalize().toLowerCase();
}