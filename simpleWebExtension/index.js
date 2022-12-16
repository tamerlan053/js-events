let inputBtn = document.getElementById("input-Btn")
let inputEl = document.getElementById("input-el")
let myLeads = ["www.google.com", "www.vk.com", "www.binance.com"]
const ulEl = document.getElementById("ul-el")

console.log(ulEl)

inputBtn = addEventListener("click", function() {
    myLeads.push(inputEl.value)
})

for (let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
}
