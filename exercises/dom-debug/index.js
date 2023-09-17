const colors = ["white", "red", "blue", "green"]
document.getElementById("add").addEventListener("click", function (e) {
    console.log("Hello")
    const subItem = createSubItem(e)
    document.getElementById("list").appendChild(subItem)
})

function createDropDown(){
    const dropDown = document.createElement("select")
    dropDown.style.backgroundColor = dropDown.value
    for (let i = 0; i < colors.length; i++){
        const option = document.createElement("option") 
        option.innerHTML = colors[i]
        option.value = colors[i]
        dropDown.append(option)
       
    }
    dropDown.addEventListener("change", function (e) {
        console.log(dropDown.selectedIndex)
        if (dropDown.selectedIndex === 0) {
            e.target.parentNode.style.backgroundColor = ""
            return
        }
        e.target.parentNode.style.backgroundColor = e.target.value;
    
        console.log(dropDown.value)
    })
    return dropDown
}

function createSubItem(e){
    const subItem = document.createElement("div")
    var subItemValue = document.getElementById("input").value
    subItem.textContent = subItemValue
    const dropDown = createDropDown()
    subItem.appendChild(dropDown)
    subItem.setAttribute("class", "subItem")
    return subItem
}


