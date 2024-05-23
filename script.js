let input =document.getElementById('inputbox');
let buttons=document.querySelectorAll('button');
let string= "";
let arr=Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click',(s) =>{
       if(s.target.innerHTML=="="){
        string=eval(string);
        input.value=string;
         }
         else if(s.target.innerHTML=="AC")
            {
                string="";
                input.value=string;
            }
            else if(s.target.innerHTML=="DEL")
                {
                    string=string.substring(0,string.length-1);
                    input.value=string;
                }
                else{
                    string+=s.target.innerHTML;
                    input.value=string;
                }

                
    })
})
