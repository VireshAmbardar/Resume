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

function closeImageOverlay() {
    document.getElementById("overlay").style.display = "none";
}

function closeImageOverlay1() {
    document.getElementById("overlay1").style.display = "none";
}

function closeImageOverlay2() {
    document.getElementById("overlay2").style.display = "none";
}
