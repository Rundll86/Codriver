const { ipcRenderer, contextBridge } = require("type-electron");
window.addEventListener("keydown", e => {
    if (e.key === "F12" || e.keyCode == 16) {
        ipcRenderer.send("toggle-devtool");//Shift_L
    };
    if (e.key === "F11" || e.keyCode == 27) { 
        ipcRenderer.send("close");// esc + esc
    };
    if (e.key === "F10" ) {
        ipcRenderer.send("backai");
    };
    if (e.key === "F5" || e.keyCode == 17 ) {
        window.location.reload();//Control_L
    };
});
var mousecontroller = 0;
contextBridge.exposeInMainWorld("sendout", () => {
    ipcRenderer.send("mouseout");
});
contextBridge.exposeInMainWorld("sendover", () => {
    ipcRenderer.send("mouseover");
});
contextBridge.exposeInMainWorld("sendclose", () => ipcRenderer.send("close"));
ipcRenderer.on("apikey", (_, e) => {
    console.log("apikey", e);
    contextBridge.exposeInMainWorld("apikey", e);
});
contextBridge.exposeInMainWorld("updateapikey", e => {
    ipcRenderer.send("updateapikey", e);
});
if (mousecontroller == 0) {
    document.addEventListener("mouseover", () => {
        mousecontroller = 1;
        ipcRenderer.send("mouseover");
    });
    document.addEventListener("mouseleave", () => {
        mousecontroller = 1;
        ipcRenderer.send("mouseout");
    });
};
