window.onload = function() {
    //RemoveOneSection();
}


let posts =1;
function buttonClick(){
    document.getElementById('input-number').value = posts++;
    let parent = document.querySelector("main");
    parent.className ="main1";

            

            let child = document.createElement("section");
            child.className = "inlägg";

            let title = document.createElement("h3");
            title.contentEditable = true;

            let textbox = document.createElement("p");
            textbox.contentEditable =true;

            
            
        

            title.innerHTML = "Title";
            textbox.innerHTML ="hej";
            
        
            

            
            child.appendChild(title);
            child.appendChild(textbox);
            parent.appendChild(child);

            
            console.log(i);

            
            
}
function RemoveOneSection(){
    let sections = document.querySelectorAll("section");
    for(let i =0; i < sections.length; i++){
        sections[i].remove();
       // document.querySelector("input").();
        
        
    }
    
    

}


