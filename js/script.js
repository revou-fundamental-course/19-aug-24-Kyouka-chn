function replaceName () {
    let name = prompt("siapakah nama Anda?", "");
    document.getElementById("nama").innerHTML = name
}
replaceName ();

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

function setSenderUi(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}