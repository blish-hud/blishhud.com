---
id: mount
title: Mount
hide_table_of_contents: true
---

| Applies To | | Blish HUD | TacO |
|-|-|-|-|
| <center>Markers, Trails</center> | | <center>✔</center> | <center>❌</center> |

## Description

*Hides the marker or trail if the player is not currently riding one of the specified mounts.*

| Attribute | Data Type | Example | Description |
|-|-|-|-|
| mount | Custom String Array | `mount="jackal,raptor"` | The mount(s) the marker or trail should be shown while riding. |

## Supported values

- jackal
- griffon
- springer
- skimmer
- raptor
- rollerbeetle
- warclaw
- skyscale

This attribute supports providing an array of mounts (values separated by comma) meaning one or more values can be provided.  If any of the provided mounts are actively mounted, then the marker or trail is shown.

## How it works

The mumblelink API provides values indicating the active mount.  This state is updated in realtime anytime the player mounts or unmounts.