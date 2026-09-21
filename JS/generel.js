const drikke = document.querySelectorAll("img");

drikke.forEach(function (drik) {
  drik.addEventListener ("click", checkAlkohol);
});

function checkAlkohol() {
  if (this.alt === "øl" || this.alt === "snaps") {
    console.log("indeholder alkohol");
  } else {
    console.log("alkoholfri");
  }
}




