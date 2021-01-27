let posts =1;
function buttonClick(){
    document.getElementById('input-number').value = posts++;
    
    let parent = document.querySelector("main");
    parent.className ="main1";

            let child = document.createElement("section");
            child.className = "inlägg";

            
            let title = document.createElement("h3");
            let blurb = document.createElement("p");

            title.innerHTML = "Title";
            blurb.innerHTML ="hej";

    
    

            child.appendChild(title);
            child.appendChild(blurb);
            parent.appendChild(child);

}

