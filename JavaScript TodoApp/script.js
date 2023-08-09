//Todo Eleman Ekleme

const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnAddNewTask = document.querySelector("#btnAddNewTask");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
const items = ["Todo 1", "Todo 2", "Todo 3", "Todo 4"];

// load items
loadItems();

evetListeners();

function evetListeners() {
  // submit event
  form.addEventListener("submit", addNewItem);

  // delete an ıtem

  taskList.addEventListener("click", deleteItem);

  // delete all item

  btnDeleteAll.addEventListener("click", deleteAllItems);
}
function loadItems() {
  items.forEach(function (item) {
    createItem(item);
  });
}
function createItem(text) {
  const li = document.createElement("li");
  li.className = "list-group-item list-group-item-secondary";
  li.appendChild(document.createTextNode(text));

  // a oluşturma
  const a = document.createElement("a");
  a.classList = "delete-item float-right";
  a.setAttribute("href", "#");
  a.innerHTML = '<i class="fas fa-times"></i>';

  li.appendChild(a);
  taskList.appendChild(li);
}

function addNewItem(e) {
  if (input.value === "") {
    alert("add new item");
    // console.log("submit");
  }
  // li create item

  createItem(input.value);

  input.value = "";

  e.preventDefault();
}

// eleman silme

function deleteItem(e) {
  if (e.target.className === "fas fa-times") {
    if (confirm("Silmek istediğinize emin misiniz?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
  e.preventDefault();
}
function deleteAllItems(e) {
  if (confirm("Tüm elemanları silmek istediğinize emin misiniz?")) {
    taskList.childNodes.forEach(function (item) {
      if (item.nodeType === 1) {
        item.remove();
      }
    });
  }
  // tasklist.innetHtml=""; diğer silme yöntemi
}
