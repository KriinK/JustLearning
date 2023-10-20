//We can change some html tag using:
document.getElementById("Jss").innerHTML = "We can change some HTML tag through JavaScript!"

document.getElementById("changeText").innerHTML = "Text changed by JS"

//We can configure a function to execute this
function changeNow(){
  document.getElementById("ID").innerHTML = "The function 'changeNow' was called."
}