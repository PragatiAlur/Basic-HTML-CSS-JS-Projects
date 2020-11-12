let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let output = '';
for(item of buttons){
    item.addEventListener('click', function(e){
        buttonText = e.target.innerText;
        if(buttonText == '='){
            screen.value = eval(output);
            output = '';
        }else if(buttonText == 'X'){
            buttonText = '*';
            output = output + buttonText;
            screen.value = output; 
        }else if(buttonText == 'C'){
            output='';
            screen.value=output;
        }
        else{
            output = output + buttonText;
            screen.value = output;
        }
    })
}
