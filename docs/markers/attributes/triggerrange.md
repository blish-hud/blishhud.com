---
id: triggerrange
title: TriggerRange
hide_table_of_contents: true
---

| Applies To | | Blish HUD | TacO |
|-|-|-|-|
| <center>Markers</center> | | <center>✔</center> | <center>✔</center> |

## Description

*Used to indicate a trigger range.  This attribute is used by multiple other attributes to define a distance from the marker in which those attributes will activate their functionality or behavior.*

| Attribute | Data Type | Example | Default Value | Description |
|-|-|-|-|-|
| triggerrange | [float](../datatypes/float) | `triggerrange="3.2"` | 2 | The radius from the marker in which the triggerrange is active. |

## Used by
- [Copy](copy)
- [Bounce](bounce)
- [Behavior](behavior)
- [Toggle](toggle)
- [Show/Hide](showhide)
- [Info](info)