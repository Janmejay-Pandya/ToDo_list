const listBar = document.getElementById("listBar");
const listcontainer = document.getElementById("list-container");

function addTask() {
    if (listBar.value === '') {
        alert('Please enter a task');
    } else {
        let li = document.createElement("li");
        li.innerHTML = listBar.value;
        listcontainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    listBar.value = '';
    savedata()
}

listcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") { 
        e.target.classList.toggle("checked"); 
        savedata()
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata()
    }
}, false);

function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showtask(){
    listcontainer.innerHTML=localStorage.getItem("data");

}
showtask();