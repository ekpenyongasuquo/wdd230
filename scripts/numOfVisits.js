const v = document.querySelector("#visits");

let numOfVisits = Number(window.localStorage.getItem("visits-ac")) || 0;

if (numOfVisits !== 0) {
    v.textContent = numOfVisits;
} else {
    v.textContent = "0";
}

numOfVisits++;

localStorage.setItem("visits-ac", numOfVisits);