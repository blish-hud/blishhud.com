---
id: troubleshooting
title: Common Issues
---

:::info Can't find your issue or still need help?

Join our Discord and share your issues in our [#💢help](https://discord.gg/qJdUhdG) channel.

Please be sure to let us know what version of Blish HUD you are using and provide a copy of your logs. Logs can be found in the folder `Documents\Guild Wars 2\addons\blishhud\logs`.

:::

### 1. I see the Blish HUD icons on a black background

<img src="/img/troubleshooting/nvidia-post-processing.png" />

#### **Possible Solution 1**

This is usually due to post-processing effects being applied to Blish HUD by your graphics card drivers.

1. Open **NVIDIA Control Panel**.
2. In the tree view on the left side select **3D Settings > Manage 3D settings**.
3. Under the **Program Settings** tab in the main panel, select or find Blish HUD in the dropdown.
4. Ensure that all settings appled to Blish HUD are the default setting.
5. Apply the changes.

Restarting Blish HUD should remove the black background and allow it to be transparent on top of the game like it is intended.

*If using an AMD card, please check the graphics panel and ensure no post processing effects such as sharpening are being applied.*

#### **Possible Solution 2**

- Ensure you have transparency effects turned on in your Windows settings.
- Ensure you have the latest version of your graphics card drivers installed.
- Ensure you don't have other overlays such as the Discord overlay enabled.

### 2. Dragging windows creates a trail behind them

<img src="/img/troubleshooting/windows-1803.png" />

#### Old Windows 10

Please ensure you are not running Windows 10 Version 1803.  If you are, you likely need to update to a more recent version as there appear to be issues with overlays in this version.

You can check your version of Windows 10:
1. Press **Windows Key + R** to open the Run dialog.
2. Type *winver* and press **Enter**.
3. The resulting dialog will indicate the exact version of Windows you are using.

#### Nvidia or Radeon post effects

Check your AMD or Nvidia post processing effects configured to ensure that sharpening or other things are not applied to Blish HUD.  Having these post processing effects applied to Blish HUD can result in us rendering incorrectly.

### 3. Text and/or textures are blurry

This is a known issue with how we currently handle scaling the UI.  Guild Wars 2 allows you to set one of four "UI Size" in the game options which we try to account for and match.  Currently, for the highest quality results, ensure this setting is set to **Large**.  We hope to have a better solution for this in the future.

### 4. Blish HUD does not show while game is set to Fullscreen

In order for us to overlay the game, the game's resolution must be set to **Window**, **Windowed Fullscreen**, or a specific resolution.  If it is set to just **Fullscreen**, we are unable to overlay the game.

### 5. Running as administrator

When an application is run as an administrator, other applications can not interact with it unless they have also been launched as an administrator.  Some third party launchers will launch Guild Wars 2 as administrator.  If you or a launcher starts Guild Wars 2 as an administrator, you must also start Blish HUD as an administrator.

Under normal circumstances, Blish HUD does not require administrator privileges to work, so running it as an administrator is typically only needed in the above scenario.

### 6. Blish HUD doesn't show on top of Guild Wars 2

*(Check first that #5 does not apply)*

#### **Executable name**

Ensure that your Guild Wars 2 executable (where it is installed) is named one of the following:
 - Gw2-64
 - Gw2
 - KZW

<img src="/img/troubleshooting/executable-name.png" />

#### **3rd party launchers**

Some launchers can make it difficult for us to detect the game.  Use a launcher that has built in support for Blish HUD (such as [Gw2 LaunchBuddy](https://github.com/TheCheatsrichter/Gw2_Launchbuddy)).

If you still have issues or a edge case, familiarize yourself with our [launch options](/docs/user/launch-options) which can be used to manually specify the executable name we should detect as well as the Mumblelink API connection name that some launchers change.

### 7. The Module Repo is empty

If you are running Windows 7 this is an issue with the versions of TLS enabled on your system.  Consider reviewing this [Microsoft topic](https://support.microsoft.com/en-us/topic/update-to-enable-tls-1-1-and-tls-1-2-as-default-secure-protocols-in-winhttp-in-windows-c4bd73d2-31d7-761e-0178-11268bb10392) which goes into more details about the issue and potential solutions.

If you are uncomfortable or unfamiliar with the topics discussed in the above Microsoft document, reach out to us on Discord and we can provide a custom version of Blish HUD.

### 8. Settings are not saved

You you find that your settings are not saving between maps (for the pathing module) or with relaunches of Blish HUD, it is likely that your anti-virus is preventing us from writing to our settings directory.

You can check your Blish HUD logs for occurances of "Access Denied" errors to confirm this.  There is also a chance that no logs will exist if we have been blocked from writing to our logs directory.

To resolve this issue:
1. Ensure Blish HUD.exe is explicitly allowed by any anti-virus you have running (if you only have Windows Defender, we have not seen this block us before).
2. Ensure our directory under your documents (`Documents\Guild Wars 2\addons\blishhud\`) is explicitly allowed in your anti-virus software.
3. Right-click your Blish HUD.exe and go to properties.  Ensure at the bottom that the option "Unblock" is checked, if it is available (if this option is not available, you can skip it).

If the above steps do not resolve the issue, you can try utilizing [portable mode](portable-mode).

### 9. Immediate crash when Blish HUD is in the same directory as ArcDPS

When using the DirectX 11 vesrion of ArcDPS (d3d11.dll), if it is in the same directory as Blish HUD, it will attempt to inject into Blish HUD.  ArcDPS expects to be injected into Guild Wars 2, so it will cause Blish HUD to crash almost immediately upon launch.

To resolve this, please ensure that Blish HUD is placed in a different folder — not one where there is a d3d11.dll file in the same directory.

### 10. Blish HUD crashes when it is launched and no logs are written

When features such as [Window's Ransomware protection](https://docs.microsoft.com/en-us/microsoft-365/security/defender-endpoint/controlled-folders?view=o365-worldwide) are enabled (typically called Controlled Folder Access), it can block us from writing to our settings directory and cause Blish HUD to crash.  Since we can't access the settings directory, we also can't write a log file to tell you why we crashed.

The best way to check if this is causing the issue is to open "Controlled Folder Access" by searching for it in the Windows Start Menu.

<img src="/img/troubleshooting/cfa1.png" />

If the Controlled folder access toggle shows "On" as it does in the screenshot above, you will need to explicitly give access to Blish HUD.  You can do this by selecting "Allow an app through Controlled folder access" and selecting the `Blish HUD.exe` when prompted.

If this toggle shows "Off" or if Blish HUD still crashes, check to ensure you don't have an anti-virus enabled as described in troubleshooting item 8: [Settings are not saved](/docs/user/troubleshooting#8-settings-are-not-saved).

Finally, if you are still experiencing issues, you can try to enable [portable mode](/docs/user/portable-mode) which will save the settings in the current folder which is less likely to be blocked.