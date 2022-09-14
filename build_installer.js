const { MSICreator } = require("electron-wix-msi");
const path = require("path");

const APP_DIR = path.resolve(__dirname, './dist/win-unpacked');
const OUT_DIR = path.resolve(__dirname, './dist/installer');

const msiCreator = new MSICreator({
  appDirectory: APP_DIR,
  outputDirectory: OUT_DIR,
  
  description: 'Webowser a lightweight, fast and free web browser for Windows, Linux and MacOS',
  exe: 'Webowser',
  name: 'Webowser',
  manufacturer: 'Cider Boi',

  version: '1.0.0',
  // appIconPath: path.resolve(__dirname, './src/assets/icons/icon.ico'),
  shortcutName: 'Webowser',
  bundled: true,
  appUserModelId: 'xyz.ciderboi.webowser',
  
  ui: {
    chooseDirectory: true,
    // images: {
    //   upIcon: path.resolve(__dirname, './assets/icons/icon.ico'),
    //   infoIcon: path.resolve(__dirname, './assets/icons/icon.ico'),
    // }
  }
});

msiCreator.create().then(() => {
  msiCreator.compile();
});