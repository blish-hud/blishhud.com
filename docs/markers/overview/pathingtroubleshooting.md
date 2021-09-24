---
id: pathingtroubleshooting
title: Troubleshooting
---

:::info CAN'T FIND YOUR ISSUE OR STILL NEED HELP?
Join our Discord and share your issues in our [#💢help](https://discord.gg/qJdUhdG) channel.

Please be sure to let us know what version of Blish HUD you are using and provide a copy of your logs. Logs can be found in the folder `Documents\Guild Wars 2\addons\blishhud\logs`.
:::

## Failed to Load All Your Markers?

1. First, please check to make sure that *they're actually missing*.  Blish HUD has a feature to hide categories which only contain markers from other maps.  This feature is to help make navigating your categories more pleasant.  This feature can be toggled off if you would like.<br /> [Read more about this feature and how you can toggle it on and off here.](managingmarkers#simplified-menus)

2. Make sure you've not extracted any of your marker packs.  All marker packs should remain in their .zip or .taco files.  Blish HUD will handle opening them.  We don't provide extended support for these XML files.<br /> [Check our warning about extracted XML files here.](/docs/markers#marker-packs)

## Missing Textures?

<img src="/img/pathing/overview/missing-textures.png" />
<br /><br />

These magenta and blue squares represent missing textures.  Most likely:

1. You're using extracted XML files in your markers directory.  We don't support these.<br /> [Check our warning about extracted XML files here.](/docs/markers#marker-packs)

2. The marker pack is missing some textures.  We see this sometimes and often they're fast to be updated to correct the issue.

3. You copied your markers from TacO and mistakenly included the built in XML markers that TacO came with.  We'd recommend you delete these and use a more recently updated pack such as ReActif or Tekkit's All-In-One which has these markers and plenty more.

## Blank Menus?

<img src="/img/pathing/overview/empty-menus.png" />
<br /><br />

As with the above troubleshooting items, you've likely got extracted XML files in your markers directory.  We don't provide extended support for these XML files.<br /> [Check our warning about extracted XML files here.](/docs/markers#marker-packs)

## Achievement Popups Don't Work?

1. Check that you have an API key with the appropriate permissions added to Blish HUD.

2. Check that you have consented to the requested API permissions for the Pathing module.

3. Ensure that the pack you are using supports achievements.  ReActif is the largest pack which supports achievements.

## Mini Map Icons Wrong Size?

This is a know issue.  We don't currently support TacO's minimap sizing attributes, but plan to in a future release of the module.