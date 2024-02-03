import * as configFile from './config/config.js'
const LOG_PREFIX = 'LMB'

const LOCAL_CONFIG = {
    environment: "prod"
}


export function getFolderPath() {
    return 'modules/forgemyfoes/'
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

export {
    vttLog,
    vttWarn,
    vttError,
    capitalizeFirstLetter,
    capitalizeFirstLetterOfEveryWord
}