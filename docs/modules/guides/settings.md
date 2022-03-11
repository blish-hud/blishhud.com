---
id: settings
title: Settings
---

## Overview

Settings are managed by the Settings Service (`GameService.Settings`) and are saved to `settings.json`.  Settings are manged with the `Settings.SettingEntry<T>` class and are contained within a `Settings.SettingCollection`.  `SettingCollection` supports containing other `SettingCollection` allowing you to better organize your settings.

All types are technically supported as long as they are serializable.  The following types will, however, provide the best experience:
- `bool`
- `float`
- `int`
- `string`
- Any enum

## Defining Settings

Settings can be defined at any time.  Once defined, they are kept in `settings.json` if their value is different from the defined default.

The best time to define module settings is in the `DefineSettings` method.  The `settings` parameter is the root `SettingCollection` associated with your module.  You can add as many settings and collections as you would like within this collection.

```cs
protected override void DefineSettings(SettingCollection settings) {
	_settingOnlyShowAtHighSpeeds = settings.DefineSetting("OnlyShowAtHighSpeeds", false, () => "Only Show at High Speeds", () => "Only show the speedometer if you're going at least 1/4 the max speed.");
	_settingShowSpeedNumber      = settings.DefineSetting("ShowSpeedNumber",      false, () => "Show Speed Value",         () => "Shows the speed (in approx. inches per second) above the speedometer.");

	_appearanceSettings      = settings.AddSubCollection("Appearance", true);
    _settingShowWithSparkles = _appearanceSettings.DefineSetting("ShowWithSparkles", true, () => "Show Sparkles", () => "If enabled, sparkles will be shown on the speedometer.");
    _settingSparkleCount     = _appearanceSettings.DefineSetting("SparkleCount",     5,    () => "Sparkle Count", () => "The number of sparkles to show on the speedometer if 'Show Sparkles' is enabled.");

    _settingSparkleCount.SetRange(1, 10);
}
```

##### `DefineSettings(string entryKey, T defaultValue, Func<string> displayNameFunc = null, Func<string> descriptionFunc = null)`

- **entryKey** is the unique name of the setting within the collection.  Each setting within a `SettingCollection` must have a unique `entryKey`.
- **defaultValue** is the default or initial value of the setting.
- **displayNameFunc** is the friendly display name used when the setting is rendered within the UI.  It is provided as a function which returns a string to ensure it is localization friendly.
- **descriptionFunc** is the setting description which is shown when the mouse hovers over a rendered setting within the UI.  It is provided as a function which returns a string to ensure it is localization friendly.

:::tip

For internal settings managed manually by your module, you do not need to define `displayNameFunc` or `descriptionFunc` as they are only used when displayed within the UI by a `SettingsView`.

:::

##### `AddSubCollection(string collectionKey, bool renderInUi)`

- **collectionKey** is the unique name of the new sub collection within the collection.  No different than the `entryKey` when defining settings.
- **renderInUi** if `true`, the subcollection will automatically render itself when a parent collection is rendered.  If `false`, the subcollection will be ignored if the parent collection is rendered to the UI.

### Compliant Settings

Some settings, in context, need to be limited in some way when displayed in the UI.

#### SetRange

`int` and `float` setting entries can set the allowed range for the value using `SetRange(minValue, maxValue);`.  When the setting is rendered, the TrackBar control which allows changing the value will be limited to the range you've set with `SetRange`.

#### SetDisabled

Settings that are automatically rendered can have their associated control disabled in the UI using `SetDisabled(true);`.

#### SetValidation

Allows you to have a function validate new values assigned via the UI before they're actually applied to the setting.  If the validation function returns false on the validation, then the new value is discarded and the previous state is restored and the setting is left unchanged.

A message can also be included if the value is invalid which, while not currently implemented, will be displayed next to the setting to indicate the issue with the value that made it invalid.

#### SetIncluded / SetExcluded

Allows you to limit the list of enums made available to a setting using `SetIncluded(Enum1.Value1, Enum1.Value2, ...);`.

---

## Rendering Settings

Supported setting types (listed below) can be automatically rendered to a view.  To do this, pass a `SettingCollection` in the constructor of a `SettingsView`.

```cs
var settingPanel = new ViewContainer() {
    Size   = new Point(200, 400),
    Parent = ...
};

var settingsView = new SettingsView(this.Model.State.Settings);

settingPanel.Show(settingsView);
```

## 'First Class' Types

Only some types support automatically generating controls to manage the setting.  For instance, a bool setting can be automatically rendered to a checkbox control.

### bool

```cs
setting.DefineSetting("MinimizeToTray", true, () => "Minimize to tray when Guild Wars 2 Closes.", () => "...");
```

![bool setting entry](/img/docs/guide/setting-bool.png)

### float, int

```cs
setting.DefineSetting("CompassSize", 3, () => "Compass Size", () => "...");
```

![numeric setting entry](/img/docs/guide/setting-numeric.png)

### enum

```cs
setting.DefineSetting("Language", Language.English, () => "Application & API Language", () => "...")
```

![enum setting entry](/img/docs/guide/setting-enum.png)