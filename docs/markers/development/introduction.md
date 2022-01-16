---
id: mp_introduction
title: Introduction
hide_table_of_contents: false
---

Marker packs are typically archives which contain within them three types of files.

## Archive Files

### XML Files (.xml)

The XML files are the main component of a marker pack and are what define all major aspects of the packs including every marker, the categories, and their defined behaviors.

### Trail Files (.trl)

Trail files each represent a trail to be displayed and contain the data necessary to rebuild them in the world.  You can use TacO or TrlTool to create these files.  Blish HUD's pathing module does not have a tool to do this yet.

### Texture Files (.png, etc.)

Texture files are simply images used by either markers or trails.  They are included in the marker pack.  A single texture file can be used by multiple markers, trails, etc. and re-use is encouraged to reduce memory requirements, load times, archive size, etc.

## Archive Format

