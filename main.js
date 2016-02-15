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
  
  $("body").keypress(function(event){
    if (event === "1,2,3,4,5,6,7,8,9,0").change(function(){
      $("h1")alert("Number")
    })

    else if (event !== "1,2,3,4,5,6,7,8,9,0").change(function(){
      $("h1")alert("Letter")
    })
  })
//I'm trying to create code that if a number is typed anywhere on the page, the h1 changes to say number

