---
id: overview
title: Controls Overview
---

## Introduction

A UI for a module can be created by combining different UI elements. The UI elements in Blish HUD are called controls (e.g. Labels, Checkboxes, (Flow)Panels, Containers, StandardButtons, StandardWindows,...).

## Control Relationships

The controls are combined to form a control graph/tree via parent-child-relationships. The root of the tree is the `GameService.Graphics.SpriteScreen`. For a control to be visible on the screen, it has to be a direct child of `SpriteScreen` or a parent of the control higher up in the control tree has to be the child of `SpriteScreen`.
The `GraphicsService` recursively updates and renders all child controls down from the `GameService.Graphics.SpriteScreen`.

Here is an example of a FlowPanel control with 2 Label controls as children:

<img src="/img/docs/controls/flowPanelWith2Labels.png" />

```cs
var flowPanel1 = new FlowPanel()
{
    Parent           = GameService.Graphics.SpriteScreen,
    FlowDirection    = ControlFlowDirection.SingleTopToBottom,
    HeightSizingMode = SizingMode.AutoSize,
    WidthSizingMode  = SizingMode.AutoSize,
    BackgroundColor  = Color.Black
};

var label1 = new Label()
{
    Parent        = flowPanel1,
    Text          = "First label",
    AutoSizeWidth = true,
};

var label2 = new Label()
{
    Parent        = flowPanel1,
    Text          = "Second label",
    AutoSizeWidth = true,
};
```

## Container

A `Container` is a subtype of `Control` which can contain other controls. An example for a `Container` is the `FlowPanel` used in the example above.

The parent/child relationship can be changed by setting the `Parent` property of the control or by manipulating the list of `Children` on the `Container` using `AddChild()`, `RemoveChild()`, or `ClearChildren()`.

```cs
control1.Parent = container1;     // Set control1's parent to container1
control1.Parent = null;           // Remove control1 from the graph
// ...
container1.AddChild(control1);    // Add control1 to container1's children
container1.RemoveChild(control1); // Remove control1 from container1's children
container1.ClearChildren();       // Removes all of the children from container1.
```

## Control Size & Layout

Controls are rendered in an absolute size and location with their location relative to their parent container.

```cs
control1.Size = new Point(64, 24);
// ...
control1.Location = new Point(17, 17);
```

Instead of setting the size with absolute numbers, it can be usefull to let the controls calculate that themself. It depends on the control how this can be handled. Here are some examples:

```cs
flowPanel1.HeightSizingMode = SizingMode.AutoSize;
flowPanel1.WidthSizingMode  = SizingMode.AutoSize;
// ...
label1.AutoSizeWidth  = true;
label1.AutoSizeHeight = true;
```

## Control Visibility

Hiding and showing of a control can be controlled with the `Show()` and `Hide()` methods or the `Visible` property. This will show/hide all child controls as well. Using the above example:

```cs
flowPanel1.Hide();
flowPanel1.Show();
flowPanel1.Visible = false;
flowPanel1.Visible = true;
```