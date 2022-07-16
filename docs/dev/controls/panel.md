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

## Parent Controls

- <a href="/docs/dev/controls/control-control">Control</a>
- <a href="/docs/dev/controls/control-container">Container</a>

---

## Available Parameters and Arguments

**Title**
Type: *String*
The text this control will show on the title bar by default *(optional)*

**ShowBorder**
Type: *Bool*
Toggle a visible border and title area *(optional)*

**CanScroll**
Type: *Bool*
Enable a scrollbar if content is overflowing.

**BackgroundTexture**
Type: *AsyncTexture2D*
Set a background texture.

**ShowTint**
Type: *Bool*
Apply tint to the control.

**CanCollapse**
Type: *Bool*
Make the control collapsible.

**Collapsed**
Type: *Bool*
If `CanCollapse` is set, this will set the initial state of the control.

---

## Available Methods

A list of `Methods` and `EventHandlers` to hook onto.

**Expand**
If `CanCollapse` is set, this will expand the control.

**Collapse**
If `CanCollapse` is set, this will collapse the control.

**ToggleAccordionState**
If `CanCollapse` is set, this will toggle between collapsed and expanded state.

---

## Remarks

*This documentation is a WIP and probably not exhaustive.*

