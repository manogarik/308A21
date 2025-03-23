//PART1


const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        /*companion : {
            name :"Frank",
            type : "Flea",
            inventory : ["small hat" , "sun glasses"]
        }*/
            },
    roll (mod = 0) {
            const result = Math.floor(Math.random() * 20) + 1 + mod;
            console.log(`${this.name} rolled a ${result}.`)
            }
            
        }
    adventurer.companion.companion= new Object();
    adventurer.companion.companion.name="Frank";
    adventurer.companion.companion.type="Flea";
    adventurer.companion.companion.inventory=["small hat","sun glasses"];


    
    //LOOP TO ITERATE ROBIN'S INVENTORY
    for(let i = 0 ; i< adventurer.inventory.length; i++)
    {
        console.log(adventurer.inventory[i]);
    }
    
    adventurer.roll();

    //PART2
    //CLASS FANTACY
    class Character {
        static MAX_HEALTH = 100;
        constructor (name) {
          this.name = name;
          this.health = 100;
          this.inventory = [];
        }
        
        roll (mod = 0) {
            const result = Math.floor(Math.random() * 20) + 1 + mod;
            console.log(`${this.name} rolled a ${result}.`)
            }
            
      }


//PART3
//CLASS FEATURES
class Adventurer extends Character {
    static ROLES = ["Fighter","Healer","Wizard"];
    constructor (name, role) {
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }

    //Metho duel
    duel(adventurer){

    }
  }

  //CREATING COMPANION CLASS
  class Companion extends Character{
    constructor (name,type)
    {
        super(name)
        this.type = type;
        
    }
  }

const robin = new Adventurer("Robin","Leader");
robin.inventory = ["sword", "potion", "artifact"];
const leo = new Companion("Leo","Cat");
const frank = new Companion ("Frank","Flea");
frank.inventory = ["small hat", "sunglasses"];
robin.roll();
leo.roll();
frank.roll();
console.log(robin);
console.log(leo);
console.log(frank);
  