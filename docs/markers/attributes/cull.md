---
id: cull
title: Cull
hide_table_of_contents: true
---

| Applies To | | Blish HUD | TacO |
|-|-|-|-|
| <center>Markers, Trails</center> | | <center>✔</center> | <center>❌</center> |

## Description

*By default markers and trails are rendered without culling meaning that both sides are rendered at all times.  Alternative culling settings allow you to disable culling for one side or the other.  For example, a trail can be made to be visible from only below.*

| Attribute | Data Type | Example | Description |
|-|-|-|-|
| cull | Custom String | `cull="Clockwise"` | The direction that culling should occur. |

The default value is `None`.

## Supported values

- None (Default)
- Clockwise
- CounterClockwise