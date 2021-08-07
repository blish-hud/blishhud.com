---
id: festival
title: Festival
hide_table_of_contents: true
---

| Markers | Trails | | Blish HUD | TacO |
|-|-|-|-|-|
| <center>✔</center> | <center>✔</center> | | <center>✔</center> | <center>❌</center> |

## Description

*Hides the marker if the specified festival is not active.*

| Attribute | Data Type | Example | Description |
|-|-|-|-|
| festival | Custom String Array | `festival="superadventurefestival,wintersday"` | The festival(s) the marker or trail should be shown during. |

## Supported values

- halloween
- wintersday
- superadventurefestival
- lunarnewyear
- festivalofthefourwinds
- dragonbash

This attribute supports providing an array of festivals (values separated by comma) meaning one or more values can be provided.  If any of the provided festivals are active, then the marker or trail is shown.

## How it works

1. A request is made to the GW2 web API to get a list of all active dailies (group ID: 18DB115A-8637-4290-A636-821362A3C4A8).
2. Known festival daily IDs are checked for.  Any matches indicate that the holiday is active.

Explicit implementation details on how we determine the active festival can be found here in the Blish HUD [FestivalContext](https://github.com/blish-hud/Blish-HUD/blob/dev/Blish%20HUD/GameServices/Contexts/FestivalContext.cs).

This state is detected when Blish HUD is launched.

:::caution

On at least once occurance (Dragon Bash 2021), the web API has not properly reflected all active dailies resulting in festivals going undetected by Blish HUD.  This filter can be manually overriden by disabling the option within settings which allows markers to hide themselves.

:::