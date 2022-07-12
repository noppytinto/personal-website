/////////////////////////////////////////
// WEBPACK IMPORTS
/////////////////////////////////////////
import './styles/style.scss';



/////////////////////////////////////////
// MAIN
/////////////////////////////////////////
let secondRun = false;
let alreadyRevealed = false;

main();


/////////////////////////////////////////
// FUNCTIONS
/////////////////////////////////////////
async function main() {
    //
    handleNavMenuPositionOnViewportChange();
    //
    revealHeaderOnScrolling();
    //
    startTypingAnimation();

}// main()


function handleNavMenuPositionOnViewportChange() {
    const handleOnViewportChange = (mediaQuery) => {
        const header = document.querySelector('.header');
        const navigation = document.querySelector('.nav');
        const footer = document.querySelector('.footer');

        if (mediaQuery.matches) {
            // _removeElementFrom(header, navigation);

            // footer.append(navigation);
            navigation.classList.add('nav--stick-to-bottom');
        }
        else {
            // _removeElementFrom(footer, navigation);
            //
            // if (header.contains(navigation)) return;
            //
            // header.append(navigation);

            navigation.classList.remove('nav--stick-to-bottom');
        }
    }

    let mediaQuery = matchMedia("(max-width: 550px)")
    mediaQuery.addEventListener('change', handleOnViewportChange)
    handleOnViewportChange(mediaQuery)
}

function _removeElementFrom(from, target) {
    if (from.contains(target))
        from.removeChild(target);
}

function _appendElementInto(into, target) {
    if (!into.contains(target))
        into.removeChild(target);
}

function revealHeaderOnScrolling() {
    const target = document.querySelector('.home__typing-container');
    const header = document.querySelector('.header');

    const options = {
        root: null,
        threshold: 0
    }

    const callback = (entries) => {
        const [entry] = entries;

        if (entry.isIntersecting) {
            if(secondRun) {
                header.classList.add('header--conceal');
            }
            header.classList.remove('header--reveal');
            secondRun = true;
        }
        else {
            header.classList.remove('header--conceal');
            header.classList.add('header--reveal');
        }
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(target);
}

function revealHeaderOnHover() {
    const header = document.querySelector('.header');

    header.addEventListener('mouseenter', (ev) => {
        if (alreadyRevealed) return;

        header.classList.add('header--reveal');
        header.classList.remove('header--conceal');
    })

    header.addEventListener('mouseleave', (ev) => {
        if (alreadyRevealed) return;

        header.classList.remove('header--reveal');
        header.classList.add('header--conceal');
    })

}

async function startTypingAnimation() {
    //
    const breakElement = document.createElement('br');
    const stringColor = '#00BC4B';
    const keywordColor = '#F18200';
    const symbolColor = '#FFB800';
    const functionColor = '#BE6CFF';
    const terminalTextColor = '#e1e1e1';
    const keywordStyle = { color: keywordColor, fontStyle: 'italic', };
    const symbolStyle = {color: symbolColor};
    const functionStyle = {color: functionColor};
    const stringStyle = {color: stringColor};
    const terminalStyle = {color: terminalTextColor, fontWeight: 'bold'};

    const row1_text = [
        {text: 'var ', style: keywordStyle },
        {text: 'result '},
        {text: '= '},
        {text: 'whoIs', style: functionStyle},
        {text: '(', style: symbolStyle},
        {text: '\'Francesco Scutellaro\'', style: stringStyle},
        {text: ')', style: symbolStyle},
        {text: ';'},
    ]

    const row2_text = [
        {text: 'console.'},
        {text: 'log', style: functionStyle},
        {text: '(', style: symbolStyle},
        {text: 'result'},
        {text: ')', style: symbolStyle},
        {text: ';'},
    ]

    const rowLoading = [
        {text: '...', style: terminalStyle},
    ]

    const row3_text = [
        {text: 'WEB DEVELOPER :)', style: {...terminalStyle, fontSize: '1.5rem'}},
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

async function typeCode(code, targetElementRef, delay = 50) {
    for (const word of code) {
        const span = document.createElement('span');
        document.querySelector(targetElementRef).append(span);

        applyStyle(span, word.style);

        await typeText(word.text, span, delay)
    }
}

function applyStyle(elementNode, styleProperties = {}) {
    for (const [key, value] of Object.entries(styleProperties)) {
        elementNode.style[`${key}`] = value;
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
