---
id: scaleonmapwithzoom
title: ScaleOnMapWithZoom
hide_table_of_contents: true
---

| Applies To | | Blish HUD | TacO |
|-|-|-|-|
| <center>Markers</center> | | <center>✔</center> | <center>✔</center> |

:::caution

This attribute should be used sparingly - please be considerate of your users.  When set to not scale, markers can cover a significant portion of the users minimap which can be cause for a poor user experience.

:::

## Description

*Determines if the marker should scale when the user zooms in and out of their map.*

| Attribute | Data Type | Example | Default Value | Description |
|-|-|-|-|-|
| scaleonmapwithzoom | [bool](../datatypes/bool) | `scaleonmapwithzoom="0"` | 1 | If the marker will scale when the map is zoomed. |