
// let pija = document.getElementById("redHeart");
// pija.addEventListener("click", function(){
//     alert("PIJA");
// });


var pija2 = document.getElementsByClassName("heart");

    for(var i = 0 ; i < pija2.length;i++) {
        pija2[i].addEventListener("click", function(){
           document.getElementById("dick").innerHTML = `<img src="dickpic.png">`

    }
)};


// Selecting the element by class name returns an HTML collection in an array,
//so before i can attach an eventListener to each heart, i need to loop through
//each element in the array

  
// pija.addEventListener('click', showDick)





