var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
function counting() {
  if (tasklst.firstChild){
  document.getElementById("pending").innerHTML = "You have " + myNodelist.length + " pending tasks.";}
  else{document.getElementById("pending").innerHTML = "You have " + 0 + " pending tasks.";}

}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {

  close[i].onclick = function() {
    var div = this.parentElement;
    tasklst.removeChild(div);
    counting();
  }
}





function adding() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("name").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("tasklst").appendChild(li);
  }
  document.getElementById("name").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      tasklst.removeChild(div);
      counting();
    }
  }
  counting();
}

function clrall() {
  while (tasklst.firstChild) {
    tasklst.removeChild(tasklst.firstChild);
  }
  counting();
}
