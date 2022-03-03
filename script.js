const suits = ["Hearts", "Spades", "Diamonds", "Clubs"];
const cardValues = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];

const deck = [];

const buildDeck = () => {
  suits.forEach((suit) => {
    cardValues.forEach((cardValue) => {
      let card = {
        suit,
        cardValue,
      };
      deck.push(card);
    });
  });
};

buildDeck();

divCards = document.getElementById("cards");

const createNodeList = (list) => {
  return list.map((card) => {
    const el = document.createElement("div");
    el.textContent = `${card.cardValue} of  ${card.suit}`;

    return el;
  });
};

// Button Initial Deck
const btnInitialDeck = document.querySelector("#initial-deck-button");
btnInitialDeck.addEventListener("click", showInitialDeck);

function showInitialDeck() {
  const nodeList = createNodeList(deck);
  divCards.replaceChildren(...nodeList);
}

// Button Hearts
const btnHearts = document.querySelector("#hearts-button");
btnHearts.addEventListener("click", showHeartCards);

function filterHeartCards() {
  return deck.filter((card) => card.suit == "Hearts");
}

function showHeartCards() {
  const heartCards = filterHeartCards();
  const nodeList = createNodeList(heartCards);
  divCards.replaceChildren(...nodeList);
}

// Button Spades
const btnSpades = document.querySelector("#spades-button");
btnSpades.addEventListener("click", showSpadesCards);

function filterSpadesCards() {
  return deck.filter((card) => card.suit == "Spades");
}

function showSpadesCards() {
  const spadesCards = filterSpadesCards();
  const nodeList = createNodeList(spadesCards);
  divCards.replaceChildren(...nodeList);
}

// Button Diamonds
const btnDiamonds = document.querySelector("#diamonds-button");
btnDiamonds.addEventListener("click", showDiamondsCards);

function filterDiamondsCards() {
  return deck.filter((card) => card.suit == "Diamonds");
}

function showDiamondsCards() {
  const diamondsCards = filterDiamondsCards();
  const nodeList = createNodeList(diamondsCards);
  divCards.replaceChildren(...nodeList);
}

// Button Clubs
const btnClubs = document.querySelector("#clubs-button");
btnClubs.addEventListener("click", showClubsCards);

function filterClubsCards() {
  return deck.filter((card) => card.suit == "Clubs");
}

function showClubsCards() {
  const clubsCards = filterClubsCards();
  const nodeList = createNodeList(clubsCards);
  divCards.replaceChildren(...nodeList);
}

// Shuffle Cards
const btnShuffle = document.querySelector("#shuffle-button");
btnShuffle.addEventListener("click", showShuffledDeck);

function showShuffledDeck() {
  const shuffledDeck = shuffle();
  const nodeList = createNodeList(shuffledDeck);
  divCards.replaceChildren(...nodeList);
}

function shuffle() {
  const list = [...deck];
  const shuffledDeck = [];
  for (let i = list.length; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * i);
    shuffledDeck.push(list[randomIndex]);
    list.splice(randomIndex, 1);
  }
  return shuffledDeck;
}

showInitialDeck();
