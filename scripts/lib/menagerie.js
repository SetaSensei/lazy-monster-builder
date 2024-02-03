export default class Menagerie {
    content = [
        "0	<1	10	3	(2-4)	+2	2	1	2	(1d4)	Commoner,	rat,	spider",
        "1/8	<1	11	9	(7-11)	+3	3	1	3	(1d4+1)	Bandit,	cultist,	giant	rat	",
        "1/4	1	11	13	(10-16)	+3	5	1	5	(1d6+2)	Acolyte,	skeleton,	wolf	",
        "1/2	2	12	22	(17-28)	+4	10	1	10	(2d6+3)	Black	bear,	scout,	shadow	",
        "1	3	12	33	(25-41)	+5	12	2	6	(1d8+2)	Dire	wolf,	specter,	spy	",
        "2	5	13	45	(34-56)	+5	17	2	9	(2d6+2)	Ghast,	ogre,	priest	",
        "3	7	13	65	(49-81)	+5	23	2	12	(2d8+3)	Knight,	mummy,	werewolf	",
        "4	9	14	85	(64-106)	+6	29	2	15	(3d8+2)	Ettin,	ghost	",
        "5	10	15	95	(71-119)	+7	35	3	12	(3d6+2)	Elemental,	gladiator,	vampire	spawn	",
        "6	11	15	112	(84-140)	+7	41	3	14	(3d6+4)	Mage,	medusa,	wyvern	",
        "7	12	15	127	(95-159)	+7	47	3	16	(3d8+3)	Stone	giant,	young	black	dragon	",
        "8	13	15	136	(102-170)	+7	53	3	18	(3d10+2)	Assassin,	frost	giant	",
        "9	15	16	145	(109-181)	+8	59	3	22	(3d12+3)	Bone	devil,	fire	giant,	young	blue	dragon	",
        "10	16	17	155	(116-194)	+9	65	4	16	(3d8+3)	Stone	golem,	young	red	dragon	",
        "11	17	17	165	(124-206)	+9	71	4	18	(3d10+2)	Djinni,	efreeti,	horned	devil	",
        "12	18	17	175	(131-219)	+9	77	4	19	(3d10+3)	Archmage,	erinyes	",
        "13	19	18	184	(138-230)	+10	83	4	21	(4d8+3)	Adult	white	dragon,	storm	giant,	vampire	",
        "14	20	19	196	(147-245)	+11	89	4	22	(4d10)	Adult	black	dragon,	ice	devil	",
        "15	>20	19	210	(158-263)	+11	95	5	19	(3d10+3)	Adult	green	dragon,	mummy	lord,	purple	worm	",
        "16	>20	19	229	(172-286)	+11	101	5	22	(3d12+3)	Adult	blue	dragon,	iron	golem,	marilith	",
        "17	>20	20	246	(185-308)	+12	107	5	21	(4d8+3)	Adult	red	dragon	",
        "18	>20	21	266	(200-333)	+13	113	5	23	(4d10+1)	Demilich	",
        "19	>20	21	285	(214-356)	+13	119	5	24	(4d10+2)	Balor	",
        "20	>20	21	300	(225-375)	+13	132	5	26	(4d12)	Ancient	white	dragon,	pit	fiend	",
        "21	>20	22	325	(244-406)	+14	150	5	30	(4d12+4)	Ancient	black	dragon,	lich,	solar	",
        "22	>20	23	350	(263-438)	+15	168	5	34	(4d12+8)	Ancient	green	dragon	",
        "23	>20	23	375	(281-469)	+15	186	5	37	(6d10+4)	Ancient	blue	dragon,	kraken	",
        "24	>20	23	400	(300-500)	+15	204	5	41	(6d10+8)	Ancient	red	dragon	",
        "25	>20	24	430	(323-538)	+16	222	5	44	(6d10+11)	",
        "26	>20	25	460	(345-575)	+17	240	5	48	(6d10+15)	",
        "27	>20	25	490	(368-613)	+17	258	5	52	(6d10+19)	",
        "28	>20	25	540	(405-675)	+17	276	5	55	(6d10+22)	",
        "29	>20	26	600	(450-750)	+18	294	5	59	(6d10+26)	",
        "30	>20	27	666	(500-833)	+19	312	5	62	(6d10+29)	Tarrasque	"
        ]
    constructor() {
        this.forge = []
        this.content.forEach(c => {
            const dat = c.split("\t")
            var entry = {}
            entry.CR = dat[0]
            entry.ECL = dat[1]
            entry.ACDC = dat[2]
            entry.HP = dat[3]
            entry.HPLow =  dat[4].slice(1, dat[4].indexOf('-'))
            entry.HPHigh =  dat[4].slice(dat[4].indexOf('-')+1).replace(')', '')
            entry.PAB = dat[5]
            entry.DpR = dat[6]
            entry.NoA = dat[7]
            entry.DpA = dat[8]
            entry.DpACalc = dat[9].slice(1, dat[9].length-1)
            entry.example = dat.slice(10)

            this.forge.push(entry)
        })

        console.log(this.forge)
    }


}