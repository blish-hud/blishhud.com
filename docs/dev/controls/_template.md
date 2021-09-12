---
id: controltemplate
title: ControlTemplate
---

The `ControlTemplate` control is meant as a template for all other control pages to be loosly based upon. The control defaults to a size of `64x64` but can be resized to whatever is needed. You can use a mix of `markdown` and `html` in this document.

---

## Usage Example

This should be a short description of what the controll looks like with a snipped of `code` and preferably an `image` to visualize it.
Images can be inserted with the appropriate `html` tag and should have the path set to `/img/docs/controls/`. Their image file can then be placed in `\static\img\docs\controls` in this repository.

<img src="/img/docs/controls/loadingspinner.gif" />

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
```

If there are variations of the control available feel free to expand this section.

---

## Available Parameters and Arguments

Describe here what parameters are available for this `Control`.

**Text**
Type: *String*
The text this button will show

**Icon**
Type: *Texture2D*
The icon shown

**MaxFill**
Type: *Int*
The points needed to fully fill the progress bar

[...]

---

## Available Methods

A list of `Methods` and `EventHandlers` to hook onto.

**Click**
```cs
exampleDetailsButton.Click += delegade { MyCustomClickMethod(); }
```
The button will call the specified Method when the user clicks with the mouse on it.

[...]

---

## Remarks

Additional information for the module authors that is not covered by the sections above.

