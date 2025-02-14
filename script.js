let index = 0;
const images = document.querySelectorAll(".carrusel img");

function showImage(n) {
    images.forEach((img, i) => {
        img.classList.remove("active", "inactive");
        if (i === n) {
            img.classList.add("active");  // La imagen activa estará en su lugar
        } else {
            img.classList.add("inactive");  // Las otras imágenes se moverán
        }
    });
}

function next() {
    index = (index + 1) % images.length;
    showImage(index);
}

function prev() {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
}

setInterval(next, 3000);  // Cambia cada 3 segundos