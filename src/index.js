/////////////////////////////////////////
// WEBPACK IMPORTS
/////////////////////////////////////////
// import './assets';
import './styles/style.scss';
import iconClose from './assets/images/icon-close.svg';
import aboutImg from './assets/images/about-img.jpg';


/////////////////////////////////////////
// MAIN
/////////////////////////////////////////
let secondRun = false;
let alreadyRevealed = false;
let mobileNavActivated = false;

main();


/////////////////////////////////////////
// FUNCTIONS
/////////////////////////////////////////
function main() {
    revealHoverMenuOnScroll();
    handleOnClickHoverMenuButton();
    handleOnClickHoverMenuCloseButton();
    handleOnClickHoverMenuLink();
    handleOnClickHoverMenuOuterArea();

}// main()

function handleOnClickHoverMenuButton() {
    const hoverMenuButton = document.querySelector('.hover-menu-btn');

    hoverMenuButton.addEventListener('click', (ev) => {
        showHoverMenu(true);
    });
}

function handleOnClickHoverMenuCloseButton() {
    const hoverMenuCloseButton = document.querySelector('.hover-menu__btn-close');

    hoverMenuCloseButton.addEventListener('click', (ev) => {
        showHoverMenu(false);
    });
}

function handleOnClickHoverMenuLink() {
    const links = document.querySelectorAll('.hover-menu__link');

    for (const link of links) {
        link.addEventListener('click', (ev) => {
            showHoverMenu(false);
        });
    }
}

function handleOnClickHoverMenuOuterArea() {
    const hoverMenuOuterArea= document.querySelector('.hover-menu');
    const hoverMenuInnerArea= document.querySelector('.hover-menu__content');

    hoverMenuOuterArea.addEventListener('click', (ev) => {
        const clickingOutsideArea =  ! hoverMenuInnerArea.contains(ev.target);

        if (clickingOutsideArea) {
            showHoverMenu(false);
        }
    });
}

function showHoverMenu(show) {
    const hoverMenu = document.querySelector('.hover-menu');

    if (show) {
        if ( ! hoverMenu.classList.contains('hover-menu--reveal'))
            hoverMenu.classList.add('hover-menu--reveal');
    }
    else {
        if ( hoverMenu.classList.contains('hover-menu--reveal'))
            hoverMenu.classList.remove('hover-menu--reveal');
    }
}

function revealHoverMenuOnScroll() {
    const target = document.querySelector('.header');

    const options = {
        root: null,
        threshold: 1
    }

    const callback = (entries) => {
        const [entry] = entries;

        if (entry.isIntersecting)
            showHoverMenuButton(true);
        else
            showHoverMenuButton(false);
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(target);
}

function showHoverMenuButton(show) {
    const hoverMenuButton = document.querySelector('.hover-menu-btn');

    if (show) {
        if (hoverMenuButton.classList.contains('hover-menu-btn--reveal'))
            hoverMenuButton.classList.remove('hover-menu-btn--reveal');
    }
    else {
        if ( ! hoverMenuButton.classList.contains('hover-menu-btn--reveal'))
            hoverMenuButton.classList.add('hover-menu-btn--reveal');
    }
}


/////////////////////////////////////////
// MISC
/////////////////////////////////////////

//
// function fixScrollToTop() {
//     const beginButton = document.querySelectorAll('.nav__link')[0];
//
//     // console.log(beginButton);
//
//     beginButton.addEventListener('click', (ev) => {
//         // window.scrollTo({
//         //     top: 0,
//         //     left: 0,
//         //     behavior: 'smooth'
//         // });
//
//         document.getElementById('top').scrollIntoView({behavior: 'smooth'});
//
//     });
//
// }
//
// function handleNavMenuPositionOnViewportChange() {
//     const handleOnViewportChange = (mediaQuery) => {
//         const target = document.querySelector('.header');
//
//         if (mediaQuery.matches) {
//             mobileNavActivated = true;
//             target.classList.add('header--stick-to-bottom');
//         }
//         else {
//             mobileNavActivated = false;
//             target.classList.remove('header--stick-to-bottom');
//         }
//     }
//
//     let mediaQuery = matchMedia("(max-width: 550px)")
//     mediaQuery.addEventListener('change', handleOnViewportChange)
//     handleOnViewportChange(mediaQuery)
// }
//
// function revealHeaderOnScroll() {
//     const target = document.querySelector('.terminal');
//     const header = document.querySelector('.header');
//
//     const options = {
//         root: null,
//         rootMargin: '-30%',
//         threshold: 0
//     }
//
//     const callback = (entries) => {
//         const [entry] = entries;
//
//         if (entry.isIntersecting) {
//             if(secondRun) {
//                 header.classList.add('header--conceal');
//             }
//             header.classList.remove('header--reveal');
//             secondRun = true;
//         }
//         else {
//             header.classList.remove('header--conceal');
//             header.classList.add('header--reveal');
//         }
//     };
//
//     const observer = new IntersectionObserver(callback, options);
//     observer.observe(target);
// }
//
// function revealMediaOnScroll() {
//     const target = document.querySelector('.about__media');
//
//     const options = {
//         root: null,
//         threshold: 0.5
//     }
//
//     const callback = (entries, observer) => {
//         const [entry] = entries;
//
//         if (entry.isIntersecting) {
//             target.classList.add('about__media--reveal');
//             observer.unobserve(target);
//         }
//     };
//
//     const observer = new IntersectionObserver(callback, options);
//     observer.observe(target);
// }
//
// function revealGoToTopButtonOnScroll() {
//     const target = document.querySelector('.contact');
//     const button = document.querySelector('.go-to-top-button');
//
//     const options = {
//         root: null,
//         threshold: 0.5
//     }
//
//     const callback = (entries, observer) => {
//         const [entry] = entries;
//
//         if (entry.isIntersecting && !mobileNavActivated)
//             button.classList.add('go-to-top-button--reveal');
//         else
//             button.classList.remove('go-to-top-button--reveal');
//
//     };
//
//     const observer = new IntersectionObserver(callback, options);
//     observer.observe(target);
// }
//
// // function revealRightsOnScrolling() {
// //     const target = document.querySelector('.footer');
// //     const navigation = document.querySelector('.nav');
// //
// //     const options = {
// //         root: null,
// //         threshold: 0.1
// //     }
// //
// //     const callback = (entries) => {
// //         const [entry] = entries;
// //
// //         if (entry.isIntersecting) {
// //             navigation.classList.remove('header--reveal');
// //         }
// //         else {
// //
// //         }
// //     };
// //
// //     const observer = new IntersectionObserver(callback, options);
// //     observer.observe(target);
// // }
//
// function revealHeaderOnHover() {
//     const header = document.querySelector('.header');
//
//     header.addEventListener('mouseenter', (ev) => {
//         if (alreadyRevealed) return;
//
//         header.classList.add('header--reveal');
//         header.classList.remove('header--conceal');
//     })
//
//     header.addEventListener('mouseleave', (ev) => {
//         if (alreadyRevealed) return;
//
//         header.classList.remove('header--reveal');
//         header.classList.add('header--conceal');
//     })
//
// }
//
// async function startTypingAnimation() {
//     //
//     const breakElement = document.createElement('br');
//     const stringColor = '#00BC4B';
//     const keywordColor = '#F18200';
//     const symbolColor = '#FFB800';
//     const functionColor = '#BE6CFF';
//     const terminalTextColor = '#e1e1e1';
//     const keywordStyle = { color: keywordColor, fontStyle: 'italic', };
//     const symbolStyle = {color: symbolColor};
//     const functionStyle = {color: functionColor};
//     const stringStyle = {color: stringColor};
//     const terminalStyle = {color: terminalTextColor};
//
//     const row1_text = [
//         {text: 'var ', style: keywordStyle },
//         {text: 'answ '},
//         {text: '= '},
//         {text: 'whoIs', style: functionStyle},
//         {text: '(', style: symbolStyle},
//         {text: '\'Francesco Scutellaro\'', style: stringStyle},
//         {text: ')', style: symbolStyle},
//         {text: ';'},
//     ]
//
//     const row2_text = [
//         {text: 'console.'},
//         {text: 'log', style: functionStyle},
//         {text: '(', style: symbolStyle},
//         {text: 'answ'},
//         {text: ')', style: symbolStyle},
//         {text: ';'},
//     ]
//
//     const rowLoading = [
//         {text: '...', style: terminalStyle},
//     ]
//
//     const row3_text = [
//         {text: '> WEB DEVELOPER :)', style: {...terminalStyle}},
//     ]
//
//
//     ///////////////////////
//     // logic
//     ///////////////////////
//     await typeCode(row1_text, '#terminal__row--1');
//     insertAfter(breakElement, document.querySelector('#terminal__row--1'));
//     await typeCode(row2_text, '#terminal__row--2');
//     await typeCode(rowLoading, '#terminal__row--loading', 300);
//     await typeCode(row3_text, '#terminal__row--3', 5);
// }
//
// function insertAfter(newNode, existingNode) {
//     existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
// }
//
// async function typeCode(code, targetElementRef, delay = 50) {
//     for (const word of code) {
//         const span = document.createElement('span');
//         document.querySelector(targetElementRef).append(span);
//
//         applyStyle(span, word.style);
//
//         await typeText(word.text, span, delay)
//     }
// }
//
// function applyStyle(elementNode, styleProperties = {}) {
//     for (const [key, value] of Object.entries(styleProperties)) {
//         elementNode.style[`${key}`] = value;
//     }
// }
//
// async function typeText(text, elementNode, delay = 50) {
//     const letters = text.split("");
//
//     for (const letter of letters) {
//         elementNode.append(letter);
//         await waitForMs(delay);
//     }
// }
//
//
// /////////////////////////////////////////
// // FUNCTIONS - abstracts
// /////////////////////////////////////////
// function _removeElementFrom(from, target) {
//     if (from.contains(target))
//         from.removeChild(target);
// }
//
// function _appendElementInto(into, target) {
//     if (!into.contains(target))
//         into.removeChild(target);
// }
//
// function waitForMs(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms))
// }
//
//
// /////////////////////////////////////////
// // MISC
// /////////////////////////////////////////
// // import {animate, layout} from "./scripts/card";
//
// // const cardsToGlance = 3;
// // const depth = 1;
// // const cards = document.querySelectorAll('.card');
// // const cardContainer = document.querySelector('.card-container');
// //
// // layout(cards).stacks().givePerspective(cardsToGlance);
// //
// // cardContainer.addEventListener('mouseenter', () => {
// //   animate(cards).revealElements( 300);
// // });
// //
// // cardContainer.addEventListener('mouseleave', () => {
// //   animate(cards).concealElements(100);
// //   layout(cards).stacks().givePerspective(cardsToGlance);
// // });
//
// //
