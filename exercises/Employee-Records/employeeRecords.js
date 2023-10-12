// You are to create a collection of employee's information for your company. Each employee has the following attributes:

// 1. Name

// 1. Salary

// 1. Job title
// 1. Status

// First, you will create an empty array named `employees`

var employees = []



// Next, you will create an `Employee` constructor with the first three attributes defined at the time of instantiation and the fourth will be defaulted to `"Full Time"`.

function Employee(fName, lName, salary, jobTitle, status = "Full Time") {
    this.firstName = fName;
    this.lastName = lName;
    this.salary = salary;
    this.jobTitle = jobTitle;
    this.status = status
    this.printEmployeeForm = function() {
        console.log("fName: ", fName)
        console.log("lName: ", lName);
        console.log("salary: ", salary);
        console.log("jobTitle: ", jobTitle);
        console.log("status: ", status);
    }
}

 
// 


// This constructor will also have a method called `printEmployeeForm` that prints the employee's information to the console.

// employee1.printEmployeeForm();

// (e.g. `"Name: Bob, Job Title: V School Instructor, Salary: $3000/hour, Status: Part time"`)

// You will then:

// 1. Instantiate three employees

var employee1 = new Employee("Cynthia", "Carter", 900000, "Boss");
var employee2 = new Employee("Jack", "Frost", 600000, "Assistant");
var employee3 = new Employee("Suzi", "Que", 450000, "Teacher");   

// 2. Override the status attribute of one of them to either "Part Time" or "Contract"

//** Ask how to do #2 */

// 3. Call the `printEmployeeForm` method for each employee

// employee1.printEmployeeForm();
// employee2.printEmployeeForm();
// employee3.printEmployeeForm();

// 4. Put the generated employees into the `employees` array using whichever method you prefer.C

employees.push(employee1, employee2, employee3)
console.log(employees)

//** Ask how to not print "printEmployeeForm"
