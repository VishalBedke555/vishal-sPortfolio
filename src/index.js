function bodyload() {
    var colors1 = document.getElementById("colors1");
    colors1.style.color = 'rgb(6, 181, 250)';
    var colors1 = document.getElementById("colors2");
    colors1.style.color = 'greenyellow';
    var colors1 = document.getElementById("colors3");
    colors1.style.color = 'greenyellow';
    var colors = document.getElementById("colors");
    colors.style.color = 'greenyellow';
    var btncolor = document.getElementById("btn-color");
    btncolor.style.backgroundColor = 'greenyellow';
    var borders = document.querySelector(".experience");
    borders.style.borderTop = '2px solid greenyellow';

    if(!localStorage.getItem('visits')){
        localStorage.setItem('visits', 1)
    }else{
        let count = parseInt(localStorage.getItem('visits'));
        count += 1;
        localStorage.setItem('visits', count);
    }
    let visitCount = localStorage.getItem('visits');
    const visitCounter = document.getElementById('visitCounter');
    visitCounter.innerHTML = `Views 👁: ${visitCount}`;
}
function greenClick() {
    var colors1 = document.getElementById("colors1");
    colors1.style.color = 'rgb(6, 181, 250)';
    var colors1 = document.getElementById("colors2");
    colors1.style.color = 'greenyellow';
    var colors1 = document.getElementById("colors3");
    colors1.style.color = 'greenyellow';
    var colors = document.getElementById("colors");
    colors.style.color = 'greenyellow';
    var btncolor = document.getElementById("btn-color");
    btncolor.style.backgroundColor = 'greenyellow'
    var hero = document.getElementById("colors4");
    hero.style.color = 'red';
    var borders = document.querySelector(".experience");
    borders.style.borderTop = '2px solid greenyellow';
}
function orangeClick() {
    var colors1 = document.getElementById("colors1");
    colors1.style.color = 'rgb(6, 181, 250)';
    var colors1 = document.getElementById("colors2");
    colors1.style.color = 'rgb(226, 68, 130)';
    var colors1 = document.getElementById("colors3");
    colors1.style.color = 'rgb(245, 116, 48)';
    var colors = document.getElementById("colors");
    colors.style.color = 'rgb(245, 116, 48)';
    var btncolor = document.getElementById("btn-color");
    btncolor.style.backgroundColor = 'rgb(245, 116, 48)';
    var borders = document.querySelector(".experience");
    borders.style.borderTop = '2px solid rgb(245, 116, 48)'

}
function purpleClick() {
    var colors1 = document.getElementById("colors1");
    colors1.style.color = 'rgb(6, 181, 250)';
    var colors1 = document.getElementById("colors2");
    colors1.style.color = 'purple';
    var colors1 = document.getElementById("colors3");
    colors1.style.color = 'purple';
    var colors = document.getElementById("colors");
    colors.style.color = 'rgb(221, 70, 142)';
    var btncolor = document.getElementById("btn-color");
    btncolor.style.backgroundColor = 'rgb(201, 75, 180)';
    var borders = document.querySelector(".experience");
    borders.style.borderTop = '2px solid purple'

}
function blueClick() {
    var colors1 = document.getElementById("colors1");
    colors1.style.color = 'rgb(245, 116, 48)';
    var colors1 = document.getElementById("colors2");
    colors1.style.color = 'rgb(6, 181, 250)';
    var colors1 = document.getElementById("colors3");
    colors1.style.color = 'rgb(6, 181, 250)';
    var colors = document.getElementById("colors");
    colors.style.color = 'rgb(6, 181, 250)';
    var btncolor = document.getElementById("btn-color");
    btncolor.style.backgroundColor = 'rgb(6, 181, 250)';
    var borders = document.querySelector(".experience");
    borders.style.borderTop = '2px solid rgb(6, 181, 250)'

}
function body1load() {
    var hero = document.getElementById("colors4");
    hero.style.color = 'greenyellow';
    var heroBg = document.getElementById("hero-2-bg");
    heroBg.style.backgroundColor = 'greenyellow';
    var heroBtn = document.getElementById("hero-2-btn");
    heroBtn.style.backgroundColor = 'greenyellow';
    var borders = document.querySelector(".hero-2-experience");
    borders.style.borderTop = '2px solid greenyellow'
}
function green1Click() {
    var hero = document.getElementById("colors4");
    hero.style.color = 'greenyellow';
    var heroBg = document.getElementById("hero-2-bg");
    heroBg.style.backgroundColor = 'greenyellow';
    var heroBtn = document.getElementById("hero-2-btn");
    heroBtn.style.backgroundColor = 'greenyellow';
    var borders = document.querySelector(".hero-2-experience");
    borders.style.borderTop = '2px solid greenyellow';
}
function orange1Click() {
    var hero = document.getElementById("colors4");
    hero.style.color = 'rgb(245, 116, 48)';
    var heroBg = document.getElementById("hero-2-bg");
    heroBg.style.backgroundColor = 'rgb(248, 162, 115)';
    var heroBtn = document.getElementById("hero-2-btn");
    heroBtn.style.backgroundColor = 'rgb(248, 162, 115)';
    var borders = document.querySelector(".hero-2-experience");
    borders.style.borderTop = '2px solid rgb(248, 162, 115)'
}
function purple1Click() {
    var hero = document.getElementById("colors4");
    hero.style.color = 'rgb(221, 70, 142)';
    var heroBg = document.getElementById("hero-2-bg");
    heroBg.style.backgroundColor = 'rgb(116, 71, 116)';
    var heroBtn = document.getElementById("hero-2-btn");
    heroBtn.style.backgroundColor = 'purple';
    var borders = document.querySelector(".hero-2-experience");
    borders.style.borderTop = '2px solid purple'
}
function blue1Click() {
    var hero = document.getElementById("colors4");
    hero.style.color = 'rgb(6, 181, 250)';
    var heroBg = document.getElementById("hero-2-bg");
    heroBg.style.backgroundColor = 'rgb(141, 214, 243)';
    var heroBtn = document.getElementById("hero-2-btn");
    heroBtn.style.backgroundColor = 'rgb(141, 214, 243)';
    var borders = document.querySelector(".hero-2-experience");
    borders.style.borderTop = '2px solid rgb(141, 214, 243)'
}

function handleNavigate (){
    window.location.href = "https://pixelperfectdev.netlify.app/public/Projects.html"
}