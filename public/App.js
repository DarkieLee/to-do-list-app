const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask () {
    if (inputBox.value === "") { 
        alert ("Please input valid task");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        inputBox.value = "";
        let span = document.createElement("span");
        span.innerHTML = "x";
        li.appendChild(span);
    }
    saveData();
    

}

listContainer.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        saveData();
    }else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
        saveData();
    }
})

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function getData() {
        listContainer.innerHTML = localStorage.getItem("data");
}

getData()
