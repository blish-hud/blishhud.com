---
id: bounce
title: Bounce
hide_table_of_contents: true
---

| Applies To | | Blish HUD | TacO |
|-|-|-|-|
| <center>Markers</center> | | <center>✔</center> | <center>❌</center> |

:::info

Users have the option to disable animations within the module settings.  If disabled, this attribute will not have any affect.

:::

## Description

*Allows a marker to "bounce" or rise up out of the way when triggered.*

| Attribute | Data Type | Example | Description |
|-|-|-|-|
| bounce | Custom String | `bounce="bounce"` | The bounce behavior mode. |
| bounce-height | [float](../datatypes/float) | `bounce-height="2"` | The height of the bounce. |
| bounce-duration | [float](../datatypes/float) | `bounce-duration="1"` | The length of time taken to complete the bounce. |
| bounce-delay | [float](../datatypes/float) | `bounce-delay="0"` | The amount of time (in seconds) after triggering the bounce that the bounce will begin. |

## Bounce supported values

- bounce
- rise

The `bounce` attribute indicates the bounce behavior.  When set to `bounce`, the marker will continue to animate while triggered.  When set to `rise`, the marker will raise up until the player leaves the trigger zone.

## Affected by

| Attribute | How |
|-|-|
| [AutoTrigger](autotrigger) | If enabled, the bounce will trigger when the user enters within the [TriggerRange](triggerrange). |
| [TriggerRange](triggerrange) | Determines the range necessary to trigger the bounce with the action key. |

:::tip

You can keep a marker bouncing forever by enabling [AutoTrigger](autotrigger) and using a large [TriggerRange](triggerrange).

:::