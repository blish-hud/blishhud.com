---
id: specialization
title: Specialization
hide_table_of_contents: true
---

| Applies To | | Blish HUD | TacO |
|-|-|-|-|
| <center>Markers, Trails</center> | | <center>✔</center> | <center>❌</center> |

## Description

*Hides the marker or trail if the player is not currently one of the specified specializations.*

| Attribute | Data Type | Example | Description |
|-|-|-|-|
| specialization | Array of [Integer](../datatypes/integer) | `specialization="40,61"` | The specialization(s) the marker or trail should be shown while using. |

## Supported values

:::info

The value is checked against the active third slot specialization ID.  It is not limited to elite specializations but we are unable to detect the first two specializations.  This is a quirk of it's implementation in the mumblelink API.

For your convenience, we've bolded the elite specializations in the below table and moved them to the top.  The remaining non-elite specializations can be detected *if* applied in the third specialization slot.

:::

| Value | Specialization | Profession |
|-|-|-|
| <strong>5</strong> | <strong>Druid</strong> | <strong>Ranger</strong> |
| <strong>7</strong> | <strong>Daredevil</strong> | <strong>Thief</strong> |
| <strong>18</strong> | <strong>Berserker</strong> | <strong>Warrior</strong> |
| <strong>27</strong> | <strong>Dragonhunter</strong> | <strong>Guardian</strong> |
| <strong>34</strong> | <strong>Reaper</strong> | <strong>Necromancer</strong> |
| <strong>40</strong> | <strong>Chronomancer</strong> | <strong>Mesmer</strong> |
| <strong>43</strong> | <strong>Scrapper</strong> | <strong>Engineer</strong> |
| <strong>48</strong> | <strong>Tempest</strong> | <strong>Elementalist</strong> |
| <strong>52</strong> | <strong>Herald</strong> | <strong>Revenant</strong> |
| <strong>55</strong> | <strong>Soulbeast</strong> | <strong>Ranger</strong> |
| <strong>56</strong> | <strong>Weaver</strong> | <strong>Elementalist</strong> |
| <strong>57</strong> | <strong>Holosmith</strong> | <strong>Engineer</strong> |
| <strong>58</strong> | <strong>Deadeye</strong> | <strong>Thief</strong> |
| <strong>59</strong> | <strong>Mirage</strong> | <strong>Mesmer</strong> |
| <strong>60</strong> | <strong>Scourge</strong> | <strong>Necromancer</strong> |
| <strong>61</strong> | <strong>Spellbreaker</strong> | <strong>Warrior</strong> |
| <strong>62</strong> | <strong>Firebrand</strong> | <strong>Guardian</strong> |
| <strong>63</strong> | <strong>Renegade</strong> | <strong>Revenant</strong> |
| <strong>64</strong> | <strong>Harbinger</strong> | <strong>Necromancer</strong> |
| <strong>65</strong> | <strong>Willbender</strong> | <strong>Guardian</strong> |
| <strong>66</strong> | <strong>Virtuoso</strong> | <strong>Mesmer</strong> |
| <strong>67</strong> | <strong>Catalyst</strong> | <strong>Elementalist</strong> |
| <strong>68</strong> | <strong>Bladesworn</strong> | <strong>Warrior</strong> |
| <strong>69</strong> | <strong>Vindicator</strong> | <strong>Revenant</strong> |
| <strong>70</strong> | <strong>Mechanist</strong> | <strong>Engineer</strong> |
| <strong>71</strong> | <strong>Specter</strong> | <strong>Thief</strong> |
| <strong>72</strong> | <strong>Untamed</strong> | <strong>Ranger</strong> |
| 1 | Dueling | Mesmer |
| 2 | Death Magic | Necromancer |
| 3 | Invocation | Revenant |
| 4 | Strength | Warrior |
| 6 | Explosives | Engineer |
| 8 | Marksmanship | Ranger |
| 9 | Retribution | Revenant |
| 10 | Domination | Mesmer |
| 11 | Tactics | Warrior |
| 12 | Salvation | Revenant |
| 13 | Valor | Guardian |
| 14 | Corruption | Revenant |
| 15 | Devastation | Revenant |
| 16 | Radiance | Guardian |
| 17 | Water | Elementalist |
| 19 | Blood Magic | Necromancer |
| 20 | Shadow Arts | Thief |
| 21 | Tools | Engineer |
| 22 | Defense | Warrior |
| 23 | Inspiration | Mesmer |
| 24 | Illusions | Mesmer |
| 25 | Nature Magic | Ranger |
| 26 | Earth | Elementalist |
| 28 | Deadly Arts | Thief |
| 29 | Alchemy | Engineer |
| 30 | Skirmishing | Ranger |
| 31 | Fire | Elementalist |
| 32 | Beastmastery | Ranger |
| 33 | Wilderness Survival | Ranger |
| 35 | Critical Strikes | Thief |
| 36 | Arms | Warrior |
| 37 | Arcane | Elementalist |
| 38 | Firearms | Engineer |
| 39 | Curses | Necromancer |
| 41 | Air | Elementalist |
| 42 | Zeal | Guardian |
| 44 | Trickery | Thief |
| 45 | Chaos | Mesmer |
| 46 | Virtues | Guardian |
| 47 | Inventions | Engineer |
| 49 | Honor | Guardian |
| 50 | Soul Reaping | Necromancer |
| 51 | Discipline | Warrior |
| 53 | Spite | Necromancer |
| 54 | Acrobatics | Thief |

This attribute supports providing an array of specialization IDs (values separated by comma) meaning one or more values can be provided.  If the player character is any of the provided specialization (in the third specialization slot) the the marker or trail is shown.

## How it works

The mumblelink API provides values indicating the active character specialization.  This state is updated in realtime.

Values referenced from the GW2 Web API: https://dotnetfiddle.net/Sx3hkm