let search;
let chromeSearch;


document.getElementById("search-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        search = document.getElementById("search-input").value;
        window.location = "https://www.google.se/search?q=" + search;
    }
});

document.getElementById("chrome-search").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        chromeSearch = document.getElementById("chrome-search").value;
        window.location = "https://www.google.se/search?q=" + chromeSearch;
    }
});

document.getElementById("google-search").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        chromeSearch = document.getElementById("google-search").value;
        window.location = "https://www.google.se/search?q=" + chromeSearch;
    }
});