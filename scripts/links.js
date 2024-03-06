const baseURL = "https://ekpenyongasuquo.github.io/wdd230/";
const linksURL = "https://ekpenyongasuquo.github.io/wdd230/data/links.json";
const cards = document.querySelector("#cards");

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data);
}

const displayLinks = (weeks) => {
  weeks.foreach((week) => {
    let card = document.createElement("section");
    let week = document.createElement("p");
    let activity = document.createElement("a");

    week.textcontent = `${week.lesson}`;
    activity.setAttribute("href", week.url);
    activity.setAttribute("");

    card.appendChild(week);
    card.appendChild(activity);

    cards.appendChild(card);
  });
};
getLinks();
