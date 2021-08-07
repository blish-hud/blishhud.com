---
id: colorpicker
title: ColorPicker & ColorBox
---

The `ColorPicker` control is meant to replicate the color selection controls found under wardrobe dying, guild emblem designing, etc.  The `ColorPicker` control pairs nicely with the `ColorBox` control.

## Standard Usage

<img src="/img/docs/controls/colorpicker-1.png" />

```cs
var exampleColorBox = new ColorBox() {
    // ...
};

var exampleColorPicker = new ColorPicker() {
    // ...
    AssociatedColorBox = exampleColorBox
};
```

A `ColorPicker` with `AssociatedColorBox` will set the assigned `ColorBox`'s color to whatever the picker selects.

### Using multiple ColorBox controls

If you have multiple `ColorBox` controls that you would like to use with a single `ColorPicker`, reassign the `AssociatedColorBox` on the `ColorPicker` to the `ColorBox` last clicked.

```cs
colorBox1.Click += UpdateActiveColorBox;
colorBox2.Click += UpdateActiveColorBox;
colorBox3.Click += UpdateActiveColorBox;

// ...

private void UpdateActiveColorBox(object sender, MouseEventArgs e) {
    exampleColorPicker.AssociatedColorBox = (ColorBox) sender;
}
```

### Adding colors from the API

Colors can be retrieved from the Guild Wars 2 Web API:

```cs
var colors = await Gw2ApiManager.Gw2ApiClient.V2.Colors.AllAsync();
```

And added to the picker:

```cs
foreach (var color in colors) {
    exampleColorPicker.Colors.Add(color);
}
```