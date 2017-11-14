var artifacts = {
    'bos' : {
        'sort' : 1,
        'name' : 'Book of Shadows',
        'bonus' : ' Prestige Relic',
        'rating' : 250,
        'ad' : .3,
        'effect' : .05,
	'gmax' : 0.015,
	'grate' : .0000250,
	'gexpo' : 1,
        'max' : -1,
        'ccoef' : .7,
        'cexpo' : 2.5,
        'type' : 'multiply',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'sov' : {
        'sort' : 2,
        'name' : 'Stone of Valrunes',
        'bonus' : ' Basic Titan Gold',
        'rating' : 10,
        'ad' : .5,
        'effect' : .3,
        'max' : -1,
	'gmax' : 0.05,
	'grate' : .0000625,
	'gexpo' : 1,
        'ccoef' : .7,
        'cexpo' : 1.8,
        'type' : 'multiply',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'coc' : {
        'sort' : 3,
        'name' : 'Chest of Contentment',
        'bonus' : ' Chesterson Gold',
        'rating' : 15,
        'ad' : .4,
        'effect' : .25,
        'max' : -1,
	'gmax' : 0.05,
	'grate' : .0000500,
	'gexpo' : 1,
        'ccoef' : 1,
        'cexpo' : 1.8,
        'type' : 'multiply',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'hs' : {
        'sort' : 4,
        'name' : 'Heroic Shield',
        'bonus' : ' Boss Gold',
        'rating' : 25,
        'ad' : .4,
        'effect' : .2,
        'max' : -1,
	'gmax' : 0.05,
	'grate' : .0000500,
	'gexpo' : 1,
        'ccoef' : .7,
        'cexpo' : 1.8,
        'type' : 'multiply',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'bop' : {
        'sort' : 5,
        'name' : 'Book of Prophecy',
        'bonus' : ' All Gold',
        'rating' : 20,
        'ad' : .3,
        'effect' : .2,
        'max' : -1,
	'gmax' : 0.0375,
	'grate' : .0000375,
	'gexpo' : 1,
        'ccoef' : .7,
        'cexpo' : 2.2,
        'type' : 'multiply',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'zc' : {
        'sort' : 6,
        'name' : 'Zakynthos Coin',
        'bonus' : ' Inactive Gold',
        'rating' : 5,
        'ad' : .3,
        'effect' : .2,
        'max' : -1,
	'gmax' : 0.05,
	'grate' : .0000500,
	'gexpo' : 1,
        'ccoef' : .7,
        'cexpo' : 1.8,
        'type' : 'multiply',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'gfa' : {
        'sort' : 7,
        'name' : 'Great Fay Amulet',
        'bonus' : ' Fairy Gold',
        'rating' : 15,
        'ad' : .4,
        'effect' : .1,
        'max' : -1,
	'gmax' : 0.05,
	'grate' : .0000450,
	'gexpo' : 1,
        'ccoef' : 1,
        'cexpo' : 1.8,
        'type' : 'multiply',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'coe' : {
        'sort' : 8,
        'name' : 'Coins of Ebizu',
        'bonus' : ' Splash Gold',
        'rating' : 20,
        'ad' : .5,
        'effect' : .3,
        'max' : -1,
	'gmax' : 0.05,
	'grate' : .0000500,
	'gexpo' : 1,
        'ccoef' : .7,
        'cexpo' : 1.8,
        'type' : 'multiply',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'hsw' : {
        'sort' : 9,
        'name' : 'Heavenly Sword',
        'bonus' : ' All Artifact Damage',
        'rating' : 20,
        'ad' : 1,
        'effect' : .05,
        'max' : -1,
	'gmax' : 0.04,
	'grate' : .0000375,
	'gexpo' : 1,
        'ccoef' : .7,
        'cexpo' : 2.2,
        'type' : 'multiply_pct',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'dr' : {
        'sort' : 10,
        'name' : 'Divine Retribution',
        'bonus' : ' All Damage',
        'rating' : 20,
        'ad' : 1,
        'effect' : .1,
        'max' : -1,
	'gmax' : 0.04,
	'grate' : .0000375,
	'gexpo' : 1,
        'ccoef' : 1,
        'cexpo' : 2,
        'type' : 'multiply',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'dh' : {
        'sort' : 11,
        'name' : 'Drunken Hammer',
        'bonus' : ' Tap Damage',
        'rating' : 25,
        'ad' : .3,
        'effect' : .1,
        'max' : -1,
	'gmax' : 0.05,
	'grate' : .0000500,
	'gexpo' : 1,
        'ccoef' : .6,
        'cexpo' : 1.7,
        'type' : 'multiply',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'ss' : {
        'sort' : 11,
        'name' : 'Samosek Sword',
        'bonus' : ' Sword Attack Damage',
        'rating' : 15,
        'ad' : .5,
        'effect' : .1,
        'max' : -1,
	'gmax' : 0.04,
	'grate' : .0000350,
	'gexpo' : 1,
        'ccoef' : .7,
        'cexpo' : 2,
        'type' : 'multiply',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'hb' : {
        'sort' : 13,
        'name' : 'Hero\'s Blade',
        'bonus' : ' All Hero Damage',
        'rating' : 25,
        'ad' : .5,
        'effect' : .1,
        'max' : -1,
	'gmax' : 0.05,
	'grate' : .0000500,
	'gexpo' : 1,
        'ccoef' : .7,
        'cexpo' : 1.7,
        'type' : 'multiply',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'tsos' : {
        'sort' : 14,
        'name' : 'The Sword of Storms',
        'bonus' : ' Melee Hero Damage',
        'rating' : 5,
        'ad' : .3,
        'effect' : .15,
        'max' : -1,
	'gmax' : 0.05,
	'grate' : .0000500,
	'gexpo' : 1,
        'ccoef' : .7,
        'cexpo' : 1.7,
        'type' : 'multiply',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'fb' : {
        'sort' : 15,
        'name' : 'Furies\' Bow',
        'bonus' : ' Ranged Hero Damage',
        'rating' : 5,
        'ad' : .3,
        'effect' : .15,
        'max' : -1,
	'gmax' : 0.05,
	'grate' : .0000500,
	'gexpo' : 1,
        'ccoef' : .7,
        'cexpo' : 1.7,
        'type' : 'multiply',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'cota' : {
        'sort' : 16,
        'name' : 'Charm of the Ancients',
        'bonus' : ' Spell Hero Damage',
        'rating' : 5,
        'ad' : .3,
        'effect' : .15,
        'max' : -1,
	'gmax' : 0.05,
	'grate' : .0000500,
	'gexpo' : 1,
        'ccoef' : .7,
        'cexpo' : 1.7,
        'type' : 'multiply',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'foe' : {
        'sort' : 17,
        'name' : 'Fruit of Eden',
        'bonus' : ' Pet Damage',
        'rating' : 5,
        'ad' : .5,
        'effect' : .1,
        'max' : -1,
	'gmax' : 0.04,
	'grate' : .0000375,
	'gexpo' : 1,
        'ccoef' : .7,
        'cexpo' : 2,
        'type' : 'multiply',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'ie' : {
        'sort' : 18,
        'name' : 'Influential Elixir',
        'bonus' : ' Clan Ship Damage',
        'rating' : 5,
        'ad' : .5,
        'effect' : .1,
        'max' : -1,
	'gmax' : 0.05,
	'grate' : .0000375,
	'gexpo' : 1,
        'ccoef' : .7,
        'cexpo' : 1.7,
        'type' : 'multiply',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'af' : {
        'sort' : 19,
        'name' : 'Avian Feather',
        'bonus' : ' Inactive Damage',
        'rating' : 5,
        'ad' : .3,
        'effect' : .2,
        'max' : -1,
	'gmax' : 0.05,
	'grate' : .0000500,
	'gexpo' : 1,
        'ccoef' : .6,
        'cexpo' : 1.7,
        'type' : 'multiply',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'hos' : {
        'sort' : 20,
        'name' : 'Heart of Storms',
        'bonus' : ' Splash Damage',
        'rating' : 20,
        'ad' : .3,
        'effect' : .00025,
        'max' : -1,
	'gmax' : 0.05,
	'grate' : .0000500,
	'gexpo' : 1,
        'ccoef' : .6,
        'cexpo' : 1.7,
        'type' : 'pct',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'bod' : {
        'sort' : 21,
        'name' : 'Blade of Damocles',
        'bonus' : ' Sword Boost',
        'rating' : 20,
        'ad' : .5,
        'effect' : .08,
        'max' : -1,
	'gmax' : 0.04,
	'grate' : .0000375,
	'gexpo' : 1,
        'ccoef' : .65,
        'cexpo' : 2,
        'type' : 'multiply',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'hom' : {
        'sort' : 22,
        'name' : 'Helmet of Madness',
        'bonus' : ' Helmet Boost',
        'rating' : 20,
        'ad' : .5,
        'effect' : .08,
        'max' : -1,
	'gmax' : 0.04,
	'grate' : .0000375,
	'gexpo' : 1,
        'ccoef' : .65,
        'cexpo' : 2,
        'type' : 'multiply',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'tp' : {
        'sort' : 23,
        'name' : 'Titanium Plating',
        'bonus' : ' Armor Boost',
        'rating' : 20,
        'ad' : .5,
        'effect' : .08,
        'max' : -1,
	'gmax' : 0.04,
	'grate' : .0000375,
	'gexpo' : 1,
        'ccoef' : .65,
        'cexpo' : 2,
        'type' : 'multiply',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'as' : {
        'sort' : 24,
        'name' : 'Amethyst Staff',
        'bonus' : ' Slash Boost',
        'rating' : 20,
        'ad' : .5,
        'effect' : .08,
        'max' : -1,
	'gmax' : 0.04,
	'grate' : .0000375,
	'gexpo' : 1,
        'ccoef' : .65,
        'cexpo' : 2,
        'type' : 'multiply',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'ig' : {
        'sort' : 25,
        'name' : 'Invader\'s Gjalarhorn',
        'bonus' : ' All Active Skill Effect',
        'rating' : 100,
        'ad' : .2,
        'effect' : .02,
        'max' : -1,
	'gmax' : 0.045,
	'grate' : .0000450,
	'gexpo' : 1,
        'ccoef' : .6,
        'cexpo' : 1.8,
        'type' : 'multiply',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'tm' : {
        'sort' : 26,
        'name' : 'Titan\'s Mask',
        'bonus' : ' Heavenly Strike Damage',
        'rating' : 10,
        'ad' : .2,
        'effect' : .1,
        'max' : -1,
	'gmax' : 0.05,
	'grate' : .0000500,
	'gexpo' : 1,
        'ccoef' : .6,
        'cexpo' : 1.7,
        'type' : 'multiply',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'rt' : {
        'sort' : 27,
        'name' : 'Royal Toxin',
        'bonus' : ' Deadly Strike Effect',
        'rating' : 10,
        'ad' : .2,
        'effect' : .1,
        'max' : -1,
	'gmax' : 0.05,
	'grate' : .0000500,
	'gexpo' : 1,
        'ccoef' : .6,
        'cexpo' : 1.7,
        'type' : 'multiply',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'lp' : {
        'sort' : 28,
        'name' : 'Laborer\'s Pendant',
        'bonus' : ' Hand of Midas Gold Bonus',
        'rating' : 25,
        'ad' : .2,
        'effect' : .1,
        'max' : -1,
	'gmax' : 0.05,
	'grate' : .0000500,
	'gexpo' : 1,
        'ccoef' : .6,
        'cexpo' : 1.7,
        'type' : 'multiply',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'bor' : {
        'sort' : 29,
        'name' : 'Bringer of Ragnarok',
        'bonus' : ' Fire Sword Damage',
        'rating' : 10,
        'ad' : .2,
        'effect' : .1,
        'max' : -1,
	'gmax' : 0.05,
	'grate' : .0000500,
	'gexpo' : 1,
        'ccoef' : .6,
        'cexpo' : 1.7,
        'type' : 'multiply',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'pof' : {
        'sort' : 30,
        'name' : 'Parchment of Foresight',
        'bonus' : ' War Cry Damage',
        'rating' : 25,
        'ad' : .2,
        'effect' : .1,
        'max' : -1,
	'gmax' : 0.05,
	'grate' : .0000500,
	'gexpo' : 1,
        'ccoef' : .6,
        'cexpo' : 1.7,
        'type' : 'multiply',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'eoe' : {
        'sort' : 31,
        'name' : 'Elixir of Eden',
        'bonus' : ' Shadow Clone Damage',
        'rating' : 5,
        'ad' : .2,
        'effect' : .1,
        'max' : -1,
	'gmax' : 0.05,
	'grate' : .0000500,
	'gexpo' : 1,
        'ccoef' : .6,
        'cexpo' : 1.7,
        'type' : 'multiply',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'pt' : {
        'sort' : 32,
        'name' : 'Phantom Timepiece',
        'bonus' : 's All Active Skill Duration',
        'rating' : 20,
        'ad' : .8,
        'effect' : 1,
        'max' : 30,
	'gmax' : 0,
	'grate' : 0,
	'gexpo' : 1,
        'ccoef' : 1,
        'cexpo' : 3,
        'type' : 'add',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'fs' : {
        'sort' : 33,
        'name' : 'Forbidden Scroll',
        'bonus' : 's Deadly Strike Duration',
        'rating' : 10,
        'ad' : 1.5,
        'effect' : 2,
        'max' : 30,
	'gmax' : 0,
	'grate' : 0,
	'gexpo' : 1,
        'ccoef' : .6,
        'cexpo' : 2.4,
        'type' : 'add',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'rof' : {
        'sort' : 34,
        'name' : 'Ring of Fealty',
        'bonus' : 's Hand of Midas Duration',
        'rating' : 15,
        'ad' : 1.5,
        'effect' : 2,
        'max' : 30,
	'gmax' : 0,
	'grate' : 0,
	'gexpo' : 1,
        'ccoef' : .6,
        'cexpo' : 2.4,
        'type' : 'add',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'ga' : {
        'sort' : 35,
        'name' : 'Glacial Axe',
        'bonus' : 's Fire Sword Duration',
        'rating' : 10,
        'ad' : 1.5,
        'effect' : 2,
        'max' : 30,
	'gmax' : 0,
	'grate' : 0,
	'gexpo' : 1,
        'ccoef' : .6,
        'cexpo' : 2.4,
        'type' : 'add',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'a' : {
        'sort' : 36,
        'name' : 'Aegis',
        'bonus' : 's War Cry Duration',
        'rating' : 15,
        'ad' : 1.5,
        'effect' : 2,
        'max' : 30,
	'gmax' : 0,
	'grate' : 0,
	'gexpo' : 1,
        'ccoef' : .6,
        'cexpo' : 2.4,
        'type' : 'add',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'sg' : {
        'sort' : 37,
        'name' : 'Swamp Guantlet',
        'bonus' : 's Shadow Clone Duration',
        'rating' : 15,
        'ad' : 1.5,
        'effect' : 2,
        'max' : 30,
	'gmax' : 0,
	'grate' : 0,
	'gexpo' : 1,
        'ccoef' : .6,
        'cexpo' : 2.4,
        'type' : 'add',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'ip' : {
        'sort' : 38,
        'name' : 'Infinity Pendulum',
        'bonus' : ' Heavenly Strike Mana Cost',
        'rating' : 10,
        'ad' : .8,
        'effect' : -1,
        'max' : 20,
	'gmax' : 0,
	'grate' : 0,
	'gexpo' : 1,
        'ccoef' : .6,
        'cexpo' : 3,
        'type' : 'add',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'gok' : {
        'sort' : 39,
        'name' : 'Glove of Kuma',
        'bonus' : ' Deadly Strike Mana Cost',
        'rating' : 10,
        'ad' : .8,
        'effect' : -1,
        'max' : 30,
	'gmax' : 0,
	'grate' : 0,
	'gexpo' : 1,
        'ccoef' : .6,
        'cexpo' : 3,
        'type' : 'add',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'ts' : {
        'sort' : 40,
        'name' : 'Titan Spear',
        'bonus' : ' Hand of Midas Mana Cost',
        'rating' : 15,
        'ad' : .8,
        'effect' : -1,
        'max' : 40,
	'gmax' : 0,
	'grate' : 0,
	'gexpo' : 1,
        'ccoef' : .6,
        'cexpo' : 3,
        'type' : 'add',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'os' : {
        'sort' : 41,
        'name' : 'Oak Staff',
        'bonus' : ' Fire Sword Mana Cost',
        'rating' : 10,
        'ad' : .8,
        'effect' : -1,
        'max' : 30,
	'gmax' : 0,
	'grate' : 0,
	'gexpo' : 1,
        'ccoef' : .6,
        'cexpo' : 3,
        'type' : 'add',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'tac' : {
        'sort' : 42,
        'name' : 'The Arcana Cloak',
        'bonus' : ' War Cry Mana Cost',
        'rating' : 15,
        'ad' : .8,
        'effect' : -1,
        'max' : 40,
	'gmax' : 0,
	'grate' : 0,
	'gexpo' : 1,
        'ccoef' : .6,
        'cexpo' : 3,
        'type' : 'add',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'ho' : {
        'sort' : 43,
        'name' : 'Hunter\'s Ointment',
        'bonus' : ' Shadow Clone Mana Cost',
        'rating' : 5,
        'ad' : .8,
        'effect' : -1,
        'max' : 40,
	'gmax' : 0,
	'grate' : 0,
	'gexpo' : 1,
        'ccoef' : .6,
        'cexpo' : 3,
        'type' : 'add',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'ae' : {
        'sort' : 44,
        'name' : 'Ambrosia Elixir',
        'bonus' : ' Mana Pool Cap',
        'rating' : 5,
        'ad' : .8,
        'effect' : 2,
        'max' : 40,
	'gmax' : 0,
	'grate' : 0,
	'gexpo' : 1,
        'ccoef' : .6,
        'cexpo' : 3,
        'type' : 'add',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'eof' : {
        'sort' : 45,
        'name' : 'Egg of Fortune',
        'bonus' : ' Chesterson Chance',
        'rating' : 15,
        'ad' : 2,
        'effect' : .01,
        'max' : 10,
	'gmax' : 0,
	'grate' : 0,
	'gexpo' : 1,
        'ccoef' : 1.4,
        'cexpo' : 3,
        'type' : 'pct',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'dc' : {
        'sort' : 46,
        'name' : 'Divine Chalice',
        'bonus' : ' 10x Gold Chance',
        'rating' : 15,
        'ad' : 1,
        'effect' : .01,
        'max' : 50,
	'gmax' : 0,
	'grate' : 0,
	'gexpo' : 1,
        'ccoef' : .8,
        'cexpo' : 2.6,
        'type' : 'pct',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'is' : {
        'sort' : 47,
        'name' : 'Invader\'s Shield',
        'bonus' : ' Multiple Fairy Chance',
        'rating' : 10,
        'ad' : 1.6,
        'effect' : 0.005,
        'max' : 50,
	'gmax' : 0,
	'grate' : 0,
	'gexpo' : 1,
        'ccoef' : .5,
        'cexpo' : 2.1,
        'type' : 'pct',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'aom' : {
        'sort' : 48,
        'name' : 'Axe of Muerte',
        'bonus' : ' Critical Chance',
        'rating' : 1,
        'ad' : 3,
        'effect' : 0.005,
        'max' : 20,
	'gmax' : 0,
	'grate' : 0,
	'gexpo' : 1,
        'ccoef' : .8,
        'cexpo' : 2.5,
        'type' : 'pct',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'sor' : {
        'sort' : 49,
        'name' : 'Staff of Radiance',
        'bonus' : ' Hero Upgrade Cost',
        'rating' : 15,
        'ad' : .8,
        'effect' : -.02,
        'max' : 40,
	'gmax' : 0,
	'grate' : 0,
	'gexpo' : 1,
        'ccoef' : .5,
        'cexpo' : 2.6,
        'type' : 'pct',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
    'tms' : {
        'sort' : 50,
        'name' : 'The Master\'s Sword',
        'bonus' : ' Sword Master Upgrade Cost',
        'rating' : 5,
        'ad' : 2,
        'effect' : -.02,
        'max' : 40,
	'gmax' : 0,
	'grate' : 0,
	'gexpo' : 1,
        'ccoef' : .5,
        'cexpo' : 2.6,
        'type' : 'pct',
        'level' : 0,
        'current_ad' : '',
        'current_effect' : '',
        'displayCost' : '',
	'cost' : '',
        'efficiency' : '' },
}
