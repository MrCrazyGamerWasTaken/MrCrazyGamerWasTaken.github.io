//-------------------------------------------------Start Menu-------------------------------------------------//

function OpenStartMenu() {
    var startMenu = document.getElementById("start-menu");
    var startButton = document.getElementById("start");
    
    // Toggle the visibility of the start menu
    startMenu.classList.toggle("visible");
    
    // Toggle the active class on the start button
    startButton.classList.toggle("active");
    
    // Add an event listener to the document to close the start menu when clicking outside
    if (startMenu.classList.contains("visible")) {
        document.addEventListener('click', CloseStartMenuOnClickOutside);
    } else {
        document.removeEventListener('click', CloseStartMenuOnClickOutside);
    }
}

// Function to close the start menu when clicking outside
function CloseStartMenuOnClickOutside(event) {
    var startMenu = document.getElementById("start-menu");
    var startButton = document.getElementById("start");

    if (!startButton.contains(event.target) && !startMenu.contains(event.target)) {
        startMenu.classList.remove("visible");
        startButton.classList.remove("active");
        document.removeEventListener('click', CloseStartMenuOnClickOutside);
    }
}