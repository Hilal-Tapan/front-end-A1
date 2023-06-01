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
