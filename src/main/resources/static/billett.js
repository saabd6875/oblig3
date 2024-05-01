
//let objArray= [];
function regBillett() {
    console.log("button clicked");
    billett = {

        "film": document.getElementById("film").value,
        "quantity" : document.getElementById("quantity").value,
        "fname": document.getElementById("fname").value,
        "lname": document.getElementById("lname").value,
        "phonenr": document.getElementById("phonenr").value,
        "epost" : document.getElementById("epost").value
    }
    $.post("/lagre", billett, function (movies) {
        console.log("values sent to database");
        document.getElementById("film").value = "";
        document.getElementById("quantity").value = "";
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("phonenr").value = "";
        document.getElementById("epost").value = "";
    }).fail(function (xhr, status, error) {
        console.error("Failed to send data to database", error)
    });
}
/**
 console.log(objArray);
 populateHTML(objArray);
 }
function populateHTML(objArr){
    console.log("array")
    let html = "<ol>";
    console.log(objArr)
    for (let i in objArr){
        console.log(objArr[i].fnameKey)
        html += "<li>" +  objArr[i].filmkey +" " + objArr[i].antallkey + " " +  objArr[i].fnameKey +
            " " + objArr[i].lnameKey + " " + objArr[i].phonenrKey + " " + objArr[i].mailKey + "</li>";
    }
    html += "</ol>"
    document.getElementById("resultObject").innerHTML = html;
    console.log(html)
} **/
//funksjon som henter alle ordre / daata som ble registrert.
function hentAlle(){
    $.get("/hentAlle", function (movies){
        console.log(movies);
        let ut = "<table class='table table-striped'><tr><th>last name</th><th>First name</th><th>phone nr</th><th>E post</th><th>quantity</th><th>Movie</th></tr>";
        movies.forEach(function (movie){
            ut += "<tr><td>"+ movie.lname + "</td>" +
                "<td>" + movie.fname + "</td>" +
                "<td>" + movie.phonenr + "</td>" +
                "<td>" + movie.epost + "</td>" +
                "<td>" + movie.quantity + "</td>" +
                "<td>" + movie.film + "<td>" +
                "<button class='btn btn-danger' onclick='updateBillett(" + movie.id+ ")'>Choose</button></td>" +
                "<td>"+"<button class='btn btn-danger' onclick='slettEn(" + movie.id + ")'>Slett</button></td></tr>";
        })
        ut +="</table>";
        document.getElementById("ordre").innerHTML = ut;
        //formaterData(movies);
    })

}
function updateBillett(id){
    document.getElementById("idBillett").innerHTML = id;
    $.get("/getBillettFromDB?id=" + id , function (movies){
        document.getElementById("lnameEdit").value = movies.lname;
        document.getElementById("fnameEdit").value = movies.fname;
        document.getElementById("phonenrEdit").value = movies.phonenr;
        document.getElementById("epostEdit").value = movies.epost;
        document.getElementById("quantityEdit").value = movies.quantity;
        document.getElementById("filmEdit").value = movies.film;
    })
    console.log(id);
}

function updateBillettInD(){
    billett ={
        "id": document.getElementById("idBillett").innerHTML,
        "lname":document.getElementById("lnameEdit").value,
        "fname":document.getElementById("fnameEdit").value,
        "phonenr":document.getElementById("phonenrEdit").value,
        "epost":document.getElementById("epostEdit").value,
        "quantity":document.getElementById("quantityEdit").value,
        "film":document.getElementById("filmEdit").value,
    }
    console.log( document.getElementById("idBillett").value);
    console.log(billett);
    $.post("/updateBillett", billett, function (movies){})
}
function slettEn(id){
    let url ="/slettEn?id="+id;
    $.get(url, function (){
        hentAlle();
    })
}
function slettAlle(){
    $.get("/slettAlle", function (){
        hentAlle();
    })
    //objArray = [];
    //populateHTML(objArray);
}

/**
function validerFname(fname){
    const regexp = /^[a-zA-ZæøåÆØÅ. \-]{2,20}$/;
    const ok = regexp.test(fname);
    if(!ok) {
        $("#feilFname").html("Navnet må bestå av 2 to 20 bokstaver")
        return false;
    }else {
        $("#feilFname").html("");
        return true;
    }
}
function validerLname(lname){
    const regexp = /^[a-zA-ZæøåÆØÅ. \-]{2,20}$/;
    const ok = regexp.test(lname);
    if(!ok) {
        $("#feilLname").html("Navnet må bestå av 2 to 20 bokstaver")
        return false;
    }else {
        $("#feilLname").html("");
        return true;
    }
}
function validerAntall(quantity){
    const regexp = /^[0-9]{1,2}$/;
    const ok = regexp.test(quantity);
    if(!ok) {
        $("#feilQuantity").html("antall må bestå av 1-2 siffer")
        return false;
    }else {
        $("#feilQuantity").html("");
        return true;
    }
}
function validerMobilnr (phonenr){
    const regexp = /^[0-9]{8}$/;
    const ok = regexp.test(phonenr);
    if(!ok) {
        $("#feilPhonenr").html("Mobilnr må ha 8 tall (0-9)")
        return false;
    }else {
        $("#feilPhonenr").html("");
        return true;
    }
}

function validerEpost (epost){
    const regexp = /^[a-zA-Z0-9-_%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const ok = regexp.test(epost);
    if(!ok) {
        $("#feilEpost").html("Du må skrive gyldig epost adresse")
        return false;
    }else {
        $("#feilEpost").html("");
        return true;
    }

}
 **/
