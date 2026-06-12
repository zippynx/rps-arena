# Rock Paper Scissors

Game sederhana Rock Paper Scissors (Batu Gunting Kertas) berbasis web menggunakan HTML, CSS, dan vanilla JavaScript. 

## 🎮 Cara Main
1. Buka file `index.html` menggunakan browser pilihanmu.
2. Di bagian bawah layar, klik salah satu dari tiga ikon pilihan: **Rock**, **Paper**, atau **Scissors**.
3. Pilihanmu akan muncul, dan Komputer (lawan di bagian atas) akan memilih secara acak.
4. Skor akan bertambah dan diperbarui secara otomatis sesuai dengan hasil permainan:
   - Batu mengalahkan Gunting, Gunting mengalahkan Kertas, Kertas mengalahkan Batu.
   - *Catatan: Jika hasilnya seri (pilihan sama), kedua pemain akan mendapatkan masing-masing 1 poin.*

## 📁 Struktur File
- `index.html` → Kerangka utama halaman web dan layout arena permainan.
- `style.css` → Tampilan antarmuka game, mencakup *background* tema gelap, efek *box-shadow* neon biru, serta animasi interaktif (skala membesar) saat kursor diarahkan ke gambar pilihan.
- `script.js` → Logika permainan. Skrip ini secara dinamis memuat gambar pilihan (Batu/Gunting/Kertas) ke dalam DOM (Document Object Model), menjalankan *randomizer* untuk langkah komputer, dan mengkalkulasi penambahan skor.

## 🖼️ Assets
Pastikan file gambar berikut tersedia dalam direktori yang sama dengan file utama agar game dapat merender elemen dengan benar:
- `rock.png`
- `paper.png`
- `scissors.png`