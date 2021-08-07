---
id: dev
title: Overview
---

Blish HUD development comes in two flavors: **Core** and **Module** development.  Blish HUD is written in C# and can load .NET compiled modules.

### Core Development

Core development surrounds development of the base `Blish HUD.exe` which provides the framework for modules and integration with Guild Wars 2 as an overlay.

Core provides the following to modules:
- Extensive UI Framework which replicates a large number of common Guild Wars 2 controls.
- Rendering within the Guild Wars 2 3D user space powered by Monogame.
- ArcDps integration with arcdps-bhud.
- Content management for textures, audio, shaders, etc.
- Easy MumbleLink and Web API access.
- Access to user input.
- Settings management with setting renderers.

Contributing to Core is great if you'd like to improve Blish HUD as a whole, expand the features provided to modules, etc.

### Module Development

Module development surrounds the development of smaller packages which are loaded by Blish HUD by users.  Modules reference Blish HUD.exe and can interact with the base application to add any number of features.