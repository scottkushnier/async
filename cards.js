async function pick2() {
  const res = await axios.get(
    "https://deckofcardsapi.com/api/deck/new/shuffle"
  );
  console.log("deck: ", res.data);
  const deck = res.data;
  const res2 = await axios.get(
    `https://deckofcardsapi.com/api/deck/${res.data.deck_id}/draw`
  );
  const card1 = res2.data.cards[0];
  const res3 = await axios.get(
    `https://deckofcardsapi.com/api/deck/${res.data.deck_id}/draw`
  );
  const card2 = res3.data.cards[0];
  console.log("cards: ", card1, card2);
}

pick2();

async function getDeck() {
  res = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle");
  console.log("deck: ", res.data);
  const deck = res.data;
  return deck;
}

let rotAngle = 0;
const rotInc = 10;
let cardsLeft = 52;

let deck;

async function clickNext() {
  if (!deck) {
    deck = await getDeck();
  }
  if (!cardsLeft) {
    return;
  }
  // console.log("next");
  const res = await axios.get(
    `https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw`
  );
  console.log(53 - cardsLeft, res.data.cards[0]);
  const div = document.createElement("IMG");
  div.classList.add("card");
  div.setAttribute("src", res.data.cards[0].images.png);
  // div.setAttribute("style", `transform:rotate(${rotAngle}deg)`);
  rotAngle = Math.floor(Math.random() * 25) - 12;
  const shiftX = Math.floor(Math.random() * 30) - 15;
  const shiftY = Math.floor(Math.random() * 30) - 15;
  div.setAttribute(
    "style",
    `transform: rotate(${rotAngle}deg) translate(${shiftX}px, ${shiftY}px)`
  );
  cardsLeft--;
  document.querySelector("#cards").appendChild(div);
  // console.log("there");
}

document.querySelector("#next").addEventListener("click", clickNext);
