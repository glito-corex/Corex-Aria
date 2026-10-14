//main.js root js for electron launche
//
        //-------------------------------------------------------------
        //Code By Corex Institut (Benjamin Burban) --
        //WebSite - link -> \ https://corexinstitut.netlify.app
        //-------------------------------------------------------------
        //Go home AI Corex Institut 
        //WebSite - link -> \ https://corexinstitut.netlify.app/corexai
        //-------------------------------------------------------------
//
//import lib for use in app Window
const { BrowserWindow, Menu, app, shell, ipcMain } = require("electron");
const path = require("path");
const fs = require("fs");
//join file (ressources/disabled)
const file = path.join(__dirname, "sources/disabled");

let fenetre

//Check if the file exists.
if (fs.existsSync(file)) {
    //set entry point to the file
    const disables = fs.readFileSync(file, "utf8").split("\n").map(l => l.trim()).filter(l => l !== "");
    disables.forEach(flag => app.commandLine.appendSwitch(flags));
}

//hidde Menu Bar
Menu.setApplicationMenu(null);

//function create root page Window
function crWindow() {
    //set fenetre to BrowserWindow
    fenetre = new BrowserWindow({
        //set icon app
        icon: path.join(__dirname, 'ressources/ico.png'),
        //set size page
        width: 1000,
        height: 700,
        minWidth: 700,
        minHeight: 550,

        //set preferences app
        webPreferences: {
            preload: path.join(__dirname, './core/preload.js'),
            sandbox: true,
            contextIsolation: true,
            webSecurity: true,
            backgroundThrottling: true,

            nodeIntegration: false,
            enableRemoteModule: false,
            webviewTag: false,
            nodeIntegrationInSubFrames: false,
            allowRunningInsecureContent: false,
            experimentalFeatures: false,
            offscreen: false
        }
    });

    fenetre.loadFile('index.html');

    //System for page refreshing via F5 and Ctrl+R
    fenetre.webContents.on('before-input-event', (event, input) => {
        const ctrl = input.control || input.meta;

        if ((ctrl && input.key.toLowerCase() === 'r') || input.key === 'F5') {
            event.preventDefault();
            if (input.shift) fenetre.webContents.reloadIgnoringCache();
            else fenetre.webContents.reload();
        }
    });
}

ipcMain.on('navigate', (event, input) => {
    let url = input.trim()

    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        if (url.includes('.') && !url.includes(' ')) {
            url = 'https://' + url
        } else { url = `https://www.google.com/search?q=${encodeURIComponent(url)}` }
    }

    fenetre.webContents.send('load-url'.url)
});

ipcMain.on('go-back', () => {
    if (fenetre.webContents.canGoBack()) fentre.webContents.goBack()
});

ipcMain.on('go-forward', () => {
    if (fenetre.webContents.canGoForward()) fenetre.webContents.goForward()
});

ipcMain.on('reload', () => {
    fenetre.webContents.reload()
});

//call (crWindow) for create root page 
app.whenReady().then(async () => {
    crWindow();
});