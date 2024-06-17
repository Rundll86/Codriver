## Purpose: Using AI on desktop.
# It s just a joke!!!
EXPLAIN: Ban the `Microsoft Copilot` in Chinese Mainland.  
**Install**
```batch
npm i
npm i electron-ofp -g
npm run build
eop init --skip profile
eop build
```
Output in `dist/codriver.exe`.  
If you have problems INSTALLING `electron-ofp`, you can use `evm` instead of it.  
**Install(Plan B)**
```batch
npm i
npm i electron-vmgr -g
evm reset
evm install 30.0.6
evm use 30.0.6
npm run build
```
But you *can't* build it into executable file **in this method**.
**Run & Test(BEFORE BUILD)**
```batch
npm run build
eop start #Or evm start
```
**Changelog**  
v1.0 the first version  
v1.0.1 small changes to elctron-ofp for py & python3-cmd users  
v1.0.2 fix window-shaking while change the size  
v1.0.3 small changes for the users who have problems installing electron-ofp