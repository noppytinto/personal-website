/////////////////////////////////////////
// WEBPACK IMPORTS
/////////////////////////////////////////
import './styles/style.scss';
import iconClose from './assets/images/icon-close.svg';
import aboutImg from './assets/images/about-img.jpg';
// journeys photos
import icelandImg from './assets/images/iceland.jpg';
import florenceImg from './assets/images/florence.jpg';
import norwayImg from './assets/images/norway.jpg';
import spainImg from './assets/images/spain.jpg';
import polandImg from './assets/images/poland.jpg';
import copenhagenImg from './assets/images/copenhagen.jpg';
import parisImg from './assets/images/paris.jpg';
import thailandImg from './assets/images/thailand.jpg';
import hungaryImg from './assets/images/hungary.jpg';
import milanImg from './assets/images/milan.jpg';
import germanyImg from './assets/images/germany.jpg';
import positanoImg from './assets/images/positano.jpg';
import capriImg from './assets/images/capri.jpg';
import naplesImg from './assets/images/naples.jpg';
// cinemates
import cinematesScreen1 from './assets/images/cinemates-screen-1.png';
import cinematesScreen2 from './assets/images/cinemates-screen-2.png';
import cinematesScreen3 from './assets/images/cinemates-screen-3.png';
import cinematesScreen4 from './assets/images/cinemates-screen-4.png';
import cinematesScreen5 from './assets/images/cinemates-screen-5.png';
import cinematesScreen6 from './assets/images/cinemates-screen-6.png';
import cinematesScreen7 from './assets/images/cinemates-screen-7.png';
import cinematesScreen8 from './assets/images/cinemates-screen-8.png';
// web playground
import webplaygroundScreen1 from './assets/images/webplayground-screen-1.png';
import webplaygroundScreen2 from './assets/images/webplayground-screen-2.png';
import webplaygroundScreen3 from './assets/images/webplayground-screen-3.png';
import webplaygroundScreen4 from './assets/images/webplayground-screen-4.png';
import webplaygroundScreen5 from './assets/images/webplayground-screen-5.png';
// mapty
import maptyScreen1 from './assets/images/mapty-screen-1.png';
import maptyScreen2 from './assets/images/mapty-screen-2.png';
import maptyScreen3 from './assets/images/mapty-screen-3.png';
//
import githubIcon from './assets/images/github-icon.svg';
import externalLinkIcon from './assets/images/icon--external-link.svg';
// gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


// let tl = gsap.timeline();


gsap.from(".about__image", {
    scrollTrigger: ".about__image", // start the animation when ".box" enters the viewport (once)
    opacity: 0,
    duration: 1,
});

gsap.from(".about__image", {
    scrollTrigger: ".about__image", // start the animation when ".box" enters the viewport (once)
    y: 50,
    duration: 1,
    ease: "bounce.out",
});

/////////////////////////////////////////
// MAIN
/////////////////////////////////////////
function main() {

    revealHoverMenuOnScroll();
    handleOnClickHoverMenuButton();
    handleOnClickHoverMenuCloseButton();
    handleOnClickHoverMenuLink();
    handleOnClickHoverMenuOutsideArea();
    handleOnClickEmailButton();

    showCopyEmailOnMouseEnter();

    handleScrollDownCtaVisibilityOnScroll();


}// main()

main();



/////////////////////////////////////////
// FUNCTIONS
/////////////////////////////////////////

function handleScrollDownCtaVisibilityOnScroll() {
    const scrollCta = document.querySelector('.scroll-down-cta');

    // conceal when out of about section
    const target = document.querySelector('.skills');

    const options = {
        root: null,
        threshold: .5
    }
    const callback = (entries) => {
        const [entry] = entries;

        if (entry.isIntersecting)
            scrollCta.style.display = "none";
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(target);



    // reveal back at about section
    const target2 = document.querySelector('.about');

    const options2 = {
        root: null,
        threshold: 0.1
    }
    const callback2 = (entries) => {
        const [entry] = entries;

        if (entry.isIntersecting)
            scrollCta.style.display = "block";
    };

    const observer2 = new IntersectionObserver(callback2, options2);
    observer2.observe(target2);
}

function showCopyEmailOnMouseEnter() {
    const emailButton = document.querySelector('.contact__grid--1-1');
    const copyEmailButton = document.querySelector('.contact__copy-email-btn');

    const onMouseMove = (e) =>{
        const targetStartingX = emailButton.getBoundingClientRect().x;
        const targetWidth = emailButton.getBoundingClientRect().width;
        const targetEndingX = targetStartingX+targetWidth;

        const targetStartingY = emailButton.getBoundingClientRect().y;
        const targetHeight = emailButton.getBoundingClientRect().height;
        const targetEndingY = targetStartingY+targetHeight;

        const pointerX = e.clientX;
        const pointerY = e.clientY;

        if (pointerX >= targetStartingX && pointerX <= targetEndingX) {
            copyEmailButton.style.left = e.pageX + 'px';
        }

        if (pointerY >= targetStartingY && pointerY <= targetEndingY) {
            copyEmailButton.style.top = (e.pageY - 10) + 'px';
        }
    }

    emailButton.addEventListener('mouseenter', (ev) => {
        const hoveringEmailArea = ! copyEmailButton.contains(ev.target);
        if (hoveringEmailArea) {
            showCopyEmailButton(true);
            emailButton.addEventListener('mousemove', onMouseMove);
        }
    });

    emailButton.addEventListener('mouseleave', (ev) => {
        showCopyEmailButton(false);
        changeCopyEmailButtonText('click to copy');
        emailButton.removeEventListener('mousemove', onMouseMove);
    });
}

function showCopyEmailButton(show) {
    const copyEmailButton = document.querySelector('.contact__copy-email-btn');

    if (show) {
        copyEmailButton.style.opacity = "1";
    }
    else {
        copyEmailButton.style.opacity = "0";
        copyEmailButton.style.transform= "translate(-50%,-50%)";
    }
}

function handleOnClickEmailButton() {
    const emailButton = document.querySelector('.contact__grid--1-1');
    emailButton.addEventListener('click', (ev) => {
        copyEmailToClipboard();
        changeCopyEmailButtonText('email copied! :)');
    });
}

function changeCopyEmailButtonText(text) {
    const copyEmailButton = document.querySelector('.contact__copy-email-btn');
    copyEmailButton.textContent = text;
}

function copyEmailToClipboard() {
    const email = 'francesco.scutellaro@gmail.com';
    navigator.clipboard.writeText(email)
        .then(() => {

        }).catch( err => {
            alert('cannot copy email to clipboard :(');
        });
}

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

function handleOnClickHoverMenuOutsideArea() {
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
    const body = document.querySelector('body');
    const hoverMenuContent = document.querySelector('.hover-menu__content');

    if (show) {
        if ( ! hoverMenu.classList.contains('hover-menu--reveal')) {
            body.style.overflow = "hidden";
            hoverMenu.classList.add('hover-menu--reveal');
            hoverMenuContent.classList.add('hover-menu__content--reveal');
        }
    }
    else {
        if ( hoverMenu.classList.contains('hover-menu--reveal')) {
            body.style.overflow = "revert";
            hoverMenu.classList.remove('hover-menu--reveal');
            hoverMenuContent.classList.remove('hover-menu__content--reveal');
        }
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
function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

// function handleOnClickNextScreenButton() {
//     // get all screen elements
//     const screens = document.querySelectorAll('.projects__screen')
//     const screensContainer = document.querySelectorAll('.projects__list')
//
//     const leftBoundary = screens[0].dataset.index;
//     const rightBoundary = screens[screens.length-1].dataset.index;
//     const currentIndex = 0;
//
//     // detect which element is visible which is partially visible
//
//     // get width of a single screen
//
//     const
//
// }

