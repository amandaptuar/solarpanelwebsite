const fs = require('fs');
const https = require('https');
const path = require('path');

const images = {
    'hero-bg.jpg': '1509391366360-2d9597de3185',
    'buffer-land.jpg': '1592833159155-c62df1b65634',
    'parking-solar.jpg': '1508514177221-188b1cbf4102',
    'warehouse-solar.jpg': '1613665813446-82a78c468a1d',
    'wind-turbines.jpg': '1584277261846-c6a1672ec511',
    'battery-storage.jpg': '1518005020951-eccb494ad742',
    'industrial-solar.jpg': '1518770660439-4636190af475',
    'retail-solar.jpg': '1581092919543-9831969634e0',
    'office-solar.jpg': '1573108724029-4c46571d6490',
    'cold-storage.jpg': '1553413077-190dd305871c',
    'data-center.jpg': '1486406146926-c627a92ad1ab',
    'multitenant.jpg': '1486406146926-c627a92ad1ab', // reuse or find another
    'dashboard.jpg': '1551288049-bebda4e38f71',
    'team.jpg': '1504384308090-c894fdcc538d',
    'princeton.jpg': '1531266752426-aad47207438e',
    'houston.jpg': '1531219572328-a0171b4448a5',
    'la.jpg': '1515859005217-8a1f08870f59',
    'cta-bg.jpg': '1497435334941-9c8d9e79e1cb',
    'service1.jpg': '1509391366360-2d9597de3185',
    'service2.jpg': '1466611653911-95081537e5b7',
    'service3.jpg': '1518005020951-eccb494ad742',
    'call-do-bg.jpg': '1497435334941-9c8d9e79e1cb',
    'choose-bg.jpg': '1509391366360-2d9597de3185',
    'choose-thumb.jpg': '1504384308090-c894fdcc538d'
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
