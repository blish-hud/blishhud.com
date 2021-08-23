---
id: showhide
title: Show & Hide
hide_table_of_contents: true
---

| Applies To | | Blish HUD | TacO |
|-|-|-|-|
| <center>Markers</center> | | <center>✔</center> | <center>❌</center> |

## Description

*Allows showing or hiding a specified category when triggered.  Similar in behavior to the [Toggle](toggle) attribute.*

| Attribute | Data Type | Example | Description |
|-|-|-|-|
| show | category | `show="mypack.adventures.tickletrahearne"` | A category to show when triggered.  If the category is already showing, then nothing will happen. |
| hide | category | `hide="mypack.adventures.tickletrahearne"` | A category to hide when triggered.  If the category is already disabled, then nothing will happen. |

## Supported value

The value specified should be that of a category's full namespace (the same format used by the [type] attribute).  The category does not have to be from the same marker pack which does allow for packs to interact with each other.

## Affected by

| Attribute | How |
|-|-|
| [AutoTrigger](autotrigger) | If enabled, the category will be shown or hidden automatically when the user enters within the [TriggerRange](triggerrange). |
| [TriggerRange](triggerrange) | Determines the range necessary to trigger hiding or showing with the interaction key (or automatically if [AutoTrigger](autotrigger) is enabled). |

## How it works

Unlike other behaviors/filters, these attributes, when triggered, update the user's category preferences.  That is to say that a category hidden or shown can be seen reflected in the users category dropdowns and will persist between launches of the overlay.