function validateform1(e)
{

var name1=document.myform1.name1.value;  
var vn1=document.myform1.vname1.value;
var color1=document.myform1.color1.value;
var email1=document.myform1.email1.value;

var regex1 = /^[A-Za-z]{3,}$/  //name

var regex3 = /^[a-zA-Z0-9]+@[a-z]{4,}.[a-z]{2,}(.[a-z]{2,4})?$/; //email

if (regex1.test(name1)==false)
{  
    alert("Name has only alphabets with 3 size");  
    return false;  
  }
  else if(regex1.test(vn1)==false)
  {
    alert("ENTER 3 size");  
    return false;
  }
  else if (color1==null || color1=="")
{  
  alert("color can't be blank");  
  return false;
}
  else if(regex3.test(email1)==false)
  {
    alert("ENTER CORRECT EMAIl");  
    return false;
  }

  
 
}

