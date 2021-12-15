'use strict';

let isScrolling = false;

window.onwheel = (event) => {
    let delta = event.deltaY;
    if (Math.abs(delta) > 70 && !isScrolling) {
        isScrolling = true;

        setTimeout(() => {
            isScrolling = false;
        }, 300);

        if (delta > 0)
            toNextSlide();
        else
            toPrevSlide();
    };
};

const toNextSlide = () => {
    if (currentPage === PAGES.MAIN) {
        mainOff();
        designerOn();
    } else if (currentPage === PAGES.DESIGNER) {
        designerOff();
        engineerOn();
    } else if (currentPage === PAGES.ENGINEER) {
        engineerOff();
        topManagerOn();
    };
};

const toPrevSlide = () => { 
    if (currentPage === PAGES.DESIGNER) {
        designerOff();
        mainOn()
    } else if (currentPage === PAGES.ENGINEER) {
        engineerOff();
        designerOn();
    } else if (currentPage === PAGES.TOPMANAGER) {
        topManagerOff();
        engineerOn();
    };
};