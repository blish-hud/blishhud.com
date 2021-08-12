---
id: control-image
title: Image
---

The `Image` control adds a image asset to your layout.

*This documentation is a WIP and probably not exhaustive.*

---

## Usage Example

This example shows how to use the `Image` control.

```cs
var exampleImage = new Image(Texture2D Icon)
{
      Size = new Point(40, 40),
      Location = new Point(0, 0),
      Parent = parentPanel
};
```

---

## Available Parameters and Arguments

**Size**
Type: *Point*
Size of the image *(optional)*

**Location**
Type: *Point*
Position of the image within parent Panel

**Parent**
Type: *Panel*
Parent Panel

**Tint**
Type: *Color*
Tint the image *(optional)*

**BasicTooltipText**
Type: *String*
Display a tooltip text on mouse hover *(optional)*

---

## Available Methods

A list of `Methods` and `EventHandlers` to hook onto.

**Click**
Call a method when clicking.

---

## Remarks

*This documentation is a WIP and probably not exhaustive.*

