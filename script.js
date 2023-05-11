// creating variable for the element like input-field and button and div
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const countBox = document.getElementById("count-box");

var counter = 0;

//adding click function for the add button
function addTask() {
  if (inputBox.value === "") {
    window.alert("Please first write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    // add cross button at the end of the list to delete the task
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // this is the unicode for cross sign
    li.appendChild(span);
    counter++;
    updateCount(counter);
  }
  inputBox.value = "";
}



// adding toggle and  delete functionality inside listContainer
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } 
    else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      counter--;
      updateCount(counter);
    }
  },
  false
);


//updating count-item  
function updateCount(counter) {
  let item = document.getElementById("count-item");
  item.innerHTML = counter + " task left";
  if(counter ===0)
    item.innerHTML = "";
}


