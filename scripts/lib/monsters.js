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
    "example": [
      "Commoner",
      "rat",
      "spider"
    ]
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
    "example": [
      "Bandit",
      "cultist",
      "giant",
      "rat"
    ]
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
    "example": [
      "Acolyte",
      "skeleton",
      "wolf"
    ]
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
    "example": [
      "Black",
      "bear",
      "scout",
      "shadow"
    ]
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
    "example": [
      "Dire",
      "wolf",
      "specter",
      "spy"
    ]
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
    "example": [
      "Ghast",
      "ogre",
      "priest"
    ]
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
    "example": [
      "Knight",
      "mummy",
      "werewolf"
    ]
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
    "example": [
      "Ettin",
      "ghost"
    ]
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
    "example": [
      "Elemental",
      "gladiator",
      "vampire",
      "spawn"
    ]
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
    "example": [
      "Mage",
      "medusa",
      "wyvern"
    ]
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
    "example": [
      "Stone",
      "giant",
      "young",
      "black",
      "dragon"
    ]
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
    "example": [
      "Assassin",
      "frost",
      "giant"
    ]
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
    "example": [
      "Bone",
      "devil",
      "fire",
      "giant",
      "young",
      "blue",
      "dragon"
    ]
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
    "example": [
      "Stone",
      "golem",
      "young",
      "red",
      "dragon"
    ]
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
    "example": [
      "Djinni",
      "efreeti",
      "horned",
      "devil"
    ]
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
    "example": [
      "Archmage",
      "erinyes"
    ]
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
    "example": [
      "Adult",
      "white",
      "dragon",
      "storm",
      "giant",
      "vampire"
    ]
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
    "example": [
      "Adult",
      "black",
      "dragon",
      "ice",
      "devil"
    ]
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
    "example": [
      "Adult",
      "green",
      "dragon",
      "mummy",
      "lord",
      "purple",
      "worm"
    ]
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
    "example": [
      "Adult",
      "blue",
      "dragon",
      "iron",
      "golem",
      "marilith"
    ]
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
    "example": [
      "Adult",
      "red",
      "dragon"
    ]
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
    "example": [
      "Demilich"
    ]
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
    "example": [
      "Balor"
    ]
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
    "example": [
      "Ancient",
      "white",
      "dragon",
      "pit",
      "fiend"
    ]
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
    "example": [
      "Ancient",
      "black",
      "dragon",
      "lich",
      "solar"
    ]
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
    "example": [
      "Ancient",
      "green",
      "dragon"
    ]
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
    "example": [
      "Ancient",
      "blue",
      "dragon",
      "kraken"
    ]
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
    "example": [
      "Ancient",
      "red",
      "dragon"
    ]
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
    "example": [
    ]
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
    "example": [
      ""
    ]
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
    "example": [
      ""
    ]
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
    "example": [
      ""
    ]
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
    "example": [
      ""
    ]
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
    "example": [
      "Tarrasque"
    ]
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
  { name: "Damaging Blast" },
  { name: "Damage Reflection" },
  { name: "Misty Step" },
  { name: "Knockdown" },
  { name: "Restraining Grab" },
  { name: "Damaging Aura" },
  { name: "Energy Weapons" },
  { name: "Damage Transference" }
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
    desc: 'The low-CR minions represented by this stat block might include ravenous rats, weak skeletons, shifty bandits, or low-ranking cultists. A minion can serve as a one-on-one combatant against 1st-level characters, or can be deployed in large groups at 4th level or above. This stat block focuses on Dexterity as its primary ability.'
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
    desc: "Representing seasoned guards, trained soldiers, powerful bandits, murderous humanoids, or armed undead, the soldier stat block works well as a boss at 1st level, an elite foe for two 2nd-level characters, or one-on-one combatants at 4th level, or in large groups at 6th level and above. Strength is this stat block's primary ability."
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
    desc: "Heavy-hitting veterans, capable bodyguards, low-ranking demons or devils, dangerous monsters in the wild, and powerful humanoids can all be represented by this stat block. A brute can serve as a boss against 2nd-level characters, an elite foe against two 4th-level characters, or a one-on-one opponent at 5th level, or in large groups at 10th level. This stat block relies on Strength."
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
    desc: "This stat block can represent spies, assassins, hunters, and trained elite forces. The specialist serves as a boss for 4th-level characters, an elite opponent versus two 5th-level characters, or a one-on-one combatant for 10th-level characters, or in large groups against 16th-level characters. Dexterity is this stat block's primary ability."
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
    desc: "Powerful elite bodyguards, high priests, wizards, warlocks, sorcerers, demons, and devils can all be represented by this stat block. A myrmidon can serve as a boss monster for 5th-level characters, an elite combatant against two characters of 7th level, or a one-on-one combatant against 14th-level characters, or in large groups against 20th-level characters. This stat block focuses on Intelligence."
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
    desc: "This stat block is a good fit for strong, often-otherworldly creatures such as demons, devils, impressive beings of the Outer Planes, guardian constructs, or powerful undead. The sentinel can serve as a boss for 7th-level characters, an elite foe against two 12th-level characters, or can stand one-on-one against 16th-level characters. This stat block focuses on Strength."
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
    desc: "Representing greater demons, devils, vampires, liches, or powerful spellcasters, the champion serves as a boss for 11th-level characters, an elite foe for two 15th-level characters, or a one-on-one challenge against 17th-level characters. This stat block focuses on Charisma."
  }
]

export {
  MONSTERS_STATS, MONSTERS_TYPE, MONSTERS_ARCHETYPES, MONSTERS_FEATURES
}