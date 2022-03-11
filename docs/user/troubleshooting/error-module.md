---
id: error-module
title: Error Submission Module
---

## What is it?

The error submission module is a module which adds certain data collection features to Blish HUD.  As with all modules, the error submission module is completely optional.

The purpose of the error submission module is to ultimately aid in the development of Blish HUD by identifying bugs and performance issues that may otherwise go underreported.

That all said, we appreciate if you use it as it helps us proactively resolve issues with Blish HUD, but understand if you're not interested.

## Why use it?

Problems you have can be identified quickly and fixed.  If enabled we can begin working to resolve the bug ASAP.

You can optionally include your Discord username.  If provided and you are a member of our [Blish HUD](https://discord.gg/FYKN3qh) channel, we can ping you once the issue is resolved.  If no username is provided, the data is submitted entirely anonymously.

## What data is collected?

### Basic System Information

We use this information to identify specific environmental details that may cause issues with Blish HUD.

| Data | Example |
|-|-|
| OS | Windows 10.0.22000 |
| .NET Version | .NET Framework v4.8.4161 |
| System Language (Culture) | English / en-US |
| Timezone | Eastern Standard Time |

### Launch Options

We use this information to identify issues related to any custom launch options specified.

Example:
```
[
    --unlockfps, 
    --debug
]
```

### Modules

We use this information to identify incompatible module versions or determine if bugs are unique to a specific version of a module.

```
[
    {
        Enabled: True, 
        Name: Error Submission Module, 
        Namespace: bh.community.etm, 
        Version: 0.1.0
    }, 
    {
        Enabled: False, 
        Name: Mouse Cursor, 
        Namespace: Manlaan.MouseCursor, 
        Version: 2.2.0
    }
]
```

### Blish HUD Versions

The version of Blish HUD you're running to ensure we're able to keep track of which bugs are associated with which versions of Blish HUD.

Example:

|  |  |
|-|-|
| Blish HUD | v0.11.4 |

### The Error Message

These are the actual details of the error message so that we can know what went wrong.

Here is a real example of such details: https://sentry.blishhud.com:2083/share/issue/6a8616f3cac44a5ba86fa8335381663d/