---
id: friendly-ui-ux
title: User-Friendly UI/UX
---

There are many ways to build your UI, but with a finite amount of screenspace available and with our users in mind, there are many things to consider to ensure your module gives your users what they need without feeling overwhelming or out of place.

To help ensure that our UI remains intuitive, consistent, and friendly to our users, we provide this UI guide.

## Mimic in-game UI/UX when reasonable

When building your UI, it is often best to mimic the in-game designs and layouts where possible.  This is not to say that the in-game designs are the most intuitive or practical, but Guild Wars 2 players will already be familiar with them and have a certain expectation of how they work.  This means:
- ✅ **DO** consider replicating an existing in-game UI element rather than inventing your own.
- ✅ **DO** consider expanding on an existing control with new features as long as those features are intuitive and discoverable (example: adding menu separators to context menus which have no in-game equivalent).
- ✅ **DO** use game-sourced textures when building custom controls to help ensure that they fit with the rest of the game and Blish HUD.
- ✅ **DO** consider getting layout inspiration from in-game panels when organizing your own views.
- ✅ **DO** try to be consistent - not only within your own module, but with other modules where common UX patterns emerge. 
- ❌ **DO NOT** create custom controls which appear like in-game controls but differ substantially in functionality. 

Please don't mimic to the point of creating user hostile UI/UX, but instead use established UI design in-game as a strong reference when building your own.  UI design extends beyond just how it looks visually as it directly impacts your users experience with your module as your UI is interacted with.  The bottom line is: use your best judgement to avoid making your users have to learn a new UI or UX while avoiding tedious pitfalls found in the existing in-game UI.

## 'Screen' Controls

Some modules provide UI elements which float within the root `Screen` container instead of within a window.  These controls can be useful for showing users information on the fly or giving them buttons to activate certain module features.  When placing controls within the root `Screen` container:
- ✅ **DO** ensure that your UI elements can be repositioned.  Users will have different UI setups and statically placed UI elements may cover their in-game UI or even other module UI elements.
- ✅ **DO** auto-hide your controls when the user is on the character select screen, loading screen, during vistas, or has the fullscreen map open if your controls are not relevant.  You can check with `GameService.GameIntegration.Gw2Instance.IsInGame && !GameService.Gw2Mumble.UI.IsMapOpen` in your update or draw calls.
- ❌ **DO NOT** block mouse input with your control unless it is a UI element intended for interaction (a button, etc.).

## Module Settings

Every module is different and some may require unique layouts to ensure their settings more intuitively managed.

**When you have few settings:**
- ✅ **DO** use the built-in SettingsView which by default will show your settings on the module page.

**When using custom settings views or windows:**
- ✅ **DO** use a custom window to show your setting in.
- ✅ **DO** show a button on the module settings panel to link to your settings so that they're easy to discover (users will look on the module page first for settings).

**In general:**
- ❌ **DO NOT** split settings up in multiple locations.  If necessary, you can link to tabs within a single settings window to keep things consolidated while still accessible from multiple locations.
- ❌ **DO NOT** create a tab in the main Blish HUD window dedicated to just your settings.

Sometimes you may have features that deserve their own settings.  If your module exposes these settings in multiple different spots it can be confusing for users to remember where those settings are.

## Should I have my own tab in the main Blish HUD window?

The main Blish HUD window allows modules to register a tab within it to display a custom view.

As this window has a finite amount of space and users do not necessarily expect for new tabs to appear in this window:
- ✅ **DO** create a tab if you don't need multiple views for the main UI component of your UI and it can effectively use the space provided to it.
- ❌ **DO NOT** create a tab in the main Blish HUD window dedicated to just your settings.  Use a settings window which can be opened from the module page instead.
- ❌ **DO NOT** create a tab that doesn't properly utilize the space.  The main Blish HUD window is large and the space should be utilized effectively.

## Should I use a `CornerIcon`?

The `CornerIcon` control is a little icon that shows in the top left of the players screen along with the Blish HUD icon and the in-game icons for the trading post, inventory, etc.

You should use a CornerIcon if you need to expose features within a menu or on-click that your users would likely need to access *every session*.  If it is unlikely that the contents of the menu would be used less than every session, please consider providing access to that UI in a different way to avoid too many icons at the top of the screen.

Examples of scenarios which ***should not*** have a `CornerIcon`:
- ❌ A menu with a shortcut to a settings window for a module that needs infrequent setting changes.
- ❌ A button that toggles the module's main feature on and off if this would be an infrequent task.
- ❌ A button that opens a tab within the main Blish HUD window (as it is already accessible through the Blish HUD icon).

Examples of scenarios which ***would likely benefit*** from having a `CornerIcon`:
- ✅ A menu with regularly accessed options or features that would otherwise be annoying to access through a dedicated window.

If you already have a `CornerIcon` for an acceptable scenario, there is nothing wrong with expanding the menu to include shortcuts to your settings, etc.  In combination it is expected.

### Additional Guidance
- Avoid adding right-click menus on your `CornerIcon`.  We have found these to be very unintuitive and are working to remove them where we can.  Instead, use a left-click menu.

