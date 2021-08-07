---
id: triggerrange
title: TriggerRange
hide_table_of_contents: true
---

| Markers | Trails | | Blish HUD | TacO |
|-|-|-|-|-|
| <center>✔</center> | <center>N/A</center> | | <center>✔</center> | <center>✔</center> |

## Description

*Used to indicate a trigger range.  This attribute is used by multiple other attributes to define a distance from the marker in which those attributes will activate their functionality or behavior.  If unspecified, features which rely on triggerrange will default to a value of `2`.*

| Attribute | Data Type | Example | Description |
|-|-|-|-|
| triggerrange | [float](../datatypes/float) | `triggerrange="3.2"` | The radius from the marker in which the triggerrange is active. |

## Used By
- [Copy](copy)
- [Bounce]
- [Behavior]
- [Toggle]
- [Show/Hide]
- [Info]