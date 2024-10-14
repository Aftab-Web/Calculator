let str = ""
let dsiplay = document.querySelector('.display')
let buttons  = document.querySelectorAll('.keys');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (evt)=>{
        if (evt.target.innerHTML == "=") {
            str = eval(str)
            dsiplay.innerHTML = str
        }else if(evt.target.innerHTML == "AC"){
            str = "0"
            dsiplay.innerHTML = str
        }
        else if(evt.target.innerHTML == "DE"){
            if (str=="") {
                str = "0"
                dsiplay.innerHTML = str
            } else {
                str = str.slice(0 , -1)
                dsiplay.innerHTML = str
            }
        }
        else {
            str = str + evt.target.innerHTML
            dsiplay.innerHTML = str
        }
    })
});