---
id: control-container
title: Container
---

The `Container` control is the base for other controls.

*This documentation is a WIP and probably not exhaustive.*

---

## Usage Example

`Container` is an abstract class which provides base functionality for other controls.

---

## Parent Controls

- <a href="/docs/dev/controls/control-control">Control</a>

---

## Available Parameters and Arguments

**WidthSizingMode**
Type: *SizingMode*
Determines how the width of this container should be handled.
*(optional)*

**HeightSizingMode**
Type: *SizingMode*
Determines how the height of this container should be handled.
*(optional)*

**AutoSizePadding**
Type: *Point*
If `HeightSizingMode` or `WidthSizingMode` is set to `SizingMode.AutoSize`,
then `AutoSizePadding` is added to the size.
*(optional)*

---

## Available Methods

A list of `Methods` and `EventHandlers` to hook onto.

### Methods

**AddChild**
Adds a child to the control.

**RemoveChild**
Removes a child from the control.

**ClearChildren**
Removes all children from the control.

### EventHandler

**ChildAdded**

**ChildRemoved**

**ContentResized**

---

## Remarks

*This documentation is a WIP and probably not exhaustive.*

