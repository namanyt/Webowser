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
  appIconPath: path.resolve(__dirname, './static/icons/icon.ico'),
  shortcutName: 'Webowser',
  shortName: 'Webowser',
  shortcutFolderName: 'Cider Boi',
  bundled: true,
  // appUserModelId: 'xyz.ciderboi.webowser',
  
  features: {
    autoLaunch: true,
  },

  ui: {
    enable: true,
    chooseDirectory: true,
    // images: {
    //   banner: path.resolve(__dirname, './static/images/Banner.png'),
    //   upIcon: path.resolve(__dirname, './static/images/Logo.png'),
    //   infoIcon: path.resolve(__dirname, './static/images/DetailLogo.png'),
    //   background: path.resolve(__dirname, './static/images/Github.png'),
    //   newIcon: path.resolve(__dirname, './static/images/Logo.png'),
    // }
  }
});

msiCreator.create().then(() => {
  msiCreator.compile();
});