import { vttLog, vttError, getFolderPath } from './lib/moduleLib.js'
import { MONSTERS_FEATURES, MONSTERS_STATS, MONSTERS_TYPE, MONSTERS_ARCHETYPES } from './lib/monsters.js'
import TabbedDialog from './lib/tabbeddialog.js';
//import Menagerie from './lib/menagerie.js';

CONFIG.debug.hooks = false

Hooks.once('init', async function () {
    // var f = new Menagerie()
    // console.log(f)
});

Hooks.once('ready', async function () {

});

Hooks.on('renderSidebarTab', async (app, html, data) => generate(app, html, data))

Hooks.on('changeSidebarTab', async (app, html, data) => generate(app, html, data))

function generate(app, html, data) {
    if (app.options.classes.includes('actors-sidebar') && app._element.find('.create-monster').length == 0) {
        const actionsTabButton = $('<button class="create-document create-monster"><i class="fa-solid fa-spaghetti-monster-flying"></i> Generate Monster</button>');
        const create = app._element.find('button.create-entry')
        actionsTabButton.insertBefore(create)
        actionsTabButton.on('click', showMonsterForm)
    }
}

async function showMonsterForm(event) {
    const hbs = await fetch(`${getFolderPath()}/templates/create-foe.hbs`).then(response => response.text());

    const template = Handlebars.compile(hbs);
    const options = {
        stats: MONSTERS_STATS, type: MONSTERS_TYPE, path: getFolderPath(),
        statProf: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 }, features: MONSTERS_FEATURES,
        statBlocks: MONSTERS_ARCHETYPES
    }
    const html = template({ options })

    const hbsFooter = await fetch(`${getFolderPath()}/templates/footer.hbs`).then(response => response.text());
    const templateFooter = Handlebars.compile(hbsFooter);
    const htmlFooter = templateFooter({ options })

    const hbsTabBasic = await fetch(`${getFolderPath()}/templates/base-monster.hbs`).then(response => response.text());
    const templateTabBasic = Handlebars.compile(hbsTabBasic);
    const htmlTabBasic = templateTabBasic({ options })

    const hbsTabAdv = await fetch(`${getFolderPath()}/templates/advanced-monster.hbs`).then(response => response.text());
    const templateTabAdv = Handlebars.compile(hbsTabAdv);
    const htmlTabAdv = templateTabAdv({ options })


    let d = new TabbedDialog(
        {
            title: "Create a monster",
            header: "<h1>Lazy Monster Creator</h1>",
            footer: htmlFooter,
            tabs: [{
                title: "Basic monster",
                content: htmlTabBasic
            },
            {
                title: "Advanced",
                icon: "fas fa-cogs",
                content: htmlTabAdv
            },
            { content: "<i>Tab 3 content</i>" }
            ],
            buttons: {
                one: {
                    label: "Ok",
                    callback: createActor
                },
                two: {
                    label: "Cancel"
                }
            },
            default: "two",
            render: html => console.log("Register interactivity in the rendered dialog"),
            close: html => console.log("This always is logged no matter which option is chosen")

        },
        { resizable: false, initial_tab: "tab1" }

    );

    d.render(true);

    // new Dialog({
    //     title: "Create a monster",
    //     content: html,
    //     buttons: {
    //         ok: {
    //             label: "Ok",
    //             callback: createActor
    //         },
    //         cancel: {
    //             label: "Cancel"
    //         }
    //     },
    //     close: () => "Cancel"
    // }, {
    //     tabs: [{
    //         title: "on",
    //         content: html
    //     }]
    // }).render(true);
}

async function createActor(context) {
    const crInfos = MONSTERS_STATS[context.find('#cr-value')[0].selectedIndex]
    const dmgMid = crInfos.DpA

    const type = MONSTERS_TYPE[context.find('#monster-type')[0].selectedIndex]

    vttLog(`Creating monster ${type.name} CR ${crInfos.CR}`, true)

    let baseAttack = {
        name: "Attack",
        img: "icons/skills/melee/strike-slashes-red.webp",
        type: "weapon",
        system: {
            activation: {
                type: "action"
            },
            ability: "none",
            actionType: "mwak",
            proficient: 1,
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
    const token = `${getFolderPath()}/tokens/${type.name.toLowerCase()}.png`

    var str = context.find("#str")[0].value
    var dex = context.find("#dex")[0].value
    var con = context.find("#con")[0].value
    var int = context.find("#int")[0].value
    var wis = context.find("#str")[0].value
    var cha = context.find("#cha")[0].value

    var strProf = context.find("#strBonus")[0].checked
    var dexProf = context.find("#dexBonus")[0].checked
    var conProf = context.find("#conBonus")[0].checked
    var intProf = context.find("#intBonus")[0].checked
    var wisProf = context.find("#wisBonus")[0].checked
    var chaProf = context.find("#chaBonus")[0].checked


    let actor = await Actor.create({
        name: name,
        type: "npc",
        img: token,
        system: {
            attributes: {
                ac: { flat: crInfos.ACDC, calc: "flat" },
                hp: { value: crInfos.HP, max: crInfos.HP },
                prof: parseInt(crInfos.PAB)
            },
            details: {
                type: type.name,
                cr: eval(crInfos.CR)
            },
            abilities: {
                str: { value: str, proficient: strProf === true ? 1 : 0 },
                dex: { value: dex, proficient: dexProf === true ? 1 : 0 },
                con: { value: con, proficient: conProf === true ? 1 : 0 },
                int: { value: int, proficient: intProf === true ? 1 : 0 },
                wis: { value: wis, proficient: wisProf === true ? 1 : 0 },
                cha: { value: cha, proficient: chaProf === true ? 1 : 0 }
            }
        },
        prototypeToken: {
            name: name,
            texture: {
                src: token
            }
        }
    });

    await ActiveEffect.implementation.create({
        name: 'Proficiency',
        icon: "icons/sundries/books/book-rounded-red.webp",
        transfer: true,
        changes: [{
            key: 'system.attributes.prof',
            value: crInfos.PAB,
            mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE
        }]
    }, { parent: actor });

    actor.createEmbeddedDocuments('Item', [baseAttack, attacks]);

    vttLog(`Monster created, have fun !`, true)
}


