const electron = require("electron");
const path = require("path");
const { app, BrowserWindow, ipcMain, nativeTheme } = electron;

const env = process.env.NODE_ENV || "development";

// HOT RELOAD...
if (env === "development") {
  try {
    require("electron-reloader")(module, {
      debug: true,
      watchRenderer: true,
    });
  } catch (error) {
    console.error(error);
  }
}

// Creating the window
const createWindow = () => {
  const win = new BrowserWindow({
    width: 1440,
    height: 840,
    simpleFullscreen: true,
    frame: true,
    titleBarOverlay: {
      color: "#2f3241",
      symbolColor: "#74b1be",
      height: 80,
    },
    // fullscreenable: true,
    // autoHideMenuBar: true,
    // roundedCorners: true,
    // hasShadow: true,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, "./preload.js"),
      // devTools: false,
    },
  });

  win.loadFile("index.html");
};

// Calling the Function...

/* 
  This method will be called when Electron has finished initialization and is ready to create
  browser windows.
  Some APIs can only be used after this event occurs.
*/

app.on("ready", () => {
  createWindow();

  // Opens a window if none is opened (macOS)
  app.on("activate", () => {
    /* 
      On macOS it's common to re-create a window in the app when the dock icon
      is clicked and there are no other windows opened...
    */
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit the application when all windows are closed...

/*
  Quits when all windows are closed, except on macOS. There, 
  it's common for applications and their menu bar to stay until the user quits
  explicitly with the CMD + Q command
*/
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

// In this file you can include the rest of the apps specific main process code
// You can also put them in separate files and require them here...

ipcMain.handle("dark-mode:toggle", () => {
  if (nativeTheme.shouldUseDarkColors) {
    nativeTheme.themeSource = "light";
  } else {
    nativeTheme.themeSource = "dark";
  }
  return nativeTheme.shouldUseDarkColors;
});

ipcMain.handle("dark-mode:system", () => {
  nativeTheme.themeSource = "system";
});
