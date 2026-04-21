const fs = require('fs');

const htmlContent = fs.readFileSync('c:/Users/amand/OneDrive/Desktop/solarpannel/solerpanel/index.html', 'utf-8');

// Extract body content between loader and jquery scripts
const bodyMatch = htmlContent.match(/<!-- loder -->([\s\S]*?)<!-- jquery js -->/);
let body = bodyMatch ? bodyMatch[1] : '';

// 1. Replace class and for attributes
body = body.replace(/class=/g, 'className=');
body = body.replace(/for=/g, 'htmlFor=');

// 2. Fix self-closing tags
body = body.replace(/(<img[^>]+)(?<!\/)>/g, '$1 />');
body = body.replace(/(<input[^>]+)(?<!\/)>/g, '$1 />');
body = body.replace(/(<hr[^>]*)(?<!\/)>/g, '$1 />');
body = body.replace(/(<br[^>]*)(?<!\/)>/g, '$1 />');

// 3. Convert empty inline styles
body = body.replace(/style=""/g, '');

// 4. Convert inline styles
body = body.replace(/style="([^"]+)"/g, (match, styles) => {
    const parts = styles.split(';');
    const jsxStyles = [];
    for (const p of parts) {
        if (p.includes(':')) {
            let [k, v] = p.split(/:(.+)/);
            if(k && v) {
                k = k.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
                v = v.trim().replace(/'/g, '"');
                jsxStyles.push(`${k}: '${v}'`);
            }
        }
    }
    return `style={{ ${jsxStyles.join(', ')} }}`;
});

// 4. Convert HTML comments to JSX comments
body = body.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');

const output = `import React, { useEffect } from "react";

function App() {
  // Use a simple effect to remove loader once the component is mounted, simulating the original template behavior
  useEffect(() => {
    // If the template has a custom preloader script, this ensures the UI shows up
    const loaderWrapper = document.querySelector('.loader-wrapper');
    if (loaderWrapper) {
      setTimeout(() => {
        loaderWrapper.style.display = 'none';
      }, 500);
    }
  }, []);

  return (
    <>
      {/* Original Body Output */}
${body}
    </>
  );
}

export default App;
`;

fs.writeFileSync('c:/Users/amand/OneDrive/Desktop/solarpannel/solerpanel-react/src/App.jsx', output, 'utf-8');
console.log('App.jsx has been successfully generated via JS converter.');
