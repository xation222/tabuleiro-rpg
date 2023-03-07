var d6 = document.getElementById("d6")
console.log(d6)
var rd6 = document.getElementById("rd6")
document.addEventListener("click", e=> {

    console.log("click detectaod")
    console.log(e.target)
    if (e.target == d6) {
        console.log("clickou no botão lazarento")
    }
})