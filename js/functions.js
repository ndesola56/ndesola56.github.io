function submitFile() {
    'use strict';
    localStorage.setItem("first", document.getElementById("first").value);
    localStorage.setItem("last", document.getElementById("last").value);
    localStorage.setItem("email", document.getElementById("email").value);
    localStorage.setItem("linkedin", document.getElementById("linkedin").value);
    localStorage.setItem("phone", document.getElementById("phone").value);
    localStorage.setItem("grade", document.querySelector('input[name="grade"]:checked').value);
    localStorage.setItem("major", document.getElementById("major").value);
    localStorage.setItem("minor", document.getElementById("minor").value);
    localStorage.setItem("concentration", document.getElementById("concentration").value);

    var textarea = document.getElementById("experience").value;
    textarea = textarea.split("\n");

    localStorage.setItem("experience", JSON.stringify(textarea));

    window.open('completedResume.html', '_self', false);
}
