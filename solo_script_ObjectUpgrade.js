// ! ! !
// 
// Three Bugs FINAL STEP!!!!!!
// 
// 
// 
// 
// 


function Employee(name, id, salary, rating){
  this.name = name;
  this.id = id;
  this.salary = salary;
  this.rating = rating;
}

function EmployeeSTI(name, stiPerc, salary, bonus, postBonusTotal){
  this.name = name;
  this.stiPerc = stiPerc;
  this.salary = salary;
  this.bonusAmmount = bonus;
  this.postBonusTotal = postBonusTotal;
}

//Added in full names for "employees"
//
var Atticus = new Employee("Atticus Finch", "2405", "47000", 3);
var Jem = new Employee("Jem Finch", "62347", "63500", 4);
var Boo = new Employee("Boo Radley", "11435", "54000", 3);
var Scout = new Employee("Jean Louise \'Scout\' Finch", "6243", "74750", 5);

var array = [Atticus, Jem, Boo, Scout];
console.log(array);

//Create variables used to write to the DOM
var employeeSTIarray = [];
//Capture the position of insertion into the DOM
position = document.getElementById('content');



//Loop the array, extracting each array and writing information to the array
for(var i = 0; i < array.length; i++){
  
  var newEmployeeObject = calculateSTI(array[i])

  //pushes data into stiArray
  employeeSTIarray.push( newEmployeeObject );

}



/****************** !!JQUERY!! *******************/

$(document).ready(function(){


//Loop through employeeSTIarray,
//and output each employees data into the html doc

for (var i = 0; i < employeeSTIarray.length; i++){
  var workingEmployee = employeeSTIarray[i];
  //create dom node to refer to and use div
  $('.container').append('<div class="employee"></div.');
  var $workingNode = $('.container').children().last();
  
  //create sub nodes within the employee's div element
  $workingNode.append('<h2>' +workingEmployee.name+'</h1>');
  $workingNode.append('<p>Salary: $' +workingEmployee.salary+'</p>');
  $workingNode.append('<p>Bonus ammount: $' +workingEmployee.bonusAmmount+'</p>');
  $workingNode.append('<p>Total salary plus bonus: $' +workingEmployee.postBonusTotal+'</p>');
  

}


});





// function EmployeeSTI(name, stiPerc, salary, bonus, postBonusTotal){
//   this.name = name;
//   this.stiPerc = stiPerc;
//   this.salary = salary;
//   this.bonus = bonus;
//   this.postBonusTotal = postBonusTotal;
// }



//Built in functions for employees
// (probably should be methods of the employee objects but we'll do that at a later date ;)

function calculateSTI(employee){
  var newPerson = new EmployeeSTI;


  newPerson.name = employee.name;
  var employeeNumber = employee.id;
  var baseSalary = parseInt(employee.salary);
  var reviewScore = employee.rating;

  var bonusPerc = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonusPerc > 0.13){
    bonusPerc = 0.13;
  }
  newPerson.salary = baseSalary
  newPerson.stiPerc = bonusPerc;
  newPerson.postBonusTotal = Math.round( baseSalary * (1.0 + bonusPerc) );
  newPerson.bonusAmmount = Math.round( baseSalary * bonusPerc );
  console.log(newPerson.name + " " + newPerson.salary + " " + newPerson.bonusAmmount + " " + newPerson.postBonusTotal);
  return newPerson;
}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent;
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}