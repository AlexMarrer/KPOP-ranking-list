// This is the main process of the Electron app that creates the browser window and loads the index.html file.
const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");
// const menu = [
//   {
//     label: "Exit",
//     click: () => app.quit(),
//     accelerator: "CmdOrCtrl+Q",
//   },
// ];

// Create the main windows
function createMainWindow() {
  const mainWindow = new BrowserWindow({
    title: "Kpop-App",
    width: 800,
    height: 600,
  });

  mainWindow.loadFile(path.join(__dirname, "./index.html"));
}

// App is ready to create browser windows
app.whenReady().then(() => {
  createMainWindow();

  // Implement the menu
  // const mainMenu = Menu.buildFromTemplate(menu);
  // Menu.setApplicationMenu(mainMenu);

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });
});

app.on("window-all-closed", () => {
  //darwin is the platform name for macOS
  if (process.platform !== "darwin") {
    app.quit();
  }
});
