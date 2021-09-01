---
id: fade
title: Fade
hide_table_of_contents: true
---

| Applies To | | Blish HUD | TacO |
|-|-|-|-|
| <center>Markers, Trails</center> | | <center>✔</center> | <center>✔</center> |

:::info

In Blish HUD, users can override the max fade distance by adjusting their `Max View Distance` slider setting.

:::

## Description

*Indicates the distance that markers or trails should begin to fade and the distance where they are fully faded.  These attributes are important to keep from polluting the user's view and keep only what's important visible on screen.  This attribute is unaffected and unrelated to [CanFade](canfade).*

| Attribute | Data Type | Example | Default Value | Description |
|-|-|-|-|-|
| fadenear | [float](../datatypes/float) | `fadenear="600"` | 700 | The distance from the marker or trail segment when it should begin to fade. |
| fadefar | [float](../datatypes/float) | `fadefar="605"` | 900 | The distance from the marker or trail segment when it should not longer be visible. |

## Supported values

The values are expected to be positive and the `fadefar` should be greater than `fadenear`.