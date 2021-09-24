---
id: markers
title: Setup
---

## The Module

To provide marker pack support, Blish HUD can use the "Pathing" module.  The pathing module supports using TacO style marker packs (as .taco or .zip files) in Blish HUD!

To install the Pathing module, find the **Pathing** module within the Module Repo and install it (see: [Installing modules](/docs/user/installing-modules)).

## The permissions

If you are using an API key with Blish HUD, you can optionally consent to each of the following API permissions:

- **Account**
- **Progression**

If enabled, the Pathing module will auto detect what achievements you've completed and in marker packs that support it, can automatically hide the ones you've completed.

## Marker Packs

:::caution Watch out!

**Don't extract the marker packs!**  They're intended to be left inside of their `.zip` or `.taco` archives.  If you extract them, Blish HUD can have difficulties loading your marker textures and trails.

Likewise, packs which come as XML files typically will not work with Blish HUD - many of them rely on resources and resource management built into TacO that we do not have plans to support at this time.

:::

Blish HUD supports most TacO format marker packs.  Here are some of our popular recommendations:

| What are you looking for? | Pack | Website | Stats |
|-|-|-|-|
| Achievement hunting? | [ReActif EN](https://www.heinze.fr/taco/download.php?f=3) / [FR](https://www.heinze.fr/taco/download.php?f=6) | [Website](https://www.heinze.fr/taco/?lang=en) | [Stats](https://discord.com/channels/531175899588984842/575789826402418708/890124437758812170)
| "Jack-of-all-trades" pack with a lot of everything? | [Tekkit's All-In-One](http://tekkitsworkshop.net/index.php/gw2-taco/download/send/2-taco-marker-packs/32-all-in-one) | [Website](http://tekkitsworkshop.net/index.php/gw2-taco/download) | [Stats](https://mp-repo.blishhud.com/tekkitsworkshop.all-in-one.taco.html) |
| Want the scenic route and to explore as you level up? | [Movement on the World](https://github.com/Sutcenes/MovementOnTheWorld_TacoSupport/releases/latest/download/MoW.taco) | [Website](https://github.com/Sutcenes/MovementOnTheWorld_TacoSupport/wiki) | [Stats](https://mp-repo.blishhud.com/MoW.taco.html) |
| Fractals / Raids / Strikes? | [Hero's Marker Pack](https://github.com/QuitarHero/Heros-Marker-Pack/releases/latest/download/Hero.Blish.Pack.zip) | [Website](https://github.com/QuitarHero/Heros-Marker-Pack/wiki) | [Stats](https://mp-repo.blishhud.com/hero.blish.pack.zip.html) |
| Looking for more gifts of exploration / map completion? | [Teh's Map Completion Trails](https://github.com/xrandox/TehsTrails/releases/latest/download/tt.mapcomp.taco) | [Website](https://github.com/xrandox/TehsTrails/wiki) | [Stats](https://mp-repo.blishhud.com/tt.mapcomp.taco.html) |
| Looking for HPs or wanting to run your own HP trains? | [Teh's HP Train Trails](https://github.com/xrandox/TehsTrails/releases/latest/download/tt.hptraintrails.taco) | [Website](https://github.com/xrandox/TehsTrails/wiki) | [Stats](https://mp-repo.blishhud.com/tt.hptraintrails.taco.html) |

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