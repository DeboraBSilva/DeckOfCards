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
        cardValue
      };
      deck.push(card);
    });
  });
};

buildDeck();

console.log(deck);

divCards = document.getElementById("cards");

const createNodeList = (list) => {
  return list.map((card) => {
    const el = document.createElement("div");
    el.textContent = `${card.cardValue} of  ${card.suit}`;

    return el;
  });
};

const nodeList =  createNodeList(deck)

divCards.append(...nodeList)
