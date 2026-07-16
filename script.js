const form = document.querySelector("form");
function onsubmit(e){
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const expense = document.querySelector("#expense").value;
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    li.innerText = `${name} $ ${expense}`;
    ul.appendChild(li);
}
form.addEventListener("submit", onsubmit);
