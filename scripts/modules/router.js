export function router() {
    // Define the section where you want to display the content.

    // If there is no hash present in the URL, use the hash 'home'.
    if (window.location.hash === "") {
        window.location.hash = "home";
    }

    // Listen for changes in the URL hash and update the section content.
    window.addEventListener('hashchange', function () {
        const hash = window.location.hash;

        // Select the DOM elements that contain the content of different sections.
        var homeSection = document.querySelector('#home');
        var aboutSection = document.querySelector('#about');

        console.log('hash has changed', hash);

        // Remove the active class from the previous active section.
        const active = document.querySelector('.active');
        if (active) {
            active.classList.remove('active');
        }

        // Select the appropriate section and add the 'active' class.
        switch (hash) {

            case "#home":
                homeSection.classList.add('active'); // Adds the class
                console.log(active);
                break;

            case "#about":
                aboutSection.classList.add('active'); // Adds the class
                console.log(active);
                break;
        }
    }, false);
}

