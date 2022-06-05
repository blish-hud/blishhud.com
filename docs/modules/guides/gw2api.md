---
id: gw2api
title: GW2 Web API
---

## Overview

Blish HUD offers a fully comprehensive solution to making requests to the [Guild Wars 2 API](https://wiki.guildwars2.com/wiki/API:Main) via our [Gw2Sharp](https://github.com/Archomeda/Gw2Sharp) dependency - the best in class .NET API library for Guild Wars 2.

Blish HUD provides access to the API client that Gw2Sharp generates through a `ManagedConnection` to enable you to make authenticated API calls without the need of managing or requesting user API tokens directly.

## Token Delegation

Modules that wish to make authenticated requests to the API must list the permissions that are needed within their [module manifest](/docs/modules/overview/update-your-manifest#api-permissions).

When a module is enabled, a [subtoken](https://wiki.guildwars2.com/wiki/API:2/createsubtoken) is automatically generated for the module and managed by the `ManagedConnection` instance passed to the module.  This allows the module to have a subtoken with the request permissions.  It also ensures that the token is for the current user if the user decides to log into a different account.

## Caching

API responses are *[currently](https://github.com/blish-hud/Blish-HUD/issues/445)* cached in memory based on the headers returned in the response from the API.  These responses are cached between modules to help ensure that overlapping requests can be served quickly where possible.

It is best practice to not rely on Blish HUD's caching mechanisms for data that is static and persistent, however.  Avoid repetitive requests to the API and instead keep the processed results of your request to keep your user experience the best it can be.

## Rate Limits

Guild Wars 2's web API has a strict limit of 300 messages per minute (despite what the API headers indicating 600 may have you to believe).  Blish HUD uses a custom token bucket middleware we've written that will artificially delay your requests to the API if our calculations indicate that the request would normally be rate limited.

All modules share this same rate limit.  In fact, all software on the same network will share this same rate limit.  For that reason, be mindful of what API requests to make and when to help avoid locking other modules or software from making API requests for extended periods of time.

## Error Handling

The Guild Wars 2 API has on more than one occasion experienced periods of both partial and full downtime with responses ranging.  For that reason, it is critically important that you wrap requests to the Guild Wars 2 API to ensure exceptions are caught and properly handled.

Consider implementing a retry mechanism that tries a few minutes later.  If the information is critical for the functionality of your module, it is best to notify the user so that they understand why the module is not functioning as expected.

See our guide on [handling exceptions](/docs/modules/module-citizen/ensuring-stability#handle-exceptions-when-working-with-external-resources).

## Making Requests

Standard API requests are made through the V2 client found under the `Gw2ApiManager`.  Your module will have an instance of this passed to it via the ModuleParameters and assigned to Gw2ApiManager.

You can access this via:
`Gw2ApiManager.Gw2ApiClient.V2`

The provided client will already have a token associated with it and you can begin making requests without any configuration.

You can read the [Gw2Sharp V2 API guide here](https://github.archomeda.eu/Gw2Sharp/master/guides/introduction.html#web-api-v2).

## Checking for Permissions

While your module may request certain permissions, the token assigned to your module may not have those permissions.
- The subtoken might still be getting generated and not have been assigned to the module yet.
- The user may not have an API token added to Blish HUD.
- The user may have not consented to the permissions requested by your module when enabling your module.

For these reasons, it's always best to check every time before making an API request that you have the expected permissions.

### Check with `HasPermissions`

Before every request, check that the appropriate permissions are available with `Gw2ApiManager.HasPermissions`.  In the example below, we check for the permissions needed to see the account achievements prior to making the actual API call.

```cpp {3}
try {
	// v2/account/achievements requires "account" and "progression" permissions.
	if (Gw2ApiManager.HasPermissions(new[] { TokenPermission.Account, TokenPermission.Progression })) {
		Logger.Debug("Getting user achievements from the API.");

		var achievements = await Gw2ApiManager.Gw2ApiClient.V2.Account.Achievements.GetAsync();

		HandleAchievements(achievements);

		Logger.Debug("Loaded {achievementCount} player achievements from the API.", achievements.Count);
	} else {
		Logger.Debug("Skipping user achievements from the API - API key does not give us permission.");
	}
} catch (Exception ex) {
	Logger.Warn(ex, "Failed to load account achievements.");
}
```

### Check again with `SubtokenUpdated`

The subtoken may be populated after your module has already started or later if the user changes API keys in Blish HUD, etc.  For this reason, if you are not already checking the API on a regular interval, it is best to trigger your requests again with the `SubtokenUpdated` event.  This event is fired when your module is given a new API token to use.