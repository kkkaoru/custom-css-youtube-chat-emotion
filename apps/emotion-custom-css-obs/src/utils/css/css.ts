import { readFile } from 'node:fs/promises';
import { watchFile } from 'node:fs';

const CSS_FILE_PATH = 'src/main.css';

export function readMainCss(): Promise<string> {
  return readFile(CSS_FILE_PATH, { encoding: 'utf8' });
}

export function watchMainCSS(callback: (args?: unknown) => unknown) {
  watchFile(CSS_FILE_PATH, (args) => {
    callback(args);
  });
}
