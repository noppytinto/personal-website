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
const row1code = [
    {
        text: 'var ',
        style: {
            color: '#F18200',
            fontStyle: 'italic',
        }
    },
    {text: 'result ', style: {}},
    {text: '= ', style: {}},
    {text: 'whoIs', style: {color: '#BE6CFF'}},
    {text: '(', style: {color: '#FFB800'}},
    {text: '\'Francesco Scutellaro\'', style: {color: '#00A944'}},
    {text: ')', style: {color: '#FFB800'}},
    {text: ';', style: {}},
]

const row2code = [
    {text: 'console.', style: {}},
    {text: 'log', style: {color: '#BE6CFF'}},
    {text: '(', style: {color: '#FFB800'}},
    {text: 'result', style: {}},
    {text: ')', style: {color: '#FFB800'}},
    {text: ';', style: { }},
]

const rowLoading = [
    {text: '...', style: {color: '#e1e1e1', fontWeight: 'bold'}},
]

const row3code = [
    {text: 'WEB DEVELOPER :)', style: {color: '#e1e1e1', fontWeight: 'bold'}},
]

start();
// const cardsToGlance = 3;
// const depth = 1;
// const cards = document.querySelectorAll('.card');
// const cardContainer = document.querySelector('.card-container');
//
// layout(cards).stacks().givePerspective(cardsToGlance);
//
// cardContainer.addEventListener('mouseenter', () => {
//   animate(cards).revealElements( 300);
// });
//
// cardContainer.addEventListener('mouseleave', () => {
//   animate(cards).concealElements(100);
//   layout(cards).stacks().givePerspective(cardsToGlance);
// });

//




/////////////////////////////////////////
// functions
/////////////////////////////////////////
const container = document.querySelector('.home__typing-container')
const breakElement = document.createElement('br');

async function start() {
    await typeCode(row1code, '#row-1');
    insertAfter(document.createElement('br'), document.querySelector('#row-1'));
    await typeCode(row2code, '#row-2');
    await typeCode(rowLoading, '#row-loading', 500);
    await typeCode(row3code, '#row-3', 10);
}

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}


async function typeCode(code, elementRef, delay = 50) {
    for (const word of code) {
        const span = document.createElement('span');
        document.querySelector(elementRef).append(span);

        applyStyle(word.style, span);

        await typeSentence(word.text, span, delay)
    }
}

function applyStyle(styleProperties, elementNode) {
    for (const [key, value] of Object.entries(styleProperties)) {
        elementNode.style[`${key}`] = value;
        console.log(key);
    }
}

async function typeSentence(text, elementNode, delay = 50) {
    const letters = text.split("");
    for (const letter of letters) {
        elementNode.append(letter);
        await waitForMs(delay);
    }
}

function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function addCursor(container) {
    const cursor = document.cre
}