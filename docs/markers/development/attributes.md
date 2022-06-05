---
id: attributes
title: Understanding Attributes
hide_table_of_contents: false
---

Attributes are used to modify the behavior, appearance, and functionality of markers, trails, and categories.

## Exclusive Attributes

Be mindful that there are some attributes exclusively supported by Blish HUD.

Blish HUD exclusive attributes will be silently ignored in TacO.  That means that any behaviors or other effects they would normally provide in Blish HUD will not occur at all in TacO.  Packs using Blish HUD exclusive attributes will still otherwise run in TacO without issue.

:::info Need help or feedback?

If you need assistance or would like to provide suggestions for future attributes in Blish HUD, join our [Discord channel](https://discord.gg/FYKN3qh)!

:::

| Applies To | Attribute | Summary |
|-|-|-|
| Trails | [IsWall](/docs/markers/attributes/iswall) | *When enabled, a trail will be rendered on its edge like a boundary.* | 
| Markers, Trails | [Mount](/docs/markers/attributes/mount) | *Hides the marker if the player is not currently riding one of the specified mounts.* | 
| Markers, Trails | [Profession](/docs/markers/attributes/profession) | *Hides the marker or trail if the player is not currently one of the specified professions.* | 
| Markers, Trails | [Race](/docs/markers/attributes/race) | *Hides the marker or trail if the player is not currently one of the specified races.* | 
| Markers, Trails | [Specialization](/docs/markers/attributes/specialization) | *Hides the marker or trail if the player is not currently one of the specified specializations.* | 
| Markers, Trails | [MapType](/docs/markers/attributes/maptype) | *Hides the marker or trail if the current map is not one of the specified map types.* | 
| Markers, Trails | [Cull](/docs/markers/attributes/cull) | *Allows you to make markers or trails hidden depending on which direction they are looked at.* |
| Markers, Trails | [CanFade](/docs/markers/attributes/canfade) | *Allows a marker or trail to ignore fade features such as those which hide trails around the player or between the user and their camera.* | 
| Markers | [InvertBehavior](/docs/markers/attributes/invertbehavior) | *If enabled, the behavior attribute's effect is inverted.* | 
| Markers | [Rotate](/docs/markers/attributes/rotate) | *Allows you to statically rotate a marker instead of it automatically facing the player.* |
| Markers | [Bounce](/docs/markers/attributes/bounce) | *Allows a marker to "bounce" when triggered.* | 
| Markers | [Show / Hide](/docs/markers/attributes/showhide) | *Allows showing or hiding a specified category when triggered.* |  
| Markers | [Toggle](/docs/markers/attributes/toggle) | *Toggles a category on or off when triggered. Similar in behavior to the Show & Hide attributes.* | 
| Markers, Categories | [Tip](/docs/markers/attributes/tip) | *Allows you to display a tooltip on markers on the minimap or categories in the category dropdown.* | 
| Categories | [DefaultToggle](/docs/markers/attributes/defaulttoggle) | *Indicates if the category should be enabled by default.* | 


## Attribute Prefixes

Blish HUD supports prefixed attributes.  This is to say that any attribute prefixed by `bh-` will be stripped of its prefix and used as a normal attribute.  This allows you to create markers, trails, and categories that differ in functionality depending on if the pack is loaded by Blish HUD or TacO.  This works because TacO will ignore these attributes entirely as they don't match any of its supported attributes.

**Example:**
```xml
<MarkerCategory name="overlay" displayname="You're using TacO!" bh-displayname="You're using Blish HUD!" />
```

:::caution

When using prefixed attributes, ensure they are specified after the attribute you wish you override.  Anything that inherits attributes can still override a prefixed attribute if it itself defines its own overriding attribute, *prefixed or not*.

:::

## Attribute Values

As the marker pack format is XML based, there are limitations to what characters can be used as an attribute value.  The table below indicates the values that must be escaped in order to be considered proper XML.  Both Blish HUD and TacO have forgiving XML parsers which will do their best to interpret the value, but not all libraries or overlays are capable of this.  For the best result, you the table below when using any of the specified characters.

| Character | Escaped Value |
|-|-|
|`<`|`&lt;`|
|`>`|`&gt;`|
|`&`|`&amp;`|
|`'`|`&apos;`|
|`"`|`&quot;`|
|New Line|`&#xA;`|