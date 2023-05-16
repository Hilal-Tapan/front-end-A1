import { fetchData } from  './modules/api.js'
import { router } from './modules/router.js'

// Wordt aangeroepen wanneer de pagina laadt. Dit haalt gegevens op van de API en geeft deze weer op de pagina.
fetchData()

// router() wordt ook aangeroepen wanneer de pagina laadt met behulp van window.onload. 
// Dit zorgt ervoor dat de juiste sectie van de pagina wordt weergegeven op basis van de 
// huidige hash van de URL.
window.onload = router(); /* als de pagina laadt, voer dan de router functie uit */

window.addEventListener('hashchange', function () {
    router()
}, false);

