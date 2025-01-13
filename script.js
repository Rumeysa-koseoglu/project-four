// Get the joke container element by its ID
const jokeContainer = document.getElementById("joke");
// Get the button element by its ID
const btn = document.getElementById("btn");
// Define the API URL for fetching jokes
// This URL fetches a random joke, excluding certain types of jokes
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

// Define a function to fetch and display a joke
let getJoke = () => {
     // Remove the "fade" class from the joke container (if it exists)
    jokeContainer.classList.remove("fade")
    // Fetch data from the API
    fetch(url)
    // Convert the fetched data into JSON format
    .then(data => data.json())
    .then(item =>{
        // Set the joke text in the joke container
        jokeContainer.textContent = `${item.joke}`;
        // Add the "fade" class back to the joke container to apply animation
        jokeContainer.classList.add("fade");
    });
}
// Add a click event listener to the button
// When the button is clicked, the `getJoke` function is called
btn.addEventListener("click",getJoke);
// Call `getJoke` once when the page loads to display an initial joke
getJoke();