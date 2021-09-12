---
id: textbox
title: Textbox
---

The `Textbox` control provides the user with an inputfield to display or edit unformatted text.

*This documentation is a WIP and probably not exhaustive.*

---

## Usage Example

This example shows how to use the `Textbox` control and set a placeholder text.

<img src="/img/docs/controls/textbox.png" />

```cs
var exampleTextBox = new Textbox()
{
      PlaceholderText = "Enter name here ...",
      Size = new Point(358, 43),
      Font = GameService.Content.DefaultFont16,
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
Position of the control within parent panel

**Parent**
Type: *Panel*
Parent Panel

**Text**
Type: *String*
The text this control will show by default *(optional)*

**PlaceholderText**
Type: *String*
A placeholder text when control is empty *(optional)*

**Font**
Type: *BitmapFont*
The used font *(optional)*

**ForeColor**
Type: *Color*
Color of the font *(optional)*

**Focused**
Type: *Bool*
If the control should be focused by default *(optional)*

**SelectionStart**
Type: *Int*
Start position if preselected text *(optional)*

**SelectionEnd**
Type: *Int*
End position if preselected text *(optional)*

**CursorIndex**
Type: *Int*
Position of the cursor *(optional)*

---

## Available Methods

A list of `Methods` and `EventHandlers` to hook onto.

**TextChanged**
Call a method when the user typed text.

**InputFocusChanged**
Call a method when the user changes focus to the control.

**CursorIndexChanged**
Call a method when the user changes the position of the cursor.

**EnterPressed**
Call a method when the `Enter` key is pressed by the user.

---

## Remarks

*This documentation is a WIP and probably not exhaustive.*

