document.addEventListener('DOMContentLoaded', function() {
    const greetingElement = document.getElementById('greeting');
    const now = new Date();
    const hour = now.getHours();
    let message = "";

    if (hour >= 5 && hour < 12) {
        message = "Selamat Pagi";
    } else if (hour >= 12 && hour < 15) {
        message = "Selamat Siang";
    } else if (hour >= 15 && hour < 18) {
        message = "Selamat Sore";
    } else {
        message = "Selamat Malam";
    }

    if (greetingElement) {
        greetingElement.innerText = message + "!";
    }
});