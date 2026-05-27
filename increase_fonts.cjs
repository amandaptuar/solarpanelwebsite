const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'Home.jsx');
let content = fs.readFileSync(filePath, 'utf8');

const standardClasses = {
  'text-xs': 12,
  'text-sm': 14,
  'text-base': 16,
  'text-lg': 18,
  'text-xl': 20,
  'text-2xl': 24,
  'text-3xl': 30,
  'text-4xl': 36,
  'text-5xl': 48,
  'text-6xl': 60,
  'text-7xl': 72,
  'text-8xl': 96,
  'text-9xl': 128
};

for (const [cls, size] of Object.entries(standardClasses)) {
  const newSize = Math.round(size * 1.4);
  const regex = new RegExp(`(?<=[\\s"'\`])(lg:|md:|sm:|xl:|2xl:)?${cls}(?=[\\s"'\`])`, 'g');
  content = content.replace(regex, (match, prefix) => {
    return `${prefix || ''}text-[${newSize}px]`;
  });
}

const arbitraryRegex = /(?<=[\\s"'\`])(lg:|md:|sm:|xl:|2xl:)?text-\[(\d+)px\](?=[\\s"'\`])/g;
content = content.replace(arbitraryRegex, (match, prefix, sizeStr) => {
  const size = parseInt(sizeStr, 10);
  const newSize = Math.round(size * 1.4);
  return `${prefix || ''}text-[${newSize}px]`;
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fonts increased by 40% successfully.');
