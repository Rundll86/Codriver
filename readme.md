## Purpose: Using AI on desktop.
# It s just a joke!!!
EXPLAIN: Ban the `Microsoft Copilot` in **Chinese Mainland**.  
Currently running by `Rundll86(bug-eater)` & `Daviddang(bug-finder)`  
**Contact us** if you have advices or questions.

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
But you *CAN'T* build it into executable file **in this method**.

**Run & Test(BEFORE BUILD)**
```batch
npm run build
eop start #Or evm start
```
**KeyMap**

|Key|Function|
|-|-|
|Esc or F11|Quit|
|LeftShift or F12|Open electron-dev-tools|
|F10|Back to AI message (If you are explor in Website)|
|LeftCtrl or F5|Reload window|

**Changelog**  
v1.0 the first version  
v1.0.1 small changes to elctron-ofp for py & python3-cmd users  
v1.0.2 fix window-shaking while change the size  
v1.0.3 small changes for the users who have problems installing electron-ofp  
v1.0.4 changes for some bugs 
v1.0.5 changes for some bugs & font changed
