// Importeer functies uit andere JavaScript-bestanden
import { stopLoading, startLoading } from './states.js'

// Function to find elements in the html
const element = (element) => {
    return document.querySelector(element)
}

const deButton = element('button')


// Button to click for random data
// Adds an event listener to the button to retrieve new data
deButton.addEventListener("click", () => {
  console.log("klik");
  if (navigator.onLine) {
      fetchData();
      // show a loading state while data is being fetched
      startLoading();
  } else {
      displayOfflineMessage();
  }
});

export const fetchData = () => {
    const url = 'https://cataas.com/cat?json=true';
  
    // Function to fetch a random cat image
    const fetchRandomCatImage = () => {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          // Retrieve the URL of the random cat image
          const imageUrl = 'https://cataas.com' + data.url;
  
          // Create an image element
          const img = document.createElement('img');
          img.src = imageUrl;
  
          // Append the image element to a container on your page
          const container = document.getElementById('cat-container');
          container.innerHTML = '';
          container.appendChild(img);
  
          // Set a new timeout to fetch the next random cat image
          // setTimeout(fetchRandomCatImage, 1000);
          // Loading state + progressive enhancement
          // Wait a second
            setTimeout(() => {
                stopLoading();

                // change data
                // VRAAG: waarom wordt de delay niet op de fetch toegepast maar wel op de button?
                fetchRandomCatImage
            }, 1000);


        })
        .catch(error => {
          console.log('Error:', error);
          
  
          // Show error message or perform error handling
          // For example, you can display an error image or show an error message in the container
          const container = document.getElementById('cat-container');
          container.innerHTML = 'Error occurred while fetching cat image.';
        });
    };
  
    // Call the function to fetch the first random cat image
    fetchRandomCatImage();
  };
  

  // Function to display an offline message
const displayOfflineMessage = () => {
  const offlineMessage = 'You are currently offline. Please check your internet connection and try again.';
  // Display the offline message in a container on your page
  const container = document.getElementById('cat-container');
  container.innerHTML = offlineMessage;
};

// Check online status on page load
if (!navigator.onLine) {
  displayOfflineMessage();
}
