---
id: cull
title: Cull
hide_table_of_contents: true
---

| Applies To | | Blish HUD | TacO |
|-|-|-|-|
| <center>Markers, Trails</center> | | <center>✔</center> | <center>❌</center> |

## Description

*By default markers and trails are rendered without culling meaning that both sides are rendered at all times.  Alternative culling settings allow you to enable culling for one side or the other.  For example, a trail can be made to be visible when viewed from below.*

| Attribute | Data Type | Example | Default Value | Description |
|-|-|-|-|-|
| cull | Custom String | `cull="Clockwise"` | None | The direction that culling should occur. |

## Supported values

- None
- Clockwise
- CounterClockwise

:::tip

This attribute will either appear to do nothing or will hide a marker entirely if set to a value other than None unless you've also specified a static rotation of the marker (otherwise the marker always faces the player's camera and the other side is never visible).  A marker can be statically rotated using the [Rotate](rotate) attribute.

:::