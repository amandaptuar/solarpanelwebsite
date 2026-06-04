const fs = require('fs');
const https = require('https');
const path = require('path');

const images = {
    // BatteryStorage
    'battery-utility.jpg': '1518005020951-eccb494ad742', // existing battery
    'battery-btm.jpg': '1584622650111-993a426fbf0a', // another battery/energy
    'battery-microgrid.jpg': '1473341304170-971dccb5ac1e', // microgrid/power
    'battery-colocated.jpg': '1509391366360-2d9597de3185', // solar + battery

    // WindEnergy
    'wind-onshore.jpg': '1584277261846-c6a1672ec511', // existing wind
    'wind-community.jpg': '1466611653911-95081537e5b7', // another wind
    'wind-battery.jpg': '1518005020951-eccb494ad742', // battery
    'wind-vpp.jpg': '1551288049-bebda4e38f71', // dashboard

    // Services
    'service-solar.jpg': '1509391366360-2d9597de3185',
    'service-wind.jpg': '1584277261846-c6a1672ec511',
    'service-battery.jpg': '1518005020951-eccb494ad742',
    'service-industrial.jpg': '1518770660439-4636190af475',
    'service-engineering.jpg': '1581091226825-a6a2a5aee158', // engineering/blueprint
    'service-epc.jpg': '1504384308090-c894fdcc538d' // team/construction
};

const download = (url, dest) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode === 302 || response.statusCode === 301) {
                https.get(response.headers.location, (res) => {
                    res.pipe(file);
                    file.on('finish', () => {
                        file.close(resolve);
                    });
                }).on('error', (err) => {
                    fs.unlink(dest, () => reject(err));
                });
            } else {
                response.pipe(file);
                file.on('finish', () => {
                    file.close(resolve);
                });
            }
        }).on('error', (err) => {
            fs.unlink(dest, () => reject(err));
        });
    });
};

async function main() {
    for (const [filename, id] of Object.entries(images)) {
        const url = `https://images.unsplash.com/photo-${id}?q=80&w=1080&auto=format&fit=crop`;
        const dest = path.join(__dirname, 'public', 'unsplash', filename);
        console.log(`Downloading ${filename}...`);
        try {
            await download(url, dest);
            console.log(`Downloaded ${filename}`);
        } catch (e) {
            console.error(`Failed to download ${filename}:`, e);
        }
    }
}

main();
