---
id: schedule
title: Schedule
hide_table_of_contents: true
---

| Applies To | | Blish HUD | TacO |
|-|-|-|-|
| <center>Markers, Trails</center> | | <center>✔</center> | <center>❌</center> |

:::info

This is a feature being tested in v0.16.0+.  The attribute is not neccessarily formalized and the implementation may change in future versions.

:::

## Description

*Hides the marker outside of the specified schedule.  Good for showing markers only during their associated scheduled meta event, day of the week, etc.  All scheduling is based on UTC.*

| Attribute | Data Type | Example | Description |
|-|-|-|-|
| schedule | Cron Expression | `schedule="0 0 * * 2"` | A cron expression which represents the start time of when the marker or trail should be shown. |
| schedule-duration | [float](../datatypes/float) | `schedule-duration="1440"` | The duration after the start time that the marker or trail should remain visible. |

## How it works

Cron expressions are used to represent repeating start times that can be anywhere from simplistic to complex.  We use the cron expression to calcuate the schedule that we'll show the markers and trails.  

For example, "0 * * * *" indicates a start time of every hour at the top of the hour.  We'll calculate the timestamp of the next time this occurs and then use the duration to decide what times the marker / trail will be visible.

- 00:00
- 01:00
- 02:00
- etc.

The duration is added to the start time to create an end time and if the current time is between the start and end then the marker or trail is allowed to show.

## Supported values

### schedule

The `schedule` attribute uses cron expressions to indicate the start time.

```
                                     Allowed values    Allowed special characters   Comment

┌───────────── minute                0-59              * , - /                      
│ ┌───────────── hour                0-23              * , - /                      
│ │ ┌───────────── day of month      1-31              * , - / L W ?                
│ │ │ ┌───────────── month           1-12 or JAN-DEC   * , - /                      
│ │ │ │ ┌───────────── day of week   0-6  or SUN-SAT   * , - / # L ?                Both 0 and 7 means SUN
│ │ │ │ │
* * * * *
```

The library we use to parse cron expressions provides some detailed explainations in their [README](https://github.com/HangfireIO/Cronos#cron-format) and there is plenty of documentation available online as the syntax is used for multiple systems.  Minutes are the smallest unit of time currently enabled for cron expressions as shown above.

To get assistance writing and checking your cron expressions, you can use the [Cron expression generator](https://crontab.cronhub.io/) by Cronhub.  Other generators with other features you may prefer are freely available online and can be found by searching for "cron expression generator".

### schedule-duration

The schedule duration is the time in minutes after the start time that the marker or trail should be displayed.  The data type is a float, so partial minutes can be represented accordingly.  For example, `0.5` indicates a duration of 30 seconds.

## Example Schedules

| Schedule | Duration | Meaning |
|-|-|-|
| 0 0 * * 3 | 1440 | All of Wednesday (the 3 indicates Wednesday and 1440 is the number of minutes in a day) |
| 0 * * * * | 2 | Every hour for the first two minutes. |
| 20 2/6 * * * | 15 | At 20 minutes past the hour, every 6 hours, starting at 02:00 AM (Ley-Line Anomaly in Iron Marches) for 15 minutes |