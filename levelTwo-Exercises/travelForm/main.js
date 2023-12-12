const form = document.tForm

form.addEventListener("submit", function (event) {
  event.preventDefault();

    var fName = form.fName.value;
    var lName = form.lName.value;
    var age = form.age.value;
    var gender = form.gender.value;
    var destination = form.destination.value;
    var diet = form.diet.value;
    var dietCheckboxes = document.querySelectorAll('input[name="diet"]:checked');
    var checkedDiet = [];

    for (var i = 0; i < dietCheckboxes.length; i++) {
    checkedDiet.push(dietCheckboxes[i].value);
    }
    

  alert(
      "First Name: " +
      fName +
      "\nLast Name: " +
      lName +
      "\nAge: " +
      age +
      "\nGender: " +
      gender +
      "\nDestination: "
      + destination +
      "\nDiet: " +
      (checkedDiet.length > 0 ? checkedDiet.join(", ") : "None selected")
  )
});


