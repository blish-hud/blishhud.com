---
id: debugging
title: Debugging Your Module
---

## Configuring Your Project

1. In your module's **Debug** settings, set the **Start action** to *Start external program* and specify the path of **Blish HUD.exe**.
2. Under the same settings, set **Command line arguments** to `--debug --module "c:\project-path\bin\x64\Debug\<path-to-your-module-output.bhm"`

By default, you should now be able to run your application - it'll generate the *.bhm* file automatically for you when the project is built.  The command line arguments you specified will launch Blish HUD and allow you to debug your module (the debugger will be attached).  Guild Wars 2 should be running for Blish HUD to be able to overlay something while debugging your module. Instead of running Guild Wars 2 you can modify the **Command line arguments** further to let Blish HUD overlay a powershell window for testing purposes (https://blishhud.com/docs/user/launch-options#overlay-a-different-application-esp-for-testing). 

As long as your project generates a PDB file, it will be packaged into your bhm and loaded by the module loader at runtime.

## Runtime Differences When Debugging

Blish HUD behaves somewhat different when the debug flag is passed to it.  Beyond showing additional runtime data in the top right-corner, some module error handling is disabled.  The intention is to ensure that exceptions are not caught and are instead rethrown to ensure you can address them.

## Troubleshooting
- Problem: The debugging runs only for a very short time. 
  - Solution: Make sure that no other instance of Blish HUD is already running.
- Problem: Blish HUD starts, but the module is not running.  The module is listed in Blish HUD, but the module enable and disable buttons are both disabled.  In additon to that Blish HUD tells me to restart Blish HUD to get the module working.  But that does not work either. 
  - Solution: You try to debug a module for which a .bhm file already exists in the folder %userprofile%Documents\Guild Wars 2\addons\blishhud\modules.  Rename the .bhm file ending for this module in the folder and try again.  Or use the --settings **Command line arguments** (https://blishhud.com/docs/user/launch-options#-s---settings-pathtosettingsdir).
