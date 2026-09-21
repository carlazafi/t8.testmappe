let tal = Math.floor(Math.random() * 11);
let antalGaet = 0;

const gaet = document.querySelector("#gaet");
const gaetKnap = document.querySelector("#gaetKnap");
const besked = document.querySelector("#besked");
const igen = document.querySelector("#igen");


gaetKnap.addEventListener("click", function () {
    const brugerGaet = Number(gaet.value);
    antalGaet++;
    if (brugerGaet === tal) {
        besked.textContent = "Sådan! du var igennem " + antalGaet + " gæt.";
    } else if (brugerGaet < tal) {
        besked.textContent = "Nooo.. Dit gæt er for lavt";
    } else {
        besked.textContent = "Pokkers.. Dit gæt er for højt";
    }

});


igen.addEventListener("click", function () {
    tal = Math.floor(Math.random() * 11);
    antalGaet = 0;
    besked.textContent = "Jeg har et nyt tal, gæt igen!";
    gaet.value = "";

});