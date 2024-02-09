function CloseChrome() {
    document.getElementById("chrome-app").classList.toggle("visible");
}

function OpenChrome() {
    if (!document.getElementById("chrome-app").classList.contains("visible")) {
        document.getElementById("chrome-app").classList.toggle("visible");
    }
}

let isMaximized = false;

function MaximizeChrome() {
    if (isMaximized == false) {
        isMaximized = true;
        document.getElementById("chrome-app").style.width = "100%";
        document.getElementById("chrome-app").style.height = "100%";
        document.getElementById("chrome-app").style.top = 0;
        document.getElementById("chrome-app").style.left = 0;
        document.getElementById("chrome-app").style.borderRadius = 0;
        document.getElementById("chrome-page").style.height = "100%";
        document.getElementById("chrome-container").style.width = "30%";
        document.getElementById("chrome-search").style.width = "83.5vw";
    }
    else {
        isMaximized = false;
        document.getElementById("chrome-app").style.width = "68%";
        document.getElementById("chrome-app").style.height = "93%";
        document.getElementById("chrome-app").style.top = "0.7vw";
        document.getElementById("chrome-app").style.left = "0.7vw";
        document.getElementById("chrome-app").style.borderRadius = "0.45vw";
        document.getElementById("chrome-page").style.height = "47.75vw";
        document.getElementById("chrome-container").style.width = "45%";
        document.getElementById("chrome-search").style.width = "51.25vw";
    }

}

