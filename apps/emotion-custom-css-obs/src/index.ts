import OBSWebSocket from 'obs-websocket-js';
import { overwriteBrowserSourceCss } from './utils/obs/obs';
import { watchMainCSS } from './utils/css/css';

const obs = new OBSWebSocket();

async function main() {
  await obs.connect();
  console.info('connected obs!');
  await overwriteBrowserSourceCss(obs);
  watchMainCSS(() => {
    console.info('changed main.css!');
    overwriteBrowserSourceCss(obs);
  });
}

await main();
