function formValidation() {
  var fname = document.registration.firstname;
  var lname = document.registration.lastname;
  var uid = document.registration.userid;
  
  var uadd = document.registration.address;
  var ucountry = document.registration.country;
 
  var uemail = document.registration.email;
  var umsex = document.registration.msex;
  var ufsex = document.registration.fsex;

  if (firstname_validation(fname, 5, 12)) {
    if (lastname_validation(lname, 5, 12)) {
      if (ValidateEmail(uemail)) {
        if (userid_validation(uid, 5, 12)) {
          if (allLetter(uname)) {
            if (alphanumeric(uadd)) {
              if (countryselect(ucountry)) {
                 if (passid_validation(passid, 7, 12)) {
                   if (validsex(umsex, ufsex)) {
                   }
                  
                }
              }
            }
          }
        }
      }
    }
  }
  return false;
}

function firstname_validation(fname, mx, my) {
  var fname_len = fname.value.length;
  if (fname_len == 0 || fname_len >= my || fname_len < mx) {
    alert(
      "User Id should not be empty / length be between " + mx + " to " + my
    );
    fname.focus();
    return false;
  }
  return true;
}

function lastname_validation(lname, mx, my) {
  var lname_len = lname.value.length;
  if (lname_len == 0 || lname_len >= my || lname_len < mx) {
    alert(
      "User Id should not be empty / length be between " + mx + " to " + my
    );
    lname.focus();
    return false;
  }
  return true;
}

function ValidateEmail(uemail) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (uemail.value.match(mailformat)) {
    return true;
  } else {
    alert("You have entered an invalid email address!");
    return false;
  }
}

function userid_validation(uid, mx, my) {
  var uid_len = uid.value.length;
  if (uid_len == 0 || uid_len >= my || uid_len < mx) {
    alert(
      "User Id should not be empty / length be between " + mx + " to " + my
    );
    uid.focus();
    return false;
  }
  return true;
}


function allLetter(uname) {
  var letters = /^[A-Za-z]+$/;
  if (uname.value.match(letters)) {
    return true;
  } else {
    alert("Username must have alphabet characters only");
    uname.focus();
    return false;
  }
}
function alphanumeric(uadd) {
  var letters = /^[0-9a-zA-Z]+$/;
  if (uadd.value.match(letters)) {
    return true;
  } else {
    alert("User address must have alphanumeric characters only");
    uadd.focus();
    return false;
  }
}
function countryselect(ucountry) {
  if (ucountry.value == "Default") {
    alert("Select your country from the list");
    ucountry.focus();
    return false;
  } else {
    return true;
  }
}


function validsex(umsex, ufsex) {
  x = 0;

  if (umsex.checked) {
    x++;
  }
  if (ufsex.checked) {
    x++;
  }

  if (x == 2) {
    alert("Both Male/Female are checked");
    ufsex.checked = false;
    umsex.checked = false;
    umsex.focus();
    return false;
  }

  if (x == 0) {
    alert("Select Male/Female");
    umsex.focus();
    return false;
  } else {
    alert("Form Succesfully Submitted");
    window.location.reload();
    return true;
  }
}
