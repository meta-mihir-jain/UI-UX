function validateform()
{
console.log(document.myform);
var eid=document.myform.eid.value;
var name=document.myform.name.value;  
var email=document.myform.email.value;
var cn=document.myform.cn.value;
var password=document.myform.password.value;
var cpassword=document.myform.cpassword.value;
var regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/; //passwoord
var regex1 = /^[A-Za-z]{3,}$/  //name
var regex2 = /^[\d]{8,10}$/  //contact
var regex3 = /^[a-zA-Z0-9]+@[a-z]{4,}.[a-z]{2,}(.[a-z]{2,4})?$/; //email
if (eid==null || eid=="")
{  
  alert("EMPLOYEE ID can't be blank");  
  return false;
}
else if (regex1.test(name)==false)
{  
    alert("Name has only alphabets with 3 size");  
    return false;  
  }
  else if(regex3.test(email)==false)
  {
    alert("ENTER CORRECT EMAIl");  
    return false;
  }
  else if(regex2.test(cn)==false)
  {
    alert("ENTER CORRECT CONTACT 8-10 size");  
    return false;
  }
  else if(regex.test(password)==false)
  {  
    alert("Password has 1 character Lower and smaller,1 digit and 1 Special charcter");  
    return false;  
    }
    else if(cpassword!=password)
  {  
    alert("PASSWORD NOT MATCHED");  
    return false;  
    }
    
}

