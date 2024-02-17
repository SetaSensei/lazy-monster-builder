const MONSTERS_STATS = [
  {
    "CR": "0",
    "ECL": "<1",
    "ACDC": "10",
    "HP": "3",
    "HPLow": "2",
    "HPHigh": "4",
    "PAB": "+2",
    "DpR": "2",
    "NoA": "1",
    "DpA": "2",
    "DpACalc": "1d4",
    "example": "Commoner, rat, spider",
    "example_trunc": "Commoner, rat, spider"
  },
  {
    "CR": "1/8",
    "ECL": "<1",
    "ACDC": "11",
    "HP": "9",
    "HPLow": "7",
    "HPHigh": "11",
    "PAB": "+3",
    "DpR": "3",
    "NoA": "1",
    "DpA": "3",
    "DpACalc": "1d4+1",
    "example_string": "Bandit, cultist, giant, rat",
    "example_trunc": "Bandit, cultist, giant, rat"
  },
  {
    "CR": "1/4",
    "ECL": "1",
    "ACDC": "11",
    "HP": "13",
    "HPLow": "10",
    "HPHigh": "16",
    "PAB": "+3",
    "DpR": "5",
    "NoA": "1",
    "DpA": "5",
    "DpACalc": "1d6+2",
    "example_string": "Acolyte, skeleton, wolf",
    "example_trunc": "Acolyte, skeleton, wolf"
  },
  {
    "CR": "1/2",
    "ECL": "2",
    "ACDC": "12",
    "HP": "22",
    "HPLow": "17",
    "HPHigh": "28",
    "PAB": "+4",
    "DpR": "10",
    "NoA": "1",
    "DpA": "10",
    "DpACalc": "2d6+3",
    "example_string": "Black bear, scout, shadow",
    "example_trunc": "Black bear, scout, shadow"
  },
  {
    "CR": "1",
    "ECL": "3",
    "ACDC": "12",
    "HP": "33",
    "HPLow": "25",
    "HPHigh": "41",
    "PAB": "+5",
    "DpR": "12",
    "NoA": "2",
    "DpA": "6",
    "DpACalc": "1d8+2",
    "example_string": "Dire wolf, specter, spy",
    "example_trunc": "Dire wolf, specter, spy"
  },
  {
    "CR": "2",
    "ECL": "5",
    "ACDC": "13",
    "HP": "45",
    "HPLow": "34",
    "HPHigh": "56",
    "PAB": "+5",
    "DpR": "17",
    "NoA": "2",
    "DpA": "9",
    "DpACalc": "2d6+2",
    "example_string": "Ghast, ogre, priest",
    "example_trunc": "Ghast, ogre, priest"
  },
  {
    "CR": "3",
    "ECL": "7",
    "ACDC": "13",
    "HP": "65",
    "HPLow": "49",
    "HPHigh": "81",
    "PAB": "+5",
    "DpR": "23",
    "NoA": "2",
    "DpA": "12",
    "DpACalc": "2d8+3",
    "example_string": "Knight, mummy, werewolf",
    "example_trunc": "Knight, mummy, werewolf"
  },
  {
    "CR": "4",
    "ECL": "9",
    "ACDC": "14",
    "HP": "85",
    "HPLow": "64",
    "HPHigh": "106",
    "PAB": "+6",
    "DpR": "29",
    "NoA": "2",
    "DpA": "15",
    "DpACalc": "3d8+2",
    "example_string": "Ettin, ghost",
    "example_trunc": "Ettin, ghost"
  },
  {
    "CR": "5",
    "ECL": "10",
    "ACDC": "15",
    "HP": "95",
    "HPLow": "71",
    "HPHigh": "119",
    "PAB": "+7",
    "DpR": "35",
    "NoA": "3",
    "DpA": "12",
    "DpACalc": "3d6+2",
    "example_string": "Elemental, gladiator, vampire spawn",
    "example_trunc": "Elemental, gladiator,..."
  },
  {
    "CR": "6",
    "ECL": "11",
    "ACDC": "15",
    "HP": "112",
    "HPLow": "84",
    "HPHigh": "140",
    "PAB": "+7",
    "DpR": "41",
    "NoA": "3",
    "DpA": "14",
    "DpACalc": "3d6+4",
    "example_string": "Mage, medusa, wyvern",
    "example_trunc": "Mage, medusa, wyvern"
  },
  {
    "CR": "7",
    "ECL": "12",
    "ACDC": "15",
    "HP": "127",
    "HPLow": "95",
    "HPHigh": "159",
    "PAB": "+7",
    "DpR": "47",
    "NoA": "3",
    "DpA": "16",
    "DpACalc": "3d8+3",
    "example_string": "Stone giant, young black dragon",
    "example_trunc": "Stone giant, young black dragon"
  },
  {
    "CR": "8",
    "ECL": "13",
    "ACDC": "15",
    "HP": "136",
    "HPLow": "102",
    "HPHigh": "170",
    "PAB": "+7",
    "DpR": "53",
    "NoA": "3",
    "DpA": "18",
    "DpACalc": "3d10+2",

    "example_string": "Assassin, frost giant",
    "example_trunc": "Assassin, frost giant"
  },
  {
    "CR": "9",
    "ECL": "15",
    "ACDC": "16",
    "HP": "145",
    "HPLow": "109",
    "HPHigh": "181",
    "PAB": "+8",
    "DpR": "59",
    "NoA": "3",
    "DpA": "22",
    "DpACalc": "3d12+3",
    "example_string": "Bone devil, fire giant, young blue, dragon",
    "example_trunc": "Bone devil, fire giant,..."
  },
  {
    "CR": "10",
    "ECL": "16",
    "ACDC": "17",
    "HP": "155",
    "HPLow": "116",
    "HPHigh": "194",
    "PAB": "+9",
    "DpR": "65",
    "NoA": "4",
    "DpA": "16",
    "DpACalc": "3d8+3",
    "example_string": "Stone golem, young red dragon",
    "example_trunc": "Stone golem, young red dragon"
  },
  {
    "CR": "11",
    "ECL": "17",
    "ACDC": "17",
    "HP": "165",
    "HPLow": "124",
    "HPHigh": "206",
    "PAB": "+9",
    "DpR": "71",
    "NoA": "4",
    "DpA": "18",
    "DpACalc": "3d10+2",
    "example_string": "Djinni, efreeti, horned devil",
    "example_trunc": "Djinni, efreeti, horned devil"
  },
  {
    "CR": "12",
    "ECL": "18",
    "ACDC": "17",
    "HP": "175",
    "HPLow": "131",
    "HPHigh": "219",
    "PAB": "+9",
    "DpR": "77",
    "NoA": "4",
    "DpA": "19",
    "DpACalc": "3d10+3",
    "example_string": "Archmage, erinyes",
    "example_trunc": "Archmage, erinyes"
  },
  {
    "CR": "13",
    "ECL": "19",
    "ACDC": "18",
    "HP": "184",
    "HPLow": "138",
    "HPHigh": "230",
    "PAB": "+10",
    "DpR": "83",
    "NoA": "4",
    "DpA": "21",
    "DpACalc": "4d8+3",
    "example_string": "Adult white dragon, storm giant, vampire",
    "example_trunc": "Adult white dragon,..."
  },
  {
    "CR": "14",
    "ECL": "20",
    "ACDC": "19",
    "HP": "196",
    "HPLow": "147",
    "HPHigh": "245",
    "PAB": "+11",
    "DpR": "89",
    "NoA": "4",
    "DpA": "22",
    "DpACalc": "4d10",
    "example_string": "Adult black dragon, ice devil",
    "example_trunc": "Adult black dragon, ice devil"
  },
  {
    "CR": "15",
    "ECL": ">20",
    "ACDC": "19",
    "HP": "210",
    "HPLow": "158",
    "HPHigh": "263",
    "PAB": "+11",
    "DpR": "95",
    "NoA": "5",
    "DpA": "19",
    "DpACalc": "3d10+3",
    "example_string": "Adult green dragon, mummy lord, purple worm",
    "example_trunc": "Adult green dragon,..."
  },
  {
    "CR": "16",
    "ECL": ">20",
    "ACDC": "19",
    "HP": "229",
    "HPLow": "172",
    "HPHigh": "286",
    "PAB": "+11",
    "DpR": "101",
    "NoA": "5",
    "DpA": "22",
    "DpACalc": "3d12+3",
    "example_string": "Adult blue dragon, iron golem, marilith",
    "example_trunc": "Adult blue dragon,..."
  },
  {
    "CR": "17",
    "ECL": ">20",
    "ACDC": "20",
    "HP": "246",
    "HPLow": "185",
    "HPHigh": "308",
    "PAB": "+12",
    "DpR": "107",
    "NoA": "5",
    "DpA": "21",
    "DpACalc": "4d8+3",
    "example_string": "Adult red dragon",
    "example_trunc": "Adult red dragon"
  },
  {
    "CR": "18",
    "ECL": ">20",
    "ACDC": "21",
    "HP": "266",
    "HPLow": "200",
    "HPHigh": "333",
    "PAB": "+13",
    "DpR": "113",
    "NoA": "5",
    "DpA": "23",
    "DpACalc": "4d10+1",
    "example_string": "Demilich",
    "example_trunc": "Demilich"
  },
  {
    "CR": "19",
    "ECL": ">20",
    "ACDC": "21",
    "HP": "285",
    "HPLow": "214",
    "HPHigh": "356",
    "PAB": "+13",
    "DpR": "119",
    "NoA": "5",
    "DpA": "24",
    "DpACalc": "4d10+2",
    "example_string": "Balor",
    "example_trunc": "Balor"
  },
  {
    "CR": "20",
    "ECL": ">20",
    "ACDC": "21",
    "HP": "300",
    "HPLow": "225",
    "HPHigh": "375",
    "PAB": "+13",
    "DpR": "132",
    "NoA": "5",
    "DpA": "26",
    "DpACalc": "4d12",
    "example_string": "Ancient white dragon, pit fiend",
    "example_trunc": "Ancient white dragon, pit fiend"
  },
  {
    "CR": "21",
    "ECL": ">20",
    "ACDC": "22",
    "HP": "325",
    "HPLow": "244",
    "HPHigh": "406",
    "PAB": "+14",
    "DpR": "150",
    "NoA": "5",
    "DpA": "30",
    "DpACalc": "4d12+4",
    "example_string": "Ancient black dragon, lich, solar",
    "example_trunc": "Ancient black dragon, lich,..."
  },
  {
    "CR": "22",
    "ECL": ">20",
    "ACDC": "23",
    "HP": "350",
    "HPLow": "263",
    "HPHigh": "438",
    "PAB": "+15",
    "DpR": "168",
    "NoA": "5",
    "DpA": "34",
    "DpACalc": "4d12+8",
    "example_string": "Ancient green dragon",
    "example_trunc": "Ancient green dragon"
  },
  {
    "CR": "23",
    "ECL": ">20",
    "ACDC": "23",
    "HP": "375",
    "HPLow": "281",
    "HPHigh": "469",
    "PAB": "+15",
    "DpR": "186",
    "NoA": "5",
    "DpA": "37",
    "DpACalc": "6d10+4",
    "example_string": "Ancient blue dragon, kraken",
    "example_trunc": "Ancient blue dragon, kraken"
  },
  {
    "CR": "24",
    "ECL": ">20",
    "ACDC": "23",
    "HP": "400",
    "HPLow": "300",
    "HPHigh": "500",
    "PAB": "+15",
    "DpR": "204",
    "NoA": "5",
    "DpA": "41",
    "DpACalc": "6d10+8",
    "example_string": "Ancient red dragon",
    "example_trunc": "Ancient red dragon"
  },
  {
    "CR": "25",
    "ECL": ">20",
    "ACDC": "24",
    "HP": "430",
    "HPLow": "323",
    "HPHigh": "538",
    "PAB": "+16",
    "DpR": "222",
    "NoA": "5",
    "DpA": "44",
    "DpACalc": "6d10+11",
    "example_string": "",
    "example_trunc": ""
  },
  {
    "CR": "26",
    "ECL": ">20",
    "ACDC": "25",
    "HP": "460",
    "HPLow": "345",
    "HPHigh": "575",
    "PAB": "+17",
    "DpR": "240",
    "NoA": "5",
    "DpA": "48",
    "DpACalc": "6d10+15",
    "example_string": "",
    "example_trunc": ""
  },
  {
    "CR": "27",
    "ECL": ">20",
    "ACDC": "25",
    "HP": "490",
    "HPLow": "368",
    "HPHigh": "613",
    "PAB": "+17",
    "DpR": "258",
    "NoA": "5",
    "DpA": "52",
    "DpACalc": "6d10+19",
    "example_string": "",
    "example_trunc": ""
  },
  {
    "CR": "28",
    "ECL": ">20",
    "ACDC": "25",
    "HP": "540",
    "HPLow": "405",
    "HPHigh": "675",
    "PAB": "+17",
    "DpR": "276",
    "NoA": "5",
    "DpA": "55",
    "DpACalc": "6d10+22",
    "example_string": "",
    "example_trunc": ""
  },
  {
    "CR": "29",
    "ECL": ">20",
    "ACDC": "26",
    "HP": "600",
    "HPLow": "450",
    "HPHigh": "750",
    "PAB": "+18",
    "DpR": "294",
    "NoA": "5",
    "DpA": "59",
    "DpACalc": "6d10+26",
    "example_string": "",
    "example_trunc": ""
  },
  {
    "CR": "30",
    "ECL": ">20",
    "ACDC": "27",
    "HP": "666",
    "HPLow": "500",
    "HPHigh": "833",
    "PAB": "+19",
    "DpR": "312",
    "NoA": "5",
    "DpA": "62",
    "DpACalc": "6d10+29",
    "example_string": "Tarrasque",
    "example_trunc": "Tarrasque"
  }
]

const MONSTERS_TYPE = [
  { "name": "Aberration" },
  { "name": "Beast" },
  { "name": "Celestial" },
  { "name": "Construct" },
  { "name": "Dragon" },
  { "name": "Elemental" },
  { "name": "Fey" },
  { "name": "Fiend" },
  { "name": "Giant" },
  { "name": "Humanoid" },
  { "name": "Monstrosity" },
  { "name": "Ooze" },
  { "name": "Plant" },
  { "name": "Undead" }
]

const MONSTERS_FEATURES = [
  {
    name: "Cunning Action",
    isEffect: false,
    isDmg: false,
    desc: "On each of their turns, this creature can use a bonus action to take the Dash, Disengage, or Hide action.",
    item: {
      "name": "Cunning Action",
      "type": "feat",
      "img": "icons/magic/control/hypnosis-mesmerism-watch.webp",
      "system": {
        "description": {
          "value": "<p>On each of their turns, this creature can use a bonus action to take the Dash, Disengage, or Hide action.</p>",
        },
        "activation": {
          "type": "bonus",
          "cost": 1,
        },
        "target": {
          "type": "self",
        },
        "range": {
          "units": "self"
        },
        "type": {
          "value": "monster",
        }
      }
    }
  },
  {
    name: "Damaging Blast",
    isEffect: false,
    isDmg: true,
    desc: "This creature has one or more single-target ranged attacks using the attack bonus and damage calculated above, and which deal damage of an appropriate type.",
    item: {
      "name": "Damaging Blast",
      "type": "weapon",
      "img": "icons/magic/light/explosion-impact-purple.webp",
      "system": {
        "description": {
          "value": "<p>This creature has one or more single-target ranged attacks using the attack bonus and damage calculated above, and which deal damage of an appropriate type.</p>",
        },
        "proficient": 0,
        "activation": {
          "type": "action",
          "cost": 1,
        },
        "target": {
          "value": 1,
          "type": "creature"
        },
        "range": {
          "value": 60,
          "units": "ft"
        },
        "actionType": "rwak",
        "type": {
          "value": "natural",
          "baseItem": ""
        }
      }
    }
  },
  {
    name: "Damage Reflection",
    isEffect: false,
    reduceAtk: true,
    isDmg: false,
    desc: "Whenever a creature within 5 feet of this creature hits them with a melee attack, the attacker takes damage in return of a type appropriate to the creature. The damage dealt is equal to half the damage of one of this creature's attacks. If you give a creature this feature, give them one less attack than normal.",
    item: {
      "name": "Damage Reflection",
      "type": "feat",
      "img": "icons/magic/defensive/shield-barrier-deflect-teal.webp",
      "system": {
        "description": {
          "value": "<p>Whenever a creature within 5 feet of this creature hits them with a melee attack, the attacker takes damage in return of a type appropriate to the creature. The damage dealt is equal to half the damage of one of this creature's attacks. If you give a creature this feature, give them one less attack than normal.</p>",
        },
      }
    }
  },
  {
    name: "Damage Transference",
    isEffect: false,
    isDmg: false,
    desc: "When this creature takes damage, they can transfer half or all of that damage (your choice) to a willing creature within 30 or 60 feet of them. This feature is particularly good for boss monsters.",
    item: {
      "name": "Damage Transference",
      "type": "feat",
      "img": "icons/magic/control/energy-stream-link-white.webp",
      "system": {
        "description": {
          "value": "<p>When this creature takes damage, they can transfer half or all of that damage (your choice) to a willing creature within 30 or 60 feet of them. This feature is particularly good for boss monsters.</p>",
        }
      }
    }
  },
  {
    name: "Damaging Aura",
    isEffect: false,
    divideDmg: 2,
    reduceAtk: true,
    isDmg: true,
    desc: "Each creature who starts their turn within 10 feet of this creature takes damage of a type appropriate to the creature. The damage dealt is equal to half the damage of one of this creature's attacks. If you give a creature this feature, give them one less attack than normal.",
    item: {
      "name": "Damaging Aura",
      "type": "feat",
      "img": "icons/magic/unholy/silhouette-light-fire-blue.webp",
      "system": {
        "description": {
          "value": "<p>Each creature who starts their turn within 10 feet of this creature takes damage of a type appropriate to the creature. The damage dealt is equal to half the damage of one of this creature's attacks. If you give a creature this feature, give them one less attack than normal.</p>",
        },
        "activation": {
          "type": "none"
        },
        "target": {
          "type": "self"
        },
        "range": {
          "value": 10,
          "units": "ft"
        },
        "ability": "none",
        "actionType": "other",
        "type": {
          "value": "monster",
          "subtype": ""
        },
        "properties": [
          "mgc"
        ],
      }
    }
  },
  ,
  {
    name: "Damaging Burst",
    isEffect: false,
    isDmg: true,
    hasSave: true,
    divideDmg: 2,
    useDpR: true,
    desc: "As an action, this creature can create a burst of energy, magic, spines, or some other effect in a 10-foot-radius sphere, either around themself or at a point within 120 feet. Each creature in that area must make a Dexterity, Constitution, or Wisdom saving throw (your choice, based on the type of burst). On a failure, a target takes damage of an appropriate type equal to half this creature's total damage per round. On a success, a target takes half as much damage.",
    item: {
      "name": "Damaging Burst",
      "type": "weapon",
      "img": "icons/magic/lightning/orb-ball-purple.webp",
      "system": {
        "description": {
          "value": "<p>As an action, this creature can create a burst of energy, magic, spines, or some other effect in a 10-foot-radius sphere, either around themself or at a point within 120 feet. Each creature in that area must make a Dexterity, Constitution, or Wisdom saving throw (your choice, based on the type of burst). On a failure, a target takes damage of an appropriate type equal to half this creature's total damage per round. On a success, a target takes half as much damage.</p>",
          "chat": ""
        },
        "activation": {
          "type": "action",
          "cost": 1,
          "condition": ""
        },
        "target": {
          "value": 10,
          "units": "ft",
          "type": "sphere",
          "prompt": true
        },
        "range": {
          "value": 120,
          "long": null,
          "units": "ft"
        },
        "actionType": "save",
        "save": {
          "ability": "dex",
          "dc": null,
          "scaling": "flat"
        },
      }
    }
  },
  {
    name: "Energy Weapons (bonus damage)",
    isEffect: true,
    isDmg: true,
    desc: "The creature's weapon attacks deal extra damage of an appropriate type. You can add this damage on top of the creature's regular damage output to give them a combat boost, or you can replace some of the creature's normal weapon damage with this energy damage.",
    item: {
      "name": "Energy Weapons (bonus damage)",
      "type": "feat",
      "img": "icons/magic/fire/dagger-rune-enchant-flame-blue-yellow.webp",
      "system": {
        "description": {
          "value": "<p>The creature's weapon attacks deal extra damage of an appropriate type. You can add this damage on top of the creature's regular damage output to give them a combat boost, or you can replace some of the creature's normal weapon damage with this energy damage.</p>",
        },
        "type": {
          "value": "monster"
        },
        "properties": [
          "mgc"
        ],
      },
      "effects": [
        {
          "name": "Energy Weapons (bonus damage)",
          "icon": "icons/magic/fire/dagger-rune-enchant-flame-blue-yellow.webp",
          "disabled": false,
          "changes": []
        }
      ]
    }
  },
  {
    name: "Energy Weapons (extra attack)",
    isEffect: false,
    isDmg: true,
    desc: "The creature's weapon attacks deal extra damage of an appropriate type. You can add this damage on top of the creature's regular damage output to give them a combat boost, or you can replace some of the creature's normal weapon damage with this energy damage.",
    item: {
      "name": "Energy Weapons (extra attack)",
      "type": "weapon",
      "img": "icons/magic/symbols/runes-etched-steel-blade.webp",
      "system": {
        "description": {
          "value": "<p>The creature's weapon attacks deal extra damage of an appropriate type. You can add this damage on top of the creature's regular damage output to give them a combat boost, or you can replace some of the creature's normal weapon damage with this energy damage.</p>",
        },
        "proficient": 0,
        "activation": {
          "type": "action",
        },
        "target": {
          "value": 1,
          "type": "creature",
        },
        "range": {
          "units": "touch"
        },
        "actionType": "msak",
        "type": {
          "value": "simpleM",
          "baseItem": ""
        }
      }
    }
  },
  {
    name: "Knockdown",
    isEffect: false,
    isDmg: false,
    desc: "When this creature hits a target with a melee attack, the target must succeed on a Strength saving throw or be knocked prone.",
    item: {
      "name": "Knockdown",
      "type": "feat",
      "img": "icons/skills/melee/unarmed-punch-fist-yellow-red.webp",
      "system": {
        "description": {
          "value": "<p>When this creature hits a target with a melee attack, the target must succeed on a Strength saving throw or be knocked prone.</p>",
          "chat": ""
        },
        "actionType": "save",
        "save": {
          "ability": "str",
          "dc": null,
          "scaling": "str"
        },
        "type": {
          "value": "monster",
          "subtype": ""
        }
      }
    }
  },
  {
    name: "Misty Step",
    isEffect: false,
    isDmg: false,
    desc: "As a bonus action, this creature can teleport up to 30 feet to an unoccupied space they can see.",
    item: {
      "name": "Misty Step",
      "type": "feat",
      "img": "icons/magic/movement/trail-streak-zigzag-yellow.webp",
      "system": {
        "description": {
          "value": "<p>As a bonus action, this creature can teleport up to 30 feet to an unoccupied space they can see.</p>",
          "chat": ""
        },
        "type": {
          "value": "monster",
          "subtype": ""
        }
      }
    }
  },
  {
    name: "Restraining Grab",
    isEffect: false,
    isDmg: false,
    desc: "When this creature hits a target with a melee attack, the target is grappled (escape DC based on this creature's Strength or Dexterity modifier). While grappled, the target is restrained.",
    item: {
      "name": "Restraining Grab",
      "type": "feat",
      "img": "icons/sundries/survival/cuffs-shackles-steel.webp",
      "system": {
        "description": {
          "value": "<p>When this creature hits a target with a melee attack, the target is grappled (escape DC based on this creature's Strength or Dexterity modifier). While grappled, the target is restrained.</p>",
        }
      }
    }
  }
]

const MONSTERS_ARCHETYPES = [
  {
    name: "Minion",
    stock: 4,
    CR: "1/8",
    HP: 9,
    ACDC: 11,
    NoA: 1,
    DpACalc: "1d6+1",
    atkBonus: 3,
    speed: 30,
    PAB: 2,
    abilities: {
      str: { value: 10, proficient: 0 },
      dex: { value: 12, proficient: 0 },
      con: { value: 10, proficient: 0 },
      int: { value: 10, proficient: 0 },
      wis: { value: 12, proficient: 0 },
      cha: { value: 10, proficient: 0 },
    },
    desc: 'The low-CR minions represented by this stat block might include ravenous rats, weak skeletons, shifty bandits, or low-ranking cultists. A minion can serve as a one-on-one combatant against 1st-level characters, or can be deployed in large groups at 4th level or above. This stat block focuses on Dexterity as its primary ability.',
    short: 'The low-CR minions represented by this stat block might include ravenous rats, weak skeletons, shifty bandits, or low-ranking cultists. A minion can serve as a one-on-one combatant against 1st-level characters, or [...]'
  },
  {
    name: "Soldier",
    stock: 6,
    CR: "1/2",
    HP: 22,
    ACDC: 12,
    NoA: 1,
    DpACalc: "1d12+2",
    atkBonus: 4,
    speed: 30,
    PAB: 2,
    abilities: {
      str: { value: 14, proficient: 0 },
      dex: { value: 12, proficient: 0 },
      con: { value: 10, proficient: 0 },
      int: { value: 10, proficient: 0 },
      wis: { value: 10, proficient: 0 },
      cha: { value: 10, proficient: 0 },
    },
    desc: "Representing seasoned guards, trained soldiers, powerful bandits, murderous humanoids, or armed undead, the soldier stat block works well as a boss at 1st level, an elite foe for two 2nd-level characters, or one-on-one combatants at 4th level, or in large groups at 6th level and above. Strength is this stat block's primary ability.",
    short: "Representing seasoned guards, trained soldiers, powerful bandits, murderous humanoids, or armed undead, the soldier stat block works well as a boss at 1st level, an elite foe for two 2nd-level characters, or [...]"
  },
  {
    name: "Brute",
    stock: 10,
    CR: "2",
    HP: 45,
    ACDC: 13,
    NoA: 2,
    DpACalc: "1d12+3",
    atkBonus: 5,
    speed: 30,
    PAB: 2,
    abilities: {
      str: { value: 16, proficient: 0 },
      dex: { value: 12, proficient: 0 },
      con: { value: 14, proficient: 1 },
      int: { value: 10, proficient: 0 },
      wis: { value: 10, proficient: 0 },
      cha: { value: 8, proficient: 0 },
    },
    skills: {
      ath: { value: 1 }
    },
    desc: "Heavy-hitting veterans, capable bodyguards, low-ranking demons or devils, dangerous monsters in the wild, and powerful humanoids can all be represented by this stat block. A brute can serve as a boss against 2nd-level characters, an elite foe against two 4th-level characters, or a one-on-one opponent at 5th level, or in large groups at 10th level. This stat block relies on Strength.",
    short: "Heavy-hitting veterans, capable bodyguards, low-ranking demons or devils, dangerous monsters in the wild, and powerful humanoids can all be represented by this stat block. A brute can serve as a boss against 2nd-level characters, [...]"
  },
  {
    name: "Specialist",
    stock: 20,
    CR: "4",
    HP: 84,
    ACDC: 14,
    NoA: 2,
    DpACalc: "3d6+4",
    atkBonus: 6,
    speed: 30,
    PAB: 2,
    abilities: {
      str: { value: 12, proficient: 0 },
      dex: { value: 18, proficient: 1 },
      con: { value: 14, proficient: 0 },
      int: { value: 10, proficient: 0 },
      wis: { value: 14, proficient: 1 },
      cha: { value: 12, proficient: 0 },
    },
    skills: {
      acr: { value: 1 },
      prc: { value: 1 },
      ste: { value: 1 }
    },
    desc: "This stat block can represent spies, assassins, hunters, and trained elite forces. The specialist serves as a boss for 4th-level characters, an elite opponent versus two 5th-level characters, or a one-on-one combatant for 10th-level characters, or in large groups against 16th-level characters. Dexterity is this stat block's primary ability.",
    short: "This stat block can represent spies, assassins, hunters, and trained elite forces. The specialist serves as a boss for 4th-level characters, an elite opponent versus two 5th-level characters, or a one-on-one combatant [...]"
  },
  {
    name: "Myrmidon",
    stock: 20,
    CR: "7",
    HP: 130,
    ACDC: 15,
    NoA: 3,
    DpACalc: "3d8+4",
    atkBonus: 7,
    speed: 30,
    PAB: 3,
    abilities: {
      str: { value: 10, proficient: 0 },
      dex: { value: 14, proficient: 1 },
      con: { value: 14, proficient: 0 },
      int: { value: 18, proficient: 0 },
      wis: { value: 14, proficient: 1 },
      cha: { value: 10, proficient: 0 },
    },
    skills: {
      prc: { value: 1 }
    },
    desc: "Powerful elite bodyguards, high priests, wizards, warlocks, sorcerers, demons, and devils can all be represented by this stat block. A myrmidon can serve as a boss monster for 5th-level characters, an elite combatant against two characters of 7th level, or a one-on-one combatant against 14th-level characters, or in large groups against 20th-level characters. This stat block focuses on Intelligence.",
    short: "Powerful elite bodyguards, high priests, wizards, warlocks, sorcerers, demons, and devils can all be represented by this stat block. A myrmidon can serve as a boss monster for 5th-level characters, an elite combatant against [...]"
  },
  {
    name: "Sentinel",
    stock: 20,
    CR: "11",
    HP: 165,
    ACDC: 17,
    NoA: 4,
    DpACalc: "3d8+5",
    atkBonus: 9,
    speed: 30,
    PAB: 4,
    abilities: {
      str: { value: 10, proficient: 0 },
      dex: { value: 14, proficient: 1 },
      con: { value: 14, proficient: 0 },
      int: { value: 18, proficient: 0 },
      wis: { value: 14, proficient: 1 },
      cha: { value: 10, proficient: 0 },
    },
    skills: {
      prc: { value: 1 }
    },
    desc: "This stat block is a good fit for strong, often-otherworldly creatures such as demons, devils, impressive beings of the Outer Planes, guardian constructs, or powerful undead. The sentinel can serve as a boss for 7th-level characters, an elite foe against two 12th-level characters, or can stand one-on-one against 16th-level characters. This stat block focuses on Strength.",
    short: "This stat block is a good fit for strong, often-otherworldly creatures such as demons, devils, impressive beings of the Outer Planes, guardian constructs, or powerful undead. The sentinel can serve as a boss for 7th-level [...]"
  },
  {
    name: "Champion",
    stock: 20,
    CR: "15",
    HP: 212,
    ACDC: 19,
    NoA: 4,
    DpACalc: "4d8+6",
    atkBonus: 9,
    speed: 30,
    PAB: 5,
    abilities: {
      str: { value: 10, proficient: 0 },
      dex: { value: 12, proficient: 0 },
      con: { value: 18, proficient: 0 },
      int: { value: 12, proficient: 0 },
      wis: { value: 16, proficient: 1 },
      cha: { value: 22, proficient: 1 },
    },
    skills: {
      prc: { value: 1 }
    },
    desc: "Representing greater demons, devils, vampires, liches, or powerful spellcasters, the champion serves as a boss for 11th-level characters, an elite foe for two 15th-level characters, or a one-on-one challenge against 17th-level characters. This stat block focuses on Charisma.",
    short: "Representing greater demons, devils, vampires, liches, or powerful spellcasters, the champion serves as a boss for 11th-level characters, an elite foe for two 15th-level characters, or a one-on-one challenge against [...]"
  }
]



export {
  MONSTERS_STATS, MONSTERS_TYPE, MONSTERS_ARCHETYPES, MONSTERS_FEATURES
}