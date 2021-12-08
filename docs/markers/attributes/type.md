---
id: type
title: Type
hide_table_of_contents: true
---

| Applies To | | Blish HUD | TacO |
|-|-|-|-|
| <center>Markers, Trails</center> | | <center>✔</center> | <center>✔</center> |

## Description

*Indicates which category a marker or trail belongs to.  The type represents the tree of category `name` attributes delimited by periods.*  ***All markers and trails should have a type.***

| Attribute | Data Type | Example | Description |
|-|-|-|-|
| type | category | `type="mypack.adventures.tickletrahearne"` | The category that the marker or trail belongs to. |

## Example

The above category example `mypack.adventures.tickletrahearne` represents the same `MarkerCategory` structure shown below.  The actual category that owns it is highlighted.

```xml {3} title="examplepack.xml"
<MarkerCategory name="mypack" displayname="My Marker Pack!">
    <MarkerCategory name="adventures">
        <MarkerCategory name="tickletrahearne" displayname="Tickle Trahearne" />
    </MarkerCategory>
</MarkerCategory>
```