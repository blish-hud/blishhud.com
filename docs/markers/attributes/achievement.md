---
id: achievement
title: Achievement
hide_table_of_contents: true
---

| Applies To | | Blish HUD | TacO |
|-|-|-|-|
| <center>Markers, Trails</center> | | <center>✔</center> | <center>✔</center> |

:::info

For this feature to work, the user must have given Blish HUD and the pathing module permission to access the `account` and `progression` items with an API key.

If the user does not provide an API key or the user has not consented to the `account` and `progression` items, then markers and trails marked with this attribute will not be automatically hidden.

:::

## Description

*Hides markers and trails based on their associated completion status reported by the web API.*

| Attribute | Data Type | Example | Description |
|-|-|-|-|
| achievementid | [integer](../datatypes/integer) | `achievementid="4949"` | The achievement this marker or trail will hide for when completed. |
| achievementbit | [integer](../datatypes/integer) | `achievementbit="3"` | The id of the sub item within an achievement this marker or trail will hide for when completed. |

## Supported values

### achievementid

The `achievementid` must be a value which matches the Guild Wars 2 Web API achievements endpoint.
- API provided list of achievements: https://api.guildwars2.com/v2/achievements
- Checking an explicit achievement: https://api.guildwars2.com/v2/achievements?id=4949

### achievementbit

Often the harder to find, the `achievementbit` will represent the index of the associated bit found in, for example, the above explicit achievement under the bits entry.

If an achievement requires you to find 4 items, typically each of those 4 items will receive a bit to indicate it's individual status.

The bits are 0 indexed meaning that they count from 0 onwards so if there are 4 bits in an achievement, they will range from 0 to 3.

:::warning

Do not trust the order of the Wiki or the in-game achievement UI.  This order does not necessarily represent the order provided by the API.

:::

`achievementbit` is not required and when not specified, the marker or trail will be toggled based exclusively on the status of the parent achievement, itself.

:::tip

A great way to find achievement IDs and other details is via [gw2treasures.com's achievement search](https://en.gw2treasures.com/achievement).

:::

## Affected by

| Attribute | How |
|-|-|
| [AutoTrigger](autotrigger) | If enabled, the marker will be hidden for the remainder of the session automatically if the user enters the [TriggerRange](triggerrange).  Enable for achievements which require you to enter an area without needing to directly interact. |
| [TriggerRange](triggerrange) | Determines the range necessary to trigger hiding the marker with the action key (or automatically if autotrigger is enabled). |

## How it works

Every 5 minutes, a list of the current users achievements are pulled from the API.

1. If we don't see the indicated achievement in the list we do nothing.
2. If the achievement itself indicates that it is complete, we hide all markers with the associated `achievementid`.
3. If the achievement itself indicates that it is not complete, but indicates that a bit has been completed, we hide all markers with the associated `achievementbit`.

When a user interacts (usually the F key) with a marker that has an achievementid, we automatically hide it for that session since the Web API has a cache which prevents it from being updated in realtime.