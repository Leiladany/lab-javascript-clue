// ITERATION 1

// Suspects Array

const suspectsArray = [
    
    {
        firstName: "Colonel",
        lastName: "Mustard",
        age: 40,
        occupation:"Military",
        description:"Great hunter",
        image:"Stiff-lipped gentleman",
        color:"Yellow"
    }, 
    
    {
        firstName: "Miss",
        lastName: "Scarlett",
        age: 20,
        occupation:"Singer",
        description:"Cunning",
        image:"highly attractive young woman",
        color:"Red"
    },

    {
        firstName: "Mrs.",
        lastName: "White",
        age: 40,
        occupation:"Servant",
        description:"Frazzled lady",
        image:"Old lady",
        color:"White"
    },

    {
        firstName: "Professor",
        lastName: "Plum",
        age: 28,
        occupation:"Professor",
        description:"Quick witted professor",
        image:"Intellectual",
        color:"Yellow"
    },

    {
        firstName: "Mr.",
        lastName: "Green",
        age: 30,
        occupation:"Reverend",
        description:"Hypocritical anglican priest",
        image:"Plump, elderly priest",
        color:"Green"
    },

    {
        firstName: "Mrs.",
        lastName: "Peacock",
        age: 40,
        occupation:"Aristocrat",
        description:"Grande dame",
        image:"eldery yet still attractive woman",
        color:"Blue"
    },
];

// Rooms Array

const roomsArray = [
    {
        name:"Bathroom",
    },

    {
        name:"Studyroom",
    },

    {
        name:"Dining Room",
    },

    {
        name:"Garage",
    },

    {
        name:"Bedroom",
    },

    {
        name:"Living Room",
    },

    {
        name:"Kithcen",
    },

    {
        name:"Courtyard",
    },

    {
        name:"Basement",
    },

    {
        name:"Cinema",
    },

    {
        name:"Library",
    },

    {
        name:"Gym",
    },

    {
        name:"Indoor Pool",
    },

    {
        name:"Conservatory",
    },

    {
        name:"Spa",
    }
];

// Weapons Array

const weaponsArray = [

    {
        name:"Candlestick",
        weight:2,
    },
    {
        name:"Dagger",
        weight:40,
    },
    {
        name:"Lead Pipe",
        weight:2.80,
    },
    {
        name:"Revolver",
        weight:1.08,
    },
    {
        name:"Rope",
        weight:4,
    },
    {
        name:"Wrench",
        weight:2.15,
    },
    {
        name:"Crowbar",
        weight:1.24,
    },
    {
        name:"Poison",
        weight:2.7,
    },
    {
        name:"Small Statue",
        weight:4.4,
    }
];


// ITERATION 2

function selectRandom(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}



function pickMystery() {
    return {
        suspect: selectRandom(suspectsArray),
        weapon: selectRandom(weaponsArray),
        room: selectRandom(roomsArray),
    }
}


// ITERATION 3

function revealMystery(envelope) {
    return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`;
}
