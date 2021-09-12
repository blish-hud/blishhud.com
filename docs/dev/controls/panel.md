---
id: panel
title: Panel
---

The `Panel` control provides content box to seperate and order your layout.

*This documentation is a WIP and probably not exhaustive.*

---

## Usage Example

This example shows how to use the `Panel` control and set a placeholder text.

<img src="/img/docs/controls/panel.png" />

```cs
var examplePanel = new Panel()
{
      ShowBorder = true,
      Title = "Panel Title",
      Size = new Point(400, 200),
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
Position of the control within parent control

**Parent**
Type: *Panel*
Parent control

**Title**
Type: *String*
The text this control will show on the title bar by default *(optional)*

**ShowBorder**
Type: *Bool*
Toggle a visible border and title area *(optional)*

---

## Available Methods

A list of `Methods` and `EventHandlers` to hook onto.

**Click**
Call a method when the user clicked on the button.

---

## Remarks

*This documentation is a WIP and probably not exhaustive.*

