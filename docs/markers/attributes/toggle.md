---
id: toggle
title: Toggle
hide_table_of_contents: true
---

| Applies To | | Blish HUD | TacO |
|-|-|-|-|
| <center>Markers</center> | | <center>✔</center> | <center>❌</center> |

## Description

*Toggles a category on or off.  Similar in behavior to the [Show & Hide](showhide) attributes.*

| Attribute | Data Type | Example | Description |
|-|-|-|-|
| toggle | category | `toggle="mypack.adventures.tickletrahearne"` | A category to toggle when triggered.  If the category is disabled, it will be enabled.  If the category is enabled, it will be disabled. |

## Supported value

The value specified should be that of a category's full namespace (the same format used by the [type] attribute).  The category does not have to be from the same marker pack which does allow for packs to interact with each other.

## Affected by

| Attribute | How |
|-|-|
| [AutoTrigger](autotrigger) | If enabled, the category will be toggled automatically when the user enters within the [TriggerRange](triggerrange). |
| [TriggerRange](triggerrange) | Determines the range necessary to trigger toggling with the interaction key (or automatically if [AutoTrigger](autotrigger) is enabled). |

## How it works

Unlike other behaviors/filters, this attribute, when triggered, update the user's category preferences.  That is to say that a category toggle can be seen reflected in the users category dropdowns and will persist between launches of the overlay.