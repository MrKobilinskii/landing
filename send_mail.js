function myFunction() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var subject = document.getElementById("subject").value;

  if((fname != "")&&(lname != "")&&(subject != "")){
    alert("Hi " + fname + " " + lname + ", your " + subject + " is awesome");
    window.location.href = "index.html";
  }
  else{
    alert("Fill in all the fields!")
  }
}
