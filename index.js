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
const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];
robin.roll();
robin.companion.roll();
robin.companion.companion.roll();
console.log(robin);