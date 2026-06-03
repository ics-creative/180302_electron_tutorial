const { contextBridge } = require("electron");

// レンダラープロセスのグローバル空間（window）にAPIとして公開します
contextBridge.exposeInMainWorld("versions", {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
});
