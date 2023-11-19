let accordionClickAreas = document.getElementsByClassName("about-accordion-list-part");

//accordion start

function setClickToAccordionPart() {
    for (let accordPart of accordionClickAreas) {
        accordPart.addEventListener("mousedown", function () {

            let accordPartContent = accordPart.querySelector('.about-accordion-content-container');
            console.log(window.getComputedStyle(accordPartContent).height);
            changeAccordionPartContent(accordPart);
        })
    }
}

function showAccordionPartContent(accordPart) {
    let accordPartContent = accordPart.querySelector('.about-accordion-content-container');
    let accordPartContentText = accordPart.querySelector('.about-accordion-text-content');
    let accordPartContentImg = accordPart.querySelector('.about-accordion-image-content');
    accordPartContent.style.height = '150px';    
    // accordPartContentImg.style.height = '25%';
}

function hideAccordionPartContent(accordPart) {
    let accordPartContent = accordPart.querySelector('.about-accordion-content-container');
    let accordPartContentText = accordPart.querySelector('.about-accordion-text-content');
    let accordPartContentImg = accordPart.querySelector('.about-accordion-image-content');
    accordPartContent.style.height = '0px';
    // accordPartContentImg.style.height = '0px';
}

function changeAccordionPartContent(accordPart) {
    let accordPartContent = accordPart.querySelector('.about-accordion-content-container');
    if (window.getComputedStyle(accordPartContent).height == '0px') {
        showAccordionPartContent(accordPart);
        showMinusIcon(accordPart);
    }
    else {
        hideAccordionPartContent(accordPart);
        showPlusIcon(accordPart);
    }
}

function showPlusIcon(accordPart) {
    let accordPlusIcon = accordPart.querySelector('.about-accordion-heading-icon');
    accordPlusIcon.style.clipPath = 'polygon(0 48%, 48% 48%, 48% 0, 52% 0, 52% 48%, 100% 48%, 100% 52%, 52% 52%, 52% 100%, 48% 100%, 48% 52%, 0 52%)';
    accordPlusIcon.style.transform = 'rotate(0deg)';
}

function showMinusIcon(accordPart) {
    let accordPlusIcon = accordPart.querySelector('.about-accordion-heading-icon');
    accordPlusIcon.style.clipPath = 'polygon(0 48%, 48% 48%, 48% 48%, 52% 48%, 52% 48%, 100% 48%, 100% 52%, 52% 52%, 52% 52%, 48% 52%, 48% 52%, 0 52%)';
    accordPlusIcon.style.transform = 'rotate(180deg)';
}

//accordion end

setClickToAccordionPart();