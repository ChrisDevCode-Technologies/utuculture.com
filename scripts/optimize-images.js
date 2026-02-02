#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const sharp = require('sharp');

const inputDir = path.join(__dirname, '..', 'public', 'assets', 'images');
const outputDir = path.join(__dirname, '..', 'public', 'assets', 'optimized');

const widths = [480, 800, 1200, 2000];
const formats = ['avif', 'webp', 'jpeg'];

async function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

async function processImage(file) {
  const name = path.parse(file).name;
  const inputPath = path.join(inputDir, file);

  for (const w of widths) {
    for (const fmt of formats) {
      const outDir = path.join(outputDir, fmt);
      await ensureDir(outDir);
      const outPath = path.join(outDir, `${name}-${w}.${fmt === 'jpeg' ? 'jpg' : fmt}`);

      // Skip if exists
      if (fs.existsSync(outPath)) continue;

      try {
        let pipeline = sharp(inputPath).resize({ width: w });
        if (fmt === 'avif') pipeline = pipeline.avif({ quality: 50 });
        if (fmt === 'webp') pipeline = pipeline.webp({ quality: 60 });
        if (fmt === 'jpeg') pipeline = pipeline.jpeg({ quality: 75 });
        await pipeline.toFile(outPath);
        console.log('Created', outPath);
      } catch (err) {
        console.error('Error processing', inputPath, err);
      }
    }
  }
}

async function main() {
  await ensureDir(outputDir);
  const files = fs.readdirSync(inputDir).filter(f => /\.(jpe?g|png)$/i.test(f));
  for (const file of files) {
    await processImage(file);
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
