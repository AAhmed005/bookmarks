let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const leadsFromLoacalStorage = JSON.parse( localStorage.getItem("myLeads"))
console.log(leadsFromLoacalStorage)

// color zone/////////////////////////////////////////////////////////////////////////
const colorBtn = document.getElementById("color-btn")
const backBtn = document.getElementById("back-btn")
const green = 'rgb(0, 255, 0)'
const blue = 'rgb(0, 0, 255)'
const red = 'rgb(255, 0, 0)'
const black ='rgb(0,0,0)'
const pink = 'rgb(255, 102, 204)'
const white = 'rgb(255, 255, 255)'
const grey = 'rgb(30, 30, 30)'

backBtn.style.backgroundColor = grey
colorBtn.style.backgroundColor = green

backBtn.addEventListener("click", function(){
    if (backBtn.style.backgroundColor === grey){
        document.body.style.backgroundColor = grey
        deleteBtn.style.backgroundColor = grey
        inputEl.style.backgroundColor = grey
        backBtn.style.backgroundColor = white
        inputBtn.style.color = grey
        tabBtn.style.color = grey
    } else if (backBtn.style.backgroundColor === white) {
        document.body.style.backgroundColor = white
        deleteBtn.style.backgroundColor = white
        inputEl.style.backgroundColor = white
        backBtn.style.backgroundColor = grey
        inputBtn.style.color = white
        tabBtn.style.color = white
    }
})


function colorSwitch() {
    if (colorBtn.style.backgroundColor === green){
       superBlue()
    } else if (colorBtn.style.backgroundColor === blue){
        superRed()
    }else if (colorBtn.style.backgroundColor === red){
        if (backBtn.style.backgroundColor === white){
            superWhite()
        } else if (backBtn.style.backgroundColor = grey){
            superblack()
        }
    } else if (colorBtn.style.backgroundColor === white) {
        superPink()
    }else if (colorBtn.style.backgroundColor === 'rgb(0, 0, 0)'){
        superPink()
    }else if (colorBtn.style.backgroundColor === pink){
        superGreen()
    }
}
colorBtn.addEventListener("click", function(){
    colorSwitch()
    
})



//end of color zone////////////////////////////////////////////////////////////////////
if (leadsFromLoacalStorage){
    myLeads = leadsFromLoacalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active:true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})
function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++){
    listItems += `
    <li>
        <a target='_blank' href ='${leads[i]}'>
        ${leads[i]}
        </a> 
    </li>`
    }
ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ''
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

// rainbow
function superWhite() {
    inputEl.style.borderColor = white
        colorBtn.style.backgroundColor = white
        inputBtn.style.backgroundColor = white
        inputBtn.style.borderColor = white
        tabBtn.style.backgroundColor = white
        tabBtn.style.borderColor = white
        deleteBtn.style.color = white
        deleteBtn.style.borderColor = white
}
function superBlue() {
    inputEl.style.borderColor = blue
        colorBtn.style.backgroundColor = blue
        inputBtn.style.backgroundColor = blue
        inputBtn.style.borderColor = blue
        tabBtn.style.backgroundColor = blue
        tabBtn.style.borderColor = blue
        deleteBtn.style.color = blue
        deleteBtn.style.borderColor = blue
}
function superRed() {
    inputEl.style.borderColor = red
        colorBtn.style.backgroundColor = red
        inputBtn.style.backgroundColor = red
        inputBtn.style.borderColor = red
        tabBtn.style.backgroundColor = red
        tabBtn.style.borderColor = red
        deleteBtn.style.color = red
        deleteBtn.style.borderColor = red
}
function superblack() {
    inputEl.style.borderColor = black
        colorBtn.style.backgroundColor = black
        inputBtn.style.backgroundColor = black
        inputBtn.style.borderColor = black
        tabBtn.style.backgroundColor = black
        tabBtn.style.borderColor = black
        deleteBtn.style.color = black
        deleteBtn.style.borderColor = black
} 
function superPink() {
    inputEl.style.borderColor = pink
        colorBtn.style.backgroundColor = pink
        inputBtn.style.backgroundColor = pink
        inputBtn.style.borderColor = pink
        tabBtn.style.backgroundColor = pink
        tabBtn.style.borderColor = pink
        deleteBtn.style.color = pink
        deleteBtn.style.borderColor = pink
}
function superGreen() {
    inputEl.style.borderColor = green
        colorBtn.style.backgroundColor = green
        inputBtn.style.backgroundColor = green
        inputBtn.style.borderColor = green
        tabBtn.style.backgroundColor = green
        tabBtn.style.borderColor = green
        deleteBtn.style.color = green
        deleteBtn.style.borderColor = green
}
//rainbow end