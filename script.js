// Inisialisasi skor
let score = 0;

// Ambil elemen DOM diperlukan
const scoreSpan = document.getElementById('score');
const cookieBtn = document.getElementById('cookie-btn');
const cookieSVG = document.getElementById('cookie-svg');

// Handle klik pada cookie
cookieBtn.addEventListener('click', function() {
    score++; // skor naik
    scoreSpan.textContent = score; // update tampil skor
    // Animasi: bounce pada cookie
    cookieBtn.classList.add('clicked');
    // Hilangkan class klik supaya bisa klik lagi animasi
    setTimeout(() => {
        cookieBtn.classList.remove('clicked');
    }, 220);
});

// Catatan: semua gambar adalah vektor, tidak perlu koneksi Internet.

