//ini fungsi prompt nama
function replaceName () {
    let name = prompt("siapakah nama Anda?", "");
    document.getElementById("nama").innerHTML = name
}
replaceName ();

//ini fungsi form
function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    if (name == "" || birthDate == "" || gender == "" || messages == "") {
      alert("Tidak boleh kosong!");
      return false;
    }

    setSenderUi(name, birthDate, gender, messages);

    return false;
}

//output form
function setSenderUi(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}

//ini slide banner
var indexSlide = 1;
showDivs(indexSlide);

function plusDivs(n) {
    showDivs((indexSlide += n));
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("banner-img");
    if (n > x.length) {indexSlide = 1}
    else if (n < 1) {indexSlide = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[indexSlide-1].style.display = "block";
}
setInterval(() => {
    plusDivs(1);
}, 2000);