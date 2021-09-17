---
id: autotrigger
title: AutoTrigger
hide_table_of_contents: true
---

| Applies To | | Blish HUD | TacO |
|-|-|-|-|
| <center>Markers</center> | | <center>✔</center> | <center>✔</center> |

## Description

*If enabled, attributes and behaviors which would normally require an interaction to activate will instead activate automatically when within [`triggerrange`](triggerrange).*

| Attribute | Data Type | Example | Description |
|-|-|-|-|
| autotrigger | [bool](../datatypes/bool) | `autotrigger="1"` | 1 to indicate that all applicable behaviors / attributes on the marker should auto trigger once the character is in range. Default is 0. |

## Used by
- [Copy](copy)
- [Bounce](bounce)
- [Behavior](behavior)
- [Toggle](toggle)
- [Show/Hide](showhide)
- [Info](info)