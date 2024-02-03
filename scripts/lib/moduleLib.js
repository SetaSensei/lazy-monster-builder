import * as configFile from './config/config.js'
const LOG_PREFIX = 'LMB'

const LOCAL_CONFIG = {
    environment: "prod"
}


export function getFolderPath() {
    if (configFile.GLOBAL_CONFIG.env === 'dev') {
        return 'modules/vttes-to-foundry-dev/'
    }
    return 'modules/vttes-to-foundry/'
}

const vttLog = function (message, showOnUI = false) {
    console.log(`${LOG_PREFIX} - ${message}`)

    if (showOnUI) {
        ui.notifications.info(message)
    }
}

const vttError = function (message, showOnUI = false) {
    console.error(`${LOG_PREFIX} - ${message}`)

    if (showOnUI) {
        ui.notifications.error(message)
    }
}

const vttWarn = function (message, showOnUI = false) {
    console.warn(`${LOG_PREFIX} - ${message}`)

    if (showOnUI) {
        ui.notifications.warn(message)
    }
}

const capitalizeFirstLetterOfEveryWord = function (string) {
    const words = string.split(' ')
    var output = ''

    words.forEach(word => {
        output += capitalizeFirstLetter(word) + ' '
    });

    return output.trim()
}

const capitalizeFirstLetter = function (string) {
    if (!string || string.length == 0)
        return string
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const getSizeCode = function (size) {
    return VTTES_TO_FOUNDRY_SIZES[size]
}

const getArmorType = function (armor) {
    return ARMOR_TYPES[armor]
}

const getArmorTypeAndDexLimit = function (armor) {
    var typeName = ARMOR_TYPES[armor]
    var maxDex = getArmorLimit(typeName)

    return {
        typeName,
        maxDex
    }
}

const getArmorLimit = function (armor) {
    return armor === 'medium' ? 2 : armor === 'heavy' ? 0 : null
}

const getAttackType = function (attackType) {
    var kv = ATTACK_TYPES.find(at => at.key === attackType)

    return kv ? kv.value : null
}

const getAttackRange = function (attackRange) {
    var rangeInfo = attackRange.split(' ')

    return {
        value: rangeInfo[0],
        long: null,
        units: rangeInfo[1].replace('.', '')
    }
}

const getAttackTypeFromWeaponType = function (weaponType) {
    return WEAPON_TYPE_TO_ACTION[weaponType]
}

const VTTES_TO_FOUNDRY_SIZES = {
    tiny: "tiny",
    small: "sm",
    medium: "med",
    large: "lg",
    huge: "huge",
    gargantuan: "grg"
}

const ATTACK_TYPES = [{
        key: 'Melee',
        value: 'mwak'
    },
    {
        key: 'Ranged',
        value: "rwak"
    },
    {
        key: 'Melee Spell Attack',
        value: "msak"
    },
    {
        key: 'Ranged Spell Attack',
        value: "rsak"
    }
    // test: "save",
    // test: "heal",
    // test: "abil",
    // test: "util",
    // test: "other",
]

const ARMOR_TYPES = {
    "Light Armor": "light",
    "Medium Armor": "medium",
    "Heavy Armor": "heavy",
    "Natural Armor": "natural",
    "Shield": "shield"
}

const WEAPON_TYPE_TO_ACTION = {
    "Melee Spell": "msak",
    "Melee Weapon": "mwak",
    "Ranged Spell": "rsak",
    "Ranged Weapon": "rwak",
    "Other": "other"
}

export const SPELL_TYPE_TO_ACTION = {
    "Ranged": "rsak",
    "Melee": "msak",
    "Other": "other"
}

export const ABILITIES = {
    'Strength': 'str',
    'Dexterity': 'dex',
    'Constitution': 'con',
    'Intelligence': 'int',
    'Wisdom': 'wis',
    'Charisma': 'cha'
}

const WEAPON_TYPES = {
    "Adamantite": "ada",
    "Ammunition": "amm",
    "Finesse": "fin",
    // "fir": "DND5E.WeaponPropertiesFir",
    "Focus": "foc",
    "Heavy": "hvy",
    "Light": "lgt",
    // "lod": "DND5E.WeaponPropertiesLod",
    // "mgc": "DND5E.WeaponPropertiesMgc",
    "Reach": "rch",
    // "rel": "DND5E.WeaponPropertiesRel",
    // "ret": "DND5E.WeaponPropertiesRet",
    // "sil": "DND5E.WeaponPropertiesSil",
    // "spc": "DND5E.WeaponPropertiesSpc",
    "Thrown": "thr",
    "Two-Handed": "two",
    "Versatile": "ver"
}

const WEAPON_PROPERTIES = {
    "ada": "Adamantite",
    "amm": "Ammunition",
    "fin": "Finesse",
    "fir": "Firearm",
    "foc": "Focus",
    "hvy": "Heavy",
    "lgt": "Light",
    "lod": "Loading",
    "mgc": "Magical",
    "rch": "Reach",
    "rel": "Reload",
    "ret": "Returning",
    "sil": "Silvered",
    "spc": "Special",
    "thr": "Thrown",
    "two": "Two-Handed",
    "ver": "Versatile"
};

const TIME_TRANSLATE = {
    'instantaneous': 'inst',
    'hours': 'hour',
    'minutes': 'minute'
}

export const SPELL_SCHOOLS = {
    'abjuration': 'abj',
    'conjuration': 'con',
    'divination': 'div',
    'enchantment': 'enc',
    'evocation': 'evo',
    'illusion': 'ill',
    'necromancy': 'nec',
    'transmutation': 'trs'
}

export {
    vttLog,
    vttWarn,
    vttError,
    getAttackTypeFromWeaponType,
    capitalizeFirstLetter,
    getAttackRange,
    capitalizeFirstLetterOfEveryWord,
    getSizeCode,
    getArmorTypeAndDexLimit,
    getAttackType,
    WEAPON_PROPERTIES,
    getArmorType,
    TIME_TRANSLATE
}

export function getNamesForSearch(itemName, strict = false) {

    var output = {
        initialName: itemName,
        names: [itemName.toLowerCase()],
        hasFlavorName: false
    }
    const searchParenthesisRegex = /\([\S\s]*\)/g;
    const searchStrictName = /[a-zA-Z -]+/g;
    var match
    var sctrictMatch

    if (match = searchParenthesisRegex.exec(itemName)) {
        match.forEach(m => output.names.push(m.substring(1, m.length - 1).toLowerCase()));
        output.hasFlavorName = true;
    }

    if (!strict) {
        return output
    }

    if (sctrictMatch = searchStrictName.exec(itemName)) {
        var strictNames = sctrictMatch.map(function (e) {
            return e.toLowerCase().trim()
        })
        output.names.forEach(name => {
            var strictMatch = searchStrictName.exec(name)
            if (strictMatch) {
                strictMatch = strictMatch.map(function (e) {
                    return e.toLowerCase().trim()
                })
                strictNames = strictNames.concat(strictMatch)
            }
        })
        if (strictNames.length > 0) {
            output.names = output.names.concat(strictNames)
            output.hasFlavorName = true
        }
    }

    return output
}

export function setItemGlobalOptions(options, objectToTransform) {
    if (options && options.flavorName) {
        objectToTransform.name = options.flavorName;
    }
}