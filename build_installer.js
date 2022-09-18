const { MSICreator } = require("electron-wix-msi");
const path = require("path");
const packageJSON = require('./package.json');

const APP_DIR = path.resolve(__dirname, './dist/win-unpacked');
const OUT_DIR = path.resolve(__dirname, './dist/installer');

const msiCreator = new MSICreator({
  appDirectory: APP_DIR,
  outputDirectory: OUT_DIR,
  
  description: packageJSON.description,
  exe: packageJSON.name,
  name: packageJSON.name,
  manufacturer: packageJSON.author,

  version: packageJSON.version,
  appIconPath: path.resolve(__dirname, './static/icons/icon.ico'),
  shortcutName: packageJSON.name,
  shortName: packageJSON.name,
  shortcutFolderName: packageJSON.author,
  bundled: true,
  appUserModelId: 'webowser.Webowser',
  
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