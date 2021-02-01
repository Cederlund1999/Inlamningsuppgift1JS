/*
Jag har använt mig mycket av Console.log() för debugging, för att lätt kunna se functionen körs eller inte
sedan har jag även lagt in "use strict"; för att undvika fel vid deklaration av variabler m.m. 
Har också använt mig en del av consollen i browsern för att testa vissa rader med kod. t.ex när jag vill testa
"document.getElementById('input-number').value--" om denna minskade värdet i inlägg rutan. 
*/
"use strict";
/* 
Här kör jag ett onload event. Det körs så fort browsern laddar in sidan. I eventet har jag min onStartRemove function.
Med hjälp av en for loop så tar jag bort alla "li" object som finns när sidan laddas.


*/
onload = function(){
    onStartRemove()
}



let i = 0;
function buttonClick(){
    document.getElementById('input-number').value++;;
    let parent = document.querySelector("ul")
    parent.className="ulmain";
    

    let child = document.createElement("li");
    child.className = "inlägg";

    let title = document.createElement("h3");
    title.contentEditable = true;

    let textbox = document.createElement("p");
    textbox.contentEditable = true;
    i++;

    title.innerHTML = i +". Title" ;
    textbox.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    child.appendChild(title);
    child.appendChild(textbox);
    parent.appendChild(child);
}
/* 
Här förändrar jag I DOM när man trycker på knappen genom att lägga alla "li" object i en variabel 
och sedan sätta variabelns värde till listans längd. Sedan sätter jag en variabel till parentnoden ul. 
Sedan tar jag bort den sista child noden i parentnoden. 
Sedan förändrar jag input number value med -1 om input-number är lika med eller större än 1.
Alltså tas ett child bort per knapp tryck tills det inte finns några childs kvar.
*/
function removeSection(){
let numberToRemove = document.querySelectorAll("li");

numberToRemove = numberToRemove.length +1;
let list = document.getElementById("mainul")

list.removeChild(list.childNodes[numberToRemove]);

if(document.getElementById('input-number').value >=1)
{
document.getElementById('input-number').value--;
i--;

} else{
    alert("ERROR: There is no more posts to delete");
    
}
}

function onStartRemove(){
    let removeLi = document.querySelectorAll("li");
    for(let i = 0; i < removeLi.length; i++){
        removeLi[i].remove();
        
    }
}

