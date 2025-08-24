const noteContainer = document.querySelector(".note-container");
const createNote = document.querySelector(".create");

retrieve();
// let notes = document.querySelector(".notes");
createNote.addEventListener("click", () => {
  let noteWrapper = document.createElement("div");
  noteWrapper.classList.add("note-wrapper");

  let p = document.createElement("p");
  p.className = "notes";
  p.setAttribute("contenteditable", "true");
  let deleBtn = document.createElement("img");
  deleBtn.src = "./images/delete.png";
  // p.appendChild(deleBtn);
  deleBtn.classList.add("delete-btn");
  noteWrapper.appendChild(p);
  noteWrapper.appendChild(deleBtn);
  noteContainer.appendChild(noteWrapper);
  save();
}); 

function save() {
  localStorage.setItem("notes", noteContainer.innerHTML);
}

noteContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    alert("note deleted");
    save();
  } else {
    if (e.target.tagName === "P") {
      notes = document.querySelectorAll(".notes");
      notes.forEach((note) => {
        note.onkeyup = function () {
          save();
        };
      });
    }
  }
});

function retrieve() {
  noteContainer.innerHTML = localStorage.getItem("notes");
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    document.execCommand("insertLineBreak");
    e.preventDefault();
  }
});
