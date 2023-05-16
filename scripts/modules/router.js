export function router() {
    // defineer de section waarin je de content wilt weergeven.

    // Als er geen hash aanwezig is in de URL, gebruik dan de hash 'home'.
    if (window.location.hash === "") {
        window.location.hash = "home";
    }

    // Luister naar wijzigingen in de URL-hash en update de sectie-inhoud.
    window.addEventListener('hashchange', function () {
        const hash = window.location.hash;

        // Selecteer de DOM-elementen die de inhoud van de verschillende secties bevatten.
        var homeSection = document.querySelector('#home')
        var aboutSection = document.querySelector('#about')


        console.log('hash has changed', hash)

        //verwijderd de active class
        const active = document.querySelector('.active')
        if (active) {
            active.classList.remove('active');
        }

        // Selecteert de juiste sectie en voegt de 'active' class toe
        switch (hash) {

            case "#home":
                homeSection.classList.add('active') //adds class
                console.log(active)
                break;

            case "#about":
                aboutSection.classList.add('active') //adds class
                console.log(active)
                break;

                // default:
                //  errorSection.innerHTML = '<h1>404 - Page Not Found</h1>';
                // break;
        }
    }, false);
}











//  section.insertAdjacentHTML('afterbegin' , '<h1>hi</h1>')
// insertAdjacentHTML heeft 4 properties die je als eerst kan aangeven.
// deze 4 zijn: beforebegin, afterbegin, beforeend, afterend
// deze properties geven aan waar de content die daarnaast staat
// in je html gaat staan.
// Jeff :D
// https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML