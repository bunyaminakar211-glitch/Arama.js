const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

// API Endpoint
app.post("/api/call", (req, res) => {
    const numara = req.body.numara;
    console.log("API Arama isteği:", numara);

    // -----------------------------
    // Buraya gerçek arama kodu eklenir
    // Örn: Twilio API, Asterisk SIP call vs.
    // -----------------------------

    res.json({
        status: "ok",
        message: "Arama başlatıldı",
        number: numara
    });
});

app.get("/api/status", (req, res) => {
    res.json({ status: "online" });
});

// Panel
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

// Arama ekranı
app.post("/ara", (req, res) => {
    const numara = req.body.numara;
    console.log("Panel Arama:", numara);
    res.sendFile(path.join(__dirname, "public/call.html"));
});

app.listen(8080, () => {
    console.log("Server çalışıyor: http://localhost:8080");
});
