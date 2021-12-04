---
id: tip
title: Tip
hide_table_of_contents: true
---

| Applies To | | Blish HUD | TacO |
|-|-|-|-|
| <center>Categories, Markers</center> | | <center>✔</center> | <center>❌</center> |

:::caution

`tip-name` is implemented on the mini-map but not for categories as a name would be redundant.

:::

## Description

*Allows you to display a tooltip on markers on the minimap or categories in the category dropdown.*

| Attribute | Data Type | Example | Description |
|-|-|-|-|
| tip-name | arbitrary text | `tip-name="Golden Coin"` | The text to show as the title of the tooltip. |
| tip-description | arbitrary text | `tip-description="Coin 7 - under the cove south of the waypoint."` | The description text shown under the title. |

## Remarks

If `tip-name` is not provided, the [displayname](displayname) of the parent category is used instead.

If you would like no tooltip to be shown for a marker, set `tip-name=""`.  Note that this will also hide the distance indicator and any set `tip-description` will also be ignored.