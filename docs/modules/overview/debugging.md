---
id: debugging
title: Debugging Your Module
---

## Configuration Your Project

1. In your module's **Debug** settings, set the **Start action** to *Start external program* and specify the path of **Blish HUD.exe**.
2. Under the same settings, set **Command line arguments** to `--debug --module "c:\project-path\bin\x64\Debug\<path-to-your-module-output.bhm"`

By default, you should now be able to run your application - it'll generate the *.bhm* file automatically for you when the project is built.  The command line arguments you specified will launch Blish HUD and allow you to debug your module (the debugger will be attached).

As long as your project generates a PDB file, it will be packaged into your bhm and loaded by the module loader at runtime.

## Runtime Differences When Debugging

Blish HUD behaves somewhat different when the debug flag is passed to it.  Beyond showing additional runtime data in the top right-corner, some module error handling is disabled.  The intention is to ensure that exceptions are not caught and are instead rethrown to ensure you can address them.