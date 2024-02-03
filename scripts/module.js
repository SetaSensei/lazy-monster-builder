import { vttLog, vttError, getFolderPath } from './lib/moduleLib.js'
import { MONSTERS_STATS, MONSTERS_TYPE } from './lib/monsters.js'
import Menagerie from './lib/menagerie.js';

CONFIG.debug.hooks = true

Hooks.once('init', async function () {
    var f = new Menagerie()
    console.log(f)
});

Hooks.once('ready', async function () {

});

Hooks.on('renderSidebarTab', async (app, html, data) => generate(app, html, data))

Hooks.on('changeSidebarTab', async (app, html, data) => generate(app, html, data))

function generate(app, html, data) {
    if (app.options.classes.includes('actors-sidebar') && app._element.find('.create-monster').length == 0) {
        const actionsTabButton = $('<button class="create-document create-monster"><i class="fa-solid fa-spaghetti-monster-flying"></i> Generate Monster</button>');
        const create = app._element.find('.create-entry')
        actionsTabButton.insertBefore(create)
        actionsTabButton.on('click', showMonsterForm)
    }
}

async function showMonsterForm(event) {
    const hbs = await fetch('modules/forgemyfoes/templates/create-foe.hbs').then(response => response.text());
    const template = Handlebars.compile(hbs);
    const options = { stats: MONSTERS_STATS, type: MONSTERS_TYPE }
    const html = template({ options })

    new Dialog({
        title: "Forge a Foe",
        content: html,
        buttons: {
            ok: {
                label: "Ok",
                callback: createActor
            },
            cancel: {
                label: "Cancel"
            }
        },
        close: () => "Cancel"
    }).render(true);
}

async function createActor(context) {
    const crInfos = MONSTERS_STATS[context.find('#cr-value')[0].selectedIndex]
    const dmgMid = crInfos.DpA

    const type = MONSTERS_TYPE[context.find('#monster-type')[0].selectedIndex]

    vttLog(`Creating monster ${type} CR ${crInfos.CR}`, true)

    let itemData = {
        name: "Attack",
        img: "icons/skills/melee/strike-slashes-red.webp",
        type: "weapon",
        system: {
            activation: {
                type: "action"
            },
            actionType: "mwak",
            attackBonus: crInfos.PAB,
            proficient: 0,
            damage: {
                parts: [
                    [
                        crInfos.DpACalc
                    ]
                ],
            }
        }
    }

    let attacks = {
        name: `${crInfos.NoA} attack(s)`,
        img: "icons/skills/melee/maneuver-greatsword-yellow.webp",
        type: "feat",
        system: {
            description: {
                value: `<p>The creature can perform ${crInfos.NoA} attack(s) per turn.</p>`
            }
        }
    }

    const name = `${type.name} - ${crInfos.CR}`
    const token = `modules/forgemyfoes/tokens/${type.name.toLowerCase()}.png`

    let actor = await Actor.create({
        name: name,
        type: "npc",
        img: token,
        system: {
            attributes: {
                ac: { flat: crInfos.ACDC, calc: "flat" },
                hp: { value: crInfos.HP, max: crInfos.HP }
            },
            details: {
                type: type.name,
                cr: eval(crInfos.CR)
            }
        },
        prototypeToken : {
            name: name,
            texture: {
                src: token
            }
        }
    });

    actor.createEmbeddedDocuments('Item', [itemData, attacks]);

    vttLog(`Monster created, have fun !`, true)
}

Hooks.on('renderSidebar', async (app, html, data) => {

    vttLog('renderSidebar')
})



