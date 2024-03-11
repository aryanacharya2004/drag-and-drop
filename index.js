
let lists=document.getElementsByClassName("list");

let rightbox=document.getElementById("right");
let leftbox=document.getElementById("left");

for (list of lists) {
 list.addEventListener("dragstart",function(e){
        let selected=e.target;
        rightbox.addEventListener("dragover",function(e){
            e.preventDefault();
        });
        rightbox.addEventListener("drop",function(e){
            e.preventDefault();
            rightbox.appendChild(selected);
            selected=null;
        });

       leftbox.addEventListener("dragover",function(e){
            e.preventDefault();
        });
     leftbox.addEventListener("drop",function(e){
            e.preventDefault();
            leftbox.appendChild(selected);
            selected=null;
        })

    })

}