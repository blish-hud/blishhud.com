---
id: standardwindow
title: StandardWindow
---

The **StandardWindow** is a control meant to replicate the standard Guild Wars 2 windows.

|Implements| |
|-|-|
|Container|This control is a container meaning it can contain other controls and containers.|
|IViewContainer|This control can act as a view container allowing you to show it with a view specified.|
|IWindow|This control acts as a window meaning its ZIndex will update to bring it to the front of other windows when interacted with.|

Windows require a background and their size and content regions will be subsets of the background's bounds.

When creating a new **StandardWindow**, you must provide:

|Parameter|Description|
|-|-|
|background|The texture to be used as the background of the window.|
|windowRegion|The bounds which represent the "rigid" portion of the window - just inside of the softer outer border.|
|contentRegion|The bounds within the space that should represent the `ContentRegion`.  This is where the view / child controls will be displayed.|

<img src="/img/docs/controls/window/rawBackgroundExample.png" />

In this example, we've used window background [asset 155985](https://assets.gw2dat.com/155985.png).

```cs
var exampleWindow = new StandardWindow(
      Content.GetTexture("controls/window/155985"), // The background texture of the window.
      new Rectangle(40, 26, 913, 691),              // The windowRegion
      new Rectangle(70, 71, 839, 605)               // The contentRegion
);
```

---

## Usage Example

```cs
var exampleWindow = new StandardWindow(Content.GetTexture("controls/window/155985"), new Rectangle(40, 26, 913, 691), new Rectangle(70, 71, 839, 605)) {
      Parent        = Graphics.SpriteScreen,
      Title         = "StandardWindow",
      Emblem        = Content.GetTexture("controls/window/156022"),
      Subtitle      = "Example Subtitle",
      SavesPosition = true,
      Id            = $"{nameof(ExampleClass)}_ExampleModule_38d37290-b5f9-447d-97ea-45b0b50e5f56"
};

exampleWindow.Show(new OverlaySettingsView());
```

<img src="/img/docs/controls/window/liveBackgroundExample.png" />

---

## Properties
|Property|Type|Description|
|-|-|-|
|**Dragging**|bool|Indicates if the window is actively being dragged.|
|**Emblem**|Texture2D|The emblem icon shown in the top left of the window.|
|**Id**|string|A unique id to identify the window. Used with `SavesPosition` as a unique identifier to remember where the window is positioned.|
|**SavesPosition**|bool|If true, the window will remember its position between Blish HUD sessions. Requires that `Id` be set.|
|**Subtitle**|string|The text shown to the right of the title in the title bar. This text is smaller and is normally used to show the current tab name and/or hotkey used to open the window.|
|**Title**|string|The text shown at the top of the window.|
|**TopMost**|bool|If this window will show on top of all other windows, regardless of which one had focus last.|

---

## Methods

|Method|Description|
|-|-|
|**BringWindowToFront()**|Brings the window to the front of all other windows.|
|**Show()**|Shows the window.|
|**Show(IView view)**|Shows the window with the provided view.|
|**ToggleWindow()**|Shows the window if it is hidden. Hides the window if it is currently showing.|
|**ToggleWindow(IView view)**|Shows the window with the provided view if it is hidden.  Hides the window if it is currently showing.|