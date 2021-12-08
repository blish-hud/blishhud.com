---
id: size
title: Size
hide_table_of_contents: true
---

| Applies To | | Blish HUD | TacO |
|-|-|-|-|
| <center>Markers</center> | | <center>✔</center> | <center>✔</center> |

:::caution

These attribute should be used sparingly - please be considerate of your users.

While `minsize` can be helpful to draw attention to important markers off in the distance, they can also take up an intrusive amount of screen space.

:::

## Description

*Specifies the minimum or maximum size of a marker on screen measured in pixels.  The marker will continue to grow or shrink based on distance but will stop when reaching the specified minimum or maximum.*

| Attribute | Data Type | Example | Default Value | Description |
|-|-|-|-|-|
| minsize | [float](../datatypes/float) | `minsize="24"` | 5 | As the player walks further from the marker, this will be the smallest the marker can be displayed measured in pixels. |
| maxsize | [float](../datatypes/float) | `maxsize="128"` | 2048 | As the player walks closer to the marker, this will be the largest the marker can be displayed measured in pixels. |

## Supported values

The values are expected to be positive and the `maxsize` should be greater than `minsize`.