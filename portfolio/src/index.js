import i18Obj from "./translate.js"

const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav');
// const themeSwitcher = document.querySelector('.white-theme');
const langRu = document.querySelector('.lang-ru');
const langEn = document.querySelector('.lang-en');
const words = document.querySelectorAll('[data-i18]');
const theme = document.querySelector('.theme');
const portfolioButtons = document.querySelector('.buttons-portfolio');
const portfolioButton = document.querySelectorAll('.portfolio__btn');
const portfolioPhoto = document.querySelectorAll('.portfolio__item');



console.log(portfolioButton)

const body = document.body;

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

// themeSwitcher.addEventListener('click', () => {
//     themeSwitcher.classList.toggle('active');
// })




function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;

};


theme.onclick = function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}





function getTranslate(lang) {
    words.forEach(el => el.textContent = i18Obj[lang][el.dataset.i18])
};


langRu.addEventListener('click', () => {
    getTranslate('ru')
    langEn.classList.remove('span-active');
    langRu.classList.remove('span-active');
    langRu.classList.toggle('span-active');
})

langEn.addEventListener('click', () => {
    getTranslate('en')
    langRu.classList.remove('span-active');
    langEn.classList.remove('span-active');
    langEn.classList.toggle('span-active');
})


portfolioButtons.addEventListener('click', function changePhoto(event) {
    if (event.target.classList.contains('portfolio__btn')){
        const season = event.target.dataset.season;
        portfolioPhoto.forEach((img, index) => img.src = `./assets/img/${season}/${index}.jpg`);
        // portfolioButton.forEach(el => el.classList.remove('button-colored'))
    }
    
})










