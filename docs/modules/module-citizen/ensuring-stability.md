---
id: ensuring-stability
title: Ensuring Stability
---

While Blish HUD will do everything it can to avoid crashing when modules misbehave, it is important that your module does its part to catch and handle exceptions as appropriate.

With our userbase numbering in the thousands, your module has the potential to run on a wide range of systems with various specs, anti-virus, and other unique environmental issues.  It is important to ensure that your module is resilient to these issues.

## Make use of contingency notifications

Blish HUD provides a standardized way of notifying users when there is an issue beyond our control (we'll refer to these as environmental issues) that significantly impacts using Blish HUD.

Found within our Debug namespace you'll find a way to make these calls: `Debug.Contingency`.  Soon we'll extend this to allow for custom notifications.  In the meantime, however, we have several common ones including notifications when a file save is blocked via permissions or otherwise.  These show a popup which the user will see at most once per session indicating the issue, offering a solution, and linking them to the relevant troubleshooting article on our website.  We have found these to be incredibly effective at reducing the number of issues surrounding common environmental issues such as anti-virus, etc.

These calls are meant for issues that would impact Blish HUD as a whole and require immediate attention to resolve issues.  It is not meant for minor or optional module features.  They show a disruptive popup that users will not want to see popup regularly.

## Handle exceptions when working with external resources

Sometimes you need to read a file, make a web request, etc. but what happens if the file you're attempting to read is unexpectedly not there or a the web server hosting the API you're making a call to is down?

In any of these scenarios where an external resource is referenced please ensure you:
- **Wrap your calls with try/catch statements** and handle exceptions appropriately.
- **Notify your user of the fault if it is critical to your modules use.**  Especially for features that are non-critical, it is good to show in the UI when a feature may not be available because an external call failed (and details may allow them to resolve the issue themselves).
- **Include graceful fallbacks** such as disabling certain features (with a note if you can) if something fails to load.  Users are often confused when something is temporarily unavailable without notice because they don't necessarily know that something failed so the clearer the notice, the better.
- **Log your issues**.  Data pulled from the web or local disk can be caused by a number of factors, but ensure it is logged using your logger.  Avoid using ERROR or FATAL for these sorts of logging entries as it will flood you with reports in Sentry for what is likely an environmental issue that you can't directly solve and that you've already caught and handled.
- **Implement *reasonable* retry logic.**  Avoid thrashing your users' system with endless retry attempts.  Instead, if something is likely to be a short blip, consider retrying either once more after a short wait, or retrying on a regular interval several minutes apart.  This allows your module to "self-heal" if at all possible without user interaction and without degrading system performance.

## Look out for symptoms of anti-virus

:::caution To preface
We do not attempt to circumvent anti-virus or other security software.  Instead, we work to try to identify when it impedes us and notify the user so that they can address it themselves.

We will also submit our compiled assemblies to Anti-Virus vendors for review and approval when there are repeat issues from the same vendor so that they can manually approve it.
:::

Sometimes users have an anti-virus that, despite our best efforts to sign and submit our releases for review, will get blocked.  These days many anti-virus platforms block *behaviors* instead of the applications themselves.  Common examples are:

### Failed Web Requests
Trivial web requests may return unexpected exceptions if actively blocked by outbound software firewalls.

As with all web requests made, you should wrap them in try/catch statements and handle any exceptions.  For failed requests that specifically return HRResult `-2147467259`, you should call `Debug.Contingency.NotifyHttpAccessDenied` to notify the user.  Web requests that fail in this way to the GW2 API via the managed client already are wrapped and checked for this exception.

### Failed File System Read/Writes
Basic file reads (even to files you've written to disk) or writes may be blocked - even to directories that other modules have successfully written to.

As with all file reads and writes, you should wrap them in try/catch statements and handle any exceptions.  For failed file reads and writes `UnauthorizedAccessException` is what is most often returned for this particular issue and you should use `Debug.Contingency.NotifyFileSaveAccessDenied` to notify the user when this specific exception is thrown while handling IO.