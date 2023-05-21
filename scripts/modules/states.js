/**
 * Een functie die een DOM-element retourneert dat overeenkomt met de opgegeven selector
 * @param {string} element - Een CSS-selector die het gewenste DOM-element identificeert
 * @returns {HTMLElement} - Het overeenkomende DOM-element, indien gevonden
 */
const element = (element) => {
    return document.querySelector(element)
}

const deButton = element('button')

// Schakelt een opgegeven button uit en verandert de tekst om aan te geven dat er wordt geladen 
export function startLoading() {
    deButton.setAttribute("disabled", true)
    deButton.innerHTML = 'loading'
}

// Schakelt een eerder uitgeschakelde button opnieuw in en verandert de tekst terug naar de standaardwaarde
export function stopLoading() {
    deButton.removeAttribute("disabled")
    deButton.innerHTML = 'shuffle'
}

/**
 * Verwerkt fouten die zich kunnen voordoen tijdens het fetchen
 * @param {HTMLElement} element - Het DOM-element waarvan de tekst moet worden bijgewerkt om de fout weer te geven
 * @param {Error} error - De fout die zich heeft voorgedaan tijdens de fetch-operatie
 * @throws {Error} - Gooit altijd een fout met een bericht dat wijst op de mislukking
 */
export const handleFetchError = (element, error) => {
    element.innerHTML = "failed to load cats";

    throw new Error(`Failed to fetch data: ${error}`);
    // Do something to handle the error, e.g. display an error message to the user
};