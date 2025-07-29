const menu = document.getElementById("nav-icon");
const navlist = document.getElementById("nav-list");
const icon = document.getElementById("menu-icon");
const track = document.getElementById('carouselTrack');
const slides = document.querySelectorAll('.carousel-slide');
    let index = 0;
var map = L.map('map').setView([-2.5489, 118.0149], 5); // Koordinat tengah Indonesia
const fadeEls = document.querySelectorAll('.fade-in');

menu.addEventListener("click", () => {
  navlist.classList.toggle("show");

  // Ganti ikon: jika navlist sedang tampil, gunakan "close"
  if (navlist.classList.contains("show")) {
    icon.textContent = "close";
  } else {
    icon.textContent = "menu";
  }
});

function nextSlide() {
      index++;
      if (index >= slides.length) index = 0;
      track.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(nextSlide, 3000); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
 }).addTo(map);

 // effect to top
 document.getElementById("scrollToTop").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// validasi input
document.querySelector('input[type="button"]').addEventListener('click', () => {
  const name = document.querySelector('input[placeholder="name"]').value.trim();
  const email = document.querySelector('input[placeholder="email"]').value.trim();
  if (!name || !email) {
    alert('Nama dan Email harus diisi!');
  } else {
    alert('Pesan berhasil dikirim!');
  }
});


// animasi
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('appear');
      observer.unobserve(entry.target); // animasi hanya sekali
    }
  });
}, {
  threshold: 0.1
});

fadeEls.forEach(el => observer.observe(el));