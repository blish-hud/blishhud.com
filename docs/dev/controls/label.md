---
id: control-label
title: Label
---

The `Label` control is a content box to display text.

*This documentation is a WIP and probably not exhaustive.*

---

## Usage Example

This example shows how to use the `Label` control with multiline text.

<img src="/img/docs/controls/label.png" />

```cs
var exampleLabel = new Label()
{
      Text = "I'm just a Label\nMultiline works too!",
      Size = new Point(300, 100),
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
The text this control should show.

**Font**
Type: *BitmapFont*
The font the `Text` will be rendered in.
*(optional)*

**TextColor**
Type: *Color*
The color of the `Text`
*(optional)*

**HorizontalAlignment**
Type: *HorizontalAlignment*
The horizontal alignment of the text within the control.
Default: `Left`

**VerticalAlignment**
Type: *VerticalAlignment*
The vertical alignment of the text within the control.
Default: `Top`

**WrapText**
Type: *Bool*
Should text be wrapped when reaching the end of the control
Default: `true`

**ShowShadow**
Type: *Bool*
If enabled, a 1px offset shadow will be applied behind the rendered text.
Default: `true`

**StrokeText**
Type: *Bool*
If enabled, a stroke effect will be applied to the text to make it more visible.
`ShadowColor` will set the color of the stroke.

**ShadowColor**
Type: *Color*
If either `ShowShadow` or `StrokeText` is enabled, they will be drawn in this color.
*(optional)*

**AutoSizeWidth**
Type: *Bool*
If enabled, the `Control.Width` of this control will change to match the width of the text.

**AutoSizeHeight**
Type: *Bool*
If enabled, the `Control.Height` of this control will change to match the height of the text.

---

## Available Methods

A list of `Methods` and `EventHandlers` to hook onto.

see parent controls

---

## Remarks

*This documentation is a WIP and probably not exhaustive.*

