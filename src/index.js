/////////////////////////////////////////
// WEBPACK IMPORTS
/////////////////////////////////////////
import './styles/style.scss';


/////////////////////////////////////////
// main()
/////////////////////////////////////////
main();


/////////////////////////////////////////
// FUNCTIONS
/////////////////////////////////////////
async function main() {
    console.log('hello world');

    // const container = document.querySelector('.home__typing-container')
    const breakElement = document.createElement('br');

    const stringColor = '#00BC4B';
    const keywordColor = '#F18200';
    const symbolColor = '#FFB800';
    const functionColor = '#BE6CFF';
    const terminalTextColor = '#e1e1e1';

    const row1_text = [
        {
            text: 'var ',
            style: {
                color: keywordColor,
                fontStyle: 'italic',
            }
        },
        {text: 'result ', style: {}},
        {text: '= ', style: {}},
        {text: 'whoIs', style: {color: functionColor}},
        {text: '(', style: {color: symbolColor}},
        {text: '\'Francesco Scutellaro\'', style: {color: stringColor}},
        {text: ')', style: {color: symbolColor}},
        {text: ';', style: {}},
    ]

    const row2_text = [
        {text: 'console.', style: {}},
        {text: 'log', style: {color: functionColor}},
        {text: '(', style: {color: symbolColor}},
        {text: 'result', style: {}},
        {text: ')', style: {color: symbolColor}},
        {text: ';', style: { }},
    ]

    const rowLoading = [
        {text: '...', style: {color: terminalTextColor, fontWeight: 'bold'}},
    ]

    const row3_text = [
        {text: 'WEB DEVELOPER :)', style: {color: terminalTextColor, fontWeight: 'bold'}},
    ]


    ///////////////////////
    // logic
    ///////////////////////
    await typeCode(row1_text, '#row-1');
    insertAfter(breakElement, document.querySelector('#row-1'));
    await typeCode(row2_text, '#row-2');
    await typeCode(rowLoading, '#row-loading', 300);
    await typeCode(row3_text, '#row-3', 5);
}

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}


async function typeCode(code, elementRef, delay = 50) {
    for (const word of code) {
        const span = document.createElement('span');
        document.querySelector(elementRef).append(span);

        applyStyle(word.style, span);

        await typeText(word.text, span, delay)
    }
}

function applyStyle(styleProperties, elementNode) {
    for (const [key, value] of Object.entries(styleProperties)) {
        elementNode.style[`${key}`] = value;
        console.log(key);
    }
}

async function typeText(text, elementNode, delay = 50) {
    const letters = text.split("");

    for (const letter of letters) {
        elementNode.append(letter);
        await waitForMs(delay);
    }
}

function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}


/////////////////////////////////////////
// MISC
/////////////////////////////////////////
// import {animate, layout} from "./scripts/card";

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
