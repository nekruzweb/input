const Input1 = document.querySelector("#input1")
const Input2 = document.querySelector("#input2")
const list_group =document.querySelector(".list-group")
const form =document.querySelector("#form")


let i = 1

form.addEventListener("submit", (e)=> {
    e.preventDefault()
    if (Input1.value.trim().length > 0 && Input2.value.trim().length > 0) {
        Input1.style.border = ""
        Input2.style.border = ""

        const li = `<li class="list-group-item d-flex justify-content-between"> ${i++}. &nbsp; ${Input1.value} (${Input2.value}yosh) <i class="fa-solid fa-trash del"></i> </li>`
        list_group.innerHTML += li

        e.target.reset()
    } else if (Input1.value.trim().length === 0) {
        Input1.style.border = "2px solid red"

        if (Input2.value.trim().length === 0) {
            Input2.style.border = "2px solid red"
        }
    }
})

list_group.addEventListener("click" , (e) => {
    if (e.target.classList.contains("fa-trash")) {
        e.target.parentElement.remove()
    }
})

