---
id: mapid
title: MapID
hide_table_of_contents: true
---

| Applies To | | Blish HUD | TacO |
|-|-|-|-|
| <center>Markers</center> | | <center>✔</center> | <center>✔</center> |

## Description

*Defines which map the marker should be displayed on.  A list of maps and their ID can be found via the Guild Wars 2 Web API: https://api.guildwars2.com/v2/maps?ids=all*  

| Attribute | Data Type | Example | Description |
|-|-|-|-|
| mapid | [integer](../datatypes/integer) | `mapid="19"` | The map ID this marker should show on. |

:::note

Trails don't use mapid as the mapid is a value stored in the trl format.

:::