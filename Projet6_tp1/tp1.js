


    function generate_table() {
    var prenom = document.getElementById("prenom").value;
    var nom = document.getElementById("nom").value;
    var email = document.getElementById("email").value;
    var role = document.getElementById("role").value;

    if (prenom == "secret") {
    alert("Secret Action Discovered");
    secretAction();
}

    var tbl = document.getElementById("tableau");
    var tblBody = document.getElementById("menu");

    if (prenom == "" || nom == "" || email == "") {
    alert("Champ vide !");
    return false;
} else {
    var row = document.createElement("tr");

    var cell = document.createElement("td");
    cell.setAttribute('data-label', 'Prenom');
    var cellText = document.createTextNode(prenom);
    cell.appendChild(cellText);
    row.appendChild(cell);

    var cell = document.createElement("td");
    cell.setAttribute('data-label', 'Nom');
    var cellText = document.createTextNode(nom);
    cell.appendChild(cellText);
    row.appendChild(cell);

    var cell = document.createElement("td");
    cell.setAttribute('data-label', 'Email');
    var cellText = document.createTextNode(email);
    cell.appendChild(cellText);
    row.appendChild(cell);

    var cell = document.createElement("td");
    cell.setAttribute('data-label', 'Role');
    var cellText = document.createTextNode(role);
    cell.appendChild(cellText);
    row.appendChild(cell);

    tblBody.appendChild(row);

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);
}

}


    function c() {
        var tableau = document.getElementById('tableau');
        var Ltableau = tableau.rows.length;

        for (i = 0; i < Ltableau; i++) {
            var Ctableau = tableau.rows.item(i).cells;
            var cellLength = Ctableau.length;

            for (var j = 0; j < cellLength; j++) {

                var cellVal = Ctableau.item(j);
                console.log(cellVal);
            }
        }

    }



    function Supprimer() {
    let menu = document.getElementById('menu');
    menu.innerHTML = '';
}


    //partie 2
    function declenche() {

    var count1 = 5;
    var myBtn = document.getElementById("nbutton");

    var myTimer = setInterval(function () {
    myBtn.disabled = true;
    myBtn.style.opacity = "0.7";

    myBtn.innerHTML = "Ajouter" + " (" + count1 + ")";
    count1--;
    if (count1 == 0) {
    clearInterval(myTimer);
}


    myBtn.addEventListener('click', function () {
    if (myBtn.disabled == true) alert("mauvais comportement");
});

    setTimeout(function () {
    myBtn.disabled = false;
    myBtn.innerHTML = "Ajouter"
    myBtn.style.opacity = "100%";
}, 5000);

}, 1000);

}

    var mytest = document.getElementById("nbutton");
    var myFrom = document.getElementById("formulaire");
    var CountButton = 1;
    mytest.addEventListener("click", function () {
    CountButton += 1;
    if (CountButton == 5) {
    myFrom.style.visibility = "hidden";
    setTimeout(function () {
    myFrom.style.visibility = "visible";
}, 5000);
}

});

    var rotated = false;

    document.getElementById('rotation').onclick = function () {
    var div = document.getElementById('formulaire'),
    deg = rotated ? 0 : 180;

    div.style.webkitTransform = 'rotate(' + deg + 'deg)';
    div.style.mozTransform = 'rotate(' + deg + 'deg)';
    div.style.msTransform = 'rotate(' + deg + 'deg)';
    div.style.oTransform = 'rotate(' + deg + 'deg)';
    div.style.transform = 'rotate(' + deg + 'deg)';

    rotated = !rotated;
}


    function remove(elem) {
    elem.parentNode.removeChild(elem);
}

    function secretAction() {

    document.getElementById("body").style.cursor = "crosshair";
    document.getElementById('logo').setAttribute('onclick', 'remove(this)');
    document.getElementById('tableau').setAttribute('onclick', 'remove(this)');



}
