---
id: visibility
title: Visibility
hide_table_of_contents: true
---

| Applies To | | Blish HUD | TacO |
|-|-|-|-|
| <center>Markers, Trails</center> | | <center>✔</center> | <center>✔</center> |

## Description

*Visibility attributes allow you to indicate where a marker or trail should be shown.  By default, markers and trails are visible on the minimap (compass), fullscreen map, and in-game.*

| Attribute | Data Type | Example | Default Value | Description |
|-|-|-|-|-|
| minimapvisibility | [bool](../datatypes/bool) | `minimapvisibility="0"` | 1 | If set false, the marker or trail will not be displayed on the minimap (compass). |
| mapvisibility | [bool](../datatypes/bool) | `mapvisibility="1"` | 1 | If set false, the marker or trail will not be displayed on the fullscreen map. |
| ingamevisibility | [bool](../datatypes/bool) | `ingamevisibility="0"` | 1 | If set false, the marker or trail will not be displayed in-game. |