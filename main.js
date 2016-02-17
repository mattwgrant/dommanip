$(document).ready(function(){
   $("form").submit(function(){
     // will alert if username field is blank
    if($("#username").val() === ""){
      alert("Cannot leave username blank");
    }
    // will alert if password field is blank
    else if($("#password").val() === ""){
      alert("Cannot leave password blank")
    }
    //will alert if password is not entered as 12345
    else if($("#password").val() !== "12345"){
      alert("Incorrect password")
    }
    //will alert if date field is blank
    else if($("#date").val() === ""){
      alert("Cannot leave date blank")
    }
   })
})
$(document).ready(function(){
  $("#username").keypress(function(event){
    if(event.keyCode >= 65 && event.keyCode <= 90){
      $("#letter_number").text("Uppercase Letter")
    } else if (event.keyCode >= 48 && event.keyCode <= 57){
      $("#letter_number").text("Number")
    } else if (event.keyCode >= 97 && event.keyCode <= 122){
      $("#letter_number").text("Lowercase Letter")
    }
  })
})

// I did not do one for the password or date because you would not want to show what was being typed
// for the password and the date will always be a number, however if I were to do it they would be the same 
// except it would be #password or #date where the #username is