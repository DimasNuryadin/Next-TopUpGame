# 🕹️ Next-TopUpGame

**Next-TopUpGame** adalah frontend aplikasi web untuk sistem **Top Up Game** yang dibuat dalam kelas **BuildWithAngga**.  
Proyek ini dibangun menggunakan **Next.js** + **TypeScript**, dan terhubung dengan backend **Express-TopUpGame**.  

Backend dapat dilihat di sini:  
👉 [Express-TopUpGame](https://github.com/DimasNuryadin/Express-TopUpGame)

---

## 🏗️ Teknologi & Arsitektur

Frontend (Next-TopUpGame) menggunakan:

- Next.js  
- TypeScript  
- React (komponen UI, hooks, dsb)  
- Struktur modular (components, services, pages, dll)  
- API integration untuk transaksi top up  

Backend (Express-TopUpGame) menggunakan:

- Express.js  
- JavaScript (Node.js)  
- Endpoint untuk autentikasi, transaksi, dan manajemen data game  

---

## 📁 Struktur Direktori (Frontend)

```
app/
components/
config/
services/
styles/
public/
.env
next.config.js
package.json
...
```


Penjelasan singkat:

- `app/` — halaman utama Next.js (routes dan layout)  
- `components/` — komponen UI reusable  
- `config/` — konfigurasi dasar (misalnya base API URL)  
- `services/` — modul untuk memanggil API backend  
- `public/` — aset statis seperti gambar, favicon, ikon, dsb  

---

## 🚀 Setup / Instalasi

### Prasyarat

- Node.js (disarankan versi LTS 20+)  
- npm / yarn / pnpm  
- Backend **Express-TopUpGame** sudah aktif  

### Langkah Instalasi

1. Clone repository:

    ```bash
    git clone https://github.com/DimasNuryadin/Next-TopUpGame.git
    cd Next-TopUpGame
    ```

2. Buat file `.env` dan isi variabel environment berikut:

    ```bash
    NEXT_PUBLIC_API=https://express-top-up-game.vercel.app
    NEXT_PUBLIC_IMG=https://express-top-up-game.vercel.app/uploads
    ```

3. Install dependencies:

    ```bash
    npm install
    # atau
    yarn install
    ```

4. Jalankan mode development:

    ```bash
    npm run dev
    # atau
    yarn dev
    ```

5. Buka browser ke **http://localhost:3000** untuk melihat hasilnya.

---

## 🔗 Integrasi dengan Backend

Frontend akan berkomunikasi dengan backend **Express-TopUpGame** melalui endpoint API.  
Beberapa fitur utama integrasi:

- Login & autentikasi user  
- Menampilkan daftar game & kategori  
- Transaksi top up saldo  
- Upload & load gambar melalui `NEXT_PUBLIC_IMG`  

Pastikan backend sudah berjalan dengan URL sesuai `.env` di frontend.

---

## 📦 Deployment

Untuk build dan menjalankan mode produksi:

```bash
npm run build
npm run start
```

Kamu bisa deploy ke Vercel, Netlify, atau server Node.js lain.
Pastikan variabel environment sudah diset di platform tersebut.

---

## ✅ Fitur Utama

- Login & autentikasi pengguna
- Pilih game & nominal top up
- Proses pembayaran terintegrasi
- Dashboard transaksi pengguna
- UI responsif & cepat dengan Next.js

---

## 🌐 Website Preview
Kunjungi situs demo di:
🔗 [Next-TopUpGame (StoreGG)](https://next-top-up-game.vercel.app).

## 📸 Screenshoot

<img src="https://res.cloudinary.com/dgharj3cy/image/upload/v1736314851/img_project101_ckmeu7.png" alt="StoreGG" />