/**
let objArray= [];
function addToArray() {
    console.log("button clicked");
    let film = document.getElementById("film").value;
    let antall = document.getElementById("quantity").value;
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let phonenr = document.getElementById("phonenr").value;
    let mail = document.getElementById("mail").value;
    objArray.push({
        filmkey: film,
        antallkey: antall,
        fnameKey: fname,
        lnameKey: lname,
        phonenrKey: phonenr,
        mailKey: mail
    });
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
$(function (){
    hentFilmene();
});
let movies = [];
function hentFilmene(){
    $.get("/hentFilm", function (data){
        movies = data;
        formaterFilm(data);

    });
}
function formaterFilm(data){
    let filmList =[];

    let ut = "<select id = 'velgeFilm'>";
    ut+="<option>--velg film-- </option>";
    for (const movie of data){
        if (!filmList.includes(movie.film)){
            ut+="<option>"+ movie.film +"</option>";
        }
        filmList.push(movie.film);
    }
    ut+="</select>";

    $("#film-div").html(ut);
}

function regBillett(){
    const ln =$("#lname").val();
    const fn =$("#fname").val();
    const qnt =$("#quantity").val();
    const phn =$("#phonenr").val();
    const ep =$("#epost").val();
    const film =$("#film").val();

    let riktig = validerLname(ln, "Etternavn") * validerFname(fn , "Fornavn") * validerAntall(qnt,"quantity")*
        validerMobilnr(phn,"Mobilnummer") * validerEpost(ep, "epost") ;

    if (riktig){
        const billett = {
            lname : ln,
            fname : fn,
            quantity : qnt,
            phonenr : phn,
            epost : ep,
            film : film,
        };
        $.post("/lagre", billett, function (){
            hentAlle();
        });
        $("#lname").val("");
        $("#fname").val("");
        $("#quantity").val("");
        $("#phonenr").val("");
        $("#epost").val("");
        $("#film").val("--velg film");
    }

}

function SlettArray(){
    objArray = [];
    populateHTML(objArray);
}

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

function validerEpost (mail){
    const regexp = /^[a-zA-Z0-9-_%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const ok = regexp.test(mail);
    if(!ok) {
        $("#feilMail").html("Du må skrive gyldig epost adresse")
        return false;
    }else {
        $("#feilMail").html("");
        return true;
    }
}