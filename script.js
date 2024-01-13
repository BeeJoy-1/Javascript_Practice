let sorry = document.querySelector(".input")
let out = document.querySelector(".outcome")

let boro  = document.querySelector("#up")
let choto  = document.querySelector("#low")
let rep  = document.querySelector("#r100")
let rep1000  = document.querySelector("#r1000")

boro.addEventListener("click",function(){
    out.innerHTML = `${sorry.value.toUpperCase()}`
})

choto.addEventListener("click",function(){
    out.innerHTML = `${sorry.value.toLowerCase()}`
})

rep.addEventListener("click",function(){
    out.innerHTML = `${sorry.value.repeat(100)}`
})

rep1000.addEventListener("click",function(){
    out.innerHTML = `${sorry.value.repeat(1000)}`
})
