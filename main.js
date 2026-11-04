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
const { BrowserWindow, Menu, app, shell } = require("electron");
const path = require("path");
const fs = require("fs");

//join file (sources/disabled) and (micro.js)
const file = path.join(__dirname, "sources/disabled");
const p = path.join(__dirname, "preload.js")
let micro = "";
try { micro = fs.readFileSync(path.join(__dirname, "micro.js"), "utf8"); } catch { }

//Check if the file exists.
if (fs.existsSync(file)) {
    //set entry point to the file
    const disables = fs.readFileSync(file, "utf8").split("\n").map(l => l.trim()).filter(l => l !== "");
    disables.forEach(flag => app.commandLine.appendSwitch(flags));
}

//set point fenetre for glabal
let fenetre;

//set lck point 
const lck = app.requestSingleInstanceLock();

//use entry point lck
//verif if lck = true or false
if (!lck) {
    //kill process no wait
    process.exit(0);
} else {
    app.on('second-instance', () => {
        if (fenetre) {
            if (fenetre.isMinimized()) fenetre.restore();
            //show root page 
            fenetre.show();
            //focus app in first view
            fenetre.focus();
        }
    });

    //hidde Menu Bar
    Menu.setApplicationMenu(null);

    //function create root page Window
    function crWindow() {
        //set fenetre to BrowserWindow
        fenetre = new BrowserWindow({
            //set icon app
            icon: path.join(__dirname, 'ressources/corex_aria.ico'),

            //set size page and title
            title: 'Corex-Aria',
            width: 1000,
            height: 700,
            minWidth: 700,
            minHeight: 550,

            //set preferences app
            webPreferences: {
                preload: fs.existsSync(p) ? p : undefined,
                contextIsolation: true,
                webSecurity: true,
                backgroundThrottling: true,

                sandbox: false,
                nodeIntegration: false,
                enableRemoteModule: false,
                webviewTag: false,
                nodeIntegrationInSubFrames: false,
                allowRunningInsecureContent: false,
                experimentalFeatures: false,
                offscreen: false
            }
        });

        //load website ai (Corex-Aria)
        fenetre.loadURL("https://perchance.org/corex-aria");

        //set version app corex-aria-vd in user-agent
        fenetre.webContents.setUserAgent(`${fenetre.webContents.getUserAgent()} Corex-Aria/1.1.0`);

        //set title BrowserWindow 
        fenetre.on('page-title-updated', e => e.preventDefault());

        //System for page refreshing F5 and Ctrl+R
        fenetre.webContents.on('before-input-event', (event, input) => {
            const ctrl = input.control || input.meta;

            if ((ctrl && input.key.toLowerCase() === 'r') || input.key === 'F5') {
                event.preventDefault();
                if (input.shift) fenetre.webContents.reloadIgnoringCache();
                else fenetre.webContents.reload();
            }
        });

        //system for detect micro
        fenetre.webContents.session.setPermissionRequestHandler((webContents, permission, callback) => {
            if (permission === 'media' || permission === 'audioCapture') {
                callback(false);
                webContents.executeJavaScript(micro).catch(() => { });
            } else {
                callback(true);
            }
        });

        //system for open url in your default browser
        fenetre.webContents.setWindowOpenHandler(({ url }) => {
            shell.openExternal(url);
            return { action: 'deny' };
        });
    }

    //call (crWindow) for create root page 
    app.whenReady().then(async () => {
        crWindow();
    });
}