// getElementById
// addEventListener("mouseover")
// setTimeout
// event.target.style
// for loop um divs zu erstellen


let div
let snakeField = document.getElementById("snakeField")

for (let index = 0; index <100; index++) {
    div = document.createElement("div")
    snakeField.appendChild(div)
    div.className = "item"
}

let squares = document.getElementsByClassName("item")
console.log(squares)

let x =0

for (let index = 0; index < squares.length; index++) {
    squares[index].addEventListener("mouseover", function (e) {
        console.log(e)
        this.style.background = "orange"
        setTimeout(function () {
            // console.log("change class")
            // console.log(x++)
            e.target.style.background ="lightblue"
        }, 500);
    })
}



