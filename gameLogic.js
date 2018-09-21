// Combat Status Messages
const battleResults = document.getElementById("combatMessage")
function messageContainer(battle) {
    let battleResult = document.createTextNode(battle.message);
    let container = document.createElement("p");
    let battleMessage = document.createElement("h3");
    battleMessage.appendChild(battleResult);
    container.appendChild(battleMessage);
    battleResults.appendChild(container);
}

// Enemy child constructor
function enemyCreatures(options) {
    Creature.call(this, options)
    this.attackMove = selectattackMove(goblinAttack)
}
enemyCreatures.prototype = Object.create(Creature.prototype)
enemyCreatures.prototype.constructor = enemyCreatures

// Hero child constructor
function heroCreature(options) {
    Creature.call(this, options)
    this.maxHealth = options.maxHealth
    // this.armor = options.armor
}
heroCreature.prototype = Object.create(Creature.prototype)
heroCreature.prototype.constructor = heroCreature

// Attack moves
let goblinAttack = ["jabbed", "shanked", "wounded", "cut", "thrashed", "flailed"]
let paladinAttack = ["stabbed", "sliced", "gutted", "jabbed", "struck", "pierced"]
let barbarianAttack = ["lascerated", "hacked", "cleaved", "disembowelled", "slashed", "pulverized"]
let wizardAttack = ["incinerated", "crushed", "attacked by reanimated zombies", "shocked by a lightning storm", "mutilated"]
let rangerAttack = ["shot", "burned", "poisoned", "struck", "blinded", "hit with a barrage of arrows", "attacked with a reanimated corpse"]
function selectattackMove(creatureAttackMove) {
    let chooseAttack = creatureAttackMove[Math.floor(Math.random() * creatureAttackMove.length)]
    return chooseAttack
}


// Object Constructor
function Creature(options) {
    this.name = options.name;
    this.class = options.class;
    this.health = options.health;
    this.chanceToCrit = options.chanceToCrit;
    this.chanceToMiss = options.chanceToMiss;
    this.baseDamage = options.baseDamage;
    this.healthOutputElement = options.healthOutputElement;
    this.weapon = options.weapon;
    this.attackMove = options.attackMove;
}
// this.turn = options.turn
// this.handleEvent = function(event) {
// }
// function chooseHero() {
//     document.getElementById("myHeroSelection").bind(Creature)
// }
// this.boundclickevent = this.clickevent.bind(this)


Creature.prototype.fight = function (creature) {
    if (Math.random() < this.chanceToMiss) {
        const dodgeMessage = {
            message: `DODGE STATUS: ${creature.name} dodged ${this.name}'s attack.`
        }
        messageContainer(dodgeMessage);
    } else {
        const dmg = Math.floor(Math.random() < this.chanceToCrit
            ? this.baseDamage * 2
            : this.baseDamage)
        creature.health -= dmg
        // this.selectattackMove
        if (creature.health <= 0) {
            creature.health = 0
        }
        const attackMessage = {
            message: `ATTACK STATUS: ${creature.name} has been ${this.attackMove} by the ${this.class}'s ${this.weapon} dealing ${dmg}! The ${creature.class} is now at ${creature.health} health.`
        }
        messageContainer(attackMessage)
        // Updates Health in Character's Table
        creature.healthOutputElement.textContent = creature.health;
        this.healthOutputElement.textContent = this.health;
    }
}

function battle(hero, ...monsters) {
    for (let monster of monsters) {
        while (hero.health > 0 && monster.health > 0) {
            hero.fight(monster)
            monster.fight(hero)
        }
        if (hero.health <= 0) {
            hero.health = 0;
            // return;
            const deadMessage = {
                message: `CHARACTER STATUS: ${hero.name} died and ${monster.name} survived.`
            }
            messageContainer(deadMessage)
        }
        if (monster.health <= 0) {
            monster.health = 0;
            hero.health = hero.maxHealth;
            const deadMessage = {
                message: `CHARACTER STATUS: ${monster.name} died and ${hero.name} survived.`
            }
            messageContainer(deadMessage)
        }
    }
}



// this.battleTurns = function (hero, ...monsters) {
//     for (let monster of monsters) {
//     this.turn = this.turn == hero ? monster : hero
//     }
// }

// function selectPaladin() {
//     document.getElementById("paladinFightGoblinButton").addEventListener("click", Creature.paladin
//     );
// }
// console.log(selectPaladin())

// function selectattackMove() {
//     let randomAttack = Math.floor(Math.random() * Creature.options.attackMove.length)
//     return this.creature.attackMove[randomAttack]
// }
// console.log(Creature.options.attackMove.length)




// function enrageHero(hero) {
//     hero.health = hero.maxHealth
//     this.healthOutputElement.textContent = this.health;
// return hero
// }
// console.log(heroCreature.barbarian)

// heroCreature.prototype.maxHealth = function (hero) {
//     hero.health * 2
//     this.healthOutputElement.textContent = this.health;
//     return;
// }

// function enrageHero(hero) {
//     let enrage = hero.health * 3
//     this.healthOutputElement.textContent = this.health;
//     return enrage
// }


// document.getElementById("enragebarbarian").addEventListener("click", function () {
//     enrageHero(barbarian);
// });
// paladin image
document.getElementById("paladinFightGoblinButton").addEventListener("click", function () {
    battle(paladin, goblin, goblin1, goblin2, goblin3, goblin4, goblin5, goblin6);
});
// barbarian image
document.getElementById("barbarianFightGoblinButton").addEventListener("click", function () {
    battle(barbarian, goblin, goblin1, goblin2, goblin3, goblin4, goblin5, goblin6);
});
// wizard image
document.getElementById("wizardFightGoblinButton").addEventListener("click", function () {
    battle(wizard, goblin, goblin1, goblin2, goblin3, goblin4, goblin5, goblin6);
});
// ranger image
document.getElementById("rangerFightGoblinButton").addEventListener("click", function () {
    battle(ranger, goblin, goblin1, goblin2, goblin3, goblin4, goblin5, goblin6);
});
// battle clan button
// document.getElementById("barbarianFightClanButton").addEventListener("click", function () {
//     battle(barbarian, paladin, wizard, ranger);
// });
// hero VS hero 
// document.getElementById("").addEventListener("click", function () {
//     battle(selectHero1(), selectHero2());
// });

// reset game
function resetGame() {
    location.reload();
}
document.getElementById("resetbutton").addEventListener("click", function () {
    resetGame();
});