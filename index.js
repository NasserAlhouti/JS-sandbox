
// Defining the UI varibles

//project part one
const form = document.getElementsByClassName('Nasser')[0];

// console.log(form);
const taskList =  document.getElementsByClassName('list');

const randomChick = document.getElementById('add-task');

const parent = taskList[0].parentElement;
// console.log(taskList)
const clearBtn = document.getElementById('btn');
// console.log(clearBtn)
const filter = document.getElementById('filter');

// console.log(filter)
const taskInput = document.getElementById('task');

const removeSymbol = document.getElementsByClassName('fa fa-times');

const unorderedList = document.getElementsByClassName('list')[0];
console.log(unorderedList)
// console.log(taskInput);
// Listen to all event Listners

loadEvent();
//DOM LOAD EVENT
document.addEventListener('DOMContentLoaded',getTasks);

//get Tasks from ls

function getTasks(){
  let tasks;
  if (localStorage.getItem('tasks')=== null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
   }
  tasks.forEach(function(task){
    const newList = document.createElement('li');
    const link = document.createElement('a');
    const symbol = document.createElement('i');
// This code is for the X mark asthetics
    symbol.className = 'fa fa-times';
    symbol.style.marginLeft = '385px';
    symbol.style.marginTop = '0px';
    symbol.style.position = 'relative';
    symbol.style.bottom = '16px';
    symbol.style.height = '6px';
    symbol.style.color = 'orange';
    link.href="#";
    link.className = 'list-item';

    const newListTxt = document.createTextNode(task);
    const parent = document.getElementsByClassName('list')[0];
    console.log(parent);
    newList.style.padding = '15px';
    newList.style.height = '20px';
    newList.className = 'collection-item';

    newList.appendChild(newListTxt);
    // newList.appendChild(symbol);
    newList.appendChild(link);
    link.appendChild(symbol);
    // console.log(newList);
    parent.appendChild(newList);
  });
}
function loadEvent(){
  // add task event

  form.addEventListener('submit',addTask);
  //remove task event
  parent.addEventListener('click',removeTask);
  // Clear all task1
  form.addEventListener('click',removeAllTask)
  //Filter TASKS EVENT
  filter.addEventListener('keyup',filterTasks)
}
// remove one task
function removeTask(e){
  if(e.target.parentElement.classList.contains('list-item')){
  if(confirm('Are You sure?'))
  {
    e.target.parentElement.parentElement.remove();

    //remove from ls

    removeTaskFromLocalStorage(e.target.parentElement.parentElement);
      }
  }
}

//remove from local localStorage

function removeTaskFromLocalStorage(taskItem){
  let tasks = [];
  if (localStorage.getItem('tasks') === null){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  tasks.forEach(function(task , index){
    if (taskItem.textContent === task) {
      tasks.splice(index , 1);
    }
  });
  localStorage.setItem('tasks',JSON.stringify(tasks))
}
//remove multiple task1

function removeAllTask(e){
  if(e.target.id === 'btn'){
    while (taskList[0].firstElementChild) {
      taskList[0].firstElementChild.remove();
    }
    //clear from ls
    clearAllTasksFromLocalStorage();
  }
}
function clearAllTasksFromLocalStorage(){
  localStorage.clear();
}
//filter tasks

// Explaination on how this works filler task gets the value form the input field that accepts text

// it than selects all the elements in the unorderedList and loops through them

// using the for each method the input task gets the value of each li in the node list

//once that occurs it compares the value of each individual li with text input written

//if the value does exist than it would display it

// if it doesn't than it doesn't display it


function filterTasks(e){
  const text = e.target.value.toLowerCase();

  const listItem = document.querySelectorAll('.collection-item');
  listItem.forEach(function(task){
    const textValue = task.firstChild.textContent
    if(textValue.toLowerCase().indexOf(text) !== -1){
      task.style.display = 'block';
    }else{
      task.style.display = 'none';
    }
  });
}



// add task event on submit
 function addTask(e){
  if (taskInput.value === '' ) {
    alert('add new task');
    console.log(e.target.children[0]);
  }
  else if(e.target.className === 'click'){

    const newList = document.createElement('li');
    const link = document.createElement('a');
    const symbol = document.createElement('i');
// This code is for the X mark asthetics
    symbol.className = 'fa fa-times';
    symbol.style.marginLeft = '385px';
    symbol.style.marginTop = '0px';
    symbol.style.position = 'relative';
    symbol.style.bottom = '16px';
    symbol.style.height = '6px';
    symbol.style.color = 'orange';
    link.href="#";
    link.className = 'list-item';

    const newListTxt = document.createTextNode(taskInput.value);
    const parent = document.getElementsByClassName('list')[0];
    console.log(parent);
    newList.style.padding = '15px';
    newList.style.height = '20px';
    newList.className = 'collection-item';

    newList.appendChild(newListTxt);
    // newList.appendChild(symbol);
    newList.appendChild(link);
    link.appendChild(symbol);
    // console.log(newList);
    parent.appendChild(newList);
    // console.log(newListTxt);
    //store in Ls
    storeTaskInLocalStorage(taskInput.value)
  }
  e.preventDefault();

}

//store tasks

function storeTaskInLocalStorage(task){
  //tasks is the key value for our array of items
let tasks;
if (localStorage.getItem('tasks')=== null) {
  tasks = []
} else {
  tasks = JSON.parse(localStorage.getItem('tasks'));
 }
 tasks.push(task)
 localStorage.setItem('tasks',JSON.stringify(tasks));
}
// loadEventListe


//remove task EVENT
