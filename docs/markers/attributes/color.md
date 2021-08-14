---
id: color
title: Color
hide_table_of_contents: true
---

| Applies To | | Blish HUD | TacO |
|-|-|-|-|
| <center>Markers, Trails</center> | | <center>✔</center> | <center>⚠ Limited</center> |

Only `color` is compatible with TacO and Blish HUD.  The `tint` attribute is only available in Blish HUD.  Blish HUD supports parsing far more color formats in both `color` and `tint` when compared to TacO.  See [color](../datatypes/color) for more details.

## Description

*Tints the marker or trail with the color provided.  Powerful when reusing existing marker icons or trail textures which differ in color only.*

| Attribute | Data Type | Example | Description |
|-|-|-|-|
| color | [color](../datatypes/color) | `color="#fff333"` | The color to tint the marker or trail texture. |
| tint | [color](../datatypes/color) | `color="red"` | The color to tint the marker or trail texture.  Not supported by TacO. |