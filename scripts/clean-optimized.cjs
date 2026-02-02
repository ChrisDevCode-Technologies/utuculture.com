#!/usr/bin/env node
const path = require('path');
const fs = require('fs');

const optimizedDir = path.join(__dirname, '..', 'public', 'assets', 'optimized');

function rmDir(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (fs.lstatSync(full).isDirectory()) rmDir(full);
    else fs.unlinkSync(full);
  }
  fs.rmdirSync(dir);
}

rmDir(optimizedDir);
console.log('Removed optimized images at', optimizedDir);
