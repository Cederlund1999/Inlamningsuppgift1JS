var posts =1;
function buttonClick(){
    document.getElementById('input-number').value = posts++;
    
    var parent = document.querySelector("main");
    parent.className ="main1";

            var child = document.createElement("section");
            child.className = "inlägg";

            
            var title = document.createElement("h3");
            var blurb = document.createElement("p");

            title.innerHTML = "Title";
            blurb.innerHTML ="hej";

    
    

            child.appendChild(title);
            child.appendChild(blurb);
            parent.appendChild(child);

}

