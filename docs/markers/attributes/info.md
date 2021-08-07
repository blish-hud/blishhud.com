---
id: info
title: Info
hide_table_of_contents: true
---

| Markers | Trails | | Blish HUD | TacO |
|-|-|-|-|-|
| <center>✔</center> | <center>N/A</center> | | <center>✔</center> | <center>✔</center> |

## Description

*Allows you to show text on screen while the user is in range of the marker.*

| Attribute | Data Type | Example | Description |
|-|-|-|-|
| info | arbitrary text | `info="Collect trinkets to complete the heart.&#xA;Deliver trinkets: 30%&#xA;Rescue pirates: 17%"` | The text shown on screen when the character is in range. |
| inforange | [float](../datatypes/float) | `inforange="14.7"` | The distance away that the info text will begin showing on screen. |

:::info Multi-line info

XML's escaped newline `&#xA;` is supported and will allow you to show messages which intentionally span multiple lines in the info.

:::