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

let currentDeck = [];

const buildDeck = () => {
  return suits.flatMap((suit) => {
    return cardValues.map((cardValue) => {
      return { suit, cardValue };
    });
  });
};

const initialDeck = buildDeck();

divCards = document.getElementById("cards");

const createNodeList = (list) => {
  return list.map((card) => {
    const el = document.createElement("div");
    el.textContent = `${card.cardValue} of ${card.suit}`;
    return el;
  });
};

function showDeck(deck) {
  return () => {
    const nodeList = createNodeList(deck);
    divCards.replaceChildren(...nodeList);
    currentDeck = [...deck];
  };
};

showDeck(initialDeck)();

function showShuffledDeck() {
  const shuffledDeck = shuffle();
  showDeck(shuffledDeck)();
};

function filterCards(suit) {
  return currentDeck.filter((card) => card.suit == suit);
};

function showCards(suit) {
  return () => {
    const cards = filterCards(suit);
    const nodeList = createNodeList(cards);
    divCards.replaceChildren(...nodeList);
  };
};

function shuffle() {
  const list = [...initialDeck];
  const shuffledDeck = [];
  for (let i = list.length; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * i);
    shuffledDeck.push(list[randomIndex]);
    list.splice(randomIndex, 1);
  };
  return shuffledDeck;
};

// Buttons
const btnInitialDeck = document.querySelector("#initial-deck-button");
btnInitialDeck.addEventListener("click", showDeck(initialDeck));

const btnShuffle = document.querySelector("#shuffle-button");
btnShuffle.addEventListener("click", showShuffledDeck);

const btnHearts = document.querySelector("#hearts-button");
btnHearts.addEventListener("click", showCards('Hearts'));

const btnSpades = document.querySelector("#spades-button");
btnSpades.addEventListener("click", showCards('Spades'));

const btnDiamonds = document.querySelector("#diamonds-button");
btnDiamonds.addEventListener("click", showCards('Diamonds'));

const btnClubs = document.querySelector("#clubs-button");
btnClubs.addEventListener("click", showCards('Clubs'));
