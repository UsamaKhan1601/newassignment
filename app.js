//  3rd Parts


function Person(first, last, age, course) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.course = course;
  }
  
  var arr = []
  function userData(){
  var usama = new Person("Usama", "Khan", "18", "Web & App Development");
  arr.push(usama)
  return arr;
  // console.log(arr)
  }

  console.log(userData())


// 1st Part

var finalAmount = 0;
var itemsArray = [
    {name:"Juice", price:"50", Quantity:"3"},
    {name:"Cookie", price:"30", Quantity:"9"},
    {name:"Shirt", price:"880", Quantity:"1"},
    {name:"Pen", price:"100", Quantity:"2"}
]
for (var i=0; i < itemsArray.length; i++) {
    var productAmount = itemsArray[i].price * itemsArray[i].Quantity
    console.log(itemsArray[i].name +":" + productAmount)
    finalAmount = finalAmount + productAmount
}

console.log("Total Amount is" +  " " + finalAmount);

// 2nd part

function Person(name, email, password, gender, age, city, country) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.gender = gender;
    this.age = age;
    this.city = city;
    this.country = country;
  }

console.log(Person.hasOwnProperty("firstName"))
console.log(Person.hasOwnProperty("lastName"))
console.log(Person.hasOwnProperty("email"))
console.log(Person.hasOwnProperty("age"))
console.log(Person.hasOwnProperty("country"))

// 4th Part

let citizensData = [];
//getting Data From User
let males = 0;
let females = 0;

const adddingtoArray = () => {
  let userName = document.querySelector(".name").value;
  let userAge = document.querySelector(".age").value;
  let userAdd = document.querySelector(".add").value;
  let male = document.querySelector(".male");
  let female = document.querySelector(".female");
  let gender;
  if (male.checked) {
    gender = "male";
    males++;
  } else if (female.checked) {
    gender = "female";
    females++;
  }
  let educationDiv = document.querySelector(".education");
  let education = educationDiv.getElementsByTagName("input");
  let educationArr = [];
  for (var i = 0; i < education.length; i++) {
    if (education[i].checked) {
      educationArr.push(education[i].value)
    }
  }
  let professionDiv = document.querySelector(".profession");
  let profession = professionDiv.getElementsByTagName("input")
  let professionArr = [];
  for (var i = 0; i < profession.length; i++) {
    if (profession[i].checked) {
      professionArr.push(profession[i].value)
    }
  }
  let dataToGet = {
    "name": userName,
    "userAge": userAge,
    "userAdd": userAdd,
    "userGender": gender,
    "education": educationArr,
    "profession": professionArr
  }
  citizensData.push(dataToGet)
  console.log(citizensData)
}
const facts = () =>{
let femaleInTown = document.querySelector(".femaleInTown");
femaleInTown.innerHTML =`Total females in town are ${females}`;
let maleInTown =document.querySelector(".maleInTown");
maleInTown.innerHTML =`Total males in town are ${males}`

let totalPopulation = document.querySelector(".totalPopulation");
totalPopulation.innerHTML =`Total Population of town ${citizensData.length}`
}


let btnOfAction = document.querySelector(".btn")
btnOfAction.addEventListener("click", function () {
  adddingtoArray();
  facts();
})

