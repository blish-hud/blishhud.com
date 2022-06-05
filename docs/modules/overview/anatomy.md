---
id: anatomy
title: Anatomy of a Module
---

Blish HUD module classes are instanced when the module is enabled by the user.  To understand what is made available to you in this class, we'll go through each part.

### The Logger

The logger is the first line of most modules and provides your module with a logger instance.  You can create a logger instance this same way within any of your classes as you'd like.

```cpp
private static readonly Logger Logger = Logger.GetLogger<YourModule>();
```

### Module Parameters

Your module has module parameters passed to it when instanced to provide module specific utility (assigned to the module's `ModuleParameters` property).  These currently are:
- `SettingsManager` - Used to define your settings.
- `ContentsManager` - Used to load data from your ref directory that was bundled with the module.
- `DirectoriesManager` - Used to access the directories listed in your manifest.
- `Gw2ApiManager` - Used to make, potentially, authenticated calls to the Guild Wars 2 web API.

### The Constructor

The constructor and its associated `ImportingConstructor` attribute are how Blish HUD identifies the correct class to instance when the module is enabled.  As Blish HUD doesn't use any dependency injection, you may find it convenient to assign `this` to a static Instance variable on the module.

```cpp
[ImportingConstructor]
public YourModule([Import("ModuleParameters")] ModuleParameters moduleParameters) : base(moduleParameters) {
    /* ... */
}
```

:::warning
This call blocks and often runs before other portions of Blish HUD are ready!  Do not place code intended for loading anything within your module here.  You should seldom, if ever, make any calls beyond the basic static Instance assignment here.
:::

### Define Your Settings

Use this opportunity to define any settings your module may need (see our [guide on settings](/docs/modules/guides/settings)).

When defining your settings:
- ✅ **DO** use a dedicated settings class if your module has enough settings to avoid managing them all in your module class.
- ✅ **DO** use localized strings to help ensure that users can understand your settings if they have Blish HUD set to a different language.
- ❌ **DO NOT** do anything other than define settings within this method call.  This call blocks and should not be making calls to outside resources or performing resource intensive tasks.
- ❌ **DO NOT** change the data types of your settings once defined.  Doing so can lose settings for those loading them.  Either migrate the settings on launch or use a new setting name going forward.

It is not required that you define all settings at launch.  Settings can be defined or recalled at any time within your module.

```cpp
protected override void DefineSettings(SettingCollection settings) {
    _moduleSettings = new ModuleSettings(settings);
}
```

### Display Your Settings

By default, settings defined with proper display names will automatically be displayed by our SettingsView renderers.  This default implementation provides automatic setting controls to be generated for you on the module page of Blish HUD fully wired.

For those that wish to provide a more fine grained settings view or redirect settings to a window, a custom view can be provided.

```cpp
public override IView GetSettingsView() {
    return new SettingsHintView((_settingsWindow.Show, this.PackInitiator));
}
```

If this function is not overridden, then the built-in settings display will be used instead.

### Load Your Module

Your module is given the opportunity to load async when it is first enabled.  While loading, your module will indicate as such on its module page.  You are encouraged to load resources such as textures, making web requests, etc. that you would need later within your module from within this call to avoid delays due to loading those resources later.

```cpp
protected override async Task LoadAsync() {
    await LoadTheThings();
}
```

### Update Your Module

Your module will receive a call to `Update` every frame prior to rendering.  It is important that you keep any processing within this loop to an absolute minimum wherever possible.  Blish HUD's update and rendering are locked together.  That is to say that render calls can not occur until update calls complete.

The calls made in update block other modules and the rendering calls so if you do have long running processes, consider splitting them onto their own thread or use the provided `gameTime` parameter to ensure your calculations run only sometimes instead of every frame.

```cpp
protected override void Update(GameTime gameTime) {
    // Do something
}
```

### Unload Your Module

Cleaning up after yourself is a critical step to being a "module citizen".  Ensure that all static references are cleaned up, UI elements and textures are properly disposed of, etc.

Your module has the potential to be disabled and enabled many times per session as part of user behavior and internal Blish HUD processes (such as those related to automatic updates, etc).  To avoid memory leaks or other unintended behaviors, ensure your module has done its best to undo everything it did when it was enabled.

```cpp
protected override void Unload() {
    this.PackInitiator?.Unload();
    _pathingIcon?.Dispose();
    _settingsWindow?.Dispose();

    Instance = null;
}
```