/////////////////////////////
// init stuff
/////////////////////////////
import './styles/style.scss';
import { hideCards, initCards, showAllCards } from "./scripts/card";


/////////////////////////////////////////
// dom elements
/////////////////////////////////////////


/////////////////////////////////////////
// declarations
/////////////////////////////////////////


/////////////////////////////////////////
// main()
/////////////////////////////////////////
console.log('hello world');

const cards = document.querySelectorAll('.card');
const cardContainer = document.querySelector('.card-container');
initCards(cards);

cardContainer.addEventListener('mouseenter', () => {
  showAllCards(cards);
});

cardContainer.addEventListener('mouseleave', () => {
  console.log('exiting');
  hideCards(cards);
});

//




/////////////////////////////////////////
// functions
/////////////////////////////////////////
