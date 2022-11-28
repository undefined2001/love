var element = document.getElementById("image");
var btn = document.getElementById("text-outer");
var text = document.getElementById("text");


btn.addEventListener("click",()=>{
    if(text.innerHTML === "I LOVE YOU A LOT! ARIFATU JANNAT"){
        text.innerHTML = "I LOVE YOU TOO TAJ";
    }else{
        text.innerHTML = "I LOVE YOU A LOT! ARIFATU JANNAT";
    }
})
