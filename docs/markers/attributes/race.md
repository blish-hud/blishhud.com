---
id: race
title: Race
hide_table_of_contents: true
---

| Applies To | | Blish HUD | TacO |
|-|-|-|-|
| <center>Markers, Trails</center> | | <center>✔</center> | <center>❌</center> |

## Description

*Hides the marker or trail if the player is not currently one of the specified races.*

| Attribute | Data Type | Example | Description |
|-|-|-|-|
| race | Custom String Array | `race="asura,norn"` | The race(s) the marker or trail should be shown while using. |

## Supported values

- asura
- charr
- human
- norn
- sylvari

This attribute supports providing an array of races (values separated by comma) meaning one or more values can be provided.  If the player character is any of the provided races the the marker or trail is shown.

## How it works

The mumblelink API provides values indicating the active character race.  This state is updated in realtime.