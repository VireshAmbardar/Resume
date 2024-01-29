function openWhatsApp() {
    // Replace the phone number and message with your desired values
    var phoneNumber = "9149869687";
    var message = "Hello, ";

    // Construct the WhatsApp URL
    var whatsappURL = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

    // Open the WhatsApp URL in a new tab/window
    window.open(whatsappURL);
  }

function openImageOverlay(event) {
    event.preventDefault(); // Prevent the default link behavior
    var overlay = document.getElementById("overlay");
    overlay.classList.add("show");
    document.getElementById("overlay").style.display = "flex";
}

function openImageOverlay1(event) {
    event.preventDefault(); // Prevent the default link behavior
    var overlay = document.getElementById("overlay1");
    overlay.classList.add("show");
    document.getElementById("overlay1").style.display = "flex";
}

function openImageOverlay2(event) {
    event.preventDefault(); // Prevent the default link behavior
    var overlay = document.getElementById("overlay2");
    overlay.classList.add("show");
    document.getElementById("overlay2").style.display = "flex";
}

function openImageOverlay3(event) {
    event.preventDefault(); // Prevent the default link behavior
    var overlay = document.getElementById("overlay3");
    overlay.classList.add("show");
    document.getElementById("overlay3").style.display = "flex";
}

function closeImageOverlay() {
    document.getElementById("overlay").style.display = "none";
}

function closeImageOverlay1() {
    document.getElementById("overlay1").style.display = "none";
}

function closeImageOverlay2() {
    document.getElementById("overlay2").style.display = "none";
}

function closeImageOverlay3() {
    document.getElementById("overlay3").style.display = "none";
}