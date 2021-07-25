


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


