---
id: detailsbutton
title: DetailsButton
---

The `DetailsButton` is meant to replicate the controls found under the Achievements panel in the Hero window.  The details button has a number of customizations making it very flexible.

A `DetailsButton` is ideal when you wish to represent many items which may have an icon, related percentage, toggle state, and other actionable items.  The control is flexible allowing you to pick and choose which of these you would like to include with the control.

## With Fill and Toggle Button

<img src="/img/docs/controls/detailsbutton-1.png" />

```cs
var exampleDetailsButton = new DetailsButton() {
      // ...
      Text             = "Storms of Winter",
      Icon             = GameService.Content.GetRenderServiceTexture("0AAD072E707AE02AE1B9984FD8BCE1A113E759B7/2221432"),
      MaxFill          = 12,
      CurrentFill      = 7,
      ShowFillFraction = true,
      ShowToggleButton = true,
      FillColor        = Color.LightBlue,
};

bttnA.Parent = exampleDetailsButton;
bttnB.Parent = exampleDetailsButton;
bttnC.Parent = exampleDetailsButton;
```

### Fill Review

If a `MaxFill` and `CurrentFill` are specified, the left-side square will show a fill (with the color specified by `FilleColor` filling the fractional percent `CurrentFille / MaxFill`).

### Children and Toggle Button Review

`DetailsButton` is a `Container` and can contain child controls.  Child controls will be placed in the bottom rectangle  space to the right of the icon square.

If `ShowToggleButton` is enabled, the last control made a child of the container will be shown right-aligned with a dark gradient behind it.

## With Small Icon and IconDetails

<img src="/img/docs/controls/detailsbutton-2.png" />

```cs
var exampleDetailsButton = new DetailsButton() {
      // ...
      Text        = "Storms of Winter",
      Icon        = GameService.Content.GetRenderServiceTexture("0AAD072E707AE02AE1B9984FD8BCE1A113E759B7/2221432"),
      IconDetails = "Complete!",
      IconSize    = DetailsIconSize.Small
};

bttnA.Parent = exampleDetailsButton;
bttnB.Parent = exampleDetailsButton;
bttnC.Parent = exampleDetailsButton;
```

### IconDetails Review

If `ShowFillFraction` is not enabled, then `IconDetails` will be displayed at the bottom of the icon square.

### IconSize Review

`IconSize` can be set to either `DetailsIconSize.Large` (the default and in-game style) or `DetailsIconSize.Small`.