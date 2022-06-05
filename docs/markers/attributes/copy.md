---
id: copy
title: Copy
hide_table_of_contents: true
---

| Applies To | | Blish HUD | TacO |
|-|-|-|-|
| <center>Categories, Markers</center> | | <center>✔</center> | <center>⚠️</center> |

:::info

TacO does not support the copy attribute on category separators like Blish HUD does.

:::

## Description

*Allows you to set a value to the users clipboard.  Good for providing waypoints, build templates, and more.*

| Attribute | Data Type | Example | Description |
|-|-|-|-|
| copy | arbitrary text | `copy="[&BOAHAAA=]"` | The text assigned to the clipboard. |
| copy-message | arbitrary text | `copy-message="Jacka Itzel waypoint copied!"` | The message shown on screen when the copy is activated. |

## Triggering a copy

When interacted with (typically the F key), a marker with the `copy` attribute will activate.  Certain other attributes (shown below) can modify the default activation behavior.

When applied to a [separator category](isseparator), clicking on the separator will activate the copy and display the copy message.

#### [triggerrange](triggerrange)

The distance from a marker in which it can be activated is defined by the `triggerrange` attribute.

#### [autotrigger](autotrigger)

By default, a copy is not activated unless the player press the interact (typically the F key) while within the distance specified by `triggerrange`.  If the `autotrigger` attribute is set to true, however, a copy will occur when the character enteres the `triggerrange` automatically.

## User Configuration

Users may limit what automatic behaviors they consent to.  Regarding the copy attribute, users can select one of three behavior consent levels.

| Allow markers to set clipboard... | Description |
|-|-|
| Always (Default) | Markers can set the clipboard automatically when in range or when interacted without limitation. |
| Only When Interacted With | Copy auto trigger is disabled.  The copy attribute will only be activated when manually interacted with by the player. |
| Never | Markers will be entirely unable to set the clipboard. |
