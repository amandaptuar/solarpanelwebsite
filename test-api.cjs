const fetch = require('node-fetch');

async function test() {
  const res = await fetch('https://vpp-backened-model.onrender.com/generate-report', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ latitude: 37.7749, longitude: -122.4194 })
  });
  console.log(res.status);
  const text = await res.text();
  console.log(text);
}
test();
