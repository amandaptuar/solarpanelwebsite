const fs = require('fs');

const files = [
    'FounderProfile.jsx', 'JohnProfile.jsx', 'AlphaProfile.jsx', 
    'SaffaProfile.jsx', 'AhmedProfile.jsx', 'PreetamProfile.jsx', 
    'MosesProfile.jsx', 'RobinProfile.jsx', 'SaioProfile.jsx'
];

let result = '';

files.forEach(f => {
    try {
        let content = fs.readFileSync('src/pages/' + f, 'utf8');
        let match = content.split('<div className="profile-bio">')[1];
        if (match) {
            match = match.split('</div>\n\t\t\t</div>')[0];
            // Remove name, title, eyebrow
            match = match.replace(/<div className="profile-eyebrow">.*?<\/div>/s, '');
            match = match.replace(/<h1 className="profile-name">.*?<\/h1>/s, '');
            match = match.replace(/<h2 className="profile-title">.*?<\/h2>/s, '');
            result += `\n\n/* === ${f} === */\n` + match.trim();
        } else {
            result += `\n\n/* === ${f} NO MATCH === */\n`;
        }
    } catch (e) {
        result += `\n\n/* === ${f} ERROR === */\n${e}`;
    }
});

fs.writeFileSync('bios_extracted.txt', result);
console.log('done');
