---
id: control-control
title: Control
---

The `Control` control is the base for all other controls.

*This documentation is a WIP and probably not exhaustive.*

---

## Usage Example

`Control` is an abstract class which provides base functionality for all other controls.

---

## Available Parameters and Arguments

**Size**
Type: *Point*
The size of the control. Both the X and Y component must be greater than 0.
*(optional)*

**Location**
Type: *Point*
The position of the control within its `Parent`.

**Parent**
Type: *Panel*
Parent control

**ContextMenuStrip**
Type: *ContextMenuStrip*
If provided, the menu will display when the control is right-clicked on.
*(optional)*

**Tooltip**
Type: *Tooltip*
If provided, the Tooltip will display when the mouse is over the control.
Do not use this if you are already using `BasicTooltipText`.
*(optional)*

**BasicTooltipText**
Type: *String*
If provided, a tooltip will be shown with the provided text when the mouse is over the control.
Do not use this if you are already using `Tooltip`.
*(optional)*

**Opacity**
Type: *Float*
Set an opacity level for the control.
*(optional)*

**Visible**
Type: *Bool*
Toggle visibility of the control.
*(optional)*

**Enabled**
Type: *Bool*
Toggle control.
*(optional)*

**Padding**
Type: *Thickness*
Set the control padding.
*(optional)*

**BackgroundColor**
Type: *Color*
Set the background color of the control.
*(optional)*

---

## Available Methods

A list of `Methods` and `EventHandlers` to hook onto.

*This documentation is a WIP and probably not exhaustive.*

---

## Remarks

*This documentation is a WIP and probably not exhaustive.*

