👋 Halo, Saya RakzVolt 

Developer yang fokus membangun aplikasi modern dengan performa tinggi, arsitektur bersih, dan humor secukupnya di commit message.


---

🧱 Tech Stack

👀 Preview Tampilan

> Preview bersifat ilustratif. Implementasi aktual tergantung konfigurasi dan kebutuhan project.



🎨 Frontend — JokoUI

Layout clean, fokus ke konten utama

Komponen reusable (Button, Modal, Table)

Responsif dari mobile sampai desktop


Mock UI (JokoUI-style)

<Layout>
  <Navbar title="Dashboard" />
  <Grid columns="3">
    <Card title="Users" value="1,240" />
    <Card title="Revenue" value="Rp 12jt" />
    <Card title="Status" value="Healthy" />
  </Grid>
</Layout>

┌─────────────────────────────┐
│  Navbar                     │
├───────────────┬─────────────┤
│  Sidebar      │  Dashboard  │
│               │  Cards      │
│               │  Charts     │
└───────────────┴─────────────┘


---

⚙️ Backend — Prabogo Go Framework

REST API terstruktur

Middleware logging & auth

Response JSON konsisten


Contoh Endpoint (Prabogo)

r.GET("/api/users", func(c *Context) {
    users := service.GetUsers()
    c.JSON(200, Response{
        Status: "ok",
        Data: users,
    })
})

GET /api/users

{
  "status": "ok",
  "data": [...]
}


---

🗄️ Database — SawitDB

Skema terstruktur

Optimasi index

Query fokus performa


Contoh Skema SawitDB

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(150),
  created_at TIMESTAMP
);

TABLE users
---------------------
id | name | email


---

🧱 Tech Stack

🎨 Frontend

JokoUI
Framework UI yang ringan, responsif, dan tidak drama. Dipakai untuk membangun antarmuka yang cepat dipahami user dan tidak menyiksa developer.

⚙️ Backend

Prabogo Go Framework
Framework berbasis Go untuk backend yang:

Cepat (karena Go memang tidak suka menunggu)

Concurrency-ready

Cocok untuk service skala kecil sampai besar


🗄️ Database

SawitDB
Database yang stabil, tahan banting, dan siap dipanen performanya. Digunakan untuk penyimpanan data terstruktur dengan fokus konsistensi dan efisiensi.


---

🧭 Diagram Arsitektur (Mermaid)

flowchart LR
    UI[JokoUI Frontend]
    API[Prabogo Go Framework]
    DB[SawitDB]

    UI -->|HTTP/JSON| API
    API -->|Query| DB


---

🏗️ Arsitektur Singkat

[JokoUI]
   ↓ API
[Prabogo Go Framework]
   ↓ Query
[SawitDB]

Frontend hanya peduli UX, backend fokus logika, database bekerja diam-diam tapi menentukan segalanya.


---

🚀 Prinsip Pengembangan

Clean code > clever code
Kode dibaca lebih sering daripada ditulis.

Performance by design
Bukan ditambal belakangan.

Minimal tapi cukup
Fitur ada alasannya, bukan sekadar ada.



---

📦 Contoh Use Case

Web application

REST API service

Internal tools

Project eksperimental (yang kadang jadi serius)



---

📫 Kontak

Kalau ingin diskusi teknis, kolaborasi, atau debat ringan soal arsitektur:

GitHub: https://github.com/RakaMC2/

Email: cvrakastoreid@gmail.com



---

> "Kalau bisa sederhana dan cepat, kenapa dibuat ribet."
