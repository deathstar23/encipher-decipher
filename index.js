var cipher_text=document.getElementById('cipher_text');// storing the cipher text
var cipher_btn=document.getElementById('cipher_btn');
var decipher_btn=document.getElementById('decipher_btn');
var decipher_text=document.getElementById('decipher_text');//storing the decipher text


const Algorithm_for_encryption=(e)=>{
    var original_text;
    if(e==0)
    {
         original_text=cipher_text.value;//storing the value which is typed by user

    }
    else
    {
        original_text=decipher_text.value;//storing the value which is typed by user
    }
  
    var final_text="";// storing  the final value after the algorithm is performed
    
    for(var i=0;i<original_text.length;i++)
    {
        if((original_text[i]>='A' && original_text[i]<='Z') || (original_text[i]>='a' && original_text[i]<='z'))
        {
            var num=original_text[i].toUpperCase();//converting the charecters to upper forms
            var j=num.charCodeAt(0)-65;//getting the value from the range of 0 to 25
            var encript_num=(25-j);//converting number to it's reverse order in[0,25] (eg : 0 become 25 , 1 become 24 ,... )
            var encript_char=String.fromCharCode(65+encript_num);//adding this number to ascaii value of A 
            if(original_text[i]>='a' && original_text[i]<='z')
            {
                original_text[i]=encript_char.toLowerCase();//if oringinal_text was in small letters
                final_text+=encript_char.toLowerCase();//adding the charecters to our final answer
            }
            else
            {
                original_text[i]=encript_char.toLowerCase();
                final_text+=encript_char.toUpperCase();//adding the charecters to our final answer
            }
        }
        else
        {
            final_text+=" ";
        }
    }
    // console.log(final_text);
    if(e==0)
    {
        decipher_text.value=final_text; //e==0 means we need to show the final answer in decipher textarea

    }
    else
    {
        cipher_text.value=final_text;//e==1 means we need to show the final answer in cipher textarea
    }

   
}



cipher_text.addEventListener('input',function(){
      
    Algorithm_for_encryption(0);// here  passing 0 which indicates that user typed in cipher textarea 

},false);

decipher_text.addEventListener('input',function(){
    Algorithm_for_encryption(1);// here  passing 1 which indicates that user typed in decipher textarea 
},false);




// for buttons to see it work we need to comment out the above two eventlistener

cipher_btn.addEventListener('click',function(){
    Algorithm_for_encryption(0);// here  passing 0 which indicates that user typed in cipher textarea
},false);

decipher_btn.addEventListener('click',function(){
    Algorithm_for_encryption(1);// here  passing 1 which indicates that user typed in decipher textarea 
},false);