const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  for(let i = 0; i<data.length;i++){
   if(data[i].profession == "developer"){
    console.log(data[i]);
   }
  }
}

// 2. Add Data
function addData() {
  let name = prompt("Enter name:");
  let age = prompt("Enter age:");
  let profession = prompt("Enter profession:");

  let newPerson = {
    name:name,
    age: age,
    profession:profession,
  };
  data.push(newPerson);
  console.log(newPerson);
}

// 3. Remove Admins
function removeAdmin() {
    Ans = data.filter((element) => element.profession !== 'admin');
    console.log(Ans);
}

// 4. Concatenate Array
function concatenateArray() {
        const dummyArray = [
          { name: "Anshika", age: 20, profession: "Student" },
          { name: "Lavie", age: 21, profession: "Developer" },
        ];
        const resultArray = data.concat(dummyArray);
        console.log(resultArray);
}

// 5. Average Age
function averageAge() {
  const ageSum = data.reduce((sum, person) => sum + person.age, 0);
      const average = ageSum / data.length;
      console.log("Average Age:", average);
}

// 6. Age Check
function checkAgeAbove25() {
  const isAbove25 = data.some(person => person.age > 25);
  console.log("Is there anyone above 25?", isAbove25);
    
}

// 7. Unique Professions
function uniqueProfessions() {
  let uniqueProfessionArr = [];
  data.forEach((element) => {
    if (!uniqueProfessionArr.includes(element.profession)) {
      uniqueProfessionArr.push(element.profession);
    }
  });
  console.log(uniqueProfessionArr);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => {
    return a.age - b.age;
  });
  console.log(data);
}

// 9. Update Profession
function updateJohnsProfession() {
  data.forEach((element) => {
    if (element.name == 'john') {
      element.profession = 'Manager';
    }
  });
  console.log(data);
}

// 10. Profession Count
function getTotalProfessions() {
  let count = 0;
  data.forEach((element) => {
    if (element.profession == 'developer') {
      count += 1;
    }
  });
}
