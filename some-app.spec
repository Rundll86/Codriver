# -*- mode: python ; coding: utf-8 -*-


a = Analysis(
    ['C:/Users/dwx19/AppData/Local/Temp/_MEI110842/entry.pyw'],
    pathex=[],
    binaries=[],
    datas=[('D:/Project/Codriver/electron', 'electron'), ('D:/Project/Codriver/temp', 'app'), ('C:\\Users\\dwx19\\AppData\\Local\\Temp\\_MEI110842\\entry_profile.json', '.'), ('D:\\Project\\Codriver\\node_modules\\type-electron', 'app/node_modules/type-electron')],
    hiddenimports=[],
    hookspath=[],
    hooksconfig={},
    runtime_hooks=[],
    excludes=[],
    noarchive=False,
    optimize=0,
)
pyz = PYZ(a.pure)

exe = EXE(
    pyz,
    a.scripts,
    a.binaries,
    a.datas,
    [],
    name='some-app-v1.0.0',
    debug=False,
    bootloader_ignore_signals=False,
    strip=False,
    upx=True,
    upx_exclude=[],
    runtime_tmpdir=None,
    console=False,
    disable_windowed_traceback=False,
    argv_emulation=False,
    target_arch=None,
    codesign_identity=None,
    entitlements_file=None,
    icon=['C:/Users/dwx19/AppData/Local/Temp/_MEI110842/favicon.ico']
)
