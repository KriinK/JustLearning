//We can change some html tag using:
document.getElementById("Jss").innerHTML = "We can change some HTML tag through JavaScript!"

document.getElementById("changeText").innerHTML = "Text changed by JS"

//We can configure a function to execute this
function changeNow(){
  document.getElementById("ID").innerHTML = "The function 'changeNow' was called."
}

function changeBG(){
  color = prompt("Type your color: ").toLowerCase()
  //prompt -> receive user input and put it inside 'color' variable
  //.toLowerCase() -> Transform all texto into lowercase
  
  document.body.style.backgroundColor = color;
  //^- Change CSS background color
  
  if (document.body.style.backgroundColor != color) {
    alert("This color name doesnt exist!")
  }
}