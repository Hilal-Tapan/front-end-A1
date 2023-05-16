// Importeer functies uit andere JavaScript-bestanden
import { stopLoading, startLoading } from './states.js'
import { handleFetchError } from './states.js'

// Functie om elementen in de HTML te vinden
const element = (element) => {
    return document.querySelector(element)
}

// Zet de bijbehorende api gegevens in de HTML elementen
const changeTitel = (data) => {
    console.log(data)
    const text = data
    deAuteur.innerHTML = text
}

const changeQuote = (data) => {
    console.log(data)
    const quote = data
    deQuote.innerHTML = quote
}

// Variabelen om HTML-elementen te vinden
const deAuteur = element('h1')
const deQuote = element('p')
const deButton = element('button')

//Button om te klikken voor random data
// Voegt een eventlistener toe aan de knop om nieuwe data op te halen
deButton.addEventListener("click", () => {
    console.log("klik")
    fetchData()

    // Laat een loading state zien terwijl gegevens worden opgehaald
    startLoading()
})


// Functie om gegevens van API op te halen
export const fetchData = () => {
    const url = 'https://opensheet.elk.sh/12nr4W-RHpvhnw76MCZZtujYHqP1qIU28ExM4oXQfzys/blad1';
    // const url = 'https://opensheet.elk.sh/12nr4W-RHpvhnw7jdfhdhdf6MCZZtujYHqP1qIU28ExM4oXQfzys/blad1';

    // Haal gegevens op van de API
    const data = fetch(url)

        // Converteer gegevens naar JSON-indeling
        .then(response => response.json())

        // Manipuleer gegevens en pas deze toe op de HTML-elementen
        .then((data) => {

            // Deze voor als hij kan fetchen maar niks binnen haalt - bron: robert
            // Toon foutmelding als gegevens niet kunnen worden opgehaald
            if (data.error) {
                handleFetchError(deQuote, data.error);
                return;
            }

            console.log(data);

            // random quotes genereren
            const index = Math.floor(Math.random() * data.length);
            console.log(index);

            // Loading state + progressive enhancement
            // Wacht een seconde en pas dan veranderingen toe op de HTML-elementen
            setTimeout(() => {
                stopLoading();

                // data veranderen
                changeTitel(data[index].author);
                changeQuote(data[index].quote);
            }, 1000);
        })

        // error state 
        // Toon foutmelding als gegevens niet kunnen worden opgehaald
        .catch(err => {
            handleFetchError(deQuote, err);
        });
};




// PROCES
// //Loading state stoppen
// .then(json => {
//     display.textContent="";
// })

// }

//      // function loading(state) {
// const loader = document.querySelector('svg.loader')
// if (state == 'on') {
//    loader.classList.add(state)
// } else {
//     loader.classList.remove(state)
// }


//empty error en loading state moeten erin


//Loading state
// const display = document.querySelector('#loading')
// display.textContent = "Loading quotes, even geduld a.u.b :)"

// function handleFetchError(response) {
//     if (!response.ok) {
//       throw new Error(`Failed to fetch API: ${response.status} ${response.statusText}`);
//     }
//     return response.json();
//   }
// // Fetchen van de API
// export const fetchData = () => {
//     const url = 'https://opensheet.elk.sh/12nr4W-RHpvhnw76MCZZtujYHqP1qIU28ExM4oXQfzys/blad1' 
// // Hieronder zijn de functies (fetch.then.then) zijn aan elkaar 
// // gechaint = dit heet een method -> functie die in een object leeft
//     const data = fetch(url)
//             .then(response => response.json())
//             .then(data => {
//                 loading()
//                 console.log(data)

//                 // random quotes genereren
//                 var index = Math.floor(Math.random()*data.length)
//                 console.log(index)

//                 // Loading state + progressive enhancement
//                 setTimeout(() => {
//                     // loader.classList.remove('display')
//                     loading()
//                     // data veranderen
//                     changeTitel(data[index].author);
//                     changeQuote(data[index].quote);

//                 }, 1000)



//                 // data veranderen oude plek
//                 // changeTitel(data[index].author);
//                 // changeQuote(data[index].quote);

//             })
//             // .catch(error => {
//             //     handleFetchError()
//             //   })
// }


// Random manieren van fetchen waar ik mee heb geexperimenteerd

// // Nummer 1
// //fetchen
// function fetchData (){
//     const url = 'https://quote.api.fdnd.nl/v1/quote'

// // console.log(1)
// fetchData()

// const data = fetch(url)
// //functies
//   .then(response => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log("Succes!", data);
//     return data
//   })
//   .catch(error => {
//     console.error("Something went wrong", error);
//   })
//   .then(data => {
//     // data veranderen
//     changeH1(data.data[0].text)
//   });

//   const mainHeading = element('h1')

//   function changeH1 (data) {
//     console.log(data)
//     const name = data
//     mainHeading.innerHTML = name
//   }
// }

// function element (element) {
//     return document.querySelector(element)
// }

// // const div = element('div');

// function elements (elements) {
//     return document.querySelector(elements)
// }


// Nummer 2
// Fetchen van de API
// function fetchData (){
//         const url = 'https://quote.api.fdnd.nl/v1/quote'

//     // console.log(1)
//     fetchData()

//     const data = fetch(url)

//             .then(response =>
//                 // The API call was successful!
//                 console.log ('success!', response)
//             .catch(err =>
//                 // There was an error
//                 console.warn('Something went wrong.', err)
//             )
//             .then(response => response.json())
//             .then(data => {
//                 // data veranderen
//                 changeH1(data);
//             })

//         )}

//         function element (element) {
//             return document.querySelector(element)
//         }
//         // const div = element('div');
//         function elements (elements) {
//             return document.querySelector(elements)
//         }

//         const mainHeading = element('h1')

//         function changeH1 (data) {
//           console.log(data)
//           const name = data
//           mainHeading.innerHTML = name
//         }



// // fetch('https://quote.api.fdnd.nl/v1/quote').then(function (response) {
// // 	// The API call was successful!
// // 	console.log('success!', response);
// // }).catch(function (err) {
// // 	// There was an error
// // 	console.warn('Something went wrong.', err);
// // });