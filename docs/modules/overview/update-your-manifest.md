---
id: update-your-manifest
title: Update Your Manifest
---

## Overview

Your manifest (manifest.json) provides important metadata to Blish HUD prior to your module loading.  The manifest specification is kept in our [manifest.json repository](https://github.com/blish-hud/manifest.json/blob/master/manifest-v1.md) and is subject to revisions in the future.

## Manifest Format (v1)
An example `manifest.json` with all attributes filled can be found [here](https://github.com/blish-hud/manifest.json/blob/master/v1/manifest.json).


### Required Attributes

#### Name
The display name of the package.

```json
{
    "name": "Marker Deleter"
}
```

#### Version
The version of the package.  Should be [Semanticly Versioned](https://semver.org/).  Other packages can require your package as a dependency using version ranges ([similar to npm](https://docs.npmjs.com/files/package.json#dependencies)).

```json
{
    "version": "1.2.3"
}
```

#### Namespace
This is the primary identifier - it is a unique name for the package.  Do not change this value once your package has been published.  It is used internally within Blish HUD for Settings and more.  Modules should not be within the `bh` namespace unless they have been contributed and approved to the base community packages. The manifest.json namespace and the C# namespace you use in your .cs files are unrelated. They can be the same but do not have to be. 

```json
{
    "namespace": "jdoe.mypackages.markerdeleter"
}
```

:::info

When choosing your namespace, it is important to keep it unique from other module developers.  A good namespace will be prefixed with your own unique handle, for example, `acme.supermodule` and `acme.awesomemodule` - both of which start with `acme`.  You may wish to use your online handle.

In any case, it is expected that the namespace will be prefixed with something.

:::

#### Package
The name of your compiled module with ".dll" at the end.

```json
{
    "package": "Marker Deleter.dll"
}
```

:::info

If you experience issues getting the package value correct, you can open your bhm with an application such as 7-Zip to ensure that the DLL within it matches the package attribute you've specified.

:::

#### Manifest Version
The version of manifest used.  This is currently 1.

```json
{
    "manifest_version": 1
}
```

### Recommended Attributes

#### Description
A description of the module.

```json
{
    "description": "This module allows you to select any marker and delete it."
}
```


#### Dependencies
The dependencies required for your module.  Our implementation is [similar to npm](https://docs.npmjs.com/files/package.json#dependencies).  We use [semver.net](https://github.com/adamreeve/semver.net) to verify dependency versions.

A dependency on `bh.blishhud` indicates the versions of Blish HUD the module supports.

```json
{
    "dependencies": {
        "bh.blishhud" : "~0.7.1",
        "bh.general.markersandpaths" : "~1.2.3",
    }
}
```

:::info

It is important to specify an accurate `bh.blishhud` dependency with version range to ensure that the proper versions of your module are displayed to users when using the repository.

:::

#### URL
A url that can be used to link to the project or a link to more details instructions.

```json
{
    "url": "https://github.com/blish-hud/manifest.json"
}
```

*This value is currently not used.*

#### Author
The author of the module.  If there are multiple authors, use the `contributors` attribute, instead.

```json
{
    "author": {
        "name":     "Freesnöw",                   // required
        "username": "LandersXanders.1235",        // optional
        "url":      "https://github.com/dlamkins" // optional
    }
}
```

#### Contributors
If provided, it will be used instead of the `author` attribute (if `author` is provided, it will be ignored).  The attributes for each contributor match the structure of the `author` attribute.

```json
{
    "contributors": [
        {
            "name":     "Freesnöw",
            "username": "LandersXanders.1235",
            "url":      "https://github.com/dlamkins"
        },
        {
            "name":     "jdoe",
            "username": "jdoe.1234"
        }
    ]
}
```

### Optional Attributes

#### Directories
A list of directory names that are used by the module.  These directories will be registered by the `FileService` and a button to open the directory directly will be shown in the module settings.

```json
{
    "directories": ["markers"]
}
```

#### Enabled Without GW2
Allows the module to continue to run when GW2 is not running and Blish HUD is still running in the tray.  Do not set to true unless your module requires this.

```json
{
    "enabled_without_gw2": false
}
```

*This value is currently not used.*

#### API Permissions
Gives the module permission to access the specified API permissions.  A permission can be marked as optional if the functionality of the module does not rely on the permission (the module must check for this).  A description can also be provided to provide justification to the end user as to why the permission is needed.

```json
{
    "api_permissions": {
        "account"     : { "optional": true,  "details": "Needed if you want the special feature enabled." },
        "inventories" : { "optional": false, "details": "Needed to review the item in your inventory." }
    }
}
```
