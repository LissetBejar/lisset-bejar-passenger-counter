// document.getElementById("count-el").innerText = 5.innerText = 5

// change the count-el in the HTML to reflect the new count

// camelCase
let countEl = document.getElementById("count-el") // pass in arguments

let count = 0

function increment() {
  count = count + 1
  countEl.innerText = count
}
