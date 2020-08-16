var date = new Date();
var TimeStamp = date.toLocaleString();

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
    document.querySelector("#addbtn").style.pointerEvents="none";
    document.querySelector("#addbtn").style.opacity=".4";
 } 
}

function ClearList(){
document.getElementById("Tasks").innerHTML = "";
document.querySelector("#addbtn").style.pointerEvents="auto";
}

function CurrentTime(){
document.getElementById('datecontainer').innerHTML=TimeStamp;
}

CurrentTime();