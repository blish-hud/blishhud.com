---
id: canfade
title: CanFade
hide_table_of_contents: true
---

| Markers | Trails | | Blish HUD | TacO |
|-|-|-|-|-|
| <center>✔</center> | <center>✔</center> | | <center>✔</center> | <center>❌</center> |

## Description

*Allows a marker or trail to ignore fade features such as those which hide trails around the player or between the user and their camera.*

| Attribute | Data Type | Example | Description |
|-|-|-|-|
| canfade | [bool](../datatypes/bool) | `canfade="0"` | Indicates if the marker or trail is allowed to fade.  The default is `1`. |

:::tip

Please be considerate of your users.  Do not enable this attribute on markers or trails where it is not necessary to the functionality of the marker or trail (for example, a trail within a raid which must remain highly visible) or where the circumstances of the marker would make it hard to see.

:::