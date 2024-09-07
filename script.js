const inputbox = document.getElementById("input-box")
const listcontainer = document.getElementById("list-container")

function AddTask(){
    if(inputbox.value===''){
        alert("You must add a task!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value="";
    saveData();
}
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
} , false);
function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showData(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showData();