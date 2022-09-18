/* Copyright (c) 2022 CiderBoi */

import { ipcMain, app, webContents, Notification } from 'electron';
import { setIpcMain } from '@wexond/rpc-electron';
setIpcMain(ipcMain);

require('@electron/remote/main').initialize();

if (process.env.NODE_ENV === 'development') {
  require('source-map-support').install();
}

import { platform } from 'os';
import { Application } from './application';
import { VERSION } from '~/constants';
import axios from 'axios';

export const isNightly = app.name === 'webowser-nightly';

app.name = isNightly ? 'Webowser Nightly' : 'Webowser';

(process.env as any)['ELECTRON_DISABLE_SECURITY_WARNINGS'] = true;

app.commandLine.appendSwitch('--enable-transparent-visuals');
app.commandLine.appendSwitch(
  'enable-features',
  'CSSColorSchemeUARendering, ImpulseScrollAnimations, ParallelDownloading',
);

if (process.env.NODE_ENV === 'development') {
  app.commandLine.appendSwitch('remote-debugging-port', '9222');
}

ipcMain.setMaxListeners(0);

const application = Application.instance;
(async () => {
  await application.start();

  axios.get('https://api.ciderboi.xyz/api/webowser/version', {
    params: {
      version: VERSION,
    },
  }).then((res) => {
    console.log(res.data);
    if (res.data.needToUpdate) {
      // application.windows.current.win.webContents.send('update', res.data.version);

      new Notification({
        title: 'Update Available',
        body: `A new version of Webowser is available: ${res.data.version}\nHead to https://ciderboi.xyz/webowser to download it!`,
      })
        .on('click', () => {
          // application.windows.current.win.webContents.send('update', res.data.version);
          require('electron').shell.openExternal('https://ciderboi.xyz/webowser');
        })
        .show();
    }
  });
})()

process.on('uncaughtException', (error) => {
  console.error(error);
});

app.on('window-all-closed', () => {
  if (platform() !== 'darwin') {
    app.quit();
  }
});

ipcMain.on('get-webcontents-id', (e) => {
  e.returnValue = e.sender.id;
});

ipcMain.on('get-window-id', (e) => {
  e.returnValue = (e.sender as any).windowId;
});

ipcMain.handle(
  `web-contents-call`,
  async (e, { webContentsId, method, args = [] }) => {
    try {
      const wc = webContents.fromId(webContentsId);
      const result = (wc as any)[method](...args);

      if (result) {
        if (result instanceof Promise) {
          return await result;
        }

        return result;
      }
    } catch (e) {
      console.error(e);
    }
  },
);

// We need to prevent extension background pages from being garbage collected.
const backgroundPages: Electron.WebContents[] = [];


app.on('web-contents-created', (e, webContents) => {
  if (webContents.getType() === 'backgroundPage')
    backgroundPages.push(webContents);
});