---
id: tabbedwindow2
title: TabbedWindow2
---

The **TabbedWindow2** is a control meant to replicate the standard Guild Wars 2 windows with tabs.  **TabbedWindow2**s are much like **[StandardWindows](standardwindow)** except **TabbedWindow2**s have tabs.

:::caution

There exists another window control, **TabbedWindow** which is **deprecated** and will be removed in a future version - do not use **TabbedWindow**.  Use this control, **TabbedWindow2**, instead.

:::

|Implements| |
|-|-|
|Container|This control is a container meaning it can contain other controls and containers.|
|IViewContainer|This control can act as a view container allowing you to show it with a view specified.|
|IWindow|This control acts as a window meaning its ZIndex will update to bring it to the front of other windows when interacted with.|

Windows require a background and their size and content regions will be subsets of the background's bounds.

When creating a new **TabbedWindow2**, you must provide:

|Parameter|Description|
|-|-|
|background|The texture to be used as the background of the window.|
|windowRegion|The bounds which represent the "rigid" portion of the window - just inside of the softer outer border.|
|contentRegion|The bounds within the space that should represent the `ContentRegion`.  This is where the view / child controls will be displayed.|

<img src="/img/docs/controls/window/rawBackgroundExample2.png" />

In this example, we've used window background [asset 155997](https://assets.gw2dat.com/155997.png).

```cs
var exampleWindow = new TabbedWindow2(
      Content.GetTexture("controls/window/155997"), // The background texture of the window.
      new Rectangle(24, 30, 545, 630),              // The windowRegion
      new Rectangle(82, 30, 467, 600)               // The contentRegion
);
```

:::info Accounting for the sidebar

When using a **TabbedWindow2**, a black sidebar (which has the tabs on it) will be shown on the left side of the window.  This will cut into your `windowRegion`.  Account for this by including at least **46** of space between the left side of your `windowRegion` and your `contentRegion`.

:::

---

## Usage Example

```cs
var exampleWindow = new TabbedWindow2(Content.GetTexture("controls/window/155985"), new Rectangle(24, 30, 545, 630), new Rectangle(82, 30, 467, 600)) {
      Parent        = Graphics.SpriteScreen,
      Title         = "TabbedWindow",
      Emblem        = Content.GetTexture("controls/window/156022"),
      Subtitle      = "Example Subtitle",
      SavesPosition = true,
      Id            = $"{nameof(ExampleClass)}_ExampleModule_38d37290-b5f9-447d-97ea-45b0b50e5f56"
};

exampleWindow.Tabs.Add(new Tab(Content.GetTexture("155052"), () => new OverlaySettingsView(), "Settings"));
exampleWindow.Tabs.Add(new Tab(Content.GetTexture("155052"), () => new AboutView(), "About Blish HUD"));
```

<img src="/img/docs/controls/window/liveBackgroundExample2.png" />

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
|**Tabs**|TabCollection|A collection which represents all of the windows tabs.  You can add remove tabs by call `Add` and `Remove` on this property.|
|**SelectedTab**|Tab|The tab instance that is currently selected.  If there are no tabs (and thus none is selected, this value will be null).|

---

## Methods

|Method|Description|
|-|-|
|**BringWindowToFront()**|Brings the window to the front of all other windows.|
|**Show()**|Shows the window.|
|**ToggleWindow()**|Shows the window if it is hidden. Hides the window if it is currently showing.|