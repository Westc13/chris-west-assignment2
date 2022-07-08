// select image as the target and store them in variables
const coruscant = document.querySelector('.coruscant img');
const degobah = document.querySelector('.degobah img');
const dqar = document.querySelector('.dqar img');
const naboo = document.querySelector('.naboo img');
const tattoine = document.querySelector('.tattoine img');

coruscant.addEventListener('click', function () {
    console.log('hit');
})

// create eventHandle for clicking on the img
function handleClick(eventObject) {
    console.log(eventObject.target);

    // remove the plante image
    eventObject.target.style.visibility = 'hidden';

    // create the img element, assign image from assets folder to the img element, insert the new img in the div parent of the original img
    const explosion = document.createElement('img');
    explosion.src = './assets/explosion.jpg';
    eventObject.parentElement.appendChild(explosion);
}

coruscant.addEventListener('click', handleClick);
degobah.addEventListener('click', handleClick);
dqar.addEventListener('click', handleClick);
naboo.addEventListener('click', handleClick);
tattoine.addEventListener('click', handleClick);