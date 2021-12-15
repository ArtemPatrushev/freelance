'use strict';

const delay = 300;

const PAGES = Object.freeze({
    MAIN: 0,
    DESIGNER: 1,
    ENGINEER: 2,
    TOPMANAGER: 3
});

let currentPage = PAGES.MAIN;

const designer = {
    header: document.querySelector('.characters_header-top_designer'),
    text: document.querySelector('.characters_text_designer'),
    wellImg: document.querySelector('.characters_well-types_designer'),
    wellText: document.querySelector('.characters_well-types_designer-item'),
    btn: document.getElementById('designer-btn'),
    line: document.getElementById('designer-line'),
    speech: document.querySelector('.designer_speech'),
    img: document.querySelector('.designer2'),
    videoBack: document.querySelector('.designer_video-back'),
    background: document.getElementById('backgroundIndex')
};

const engineer = {
    header: document.querySelector('.characters_header-top_engineer'),
    text: document.querySelector('.characters_text_engineer'),
    wellImg: document.querySelector('.characters_well-types_engineer'),
    wellText: document.querySelector('.characters_well-types_engineer-item'),
    btn: document.getElementById('engineer-btn'),
    line: document.getElementById('engineer-line'),
    speech: document.querySelector('.engineer_speech'),
    img: document.querySelector('.engineer2'),
    videoBack: document.querySelector('.engineer_video-back'),
    background: document.getElementById('backgroundIndex')
};

const topManager = {
    header: document.querySelector('.characters_header-top_top-manager'),
    text: document.querySelector('.characters_text_top-manager'),
    wellImg: document.querySelector('.characters_well-types_top-manager'),
    wellText: document.querySelector('.characters_well-types_top-manager-item'),
    btn: document.getElementById('top-manager-btn'),
    line: document.getElementById('top-manager-line'),
    speech: document.querySelector('.top-manager_speech'),
    img: document.querySelector('.top-manager2'),
    videoBack: document.querySelector('.top-manager_video-back'),
    background: document.getElementById('backgroundIndex')
};

const mainPage = {
    headerTop: document.querySelector('.main_header-top'),
    headerBottom: document.querySelector('.main_header-bottom'),
    text: document.querySelector('.main_text'),
    wellsType: document.querySelector('.main_wells'),
    wellTypesLine: document.querySelector('.main_well-types_line'),
    btn: document.querySelector('.main_more-info_btn'),
    specificationsText: document.querySelector('.main_more-info_text'),
    personImages: document.querySelector('.main_person-images'),
    background: document.getElementById('backgroundIndex')
};

const indexMainContent = document.querySelector('.main');
const indexCharactersContent = document.querySelector('.characters');
const mainBackground = document.querySelector('.fullscreen-back');
const navMenuBtns = document.querySelectorAll('.top-menu_btns');
const toMainBtn = document.querySelector('.header_content_logo');
const charactersRequestBtn = document.querySelector('.characters_request');

const handleClick = (clickEventBtn) => {
    const clickedBtn = clickEventBtn.target;
    const btnId = clickedBtn.id;
    // сделать функцию, которая все отключит перед работой --- в конце прописать
    changeSlide(btnId);
};

navMenuBtns.forEach(elem => {
    elem.addEventListener('click', handleClick);
});

toMainBtn.addEventListener('click', handleClick);

const changeSlide = (btnId) => {
    if (currentPage === PAGES.MAIN && btnId !== 'toMainPage') {     
        mainOff();
    } else if (currentPage === PAGES.DESIGNER) {
        designerOff();
    } else if (currentPage === PAGES.ENGINEER) {
        engineerOff();
    } else if (currentPage === PAGES.TOPMANAGER) {
        topManagerOff();
    };

    if (btnId === 'designerBtn') {
        designerOn();
    } else if (btnId === 'engineerBtn') {
        engineerOn();
    } else if (btnId === 'top-managerBtn') {
        topManagerOn();
    } else if (btnId === 'toMainPage' && currentPage !== PAGES.MAIN) {
        mainOn();
    };
};

const mainOn = () => {
    setTimeout(() => {
        indexCharactersContent.style.display = 'none';
        indexMainContent.style.display = 'flex';
        mainPage.background.classList.add('fullscreen-back_main');
        charactersRequestBtn.style.display = 'none';
        for (let key in mainPage) {
            mainPage[key].classList.remove('slide-out-bottom');
        };
        for (let key in mainPage) {
            if (key === 'background') {
                console.log('miss')
            } else
                mainPage[key].classList.add('slide-in-bottom');
        };
    }, delay);
    currentPage = PAGES.MAIN;
};

const mainOff = () => {
    for (let key in mainPage) {
        mainPage[key].classList.remove('slide-in-bottom');
    };
    for (let key in mainPage) {
        if (key === 'background') {
            console.log('miss');
        } else 
            mainPage[key].classList.add('slide-out-bottom');
    };
    setTimeout(() => {
        mainPage.background.classList.remove('fullscreen-back_main');
        indexMainContent.style.display = 'none';
        indexCharactersContent.style.display = 'flex';
        charactersRequestBtn.style.display = 'block';
    }, delay);
};

const designerOn = () => {
    for (let key in designer) {
        designer[key].classList.remove('slide-out-bottom');
    };
    for (let key in designer) {
        if (key === 'speech' || key === 'background') {
            console.log('speech');
        } else 
            designer[key].classList.add('slide-in-bottom');
    };
    setTimeout(() => {
        for (let key in designer) {
            if (key === 'background') {
                designer.background.classList.add('fullscreen-back_characters');
            } else
                designer[key].style.display = 'block';
        };
    }, delay);
    currentPage = PAGES.DESIGNER;
};

const designerOff = () => {
    for (let key in designer) {
        designer[key].classList.remove('slide-in-bottom');
    };
    for (let key in designer) {
        if (key === 'speech' || key === 'background') {
            console.log('speech');
        } else 
            designer[key].classList.add('slide-out-bottom');
    };
    setTimeout(() => {
        for (let key in designer) {
            if (key === 'background') {
                designer.background.classList.remove('fullscreen-back_characters');
            } else
                designer[key].style.display = 'none';
        };
    }, delay);
};

const engineerOn = () => {
    for (let key in engineer) {
        engineer[key].classList.remove('slide-out-bottom');
    };
    for (let key in engineer) {
        if (key === 'speech' || key === 'background') {
            console.log('speech');
        } else 
            engineer[key].classList.add('slide-in-bottom');
    };
    setTimeout(() => {
        for (let key in engineer) {
            if (key === 'background') {
                engineer.background.classList.add('fullscreen-back_characters');
            } else
                engineer[key].style.display = 'block';
        };
    }, delay);
    currentPage = PAGES.ENGINEER;
};

const engineerOff = () => {
    for (let key in engineer) {
        engineer[key].classList.remove('slide-in-bottom');
    };
    for (let key in engineer) {
        if (key === 'speech' || key === 'background') {
            console.log('speech');
        } else
            engineer[key].classList.add('slide-out-bottom');
    };
    setTimeout(() => {
        for (let key in engineer) {
            if (key === 'background') {
                engineer.background.classList.remove('fullscreen-back_characters');
            } else
                engineer[key].style.display = 'none';
        };
    }, delay);
};

const topManagerOn = () => {
    for (let key in topManager) {
        topManager[key].classList.remove('slide-out-bottom');
    };
    for (let key in topManager) {
        if (key === 'speech' || key === 'background') {
            console.log('speech');
        } else 
            topManager[key].classList.add('slide-in-bottom');
    };
    setTimeout(() => {
        for (let key in topManager) {
            if (key === 'background') {
                topManager.background.classList.add('fullscreen-back_characters');
            } else
                topManager[key].style.display = 'block';
        };
    }, delay);
    currentPage = PAGES.TOPMANAGER;
};

const topManagerOff = () => {
    for (let key in topManager) {
        topManager[key].classList.remove('slide-in-bottom');
    };
    for (let key in topManager) {
        if (key === 'speech' || key === 'background') {
            console.log('speech');
        } else
            topManager[key].classList.add('slide-out-bottom');
    };
    setTimeout(() => {
        for (let key in topManager) {
            if (key === 'background') {
                topManager.background.classList.remove('fullscreen-back_characters');
            } else
                topManager[key].style.display = 'none';
        };
    }, delay);
};
