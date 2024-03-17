const URL = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector(".cards");

async function getProphetData() {
    const response = await fetch(URL);
    const data = await response.json();
    const prophets = data["prophets"];
    prophets.forEach(displayProphets);
}

getProphetData();

function calculateAge(birthdate, deathdate) {
    const birth = new Date(birthdate);
    const death = deathdate ? new Date(deathdate) : new Date();
    const age = Math.floor((death - birth) / (1000 * 60 * 60 * 24 * 365));
    return age;
}

function getNumberWithOrdinal(n) {
    var s = ["th", "st", "nd", "rd"],
        v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

function displayProphets(prophet) {
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let portrait = document.createElement("img");
    let prophetOrder = getNumberWithOrdinal(prophet.order);

    let age = calculateAge(prophet.birthdate, prophet.death);
    let ageText = prophet.death ? `at death` : `years old`;

    h2.textContent = `${prophet.name} ${prophet.lastname} - ${prophetOrder}`;

    p1.textContent = `Date of Birth: ${prophet.birthdate}`;
    p2.textContent = `Place of Birth: ${prophet.birthplace}`;
    p3.textContent = `Age: ${age} ${ageText}`;

    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname} - ${prophetOrder}} Latter-day President`);
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "340");
    portrait.setAttribute("height", "390");
    portrait.setAttribute("object-fit", "cover");

    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(portrait);

    document.querySelector("div.cards").appendChild(card);


}