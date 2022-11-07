const inf = document.querySelector("#info");
let listOfUsers = [];
st();

function st() {
  if (listOfUsers.length === 0) {
    inf.textContent = "you have no saved friends";
  } else {
    inf.textContent = " ";
  }
}

document.querySelector("#btn").addEventListener("click", () => {
  let name = prompt("the name of the person");
  let lastName = prompt("the surname of the person");
  let phone = prompt("Phone number");

  if (name.length === 0) {
    alert("you have not given the name of the person");
    name = prompt("the name of the person");
    if (name.length === 0) {
      return;
    }
  } else if (phone.length === 0) {
    alert("You did not give the person's phone");
    phone = prompt("Phone number");
    if (phone.length === 0) {
      return;
    }
  }
  listOfUsers.push(name);
  st();
  const list = document.querySelector("#list");
  const div = document.createElement("div");
  div.classList = "users";
  list.appendChild(div);
  const dName = document.createElement("h3");
  div.appendChild(dName);
  dName.textContent = "Name: " + name;
  const dLastName = document.createElement("h3");
  div.appendChild(dLastName);
  dLastName.textContent = "Surname: " + lastName;
  const dPhone = document.createElement("h3");
  div.appendChild(dPhone);
  dPhone.textContent = "Phone number: " + phone;
});
