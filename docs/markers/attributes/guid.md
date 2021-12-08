---
id: guid
title: GUID
hide_table_of_contents: true
---

| Applies To | | Blish HUD | TacO |
|-|-|-|-|
| <center>Markers</center> | | <center>✔</center> | <center>✔</center> |

## Description

*A unique identifier used to track the state of certain behaviors between launch sessions.*

| Attribute | Data Type | Example | Description |
|-|-|-|-|
| guid | string | `guid="NdG3CddnEEO+xNrGN7lGIA=="` | The base64 encoded GUID used to uniquely identify the marker. |

## Used by
- [behavior](behavior)

## How it works

Behaviors and other attributes which must track their state between launch sessions can track their state by an attribute defined GUID.  The GUID is typically unique among all packs (thus is should be automatically generated).  When a behavior (such as TacO behaviors 2, 3, 4, and 7) indicates that it has been activated, the unfilter timestamp is saved along with the GUID into a data file.  On the next launch, the filtered state of the marker can be re-loaded and checked to see if it is still valid or if the filter should be released.

:::tip

When a marker checks to see if it is filtered, by GUID, it checks a table of filtered GUIDs which means that you can intentionally use the same GUID more than once to tie the state of multiple markers together.  This is an important use case for the [InvertBehavior](invertbehavior) attribute.

:::