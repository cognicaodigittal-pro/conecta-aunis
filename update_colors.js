const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'styles.css');
let css = fs.readFileSync(cssPath, 'utf8');

// Replace CSS Variables
css = css.replace(/--color-red: #E10600;/g, '--color-red: #D6BB80; /* Burlywood */');
css = css.replace(/--color-red-dark: #A30400;/g, '--color-red-dark: #A08348; /* Dark Tan */');
css = css.replace(/--color-black: #000000;/g, '--color-black: #182A3A; /* Yankees Blue */');
css = css.replace(/--color-black-light: #1A1A1A;/g, '--color-black-light: #425B6F; /* Deep Space Sparkle */');
css = css.replace(/--color-gold: #D4AF37;/g, '--color-gold: #D6BB80; /* Burlywood */');
css = css.replace(/--color-gold-light: #F3DD85;/g, '--color-gold-light: #A08348; /* Dark Tan */');
css = css.replace(/--color-white-dim: #E0E0E0;/g, '--color-white-dim: #E2E8F0;');

// Replace rgba gradients and shadows
// rgba(225, 6, 0) was the Red shadow
css = css.replace(/rgba\(225,\s*6,\s*0,/g, 'rgba(214, 187, 128,');

// rgba(212, 175, 55) was the Gold shadow
css = css.replace(/rgba\(212,\s*175,\s*55,/g, 'rgba(160, 131, 72,');

// Glass background (was black-light rgba(26, 26, 26, 0.6))
css = css.replace(/rgba\(26,\s*26,\s*26,\s*0\.6\)/g, 'rgba(66, 91, 111, 0.6)');

// Glass border (was white rgba(255, 255, 255, 0.1)) -> we can use Smoke #7A7E74
css = css.replace(/rgba\(255,\s*255,\s*255,\s*0\.1\)/g, '#7A7E74');

// rgba(0,0,0) mostly shadows and backgrounds -> to dark blue shadows
css = css.replace(/rgba\(0,\s*0,\s*0,/g, 'rgba(15, 26, 36,');

// Other specific backgrounds
css = css.replace(/#0a0a0a/g, '#111E29'); // footer bottom
css = css.replace(/#1a1a1a/g, '#253545'); // footer bottom border
css = css.replace(/#222/g, '#425B6F'); // footer top border

fs.writeFileSync(cssPath, css);
console.log('CSS updated with new color palette!');
