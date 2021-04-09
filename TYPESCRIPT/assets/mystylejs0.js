var pass_regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/; //passwoord
var name_regex = /^[A-Za-z]{3,}$/; //name
var contact_regex = /^[\d]{8,10}$/; //contact
var email_regex = /^[a-zA-Z0-9]+@[a-z]{4,}.[a-z]{2,}(.[a-z]{2,4})?$/; //email
var errMessage = "";
function validate(regex_name, value, errorMesg) {
    if ((regex_name != null) && (regex_name.test(value) == false)) {
        errMessage += errorMesg + "\n";
    }
    else if ((regex_name == null) && (value == "" || value == null)) {
        errMessage += errorMesg + "\n";
    }
}
function validateform(form_name) {
    if (form_name == "form") {
        validate(null, document.forms[form_name]["empid"].value, "EMP ID CAN:T BE BLANK");
        validate(name_regex, document.forms[form_name]["name"].value, "NAME HAS A SIZE");
        validate(email_regex, document.forms[form_name]["email"].value, "ENTER CORRECT EMAIL");
        validate(contact_regex, document.forms[form_name]["contactnumber"].value, "CONTACT NUMBER IS WRONG");
        validate(pass_regex, document.forms[form_name]["password"].value, "ENTER CORRECT PASSWORD");
        validate(name_regex, document.forms[form_name]["cpassword"].value, "ENTER PASSWORD AGAIN");
    }
    else if (form_name == "form1") {
        validate(name_regex, document.forms[form_name]["name"].value, "NAME HAS A SIZE");
        validate(name_regex, document.forms[form_name]["vechilename"].value, "VECHILE HAS A MODEL NAME");
        validate(name_regex, document.forms[form_name]["color"].value, "ENTER COLOR");
        validate(email_regex, document.forms[form_name]["email"].value, "ENTER CORRECT EMAIl");
    }
    else if (form_name == "form2") {
        validate(null, document.forms[form_name]["empid"].value, "EMP ID CAN:T BE BLANK");
        validate(name_regex, document.forms[form_name]["name"].value, "NAME HAS A SIZE");
        validate(email_regex, document.forms[form_name]["email"].value, "Email is not correct");
        validate(contact_regex, document.forms[form_name]["contactnumber"].value, "CONTACT NO HAS size 8 t0 10");
        validate(null, document.forms[form_name]["FEEDBACK"].value, "FEEDBACK CAN:T BE BLANK");
    }
    console.log(errMessage);
    if (errMessage != "") {
        alert(errMessage);
    }
}
