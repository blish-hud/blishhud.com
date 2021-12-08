---
id: profession
title: Profession
hide_table_of_contents: true
---

| Applies To | | Blish HUD | TacO |
|-|-|-|-|
| <center>Markers, Trails</center> | | <center>✔</center> | <center>❌</center> |

## Description

*Hides the marker or trail if the player is not currently one of the specified professions.*

| Attribute | Data Type | Example | Description |
|-|-|-|-|
| profession | Custom String Array | `profession="thief,mesmer"` | The profession(s) the marker or trail should be shown while using. |

## Supported values

- guardian
- warrior
- engineer
- ranger
- thief
- elementalist
- mesmer
- necromancer
- revenant

This attribute supports providing an array of professions (values separated by comma) meaning one or more values can be provided.  If the player character is any of the provided professions the the marker or trail is shown.

## How it works

The mumblelink API provides values indicating the active character profession.  This state is updated in realtime.