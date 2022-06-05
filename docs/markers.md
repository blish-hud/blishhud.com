---
id: markers
title: Setup
---

## The Module

To provide marker pack support, Blish HUD can use the "Pathing" module.  The pathing module supports using TacO style marker packs (as .taco or .zip files) in Blish HUD!

To install the Pathing module, find the **Pathing** module within the Module Repo and install it (see: [Installing modules](/docs/user/installing-modules)).

<iframe width="640" height="360" src="https://www.youtube.com/embed/jz1afT6_wxU" frameborder="0" allow="fullscreen; autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>

## The permissions

If you are using an API key with Blish HUD, you can optionally consent to each of the following API permissions:

- **Account**
- **Progression**

If enabled, the Pathing module will auto detect what achievements you've completed and in marker packs that support it, can automatically hide the ones you've completed.

## Marker Packs

:::caution Watch out!

**Don't extract the marker packs!**  They're intended to be left inside of their `.zip` or `.taco` archives.  If you extract them, Blish HUD can have difficulties loading your marker textures and trails.

Likewise, packs which come as XML files may not work with Blish HUD as expected - many of them rely on resources and resource management built into TacO that we do not have plans to support at this time.  Reach out to us on Discord for assistance with repacking packs like this.

:::

### From Repo

Within Blish HUD is now a marker pack repo.  Popular marker packs can be downloaded from the repo and kept automatically up to date.

### Manually

Blish HUD supports most TacO format marker packs.  Here are some of our popular recommendations:

| What are you looking for? | Pack | Website | Stats |
|-|-|-|-|
| Achievement hunting? | [ReActif EN](https://www.heinze.fr/taco/download.php?f=3) / [FR](https://www.heinze.fr/taco/download.php?f=6) | [Website](https://www.heinze.fr/taco/?lang=en) | [Stats](https://mp-repo.blishhud.com/reactif.en.taco.html)
| Want the scenic route and to explore as you level up? | [Movement on the World](https://github.com/Sutcenes/MovementOnTheWorld_TacoSupport/releases/latest/download/MoW.taco) | [Website](https://github.com/Sutcenes/MovementOnTheWorld_TacoSupport/wiki) | [Stats](https://mp-repo.blishhud.com/MoW.taco.html) |
| Fractals / Raids / Strikes? | [Hero's Marker Pack](https://github.com/QuitarHero/Heros-Marker-Pack/releases/latest/download/Hero.Blish.Pack.zip) | [Website](https://github.com/QuitarHero/Heros-Marker-Pack/wiki) | [Stats](https://mp-repo.blishhud.com/hero.blish.pack.zip.html) |
| Looking for more gifts of exploration / map completion or assistance with HP trains? | [Teh's Trails](https://github.com/xrandox/TehsTrails/releases/latest/download/TehsTrails.taco) | [Website](https://github.com/xrandox/TehsTrails/wiki) | [Stats](https://mp-repo.blishhud.com/TehsTrails.taco.html) |
| Looking for *fast* solo farming routes? | [\[fast\] TacO Markers](https://cdn.discordapp.com/attachments/531175900100952087/947365218453966868/602fd903dad6efast_TacO_pack_001.taco) | [Website](https://fast.farming-community.eu/farming/guides/fast-taco-marker) | [Stats](https://mp-repo.blishhud.com/fast_TacO_pack.taco.html) |

ℹ *Have a pack you'd like to see recommended?  Shoot a ping to @Freesnöw:0001 on Discord!*

Click on the pack name for one of the above packs to download it to your computer.  Place the pack under:
`Documents\Guild Wars 2\addons\blishhud\markers`

You can quickly get here from within Blish HUD by pressing the settings cog to the right of the module's enable button and select **Open 'Markers' Directory**.

<img src="/img/pathing/overview/open-markers-dir.png" />
<br /><br />

Once you've added some marker packs, it should look something like this:

<img src="/img/pathing/overview/markers-folder.png" />
<br /><br />

Once you've added marker packs, you can enable the module!  If you've already enabled the module, you can disable and enable it, or restart Blish HUD so that it detects the new marker packs.