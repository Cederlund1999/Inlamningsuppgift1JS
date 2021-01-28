window.onload = function(){
    onStartRemove()
}


let posts=0;
let i = 0;
function buttonClick(){
    document.getElementById('input-number').value = posts++;
    let parent = document.querySelector("ul")
    parent.className="ulmain";
    

    let child = document.createElement("li");
    child.className = "inlägg";

    let title = document.createElement("h3");
    title.contentEditable = true;

    let textbox = document.createElement("p");
    textbox.contentEditable = true;
    i++;

    title.innerHTML = "Title" + i;
    textbox.innerHTML = "brödtext";

    child.appendChild(title);
    child.appendChild(textbox);
    parent.appendChild(child);
}

function removeSection(){
let numberToRemove = document.querySelectorAll("li");
numberToRemove = numberToRemove.length +1;
let list = document.getElementById("mainul")

list.removeChild(list.childNodes[numberToRemove]);

if(posts >=0)
{
document.getElementById('input-number').value = posts--;
}

}

function onStartRemove(){
    let removeLi = document.querySelectorAll("li");
    for(let i = 0; i < removeLi.length; i++){
        removeLi[i].remove();
        console.log("hej");
    }
}