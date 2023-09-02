var istatus = document.querySelector("#red")
var btn = document.querySelector("#add")
var value = 0
btn.addEventListener("click",function(){
    if ( value == 0){
        istatus.innerHTML = "Freind"
        istatus.style.color = "green"
        btn.innerHTML="Remove Friend"
        value = 1
    }else{
        istatus.innerHTML = "Stanger"
        istatus.style.color = "red"
        btn.innerHTML="Add Friend"
        value = 0
    }
})