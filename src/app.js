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
});
