const background = ['img/assasins-background.avif', 'img/combatants-background.avif', 'img/mages-background.avif','img/support-background.avif', 'img/support-background.avif', 'img/tanks-background.avif'];

const buttons = document.querySelectorAll('div.champion-item');

function chooseChampion(e) {
    e.preventDefault();

    const button = document.getElementById(e.target.parentNode.id);
    document.getElementById('champion-background').src = background[parseInt(button.dataset.image)];
    document.getElementById('champion').src = button.dataset.champion;
    document.getElementById('champion-name').innerHTML = button.dataset.name;
    document.getElementById('champion-phrase').innerHTML = button.dataset.phrase;
}

buttons.forEach((element) => {
    element.addEventListener('click', chooseChampion);
})