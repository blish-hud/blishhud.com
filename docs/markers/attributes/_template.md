---
id: attributename
title: Attributename
hide_table_of_contents: true
---

| Applies To | | Blish HUD | TacO |
|-|-|-|-|
| <center>Categories, Markers, Trails</center> | | <center>✔</center> | <center>✔</center> |

:::info

Caveats for the feature, important details, etc. can be written here.  If there are none then this can be removed.  For example, if the attribute requires an API key, that should be listed.  If there are settings within Blish HUD's Pathing module which may change the behavior, those should be mentioned here.

:::

## Description

*A brief description of the attribute.*

| Attribute | Data Type | Example | Default Value | Description |
|-|-|-|-|-|
| fadenear | [float](../datatypes/float) | `fadenear="600"` | 700 | The distance from the marker or trail segment when it should begin to fade. |
| fadefar | [float](../datatypes/float) | `fadefar="605"` | 900 | The distance from the marker or trail segment when it should not longer be visible. |

## Supported values

### achievementid

The `achievementid` must be a value which matches the Guild Wars 2 Web API achievements endpoint.
- API provided list of achievements: https://api.guildwars2.com/v2/achievements
- Checking an explicit achievement: https://api.guildwars2.com/v2/achievements?id=4949

### achievementbit

Often the harder to find, the `achievementbit` will represent the index of the associated bit found in, for example, the above explicit achievement under the bits entry.

If an achievement requires you to find 4 items, typically each of those 4 items will receive a bit to indicate it's individual status.

The bits are 0 indexed meaning that they count from 0 onwards so if there are 4 bits in an achievement, they will range from 0 to 3.  The wiki and the bit descriptions themselves will often indicate their bit value + 1.  For example "*Ancient Grothmar Coin #6*" which is bit 5 on achievement 4949.

`achievementbit` is not required and when not specified, the marker or trail will be toggled based exclusively on the status of the parent achievement, itself.

:::tip

A great way to find achievement IDs and other details is via [gw2treasures.com's achievement search](https://en.gw2treasures.com/achievement).

:::

## Affected by

| Attribute | How |
|-|-|
| [AutoTrigger](autotrigger) | If enabled, the bounce will trigger when the user enters within the [TriggerRange](triggerrange). |
| [TriggerRange](triggerrange) | Determines the range necessary to trigger the bounce with the action key. |

## How it works

If relevant, a brief explanation which goes into detail about the implementation.