function validateform2()
{
let name2=document.myform2.name2.value;  

let email2=document.myform2.email2.value;
let cn2=document.myform2.cn2.value;
let eid2=document.myform2.eid2.value;
let FEEDBACK2=document.myform2.FEEDBACK2.value;   
let regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/; //passwoord
let regex1 = /^[A-Za-z]{3,}$/  //name
let regex2 = /^[\d]{8,10}$/  //contact
let regex3 = /^[a-zA-Z0-9]+@[a-z]{4,}.[a-z]{2,}(.[a-z]{2,4})?$/; //email
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