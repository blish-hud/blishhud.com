---
id: invertbehavior
title: InvertBehavior
hide_table_of_contents: true
---

| Applies To | | Blish HUD | TacO |
|-|-|-|-|
| <center>Markers</center> | | <center>✔</center> | <center>❌</center> |

## Description

*If enabled, the [behavior](behavior) filter is inverted.  By taking advantage of duplicate [GUIDs](guid) on a second marker you can have markers which are displayed only while the triggered marker is hidden.*

| Attribute | Data Type | Example | Default Value | Description |
|-|-|-|-|-|
| invertbehavior | [bool](../datatypes/bool) | `invertbehavior="1"` | 0 | If the behavior should be inverted for this marker. |