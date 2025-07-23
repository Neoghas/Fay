const styleTag = document.createElement("style");
styleTag.innerHTML = `
  body {
    font-family: 'Ubuntu', sans-serif;
    font-weight: bold;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
    text-align: center;
    margin: 0;
    padding: 0;
    width: 100%;
    background-color: #000;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    font-size: 1rem; /* Gunakan rem agar fleksibel */
    padding-top: 70px; /* Memberikan ruang untuk navbar */
}

/* Container */
.container {
    width: 100%; /* Gunakan persentase agar fleksibel */
    max-width: 1250px;
    margin: auto;
    padding: 20px;
    background: #000000;
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    backdrop-filter: blur(10px);
    box-sizing: border-box;
    align-items: center;
    margin-top: 20px; /* Tambahkan jarak dari navbar */
}

/* Media Query untuk layar kecil (Laptop kecil & Tablet) */
@media (max-width: 1024px) {
    body {
        font-size: 0.9rem;
    }
    .container {
        width: 95%;
    }
}

/* Media Query untuk layar sangat kecil (Tablet & Mobile) */
@media (max-width: 768px) {
    body {
        font-size: 0.8rem;
    }
    .container {
        width: 100%;
        padding: 15px;
    }
}

/* Media Query untuk layar besar (Monitor besar & Ultrawide) */
@media (min-width: 1600px) {
    body {
        font-size: 1.2rem;
    }
    .container {
        max-width: 1200px;
    }
}

/* Kolom Input dengan Efek Glassmorphism */
input {
    display: block;
    margin: 10px auto;
    padding: 12px;
    width: 70%;
    max-width: 500px;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 200, 255, 0.3);
    transition: all 0.4s ease-in-out;
}

input::placeholder {
    color: rgba(255, 255, 255, 0.5);
}

/* Efek Neon Biru Glassmorphism saat Hover */
input:hover {
    background: rgba(0, 0, 255, 0.2); /* Biru neon transparan */
    box-shadow: 0 0 15px rgba(0, 153, 255, 0.8), 
                0 0 25px rgba(0, 153, 255, 0.6), 
                0 0 35px rgba(0, 153, 255, 0.4);
}

button:not(#closePopup) {
    font-size: 0.7em;
    padding: 6px 12px;
    border-radius: 0.7em;
    border: none;
    background-color: #000;
    color: #fff;
    cursor: pointer;
    position: relative;
    box-shadow: 0 0 10px rgba(0, 0, 255, 0.6);
    transition: all 0.3s ease-in-out;
    font-family: Ubuntu, sans-serif;
}

 .button-container:not(#closePopup) {
    display: flex;
    justify-content: center;
    gap: 20px; /* Jarak antar tombol diperbesar */
 }

/* Efek Neon Glow */
button:not(#closePopup)::before {
    content: "";
    position: absolute;
    inset: -2px;
    border-radius: 0.9em;
    background: linear-gradient(90deg, #03a9f4, #f441a5);
    z-index: -1;
    filter: blur(0);
    transition: filter 0.4s ease, opacity 0.4s ease;
    opacity: 1;
}

/* Efek Hover */
button:not(#closePopup):hover::before {
    filter: blur(1.2em);
    opacity: 1;
}

button:not(#closePopup):hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

/* Efek Tekan */
button:not(#closePopup):active {
    transform: scale(0.95);
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
}

button:not(#closePopup):active::before {
    filter: blur(0.2em);
}

/* Efek Gelombang saat Diklik */
button:not(#closePopup)::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 10%, transparent 70%);
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
    transition: transform 0.5s, opacity 0.5s;
}

button:not(#closePopup):active::after {
    transform: translate(-50%, -50%) scale(2);
    opacity: 1;
}

/* Tombol Disconnect (Efek Neon Merah) */
#disconnectWallet {
    background: linear-gradient(135deg, #ff0033, #cc0000);
    box-shadow: 0 0 12px rgba(255, 0, 51, 0.6), 0 0 20px rgba(255, 0, 51, 0.4);
}

#disconnectWallet:hover {
    background: linear-gradient(135deg, #cc0000, #ff0033);
    box-shadow: 0 0 20px rgba(255, 0, 51, 0.9), 0 0 30px rgba(255, 0, 51, 0.7);
}

/* Ukuran Wallet Address Lebih Kecil */
#walletAddress {
    font-size: 12px;
}

#betHistory, #userBets {
    font-size: 13px;
    text-align: justify;
    hyphens: auto;
    line-height: 1.8;
    max-width: 600px;
    margin: auto;
    padding: 15px;
    text-indent: 20px;
    max-height: 1200px;
    overflow-y: auto;
    scroll-behavior: smooth; /* bikin halus scroll-nya */
}

table {
    width: 100%; /* Bisa diperkecil lagi, misalnya 50% jika terlalu lebar */
    max-width: 900px; /* Agar tabel tidak terlalu besar di layar lebar */
    border-collapse: collapse;
    margin: 20px auto; /* 'auto' agar tabel tetap di tengah */
    font-size: 18px; /* Kecilkan agar tabel lebih compact */
    text-align: left;
}

th, td {
    padding: 8px; /* Kurangi padding agar tabel lebih kecil */
    border: 1px solid #ddd;
}

th {
    background-color: #000000; /* Background hitam */
    background-image: linear-gradient(90deg, #03a9f4, #f441a5); /* Gradasi untuk teks */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    padding: 10px;
}
        
footer {
        text-align: center;
        margin-top: 20px;
        padding: 10px;
        background: #111; /* Warna gelap */
        color: #ddd; /* Warna teks */
        font-size: 12px;
    }

    .social-icons {
        margin-bottom: 10px;
    }

    .social-icons a {
    background: rgba(255, 255, 255, 0.2); /* Transparan seperti kaca */
    border-radius: 10px; /* Agar sedikit membulat */
    padding: 10px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: white; /* Warna ikon */
    font-size: 15px;
    margin: 0 5px;
    text-decoration: none;
    transition: transform 0.5s ease, text-shadow 0.5s ease, box-shadow 0.5s ease;
    box-shadow: 0 0 10px rgba(0, 0, 255, 0.6); /* Cahaya biru */
    backdrop-filter: blur(10px); /* Efek blur kaca */
}

/* Efek saat hover */
.social-icons a:hover {
    color: #1a88ff; /* Warna biru neon */
    text-shadow: 0 0 10px #1a88ff, 0 0 20px #1a88ff, 0 0 30px #1a88ff; /* Glow lebih intens */
    box-shadow: 0 0 20px rgba(0, 0, 255, 1), 0 0 30px rgba(0, 0, 255, 0.8); /* Shadow lebih terang */
    transform: rotate(360deg); /* Efek berputar */
}

/* Modal Styling */
.modal {
    display: none;
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    }

/* Modal Content */
.modal-content {
    background: #111;
    color: white;
    margin: 10% auto;
    padding: 20px;
    width: 80%;
    max-width: 900px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0px 0px 15px rgba(0, 255, 255, 0.5);
    }

/* Tombol close */
.close {
  color: white;
  float: right;
  font-size: 24px;
  cursor: pointer;
}
.close:hover {
  color: red;
}

/* Gaya tabel utama & history */
.lottery-table, .history-table {
    width: 100%;
    margin: 10px 0;
    border-collapse: collapse;
}

.lottery-table th, .history-table th {
    background-color: #000000;
    color: white;
    padding: 10px;
}

.lottery-table td, .history-table td {
    border: 1px solid #000000;
    padding: 10px;
    text-align: center;
    background-color: #000000;
    color: white;
}

/* Agar hasil utama bisa diedit langsung */
.lottery-table td {
    cursor: pointer;
}

.lottery-table td, .history-table td {
    color: #00ca09;
}
        
    #menu {
    position: relative;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.6); /* Transparan dengan efek gelap */
    backdrop-filter: blur(10px); /* Efek Glassmorphism */
    padding: 10px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 1000;
    box-shadow: 0 -4px 10px rgba(0, 0, 255, 0.3); /* Efek cahaya biru */
    font-family: Ubuntu, sans-serif;
}

#menu button {
    background: none;
    border: none;
    color: white;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    padding: 10px;
    transition: all 0.3s ease-in-out;
    position: relative;
}

/* Efek Hover */
#menu button:hover {
    color: #1a88ff;
    transform: scale(1.1);
}

#menu button::before {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 50%;
    width: 0;
    height: 3px;
    background: #1a88ff;
    transition: width 0.3s ease-in-out, left 0.3s ease-in-out;
}

#menu button:hover::before {
    width: 100%;
    left: 0;
}

/* Efek untuk icon */
#menu button img {
    width: 24px;
    height: 24px;
    margin-bottom: 4px;
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 255, 0.5)); /* Cahaya biru */
    transition: transform 0.3s ease-in-out;
}

#menu button:hover img {
    transform: rotate(360deg);
}

/* Modal Styling */
.modal {
    display: none;
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
}

/* Modal Content */
.modal-content {
    background: #111;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    width: 80%;
    max-width: 900px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0px 0px 15px rgba(0, 255, 255, 0.5);
}

/* Close Button */
.close {
    color: white;
    float: right;
    font-size: 24px;
    cursor: pointer;
}
.close:hover {
    color: red;
}

/* Gaya tabel utama */
.lottery-table, .history-table {
    width: 100%;
    margin: 10px 0;
    border-collapse: collapse;
}

.lottery-table th, .history-table th {
    background-color: #444;
    color: white;
    padding: 10px;
}

.lottery-table td, .history-table td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
}

/* Table Styling */
.menu-table {
    width: 100%;
    border-collapse: collapse;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 10px;
}

/* Table Rows */
.menu-table tr {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

/* Table Cells */
.menu-table td {
    padding: 10px;
    text-align: left;
    color: #00ca09;
    font-size: 14px;
}

/* Icons */
.menu-table img {
    width: 30px;
    height: 30px;
    filter: drop-shadow(0 0 5px rgba(0, 255, 255, 0.8));
}

/* Links */
.menu-table a {
    color: cyan;
    text-decoration: none;
    font-weight: bold;
    transition: 0.3s ease-in-out;
}

/* Hover Effect */
.menu-table a:hover {
    color: #ff0077;
    text-shadow: 0 0 10px rgba(255, 0, 119, 0.8);
}

h1, h2 {
    background: linear-gradient(90deg, #03a9f4, #f441a5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

h3 {
    color: white;
    font-size: 17px;
    text-shadow: 0px 0px 10px #00aaff, 0px 0px 20px #0088ff;
}

/* Navbar */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 5px 15px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px); 
    -webkit-backdrop-filter: blur(10px);
    padding: 10px 20px;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 1240px;
    z-index: 1000;
    height: 60px; /* Tambahkan tinggi navbar agar lebih jelas */
}

/* Logo */
.logo {
    display: flex;
    align-items: center;
}

.logo-img {
    height: 40px;
    margin-right: 10px;
}

/* Menu Links */
.nav-links {
    display: flex;
    gap: 20px;
}

.nav-links a {
    text-decoration: none;
    color: white;
    transition: 0.3s;
}

.nav-links a:hover {
    color: #00ff66;
}

/* Hamburger Button */
.hamburger {
    display: none;
    font-size: 24px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
}

/* Efek Hover Hamburger */
.hamburger:hover {
    transform: rotate(90deg) scale(1.2);
    color: #00ff66;
}

/* Responsive - Mobile */
@media (max-width: 768px) {
    .hamburger {
        display: block;
    }

    .nav-links {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 60px;
        right: 0;
        background: #222;
        width: 200px;
        padding: 10px;
        box-shadow: 0 4px 8px rgba(255, 255, 255, 0.2);
        transition: transform 0.3s ease-in-out;
    }

    .nav-links.show {
        display: flex;
        flex-direction: column;
        transform: translateX(0);
        animation: slideIn 0.3s ease-in-out;
    }
}

/* Animasi Slide-in Menu */
@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

/* h5 */
.blinking-text {
    color: #e69600;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    animation: blink 3s infinite alternate;
  }

  @keyframes blink {
    0% { opacity: 0.2; text-shadow: 0 0 5px #e69600, 0 0 10px #e69600; }
    50% { opacity: 1; text-shadow: 0 0 10px #e69600, 0 0 20px #e69600; }
    100% { opacity: 0.2; text-shadow: 0 0 5px #e69600, 0 0 10px #e69600; }
  }

  .menu-table img {
    width: 24px; /* Sesuaikan ukuran ikon */
    height: auto;
    display: block; /* Pastikan gambar tidak turun ke bawah teks */
    margin: 0 auto; /* Jika ingin ikon tetap rapi di tengah sel */
  }

/* Popup Notifikasi */
.popup {
    display: none;
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 5px 15px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px); 
    -webkit-backdrop-filter: blur(10px);
    color: #155724; /* Lebih kontras dibanding warna sebelumnya */
    padding: 15px 20px;
    border-radius: 5px;
    z-index: 1000;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

/* Aktifkan animasi fade-in */
.popup.show {
    opacity: 1;
}

/* Tombol Close (×) di pojok kanan atas */
#closePopup {
    position: absolute;
    top: 2px;
    right: 5px;
    width: 20px; /* Sesuaikan ukuran tombol */
    height: 20px; /* Harus sama dengan width agar bulat */
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 5px 15px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px); 
    -webkit-backdrop-filter: blur(10px);
    border: none;
    outline: none;
    font-size: 25px; /* Perbesar ukuran ikon "×" */
    color: red;
    cursor: pointer;
    font-weight: bold;
    padding: 0; /* Hapus padding agar tidak memengaruhi bentuk */
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%; /* Membuatnya bulat */
}

#closePopup:focus {
    outline: none;
    box-shadow: none; /* Pastikan tidak ada efek tambahan */
}

/* Ikon Notifikasi */
#notificationIcon {
    position: fixed;
    top: 20px;
    right: 20px;
    cursor: pointer;
    z-index: 1000;
    display: none;
}

#notificationIcon img {
    width: 30px;
    height: 30px;
}

/* Titik Merah Notifikasi */
#notificationBadge {
    position: absolute;
    top: 0;
    right: 0;
    background-color: red;
    color: white;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    text-align: center;
    font-size: 12px;
    display: none;
    align-items: center;
    justify-content: center;
    font-weight: bold;
}

/* Aktifkan titik merah saat ada notifikasi */
#notificationBadge.active {
    display: flex;
}

/* Daftar Notifikasi */
#notificationList {
    position: fixed;
    top: 60px;
    right: 20px;
    width: 250px;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 5px 15px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px); 
    -webkit-backdrop-filter: blur(10px);
    color: #ffffff;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    z-index: 1000;
}

#notificationList ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

#notificationList ul li {
    padding: 8px;
    border-bottom: 1px solid #ddd;
}

#notificationList ul li:last-child {
    border-bottom: none;
}

#notificationList ul li a {
    text-decoration: none;
    color: #333;
    display: block;
}

/* Perbaikan margin tombol Close */
#notificationList button {
    width: 100%;
    padding: 8px;
    margin-top: 10px; /* Diberi margin agar tidak terlalu mepet */
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 5px 15px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px); 
    -webkit-backdrop-filter: blur(10px);
    color: #ffffff;
    border: none;
    outline: none; /* Hilangkan outline bawaan */
    cursor: pointer;
    border-radius: 0.7em;
    font-size: 15px;
}

/* Tambahan untuk memastikan efek garis hilang saat tombol ditekan atau difokuskan */
#notificationList button:focus,
#notificationList button:active {
    outline: none;
    box-shadow: none;
}

/* Sembunyikan elemen dengan class 'hidden' */
.hidden {
    display: none;
        }

#noNotificationsMessage {
    color: red;
}

/* Style utama */
.comment-dropdown {
    background: #1a1a1a;
    color: #ccc;
    border-radius: 10px;
    padding: 10px;
    width: 95%;
    max-width: 500px;
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.05);
    transition: all 0.3s ease-in-out;
}

.comment-dropdown[open] {
    box-shadow: 0px 0px 15px rgba(106, 0, 255, 0.5); /* Efek glow biru keunguan saat dibuka */
}

.comment-dropdown summary {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;
}

.comment-dropdown summary img {
    margin-right: 8px;
}

.comment-section {
    padding: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.comment-list {
    max-height: 300px;
    overflow-y: auto;
    padding: 5px;
    border-radius: 5px;
}

textarea {
    width: 95%;
    height: 100px;
    background: #333333;
    border: 1px solid #444;
    color: white;
    padding: 8px;
    border-radius: 5px;
    outline: none;
    display: block;
    margin: 10px auto;
    transition: box-shadow 0.3s, transform 0.2s, border 0.2s;
}

/* Efek saat textarea di-hover */
textarea:hover {
    border: 1px solid #00a2ff;
    box-shadow: 4px 4px 10px rgba(0, 162, 255, 0.4), 
                -4px -4px 10px rgba(0, 162, 255, 0.2);
    transform: translateY(-2px); /* Naik sedikit */
}

/* Efek saat textarea difokuskan */
textarea:focus {
    border: 1px solid #00a2ff;
    box-shadow: 6px 6px 14px rgba(0, 162, 255, 0.6), 
                -6px -6px 14px rgba(0, 162, 255, 0.3);
    transform: translateY(-3px); /* Naik lebih tinggi */
}

.comment-list p {
    white-space: pre-wrap; /* Menjaga spasi dan enter */
    word-wrap: break-word;
    margin: 5px 0;
}

/* Style untuk ikon komentar */
.comment-icon {
    width: 18px;
    height: 18px;
    cursor: pointer;
    position: relative;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.refresh-icon.spin-once {
  animation: spin 2s linear;
}

/* Qr Link */
#showQRBtn {
      position: fixed;
      top: 20px;
      left: 20px;
      z-index: 1100;
      background: #000000;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 12px;
      cursor: pointer;
      font-weight: bold;
      font-size: 16px;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    #showQRBtn:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    }

    #qrCanvasContainer {
  display: none;
  position: fixed;
  top: 70px;
  left: 20px;
  width: 320px;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 5px 15px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px); 
  -webkit-backdrop-filter: blur(10px);
  border-radius: 16px;
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.4),
    0 0 25px rgba(3, 169, 244, 0.5);
  padding: 20px;
  z-index: 1000;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    #qrCanvasContainer:hover,
    #qrCanvasContainer.active {
      transform: translateY(-5px) scale(1.02);
      box-shadow: 0 12px 30px -5px rgba(0, 0, 0, 0.4),
                  0 0 20px 2px rgba(3, 169, 244, 0.5),
                  0 0 30px 5px rgba(244, 65, 165, 0.5);
      background: 
  linear-gradient(90deg, rgba(3, 169, 244, 0.16), rgba(244, 65, 165, 0.16)),
  #000000;
        
    }

    #closeBtn {
      position: absolute;
      top: 10px;
      right: 10px;
      color: #ff4d4d;
      font-size: 24px;
      font-weight: bold;
      cursor: pointer;
      transition: transform 0.2s;
    }

    #closeBtn:hover {
      transform: scale(1.2);
    }

    #qrCanvas {
      position: relative;
      margin-top: 10px;
      text-align: center;
      cursor: pointer;
    }

    #downloadBtn {
      margin-top: 20px;
      background: linear-gradient(to right, #5f4bd3, #7e72f2);
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 12px;
      cursor: pointer;
      font-weight: bold;
      font-size: 16px;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    #downloadBtn:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    }

    .logos {
      width: 60px;
      height: 60px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
        }

    .dropdown {
      position: relative;
      display: inline-block;
    }

    .arrow {
      font-size: 12px;
      color: #ccc;
      transition: transform 0.3s ease, color 0.3s;
    }

    .dropdown:hover .arrow {
      transform: rotate(180deg);
      color: #03a9f4;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #111;
      border: 1px solid #03a9f4;
      min-width: 180px;
      box-shadow: 0px 8px 16px rgba(0,0,0,0.6);
      border-radius: 10px;
      z-index: 1;
      margin-top: 5px;
    }

    .dropdown-content a {
      color: #fff;
      padding: 12px 16px;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 10px;
      transition: background 0.3s;
    }

    .dropdown-content a:hover {
      background:linear-gradient(90deg, #03a9f4, #f441a5);
      color: #ffffff;
    }

    .dropdown:hover .dropdown-content {
      display: block;
    }

    .dropdown-content img {
      width: 18px; /* Ukuran gambar sesuai dengan keinginan */
      height: auto;
    }

    .scroll-up-icon {
  opacity: 0;
  visibility: hidden;
  position: fixed;
  right: 30px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  z-index: 999;
  transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.2s;
}

.scroll-up-icon.show {
  opacity: 1;
  visibility: visible;
}

/* Hover efek */
.scroll-up-icon:hover {
  transform: scale(1.2);
  filter: brightness(1.2);
}
`;
document.head.appendChild(styleTag);
