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
import hungaryImg from './assets/images/hungary.jpg';
import milanImg from './assets/images/milan.jpg';
import germanyImg from './assets/images/germany.jpg';
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



/////////////////////////////////////////
// MAIN
/////////////////////////////////////////
function main() {
    startGsapAnimations(gsap);

    revealScreensOnScroll();
    revealJournePicturesOnScroll();
    revealHoverMenuOnScroll();

    handleOnClickHoverMenuButton();
    handleOnClickHoverMenuCloseButton();
    handleOnClickHoverMenuLink();
    handleOnClickHoverMenuOutsideArea();
    handleOnClickEmailButton();
    handleScrollDownCtaVisibilityOnScroll();
    handleOnClickContactItalyCard();

    showCopyEmailOnMouseEnter();
}// main()

main();



/////////////////////////////////////////
// FUNCTIONS
/////////////////////////////////////////
function handleOnClickContactItalyCard() {
    let card = document.querySelector('.contact__flipping-card');
    card.addEventListener( 'click', function() {
        card.classList.toggle('is-flipped');
    });
}

function startGsapAnimations(gsap) {
    //
    gsap.from(".about__text-content", {
        scrollTrigger: {
            trigger: ".about__image",
            start: "top 20%",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power1",
    });

    //
    const githubCard = document.querySelector('.contact__grid--1-3');
    githubCard.addEventListener('mouseenter',(ev) => {
        gsap.to(githubCard, {
            duration: .2,
            backgroundColor: "#fff",
        });
    });
    githubCard.addEventListener('mouseleave',(ev) => {
        gsap.to(githubCard, {
            duration: .2,
            backgroundColor: "#151515",
        });
    });

    //
    const emailCard = document.querySelector('.contact__grid--1-1');
    emailCard.addEventListener('mouseenter',(ev) => {
        gsap.to(emailCard, {
            duration: .2,
            backgroundColor: "#FFCB2B",
        });
    });
    emailCard.addEventListener('mouseleave',(ev) => {
        gsap.to(emailCard, {
            duration: .2,
            backgroundColor: "#151515",
        });
    });

    const linkedinCard = document.querySelector('.contact__grid--3-2');
    linkedinCard.addEventListener('mouseenter',(ev) => {
        gsap.to(linkedinCard, {
            duration: .2,
            backgroundColor: "#0096EA",
        });
    });
    linkedinCard.addEventListener('mouseleave',(ev) => {
        gsap.to(linkedinCard, {
            duration: .2,
            backgroundColor: "#151515",
        });
    });

}

function revealScreensOnScroll() {
    const screensImages = document.querySelectorAll('.projects__gallery-item');
    screensImages.forEach(screen => {
        // conceal when out of about section
        const target = screen;

        const options = {
            root: null,
            threshold: .2
        }
        const callback = (entries, observer) => {
            const [entry] = entries;

            if (entry.isIntersecting) {
                target.classList.add('projects__gallery-item--reveal');
                observer.unobserve(target);
            }
        };

        const observer = new IntersectionObserver(callback, options);
        observer.observe(target);

    })
}

function revealJournePicturesOnScroll() {
    const pictures = document.querySelectorAll('.journeys__img');
    pictures.forEach(picture => {
        // conceal when out of about section
        const target = picture;

        const options = {
            root: null,
            threshold: .2
        }
        const callback = (entries, observer) => {
            const [entry] = entries;

            if (entry.isIntersecting) {
                target.classList.add('journeys__img--reveal');
                observer.unobserve(target);
            }
        };

        const observer = new IntersectionObserver(callback, options);
        observer.observe(target);

    })
}

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
    const target2 = document.querySelector('.about__name');

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
        body.style.overflow = "hidden";

        const timeline = gsap.timeline();
        timeline.set(hoverMenu, {
            display: "flex",
            alignItems: "center",
        });
        timeline
          .from(hoverMenuContent, {
              x: 100,
              duration: .2,
              opacity: 0,
          })
          .to(hoverMenuContent, {
              x: 0,
              duration: .2,
              opacity: 1,
          });
    }
    else {
        body.style.overflow = "revert";

        const timeline = gsap.timeline();
        timeline
          .from(hoverMenuContent, {
              x: 0,
              duration: .1,
              opacity: 1,
          })
          .to(hoverMenuContent, {
              x: 100,
              duration: .1,
              opacity: 0,
          });
        timeline
          .set(hoverMenu, {
            display: "none",
            alignItems: "revert",
          });
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
