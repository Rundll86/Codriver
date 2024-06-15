const { ipcRenderer, contextBridge } = require("type-electron");
window.addEventListener("keydown", e => {
    if (e.key === "F12") {
        ipcRenderer.send("toggle-devtool");
    };
    if (e.key === "F11") {
        ipcRenderer.send("close");
    };
    if (e.key === "F5") {
        window.location.reload();
    };
});
contextBridge.exposeInMainWorld("sendout", () => {
    ipcRenderer.send("mouseout");
});
contextBridge.exposeInMainWorld("sendover", () => {
    ipcRenderer.send("mouseover");
});
contextBridge.exposeInMainWorld("sendclose", () => ipcRenderer.send("close"));
ipcRenderer.on("apikey", (_, e) => {
    contextBridge.exposeInMainWorld("apikey", e);
});
contextBridge.exposeInMainWorld("updateapikey", e => {
    ipcRenderer.send("updateapikey", e);
});