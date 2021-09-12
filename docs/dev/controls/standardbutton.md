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

## Available Parameters and Arguments

**Size**
Type: *Point*
Size of the control *(optional)*

**Location**
Type: *Point*
Position of the control within parent Panel

**Parent**
Type: *Panel*
Parent panel

**Text**
Type: *String*
The text shown on the control.

**Icon**
Type: *Texture2D*
An icon to show on the control. For best results, the Icon should be 16x16.  *(optional)*

---

## Available Methods

A list of `Methods` and `EventHandlers` to hook onto.

**Click**
Call a method on click.

---

## Remarks

*This documentation is a WIP and probably not exhaustive.*

