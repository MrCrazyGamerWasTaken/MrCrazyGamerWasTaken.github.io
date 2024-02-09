//-------------------------------------------------Notifications-------------------------------------------------//

let notificationsPanel = document.getElementById("notifications");
let notificationsButton = document.getElementById("notifications-button");

function OpenNotifications() {
    // Toggle the visibility of the notifications panel
    notificationsPanel.classList.toggle("visible");
    
    // Toggle the active class on the notifications button
    notificationsButton.classList.toggle("active");
    
    // Add an event listener to the document to close the notifications panel when clicking outside
    if (notificationsPanel.classList.contains("visible")) {
        document.addEventListener('click', CloseNotificationsPanelOnClickOutside);
    } else {
        document.removeEventListener('click', CloseNotificationsPanelOnClickOutside);
    }
}

// Function to close the notifications panel when clicking outside
function CloseNotificationsPanelOnClickOutside(event) {
    if (!notificationsButton.contains(event.target) && !notificationsPanel.contains(event.target)) {
        notificationsPanel.classList.remove("visible");
        notificationsButtons.classList.remove("active");
        document.removeEventListener('click', CloseNotificationsPanelOnClickOutside);
    }
}

//--------------------------------------------------Notifications buttons-----------------------------------------//

let notificationsSetting = document.getElementById("notifications-settings-panel");

function enableNotificationsSetting(number) {
    notificationsSetting.children[number].classList.toggle("enabled");

    if (number == 3 && document.getElementById("nightmode").style.opacity == 0) {
        document.getElementById("nightmode").style.opacity = "1";
        document.getElementById("body2").style.filter = "hue(200)";
    }
    else {
        document.getElementById("nightmode").style.opacity = "0";
        document.getElementById("body2").style.filter = "hue(0)";
    }
}
