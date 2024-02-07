let accordionClickAreas = document.getElementsByClassName("about-accordion-list-part");

//accordion start

function setClickToAccordionPart() {

    for (let accordPart of accordionClickAreas) {
        accordPart.addEventListener("mousedown", function () {
            let accordPartContent = accordPart.querySelector('.about-accordion-content-container');
            window.onresize = function() {
                    showAccordionPartContent(accordPart);
                    showMinusIcon(accordPart);
              };
            changeAccordionPartContent(accordPart);
        })
    }
}

function showAccordionPartContent(accordPart) {
    let accordPartContent = accordPart.querySelector('.about-accordion-content-container');
    let accordPartContentImg = accordPart.querySelector('.about-accordion-image-content');
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    let addHeight = 0;
    if (window.innerWidth < 768 && accordPartContentImg != null) {
        addHeight = parseInt(window.getComputedStyle(accordPartContentImg).height.slice(0, -2));
    }
    let accordOpenHeight = getComputedStyle(document.documentElement).getPropertyValue('--accordeon-open-height').slice(0, -2);
    accordPartContent.style.maxHeight = (parseInt(accordOpenHeight) + addHeight) + 'px';
}

function hideAccordionPartContent(accordPart) {
    let accordPartContent = accordPart.querySelector('.about-accordion-content-container');
    accordPartContent.style.maxHeight = '0px';
}

function changeAccordionPartContent(accordPart) {
    let accordPartContent = accordPart.querySelector('.about-accordion-content-container');
    if (window.getComputedStyle(accordPartContent).maxHeight == '0px') {
        showAccordionPartContent(accordPart);
        showMinusIcon(accordPart);
        
    }
    else {
        console.log(window.getComputedStyle(accordPartContent).getPropertyValue('max-height'))
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

