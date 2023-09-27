// Loop through the following array and count how many "computers" there are. Log the final count:

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer",
];

// for (var i = 0; i < officeItems.length; i++){
//     if (officeItems[i] === "computer") {
//         console.log(officeItems[i])
//     }
// }



// #2
// Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if they aren't 18.

var peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12,
    gender: ["male", "HIM"
      // {
      //   pronoun: "he",
      //   possPronoun: "his",
      //   possAdjective: "his",
      //   object: "him",
      //   moniker: "sir",
      // },
    ],
  },
  {
    name: "Madeline",
    age: 80,
    gender: ["female", "SHE'S"]
      // { pronoun: "she",
      //   possPronoun: "hers",
      //   possAdjective: "her",
      //   object: "her",
      //   moniker: "ma'am",
      // }
    ,
  },
  {
    name: "Cheryl",
    age: 22,
    gender: ["female", "SHE'S"
      // {
      //   pronoun: "she",
      //   possPronoun: "hers",
      //   possAdjective: "her",
      //   object: "her",
      //   moniker: "ma'am",
      // },
    ],
  },
  {
    name: "Sam",
    age: 30,
    gender: ["male", "HE'S"
      // {
      //   pronoun: "he",
      //   possPronoun: "his",
      //   possAdjective: "his",
      //   object: "him",
      //   moniker: "sir",
      // },
    ],
  },
  {
    name: "Suzy",
    age: 4,
    gender: ["female", "Her"
      // {
      //   pronoun: "she",
      //   possPronoun: "hers",
      //   possAdjective: "her",
      //   object: "her",
      //   moniker: "ma'am",
      // },
    ],
  },
];

for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        console.log(
          peopleWhoWantToSeeMadMaxFuryRoad[i].name +
            " is old enough to see Mad Max." + " " +
              peopleWhoWantToSeeMadMaxFuryRoad[i].gender[1] +
            " good to see Mad Max Fury Road."
        );
    }
    else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age <= 17) {
        console.log(
          peopleWhoWantToSeeMadMaxFuryRoad[i].name +
            " is not old enough to see Mad Max," +
            " don't let " +
            peopleWhoWantToSeeMadMaxFuryRoad[i].gender[1]
         + " in!");
    }
}



// Log to the console a personalized message like:

// `Mike is not old enough to see Mad Max`

// or

// `Madeline is old enough to see Mad Max.`

// Check to see if the movie goer is a male or female for an even more personalized message.

// `Mike is not old enough to see Mad Max Fury Road, don't let HIM in.`

// or

// `Madeline is old enough. SHE'S good to see Mad Max Fury Road.`

const gender = {
  male: {
    pronoun: "he",
    possPronoun: "his",
    possAdjective: "his",
    object: "him",
    moniker: "sir",
  },
  female: {
    pronoun: "she",
    possPronoun: "hers",
    possAdjective: "her",
    object: "her",
    moniker: "ma'am",
  },
};