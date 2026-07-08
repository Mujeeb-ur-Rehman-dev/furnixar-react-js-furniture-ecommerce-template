
const sizeOf = require('image-size');
const path = require('path');

const images = [
  path.join(__dirname, 'src', 'assets', 'img', 'shortcode', 'carousel', 'Summer.png'),
  path.join(__dirname, 'src', 'assets', 'img', 'hero', 'hero1.png'),
  path.join(__dirname, 'src', 'assets', 'img', 'hero', 'hero2.png')
];

images.forEach(imgPath => {
  try {
    const dimensions = sizeOf(imgPath);
    console.log(`\n${path.basename(imgPath)}:`);
    console.log(`  Width: ${dimensions.width}px`);
    console.log(`  Height: ${dimensions.height}px`);
    console.log(`  Aspect Ratio: ${(dimensions.width / dimensions.height).toFixed(2)}`);
  } catch (err) {
    console.error(`Error reading ${path.basename(imgPath)}:`, err);
  }
});
