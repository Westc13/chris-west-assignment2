// select image as the target for DOM node manipulation and store them in variables
    const coruscant = document.querySelector('#coruscant img');
    const degobah = document.querySelector('#degobah img');
    const dqar = document.querySelector('#dqar img');
    const naboo = document.querySelector('#naboo img');
    const tatooine = document.querySelector('#tatooine img');
   
// select planets parent div and store it in variables
    const coruscantDiv = document.getElementById('coruscant');
    const degobahDiv = document.getElementById('debobah');
    const dqarDiv = document.getElementById('dqar');    
    const nabooDiv = document.getElementById('naboo');
    const tatooineDiv = document.getElementById('tatooine');

    // create an explosion image element and store it in a variable
    const explosionCoruscant = document.createElement('img');
    const explosionDegobah = document.createElement('img');
    const explosionDqar = document.createElement('img');
    const explosionNaboo = document.createElement('img');
    const explosionTatooine = document.createElement('img');
    // addEventListener to coruscant image
    coruscant.addEventListener('click', function () {
        // use annonymous function to change coruscant image to display none
        coruscant.style.display = 'none';
        // setAttribute as "name-value" pair to the explosion image element to give this image a path
        explosionCoruscant.setAttribute( 'src', './assets/explosion.jpg');

    // insert the explosion image now with the path to a jpg image in assets folder to the parent element in HTML       
    coruscantDiv.appendChild(explosionCoruscant);
})

// repeat the same process for the other planets - this is not the DRY code but would make it MVP
degobah.addEventListener('click', function () {
    degobah.style.display = 'none';
    explosionDegobah.setAttribute('src', './assets/explosion-degobah.jpg');
    degobahDiv.appendChild(explosionDegobah);
})

// DRY code attempt
// select elements with class name of planet store them in an object

