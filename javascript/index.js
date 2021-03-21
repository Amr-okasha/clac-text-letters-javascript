let count = document.getElementById("count");
let textArea = document.getElementById("text");
let maxLength = textArea.getAttribute("maxlength");

console.log(maxLength);

textArea.oninput = function () {
  count.innerHTML = maxLength - this.value.length;
  if (count.innerHTML == "0") {
    console.log("hello");
    count.classList.add("finished");
  } else {
    count.classList.remove("finished");
  }
};
