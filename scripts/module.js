import { vttLog, vttError, getFolderPath, getAbilityModifier, capitalizeFirstLetter } from './lib/moduleLib.js'
import { MONSTERS_FEATURES, MONSTERS_STATS, MONSTERS_TYPE, MONSTERS_ARCHETYPES } from './lib/monsters.js'
import TabbedDialog from './lib/tabbeddialog.js';
CONFIG.debug.hooks = false

Hooks.once('init', async function () {
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
        stats: MONSTERS_STATS.map(entry => ({ ...entry, serialized: JSON.stringify(entry) })), type: MONSTERS_TYPE, path: getFolderPath(),
        statProf: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 }, features: MONSTERS_FEATURES,
        statBlocks: MONSTERS_ARCHETYPES.map(entry => ({ ...entry, serialized: JSON.stringify(entry) }))
    }
    const html = template({ options })

    const hbsHeader = await fetch(`${getFolderPath()}/templates/header.hbs`).then(response => response.text());
    const templateHeader = Handlebars.compile(hbsHeader);
    const htmlHeader = templateHeader({ options })

    const hbsFooter = await fetch(`${getFolderPath()}/templates/footer.hbs`).then(response => response.text());
    const templateFooter = Handlebars.compile(hbsFooter);
    const htmlFooter = templateFooter({ options })

    const hbsTabBasic = await fetch(`${getFolderPath()}/templates/base-monster.hbs`).then(response => response.text());
    const templateTabBasic = Handlebars.compile(hbsTabBasic);
    const htmlTabBasic = templateTabBasic({ options })

    const hbsStatBlocks = await fetch(`${getFolderPath()}/templates/statblocks.hbs`).then(response => response.text());
    const templateStatBlocks = Handlebars.compile(hbsStatBlocks);
    const htmlStatBlocks = templateStatBlocks({ options })

    const hbsTabAdv = await fetch(`${getFolderPath()}/templates/advanced-monster.hbs`).then(response => response.text());
    const templateTabAdv = Handlebars.compile(hbsTabAdv);
    const htmlTabAdv = templateTabAdv({ options })

    const updateDom = function (activeTabId, html) {
        var activeData = {}

        if (activeTabId === "tab1") {
            const selectedOption = html.find('#cr-value').find('option:selected')
            activeData = selectedOption.data('infos')
        } else if (activeTabId === "tab2") {
            const selectedOption = html.find('#monster-stat-block').find('option:selected')
            activeData = selectedOption.data('infos')
        }

        if (activeData === undefined) {
            vttError(`Unknown tab (${activeTabId}) - cannot update stats`, true)
        }

        const abilities = ['str', 'dex', 'con', 'int', 'wis', 'cha']
        var saveProfs = []

        html.find('#hpLabel').text(activeData.HP)
        html.find('#dmgLabel').text(`${activeData.DpACalc} x ${activeData.NoA}`)
        html.find('#acLabel').text(activeData.ACDC)
        html.find('#saveBonus').text(activeData.PAB)

        if (activeData.abilities) {
            html.find('#strLabel').text(activeData.abilities.str.value)
            html.find('#dexLabel').text(activeData.abilities.dex.value)
            html.find('#conLabel').text(activeData.abilities.con.value)
            html.find('#intLabel').text(activeData.abilities.int.value)
            html.find('#wisLabel').text(activeData.abilities.wis.value)
            html.find('#chaLabel').text(activeData.abilities.cha.value)

            abilities.forEach(a => {
                const ability = activeData.abilities[a]
                if (ability.proficient) {
                    saveProfs.push(capitalizeFirstLetter(a) + ' +' + (getAbilityModifier(parseInt(ability.value)) + parseInt(activeData.PAB)))
                }
            })
        } else {
            html.find('#strLabel').text(10)
            html.find('#dexLabel').text(10)
            html.find('#conLabel').text(10)
            html.find('#intLabel').text(10)
            html.find('#wisLabel').text(10)
            html.find('#chaLabel').text(10)

            abilities.forEach(a => {
                if (html.find('#' + a + 'Bonus')[0].checked) {
                    saveProfs.push(capitalizeFirstLetter(a) + ' ' + parseInt(activeData.PAB))
                }
            })
        }
        html.find('#stLabel').text(saveProfs.join(', '))
        html.find('#monster-desc').text(activeData.desc || '')

        html.find('#selectedMonsterStats').val(JSON.stringify(activeData))
    }


    let d = new TabbedDialog(
        {
            title: "Create a monster",
            header: htmlHeader,
            footer: htmlFooter,
            tabs: [{
                title: "Monster by CR",
                content: htmlTabBasic
            },
            {
                title: "Monster by Stat Blocks",
                content: htmlStatBlocks
            }
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
            render: html => {
                const currentTab = function () {
                    return html.find('.tabs').find('.item.active').data('tab')
                }

                html.find('#cr-value').change(function () {
                    updateDom(currentTab(), html)
                });
                html.find('.lmb-save').change(function () {
                    updateDom(currentTab(), html)
                })
                html.find('#monster-stat-block').change(function () {
                    updateDom(currentTab(), html)
                })

                html.find('#monster-type').change(function () {
                    const imgPath = `${getFolderPath()}/tokens/${$(this).val().toLowerCase()}.png`
                    html.find('#token').attr('src', imgPath)
                })
            },
            close: html => console.log("This always is logged no matter which option is chosen")


        },
        {
            resizable: false, initial_tab: "tab1", tabChangeCallback: function (activeTabId, html) {
                updateDom(activeTabId, html)
            }
        }

    );

    d.render(true);
}

async function createActor(context) {
    const stats = JSON.parse(context.find('#selectedMonsterStats').val())

    const type = MONSTERS_TYPE[context.find('#monster-type')[0].selectedIndex]

    vttLog(`Creating monster ${type.name} CR ${stats.CR}`, true)



    let attacks = {
        name: `${stats.NoA} attack(s)`,
        img: "icons/skills/melee/maneuver-greatsword-yellow.webp",
        type: "feat",
        system: {
            description: {
                value: `<p>The creature can perform ${stats.NoA} attack(s) per turn.</p>`
            }
        }
    }



    const name = `${stats.name || ''} ${type.name} - (CR ${stats.CR})`
    const token = `${getFolderPath()}/tokens/${type.name.toLowerCase()}.png`
    var abilities = stats.abilities ? stats.abilities : {
        str: { value: 10, proficient: context.find("#strBonus")[0].checked === true ? 1 : 0 },
        dex: { value: 10, proficient: context.find("#dexBonus")[0].checked === true ? 1 : 0 },
        con: { value: 10, proficient: context.find("#conBonus")[0].checked === true ? 1 : 0 },
        int: { value: 10, proficient: context.find("#intBonus")[0].checked === true ? 1 : 0 },
        wis: { value: 10, proficient: context.find("#wisBonus")[0].checked === true ? 1 : 0 },
        cha: { value: 10, proficient: context.find("#chaBonus")[0].checked === true ? 1 : 0 }
    }

    let actor = await Actor.create({
        name: name,
        type: "npc",
        img: token,
        system: {
            attributes: {
                ac: { flat: stats.ACDC, calc: "flat" },
                hp: { value: stats.HP, max: stats.HP },
                prof: parseInt(stats.PAB),
                movement: { walk: 30, units: "ft" },
            },
            skills: stats.skills ? stats.skills : {},
            details: {
                type: type.name,
                cr: eval(stats.CR)
            },
            abilities: abilities
        },
        prototypeToken: {
            name: name,
            texture: {
                src: token
            }
        }
    });

    if (!stats.abilities) {
        await ActiveEffect.implementation.create({
            name: 'Proficiency',
            icon: "icons/sundries/books/book-rounded-red.webp",
            transfer: true,
            changes: [{
                key: 'system.attributes.prof',
                value: stats.PAB,
                mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE
            }]
        }, { parent: actor });

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
                            stats.DpACalc
                        ]
                    ],
                }
            }
        }
        actor.createEmbeddedDocuments('Item', [baseAttack]);
    } else {
        let melee = {
            name: "Attack",
            img: "icons/skills/melee/strike-slashes-red.webp",
            type: "weapon",
            system: {
                activation: {
                    type: "action"
                },
                ability: "none",
                actionType: "mwak",
                attackBonus: stats.atkBonus,
                proficient: 0,
                damage: {
                    parts: [
                        [
                            stats.DpACalc
                        ]
                    ],
                }
            }
        }
        actor.createEmbeddedDocuments('Item', [melee]);
    }

    actor.createEmbeddedDocuments('Item', [attacks]);

    vttLog(`Monster created, have fun !`, true)
}


