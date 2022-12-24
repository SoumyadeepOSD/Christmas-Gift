var I = document.getElementById("text");
var btn = document.getElementById("button");
var O = document.getElementById("O");

function func() {
  O.innerHTML = I.value;
}

btn.addEventListener("click", func);
