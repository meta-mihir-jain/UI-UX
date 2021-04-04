function validateform2()
{
var name2=document.myform2.name2.value;  

var email2=document.myform2.email2.value;
var cn2=document.myform2.cn2.value;
var eid2=document.myform2.eid2.value;
var FEEDBACK2=document.myform2.FEEDBACK2.value;   
var regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/; //passwoord
var regex1 = /^[A-Za-z]{3,}$/  //name
var regex2 = /^[\d]{8,10}$/  //contact
var regex3 = /^[a-zA-Z0-9]+@[a-z]{4,}.[a-z]{2,}(.[a-z]{2,4})?$/; //email
console.log(name2,eid2);
if (eid2==null || eid2=="")
{  
  alert("EMPLOYEE ID can't be blank");  
  return false;
}
else if (regex1.test(name2)==false)
{  
    alert("Name has only alphabets with 3 size");  
    return false;  
  }
  else if(regex3.test(email2)==false)
  {
    alert("ENTER CORRECT EMAIl");  
    return false;
  }
  else if(regex2.test(cn2)==false)
  {
    alert("ENTER CORRECT CONTACT 8-10 size");  
    return false;
  }

  else if (FEEDBACK2==null || FEEDBACK2=="")
  {  
    alert("feedback can't be blank");  
    return false;
  }
    
}