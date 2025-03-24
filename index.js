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
            return result;
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
            //console.log(`${this.name} rolled a ${result}.`)
            return result;
            }
            
      }


//PART3
//CLASS FEATURES
class Companion extends Character{
    constructor (name,type,companion)
    {
        super(name),
        this.type = type,
        this.companion = companion;
    }
  }
  
class Adventurer extends Character {
    static roles = ["Fighter","Healer","Wizard"];
    //create obj for companion
    constructor (name, role,companion) {
      super(name);
      // Adventurers have specialized roles.
      if(Adventurer.roles.indexOf(role) === -1)
      {
        throw new Error ("Role not found in the given roles");
        
      }
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.companion = companion,
      this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      
    }

    //Metho duel
    duel(adventurer){
        
       
        while(this.health >= 50 && adventurer.health >= 50)
        {
            const res1 = super.roll();
            const res2 = adventurer.roll();
            if(res1 < res2)
            {
                this.health =this.health -1;
            }
            else{
            adventurer.health -=1;
            }
            console.log(`${this.name} : health = ${this.health} : roll ${res1}`);
            console.log(` ${adventurer.name} : health = ${adventurer.health} : roll ${res2}`);
        
        }
        if(this.health>50)
        {
            console.log(`${this.name} is the winner`);
        }
        else{
            console.log(`${adventurer.name} is the winner`);
        }
    }
  }

  //CREATING COMPANION CLASS
const frank = new Companion ("Frank","Flea");
frank.inventory = ["small hat", "sunglasses"];
const leo = new Companion("Leo","Cat",frank);
//try{
const robin = new Adventurer("Robin","Healer",leo);
robin.inventory = ["sword", "potion", "artifact"];
robin.roll();
console.log(robin.health);
//}
//catch(error)
//{
    //console.error(error.message);
//}


//frank.companion=leo;


leo.roll();
frank.roll();

//PART5
class AdventurerFactory {  
    constructor (role) {
      this.role = role;
      this.adventurers = [];
    }
    generate (name) {
      const newAdventurer = new Adventurer(name, this.role);
      this.adventurers.push(newAdventurer);
    }
    findByIndex (index) {
      return this.adventurers[index];
    }
    findByName (name) {
      return this.adventurers.find((a) => a.name === name);
    }
  }
  
  const healers = new AdventurerFactory("Healer");
  const deva = healers.generate("Deva");
  const mano = healers.generate("Mano");
  console.log(healers);

  //PART6
  //DVELOPING SKILLS
 const karthik = new Adventurer("Karthik","Healer",leo);
 karthik.health = 75;
 robin.health =60;
 karthik.inventory = ["sword", "potion", "artifact"];
 robin.duel(karthik);
