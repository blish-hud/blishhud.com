---
id: getting-started
title: Getting Started
---

[![Discord](https://img.shields.io/badge/Join_Our_Discord-📦module_discussion-Green)](https://discord.gg/HzAV82d)
[![](https://img.shields.io/badge/Release-ModuleTemplateDeployment.vsix-Blue)](https://github.com/blish-hud/Module-Template/releases)

## Overview

Blish HUD module projects can be created from scratch or by using the above module template.  The template is the recommended method.  Both methods are described below.  Do not perform both sets of instructions.

## Setup Using the Module Template for Visual Studio 2019

1. Install the latest Visual Studio module template found under [Releases](https://github.com/blish-hud/Module-Template/releases).
2. Create a new project in Visual Studio using the template.
   - *Note: On the "Configure your new project" step of the project wizard, make sure to enter the desired project name.*
   - *Note: On the "Configure your new project" step of the project wizard, you **must** select "Place solution and project in the same directory".*
3. When you open the Package Manager Console, you should get a prompt saying "Some NuGet packages are missing from this solution. Click to restore from your online package sources." Click the restore button to download the NuGet packages.
4. Now run "Update-Package" in the Package Manager Console to update all NuGet packages to the latest versions.

:::info

The template will attempt to auto-fill details in your manifest as well as define namespace, etc.  Be sure to review these to ensure things are how you would like them to be.

:::

## Setup Without the Module Template

1. Create a new .NET Framework Class Library project.
2. Add a reference to the latest version of Blish HUD to your project (`Install-Package BlishHUD`).
3. Ensure the Blish HUD and all of Blish HUD's dependent references have **Copy Local** set to **False** in the properties of the reference.
   - If you don't do this, your module will package these assemblies with your module.
     - This will make your modules unnecessarily large (it'll contain the entire Blish HUD assembly!).
     - Blish HUD will already have all of these assemblies loaded (since it naturally depends on them), so you don't need to include them.
