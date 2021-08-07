---
id: resetlength
title: ResetLength
hide_table_of_contents: true
---

| Markers | Trails | | Blish HUD | TacO |
|-|-|-|-|-|
| <center>✔</center> | <center>N/A</center> | | <center>✔</center> | <center>⚠ Limited</center> |

TacO only supports reset lengths as whole [integer](../datatypes/integer) values whereas Blish HUD supports subsecond granularity as we accept [float](../datatypes/float) values.

## Description

*When using behavior 4 (reappear after timer) this value defines, in seconds, the duration until the marker is reset after being activated.*

| Attribute | Data Type | Example | Description |
|-|-|-|-|
| resetlength | [float](../datatypes/float) | `resetlength="20.75"` | The number of seconds until the marker should reappear. |