var paragraph = document.querySelector('.a-paragraph');
var textField = document.querySelector('.name-input');
var button = document.querySelector('.select-button');


button.textContent = "Calculate";
button.onclick = function(){


    var information = textField.value;
    var splitted = information.split('*');
    
    console.log(splitted)
    var summer = 1


    for(let i of splitted){
       
      summer *= Number(i)


    }

    paragraph.textContent = summer

}

document.addEventListener('keypress', function(e){
   if(e.keyCode === 13){


    var information = textField.value;

    paragraph.textContent = information;

    console.log(information)
   }
   

})

