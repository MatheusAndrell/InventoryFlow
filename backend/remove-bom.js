import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname);
const phpFiles = [];

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walkDir(fullPath);
    } else if (file.endsWith('.php')) {
      phpFiles.push(fullPath);
    }
  }
}

walkDir(rootDir);

phpFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
    console.log(`Removed BOM: ${file}`);
  }

  content = content.replace(/^\s*(<\?php)/, '$1');

  fs.writeFileSync(file, content, 'utf8');
});

console.log(`Processed ${phpFiles.length} PHP files.`);
