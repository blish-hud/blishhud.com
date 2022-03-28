---
id: repo-etiquette
title: Repo Etiquette
---

At a certain point you may wish to release your module through the public repo.  With this comes a certain set of expectations our users and maintainers.  Maintaining the Blish HUD module ecosystem is a collaborative effort so we ask that you keep that in mind.

## Public Package Repo Overview

The public package repo is a manifest listing of every public module available to users from within Blish HUD.  Modules that are brand-new or that have received an incremental update receive reviews from both humans and our package review bot.  For this reason, packages submitted to pkgs-bhud are not automatically accepted and can require time to review ranging from a few minutes to even up to a week depending on availability.

## Maintain Your Namespace

If a module has ever been published to the module repo, you **may not** change your module namespace inside the manifest.json file.  The namespace is used as a unique identifier to track your module installed in user environments, for settings, for module updates, and more.  PRs including namespace changes will be declined as it creates a confusing experience for our users.

## Maintain Your Releases

If you are hosting your own module releases instead of using [bhud-module](https://github.com/blish-hud/bhud-modules) you must keep these links accessible.  If you encounter a scenario where you must update these release links, you must PR the URL changes to the pkg-repo prior to making those changes (and those URLs must be hosted in both locations until merged).  Repo maintainers are not available 24/7 to merge and push changes made on short notice.  Ask in the Discord channel before making such changes to ensure you're making the appropriate changes.

If your release URLs become unavailable for any reason, users will be unable to download your modules.  Further, deleting releases from GitHub release pages will reset your dashboard stats back to 0 for every release that was removed.

For these reasons and more, it is advised that you use our internal SSRD mechanism for making releases so that they're pushed through our bhud-modules repo which will host those packages indefinitely.

## Blish HUD Dependency Version

Your module should include a dependency on Blish HUD to indicate which versions of Blish HUD the module supports.  For public module releases, **DO NOT** depend on unreleased/prerelease Blish HUD versions.  Instead, use our prerelease mechanism to push to the prerelease repo or the Discord to share these versions of your module.  Blish HUD releases generally occur infrequently and as a result there can be no expectation that the features your module depends on will become available on your own timeline.
