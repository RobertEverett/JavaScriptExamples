var date = new Date();
var TimeStamp = date.toLocaleString();
var addbutton = document.querySelector("#addbtn");

function AddToList(){
var item = document.querySelector("#inputfield").value
var text = document.createTextNode(item)
var newItem = document.createElement("li")

newItem.appendChild(text)
document.getElementById("Tasks").appendChild(newItem)
}

function checklist(){
    var listlength=document.getElementById("Tasks").querySelectorAll("li").length;
    if(listlength === 10){
    addbutton.style.pointerEvents="none";
    addbutton.style.opacity=".4";
 } 
}

function ClearList(){
document.getElementById("Tasks").innerHTML = "";
addbutton.style.pointerEvents="auto";
if(addbutton.style.opacity !== 1){
    addbutton.style.opacity="1"  
  }
}

function CurrentTime(){
document.getElementById('datecontainer').innerHTML=TimeStamp;
}

CurrentTime();