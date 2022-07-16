---
id: control-textinputbase
title: TextInputBase
---

The base of controls such as the `TextBox` or `MultilineTextBox` which accept text input from the user.

*This documentation is a WIP and probably not exhaustive.*

---

## Usage Example

`LabelBase` is an abstract class which provides base functionality for other controls.

---

## Parent Controls

- <a href="/docs/dev/controls/control-control">Control</a>

---

## Available Parameters and Arguments

**Text**
Type: *String*
The text this control will show by default
*(optional)*

**MaxLength**
Type: *String*
The text this control will show by default
*(optional)*

**MaxLength**
Type: *Int*
The maximum string length this control will accept
*(optional)*

**PlaceholderText**
Type: *String*
A placeholder text when control is empty
*(optional)*

**ForeColor**
Type: *Color*
Color of the font
*(optional)*

**Font**
Type: *BitmapFont*
The used font
*(optional)*

**Focused**
Type: *Bool*
If the control should be focused by default
*(optional)*

**SelectionStart**
Type: *Int*
Start position if preselected text
*(optional)*

**SelectionEnd**
Type: *Int*
End position if preselected text
*(optional)*

**CursorIndex**
Type: *Int*
Position of the cursor
*(optional)*

---

## Available Methods

A list of `Methods` and `EventHandlers` to hook onto.

### EventHandler

**TextChanged**
Call a method when the user typed text.

**CursorIndexChanged**
Call a method when the user changes focus to the control.

**InputFocusChanged**
Call a method when the user changes the position of the cursor.

---

## Remarks

*This documentation is a WIP and probably not exhaustive.*

