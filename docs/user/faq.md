---
id: faq
title: FAQ
---

## Is it safe to use Blish HUD?

:::note tl;dr:

**We work hard to make sure that we follow ArenaNet's policies to the best of our ability, but it is up to you to read their policies (linked below) and use your best judgement.**

:::

First, understand that members working on Blish HUD take ArenaNet policies very seriously and do everything we can to avoid directly breaking their policies.  We wouldn't have put all of this love and attention into the overlay if it was just going to get folks banned.  Additionally, at least a few ArenaNet employees are aware of Blish HUD, some have used Blish HUD before, some have provided feedback on the project, and some even have contributed ideas which have directly impacted its development.

We *greatly* appreciate this, but please recognize that none of this is official approval by ArenaNet, and we don't expect there to be any.  ArenaNet today is not ArenaNet tomorrow, and Blish HUD today is not Blish HUD tomorrow, so a blanket statement would be understandably irresponsible and unfair to expect from them.

Additionally, Blish HUD is a framework and API for loading other modules.  Without modules, Blish HUD provides no meaningful functionality, meaning that on its own it is compliant.  What this means is that it is primarily up to module developers to ensure that their modules meet the requirements ArenaNet has provided.  We do the best we can to review community-developed modules that we advertise and to write APIs that encourage policy compliance for the modules using them.

That all said, it is your responsibility as a user to review the related Guild Wars 2 policies, which we have linked below, and use good judgement when deciding on the modules you choose to install and use.
- [Guild Wars 2 Policy: Third-Party Programs](https://help.guildwars2.com/hc/en-us/articles/360013625034-Policy-Third-Party-Programs)
- [Guild Wars 2 Policy: Macros and Macro Use](https://help.guildwars2.com/hc/en-us/articles/360013762153-Policy-Macros-and-Macro-Use)
- [Guild Wars 2 Policy: Unattended Gameplay](https://help.guildwars2.com/hc/en-us/articles/360014185033-Policy-Unattended-Gameplay)
- [Guild Wars 2 Policy: Dual or Multi-Boxing](https://help.guildwars2.com/hc/en-us/articles/360013658134-Policy-Dual-or-Multi-Boxing)

The Third-Party Programs policy provides two rather important things to note:

> [...] we are aware that some utilities help players without affecting others; that is, they do not give one player an advantage over another. While, in general, we will not take action on an account for the use of such a utility program or modification, action is subject to ArenaNet's discretion. You use any third-party program at your own risk.

> Note: ArenaNet does not review, approve, or endorse any third-party program. Each use of such a program is made by an account holder at their own risk.

**Finally, if you find a module or feature which you believe directly violates an ArenaNet policy, please reach out to us on Discord.**

## How does Blish HUD work?

### As an overlay?

Unlike other 3rd-party programs such as ArcDps, GW2 Radial, etc. we do not inject ourselves into the game.  Instead, Blish HUD runs as a completely separate program with a transparent background and positions itself over top of your game window to make it look like it's drawing on your game.

### To get realtime data?

Guild Wars 2 provides a realtime API through what is known as [MumbleLink](https://wiki.guildwars2.com/wiki/API:MumbleLink).  Intended for [Mumble voice chat](https://www.mumble.info/), this API has since been expanded in Guild Wars 2 to allow 3rd-party applications to get other details straight from the game in a safe and fast way.  Information about your character position, camera angles, map positions, current mount, current class, etc. mixed with some math provide us with enough information to make an immersive experience that feels like we're part of the game.

### To get account data?

Guild Wars 2 offers a [web API](https://wiki.guildwars2.com/wiki/API:Main) that allows 3rd-party applications to request details about your account, such as what items you have, guild details, achievement statistics, etc.  When authorized with an API key, Blish HUD and modules can make requests to allow for additional functionality.

When you add an API key to Blish HUD, modules do not directly get access to this key.  Instead, we utilize the [createsubtoken API endpoint](https://wiki.guildwars2.com/wiki/API:2/createsubtoken) to make a more restricted key on your behalf, which the module can use to make requests.  These subtokens are made to expire after a period of time and only include permissions based on what you've allowed Blish HUD to access on the key and what the module itself requested (so you can limit what individual modules are given access to).  Blish HUD handles all of this internally and automatically if you provide it with an API key.

API access is optional and many modules will work without issue if you have not granted Blish HUD API access.

## What platforms can Blish HUD run on?

At this time, Blish HUD only supports running on Windows.  The method it uses to overlay does not work well when running through Wine on Linux.  In the future as we migrate the codebase to .NET Core, which is cross-platform, there are plans to implement some functionality to allow it to run natively on Linux and integrate with Guild Wars 2 running through Wine, but there is no ETA on that.

## Is Blish HUD compatible with...

### 3rd party launchers?

Blish HUD may have problems detecting the Guild Wars 2 application window or connecting to the Mumble Link API when using 3rd party launchers such as LaunchBuddy and Gw2Launcher.  If your launcher requires it be ran as an administrator, you must run Blish HUD as an administrator for it to be able to interact with the Guild Wars 2 window.  For further assistance with specific launchers, consider reaching out to us in our [#💢help](https://discord.gg/qJdUhdG) Discord channel.

### Other overlays?

Blish HUD can run at the same time as other overlays.  In fact, if TacO is running, Blish HUD will detect this and scoot its own icon over to account for it so that you can comfortably use both.

### d912pxy, ArcDps, GW2 Radial, Gshade/ReShade, etc.?

Blish HUD works fine with all DLL based mods with no known exceptions at the moment.
