const http = require('http');
const https = require('https');

async function fetchGet() {
    console.log("Testing GET");
    const res = await fetch("https://vpp-backened-model.onrender.com/analyze-property?latitude=37.7749&longitude=-122.4194");
    const data = await res.text();
    console.log("GET response:", data);
}

async function fetchPost() {
    console.log("Testing POST");
    const res = await fetch("https://vpp-backened-model.onrender.com/analyze-property", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ latitude: 37.7749, longitude: -122.4194 })
    });
    const data = await res.text();
    console.log("POST response:", data);
}

async function run() {
    try { await fetchGet(); } catch (e) { console.error(e); }
    try { await fetchPost(); } catch (e) { console.error(e); }
}

run();
