// TODO: The ranger (Xavamor The Ghost) has a 50% chance to attack twice.

// Heros
const paladin = new heroCreature({
    name: "Lord Farkas The Brave",
    class: "paladin",
    health: 110,
    weapon: "Long Sword of Light",
    attackMove: selectattackMove(paladinAttack),
    baseDamage: 17,
    chanceToCrit: 0.07,
    chanceToMiss: 0.57,
    healthOutputElement: document.getElementById("paladinCurrentHealth")
})
const barbarian = new heroCreature({
    name: "Gruulvik The Raider",
    class: "barbarian",
    health: 120,
    weapon: "Cursed Battleaxe",
    attackMove: selectattackMove(barbarianAttack),
    baseDamage: 19,
    chanceToCrit: 0.04,
    chanceToMiss: 0.65,
    healthOutputElement: document.getElementById("barbarianCurrentHealth")
})
const wizard = new heroCreature({
    name: "Astrial The Wise",
    class: "wizard",
    health: 65,
    maxhealth: this.health * 2,
    weapon: "Cataclysmic Staff",
    attackMove: selectattackMove(wizardAttack),
    chanceToCrit: 0.60,
    chanceToMiss: 0.27,
    baseDamage: 9,
    healthOutputElement: document.getElementById("wizardCurrentHealth")
})
const ranger = new heroCreature({
    name: "Xavamor The Ghost",
    class: "ranger",
    health: 55,
    maxhealth: this.health * 3,
    weapon: "Enchanted Bow",
    attackMove: selectattackMove(rangerAttack),
    chanceToCrit: 0.95,    
    chanceToMiss: 0.05,
    baseDamage: 4.5,
    healthOutputElement: document.getElementById("rangerCurrentHealth")
})