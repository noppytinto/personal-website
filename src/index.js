/////////////////////////////
// init stuff
/////////////////////////////
import './styles/style.scss';
import {animate, layout} from "./scripts/card";


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
const cardsToGlance = 3;
const depth = 1;

const cards = document.querySelectorAll('.card');
const cardContainer = document.querySelector('.card-container');

layout(cards).stacks().givePerspective(cardsToGlance);

cardContainer.addEventListener('mouseenter', () => {
  animate(cards).revealElements( 300);
});

cardContainer.addEventListener('mouseleave', () => {
  console.log('exiting');
  animate(cards).concealElements(100);
  layout(cards).stacks().givePerspective(cardsToGlance);
});

//




/////////////////////////////////////////
// functions
/////////////////////////////////////////
