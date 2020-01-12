const fname=document.getElementById('f-name').nodeValue;
const lname=document.getElementById('l-name').value;
const mobile=document.getElementById('mobile').value;
const age=document.getElementById('age').value;
const mail=document.getElementById('mail').value;
const pass=document.getElementById('pass').value;
const pass1=document.getElementById('pass1').value;

function validate(){
    document.querySelector('#register').addEventListener('submit',(e)=>{
        if(fname==''){
            document.write('enter your first name please!');
        }else{
            return true;
        }
    })
}