// Galerideki görselleri başka bir scriptten çağırıyorum.
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
import { images } from "./03-images.js";

const gallery = document.querySelector(".gallery"); // Galeri elementini seçer
const galleryMarkup = images.map(({ preview, original, description }) => // Geleri elemanlarını oluşturur
    `<li class="gallery-item">
        <a class="gallery-link" href="${original}">
            <img class="gallery-image" src="${preview}" alt="${description}" data-source="${original}"/>
        </a></li>`).join("");

gallery.innerHTML = galleryMarkup; // Galeri elemanlarını HTML'e aktarır

new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250, download: "Click for Download", animationSpeed: 350, fadeSpeed: 1000});

// gallery.addEventListener("click", (event) => { // Galeri elemanlarına tıklandığında gerçekleşecek işlemler
//     event.preventDefault();
//     const target = event.target; // Tıklama hedefi seçer

//     if (target.nodeName !== "IMG") { // Tıklanan hedef bir görsel değilse, işlemlerin gerçekleşmesini engelleyen kontrol
//         return;
//     }

//     const largeImageURL = target.dataset.source; // Tıklanan görselin kaynağını kaydeder

//     const instance = basicLightbox.create(`
//         <img src="${largeImageURL}" width="800" height="600">
//     `); // Tıklanan görselin modal penceresini oluşturan kütüphane.

//     instance.show(); // Modal penceresini görüntüler.

//     document.addEventListener("keydown", (event) => { // Klavyeden tıklandığında gerçekleşecek işlemler
//         if (event.key === "Escape") { // ESC tıklandığında modal penceresinin kapanmasını sağlayan kontrol
//             instance.close();
//         }
//     });
// })

