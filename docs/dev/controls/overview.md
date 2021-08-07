---
id: overview
title: Controls Overview
---

## Control Relationships

All visible controls will have a parent `Container`.  A `Container` is a subtype of `Control` which can contain other controls.

The root of the control graph is the `SpriteScreen`.  The `GraphicsService` recursively updates and renders all child controls down from the `GameService.Graphics.SpriteScreen`.

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