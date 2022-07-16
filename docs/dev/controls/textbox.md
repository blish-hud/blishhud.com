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

## Parent Controls

- <a href="/docs/dev/controls/control-control">Control</a>
- <a href="/docs/dev/controls/control-textinputbase">TextInputBase</a>

---

## Available Parameters and Arguments

see parent controls

---

## Available Methods

A list of `Methods` and `EventHandlers` to hook onto.

### EventHandler

**EnterPressed**
Call a method when the `Enter` key is pressed by the user.

---

## Remarks

*This documentation is a WIP and probably not exhaustive.*

