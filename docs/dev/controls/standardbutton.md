---
id: standardbutton
title: StandardButton
---

The `StandardButton` control provides a button.

*This documentation is a WIP and probably not exhaustive.*

---

## Usage Example

This example shows how to use the `StandardButton` control.

<img src="/img/docs/controls/button.png" />

```cs
var exampleButton = new StandardButton()
{
      Text = "Click Me!",
      Size = new Point(110, 30),
      Location = new Point(0, 0),
      Parent = parentPanel,
};
```

---

## Parent Controls

- <a href="/docs/dev/controls/control-control">Control</a>
- <a href="/docs/dev/controls/control-labelbase">LabelBase</a>

---

## Available Parameters and Arguments

**Text**
Type: *String*
The text shown on the control.

**Icon**
Type: *Texture2D*
An icon to show on the control. For best results, the `Icon` should be 16x16.  *(optional)*

**ResizeIcon**
Type: *Bool*
If true, the `Icon` texture will be resized to 16x16.

---

## Available Methods

A list of `Methods` and `EventHandlers` to hook onto.

see parent controls

---

## Remarks

*This documentation is a WIP and probably not exhaustive.*

