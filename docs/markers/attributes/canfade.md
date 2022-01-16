---
id: canfade
title: CanFade
hide_table_of_contents: true
---

| Applies To | | Blish HUD | TacO |
|-|-|-|-|
| <center>Markers, Trails</center> | | <center>✔</center> | <center>❌</center> |

:::caution

This attribute should be used sparingly - please be considerate of your users.  Do not enable this attribute on markers or trails where it is not necessary to the functionality of the marker or trail (for example, a trail within a raid which must remain highly visible) or where the circumstances of the marker's placement would make it hard to see.

:::

## Description

*Allows a marker or trail to ignore fade features such as those which hide trails around the player or between the user and their camera.*

| Attribute | Data Type | Example | Default Value | Description |
|-|-|-|-|-|
| canfade | [bool](../datatypes/bool) | `canfade="0"` | 1 | Indicates if the marker or trail is allowed to fade. |