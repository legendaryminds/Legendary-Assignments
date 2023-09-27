// Loop through the following array, and log to the console "hooray" for every party there is.

var eventsAtWork = [
  "work",
  "pretend to work",
  "party",
  "work",
  "meeting",
  "party",
  "daily grind",
  "work",
  "party",
];

// for (var i = 0; i < eventsAtWork.length; i++) {
//     // console.log(eventsAtWork[i]);
//     if (eventsAtWork[i] === "party") {
//         console.log("Hooray")
//     }
// }

// Loop through the following array, and count how many "trues" there are.

var users = [
  {
    name: "Sophie",
    age: 12,
  },
  {
    name: "Larry",
    age: 32,
  },
  {
    name: "Cathy",
    age: 40,
  },
];

// Add an isAdmin property to each of the users in this array.

for (var i = 0; i < users.length; i++){
  users[i].isAdmin = true
}
console.log(users)