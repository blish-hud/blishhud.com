---
id: maptype
title: MapType
hide_table_of_contents: true
---

| Applies To | | Blish HUD | TacO |
|-|-|-|-|
| <center>Markers, Trails</center> | | <center>✔</center> | <center>❌</center> |

## Description

*Hides the marker or trail if the current map is not one of the specified map types.*

| Attribute | Data Type | Example | Description |
|-|-|-|-|
| maptype | Custom String Array | `profession="instance,public"` | The map type(s) the marker or trail should be shown while on. |

## Supported values

:::caution

Map types can be difficult to predict and don't always match expectations.  It is best to check what the map type ID instead of assuming the map type.

:::

| Value | Description |
|-|-|
| unknown | An unknown map type. Used as fallback. |
| redirect | Redirect map type, e.g. when logging in while in a PvP match. |
| charactercreate | Character create map type. |
| pvp | PvP map type. |
| gvg | GvG map type. Unused. |
| instance | Instance map type, e.g. dungeons and story content. |
| public | Public map type, e.g. open world. |
| tournament | Tournament map type. Probably unused. |
| tutorial | Tutorial map type. |
| usertournament | User tournament map type. Probably unused. |
| center | Eternal Battlegrounds (WvW) map type. |
| eternalbattlegrounds | Eternal Battlegrounds (WvW) map type. |
| bluehome | Blue Borderlands (WvW) map type. |
| blueborderlands | Blue Borderlands (WvW) map type. |
| greenhome | Green Borderlands (WvW) map type. |
| greenborderlands | Green Borderlands (WvW) map type. |
| redhome | Red Borderlands (WvW) map type. |
| redborderlands | Red Borderlands (WvW) map type. |
| fortunesvale | Fortune's Vale. Unused. |
| jumppuzzle | Obsidian Sanctum (WvW) map type. |
| obsidiansanctum | Obsidian Sanctum (WvW) map type. |
| edgeofthemists | Edge of the Mists (WvW) map type. |
| publicmini | Mini public map type, e.g. Dry Top, the Silverwastes and Mistlock Sanctuary. |
| wvwlounge | WvW lounge map type, e.g. Armistice Bastion. |

This attribute supports providing an array of map types (values separated by comma) meaning one or more values can be provided.  If the player character is any on any of the provided map types the the marker or trail is shown.

## How it works

The mumblelink API provides a value indicating the active map type.  This state is updated in realtime.