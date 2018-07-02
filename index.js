//
// const person = {
//   firstName : "Nasser",
//   age:20,
//   hobbies : ["football","soccer","cloud watching"],
//   person2 : {name:'Jarah', age : 22, hobbies:'fortnight'},
//   getBirthYear:function(){
//     return this.age - 10
//   }
// };
// let people = [{name :"nasser"},{name:"farah"},{name:"Jarah"}]
// function getNames(people){
//     let names = [];
//   for (var i = 0; i < people.length; i++) {
//   names.push(people[i].name)
//   }
//   return names
// }
// console.log(getNames(people));

// let val;
// val = person.getBirthYear()
// console.log(val);
// const today = new Date().parseInt();
//
//
// console.log(today);
//
// const id = "Nasser"
// let steve = 20;
// if (steve >= '12' && steve <= '20'){
//   console.log(`steve is a teenanger`)
// }else {
//   console.log(`I don't even know `)
// }
//
//
// //Ternary operator
// steve >= 12 && steve <= 19 ? console.log('steve is a teenanger'): console.log('steve is a baby ')

// second conditional
// let num = 15
// switch (num) {
//   case (num > 10):
//     console.log(`${num} is less than 10`)
//     break;
//     case (num>20):
//     console.log(`${num} is a teenanger`)
//     break;
//   default:
//     console.log(`${num} is not a number`)
// }

// function random(firstName = 'Nasser' , lastName = 'Alhouti'){
//
//   return "Hello" +' '+ firstName + " " + lastName
// }
// console.log(random());
//

//Function expression


// Imeddiatly invoked function expressions

// an iffy is a function that is decrlared and invoked at the same time

// in order for you to write an iffy you need it to be an expression and to do this you would put it in ( )

//example

//first step add ()

//second step include function (function)

/*third step add code (function(arg){
 code
})*/

//forth step invoke the Function
/*(function(arg){
  code
})()*/
// console.log((function(value){
//   return value
// })('the IFFE has ran'));
//
// //PROPORTY METHODS
//
// //When a function is put inside of an object it is called a method
//
// const todo = {
//   add : function(){
//     return 'Add todo...'
//   },
//   edit : function(id){
//     console.log(`edit todo ${id}`)
//   }
// };
// todo.delete = function(){
//   console.log('new function')
// };
// todo.delete();
// console.log(todo.add());
//
// todo.edit(22)


//loops in JavaScript


//For loop
// const some = ['John','Nasser','Waleed','Jaweed',"Weed"];
// let name = function(){
//   let arr = [];
// for (let i = 0; i <some.length; i++) {
//   arr.push(some[i]);
//    if (i === 2) {
//      continue;
//    }
//    console.log(some[i]);
//  }
// };
// name();

// While loop
// use a while loop when you don't know how many times it is going to itterate
// const some = ['John','Nasser','Waleed','Jaweed',"Weed"];
// let name = function(){
//   let arr = [];
//   let i = 0;
//   while (i < some.length) {
//     arr.push(some[i]);
//     console.log(arr);
//   i++;
//   }
// };
// name();



// do while loops

// const  names = ['John','Nasser','Waleed','Jaweed',"Weed"];
// let name = function(names){
//
// console.log(names)
// };
// name(names);


//Loop through the array



const cars = ['honda','civic','Ferarri','Nisan']


//for each array loop


// cars.forEach(callback function)

// cars.forEach(takes in an annonymouse function)

// cars.forEach(function(cars){
//   console.log(cars)
// });

//more on for each
// cars.forEach(there are three things it can take as an argument the itarator which is i the index and the array)


//example iteartor

// cars.forEach(function(iterator){
//   console.log(iterator)
// });
// //index
// cars.forEach(function(iterator,index){
//   //iterator is basically the number that is associated with the array cell
//   console.log(`${index},${iterator}`)
// });
// //Array
// cars.forEach(function(iterator,index,array){
//   console.log(array)
// })
// Looping through an object in JavaScript
// const users = [{id:1},{id:2},{id:3}];
// for (var x in users) {
//   let num = users[x].id;
//   num *= 2
//   console.log(num)
// }

// Map method
// const users = [
// {id:1,name:'Sarah'},
// {id:2,name:'John'},
// {id:3,name:'Rex'}
// ];
// let newUser = users.map(function(user){
//   return user.id
// });

// const name = "Nasser";
// const Job = "Programmer";
// const discription = "Just started";
// const city = "Florida";
// let html ;
// let list = [1,2,3,4,5,6,8]
//
// list.unshift(2)
// console.log(list);
// let fruit = ["Apple","Strawberries","Blueberries","Cocunut","BlackBerries"]
// let orderedFruit = fruit.sort()
// console.log(orderedFruit)
// let numbers = [200,1,9,10,6,9,80];
// let orderedNumbers = numbers.sort(function(X,Y){
//   return Y-X
// });
// let certainNumbers = numbers.filter(function(num){
//   return num > 50 ;
//
// });
// console.log(certainNumbers);
// console.log(orderedNumbers);
// let street = [2,3,4,{name:1,age:25},new Date()];
// console.log(street);
// console.log(fruit);
// let something = function(){
//   return 'hello world'
// }
// html=`
// <ol>
// <li>Hi my name is ${name}</li>
// <li>and I am from ${city}</li>
// <li>and I ${discription}</li>
// <li>${2+2}</li>
// <li>${something()}</li>
// <li>${name === "nasser"?name:city}</li>
// </ol>
// `
// let val;
// let nass = "random person";
// let lastLetter = nass.charAt(nass.length-1)
// console.log(lastLetter)
// val = street.length;
// val = Array.isArray(name)
// console.log(val)



// Window methods object properties;
//prompt
// let name = prompt('what is your name');
// if (confirm('Are you sure')) {
//   alert('wow my name is'+" "+name+" "+'too')
// }else{
//   prompt('What is your name')
// }

// The height and the width of the window
let height;
let width;
// outter height
// height = window.innerHeight
// width = window.innerWidth;
// console.log(width)
//scrolling

// height = window.location.href;
// height = 'http://youtube.com'
// console.log(height)

//History object

//Window .history.go() shows you a list of all the websites previously visted
console.log(window.innerWidth)


let val;
val = document.all.length;
val= document.body;
val = document.head;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;
val = document.scripts;
val = document.links;
let links = document.links
let newVal = Array.from(links)
newVal.forEach(function(x){
  console.log(x)
});
// console.log(newVal)
// console.log(val);
//
// // document getElement By query Selector
// //selecting a child element from its parent
// let select = document.querySelector('head title')
// console.log(select);

// change styling
//
// document.getElementById('btn').style.color='blue';
// document.getElementById('btn').style.padding = '10px';
// document.getElementById('btn').style.display='none';
//
// finding the
//
// const list = document.querySelectorAll('.list li');
// list.forEach(function(item , index){
//   console.log(item)
// });

// let some = document.querySelector('li').parentNode.children[0];
// console.log(some);



// creating an extra element

// const li = document.createElement('li');
// // creating a class
// li.className = 'newElement'
// //create text node
// //append means put something inside something like adding basically
// li.appendChild(document.createTextNode('hi mom'))
// //adding a attribute
// li.setAttribute('title','new title')
// console.log(li);
//
// // append li as child of ul
//
// document.querySelector('ul.list').appendChild(li);
//
// const link = document.createElement('a');
// link.className = 'fa fa-times';
// link.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>'
// li.appendChild(link);
//
// //Replacing elements
//
// //create an element
// // and replacing it
// const newHeading = document.createElement('h2')
// newHeading.appendChild(document.createTextNode('New Heading'));
// newHeading.className = 'task-3';
// // get old heading
// const oldHeading = document.querySelector('.task-3')
// // console.log(oldHeading)
// //parent
// const cardAction = document.querySelector('.cardAction')

//replace child

// cardAction.replaceChild(newHeading,oldHeading);
//
//
// //remove element
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');
// lis[5].remove();
// // remove list item
//
//  //remove child element
//
//  list.removeChild(lis[2]);
//
//  //classes and attributes
//
//  const firstItem = document.querySelector('li:first-child')
//
// const lin = firstItem.children[0];
// lin.className
//
// console.log(newHeading);
//adding a event listner
// const clearTask = document.querySelector('#btn');
// function onClick(e){
//   // console.log('hello world');
//
//   //a closer look at the evetn object
//   let val;
//   e.preventDefault();
//   e.target.innerText = 'New Button';
// }
//
//
// clearTask.addEventListener('click',onClick);
// converting the list item to an array
// let newList = Array.from(list)
// console.log(newList);
// newList.forEach(function(li,index){
//   console.log(li.className);
//   li.textContent = `${index} hello`
// });
// adding logic to selectors to style the elements on the page
// for (var i = 0; i < list.length; i++) {
//   console.log(list);
//   if(i%2 === 0){
//     list[i].style.color = 'red';
//   }else if (i%2 != 0) {
//     list[i].style.color ='blue';
//   }
// }


// const clearBtn = document.querySelector('#btn');
// console.log(clearBtn);
//
// const card = document.getElementsByClassName('Nasser');
// console.log(card);
// const heading = document.getElementsByTagName('h1');
// console.log(heading[1])
//
// function runEvent(e){
//   console.log(`EVENT TYPE : ${e.type}`);
//   heading[1].textContent = `MouseX : ${e.offsetX} MouseY : ${e.offsetY}`;
//   document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},${e.offsetX})`
// }
// // clearBtn.addEventListener('click',runEvent);
// clearBtn.addEventListener('dblclick',runEvent);
//
// //Mouse down
//
// card[0].addEventListener('mousemove',runEvent);

//Clear Input
const form = document.getElementsByClassName('click');
console.log(form[0])
const taskInput = document.getElementsByClassName('task-2')[0].children[0];
console.log(taskInput);
taskInput.value = ""
taskInput.addEventListener('keydown',runEvent)
function runEvent(e){
  console.log(`Event type : ${e.type}`);
  e.preventDefault();

}
form[0].addEventListener('submit',runEvent)

// taskInput.addEventListener('keydown',runEvent)

//difference between outerHeight and innerHeight is that outer height is the height of the entire page that you  are seeing where as inner height is the portion where the user can interact with the webpage

//so if you want to figure out the width of the actual window you would use innerHeight and innnerWidth
//Confirm
