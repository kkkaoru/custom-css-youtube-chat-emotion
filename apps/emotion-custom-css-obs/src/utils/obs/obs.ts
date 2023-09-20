import OBSWebSocket from 'obs-websocket-js';
import { readMainCss } from '../css/css';

async function searchBrowserSourceNames(obs: OBSWebSocket): Promise<string[]> {
  const { currentProgramSceneName } = await obs.call('GetCurrentProgramScene');
  return (await obs.call('GetSceneItemList', { sceneName: currentProgramSceneName })).sceneItems
    .filter((item) => item.inputKind === 'browser_source')
    .map((item) => item.sourceName) as string[];
}

export async function overwriteBrowserSourceCss(obs: OBSWebSocket) {
  const names = await searchBrowserSourceNames(obs);
  const css = await readMainCss();
  names.forEach((inputName) => {
    console.info(`change css of ${inputName}`);
    obs.call('SetInputSettings', {
      inputName,
      inputSettings: {
        css,
      },
    });
  });
}
