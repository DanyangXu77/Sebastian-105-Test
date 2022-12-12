function myFunctionsearch() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
/*--------------------------------------------------------------------------------*/
function showResult(str) {
  if (str.length==0) {
    document.getElementById("livesearch").innerHTML="";
    document.getElementById("livesearch").style.border="0px";
    return;
  }
  var xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
    if (this.readyState==4 && this.status==200) {
      document.getElementById("livesearch").innerHTML=this.responseText;
      document.getElementById("livesearch").style.border="1px solid #A5ACB2";
    }
  }
  xmlhttp.open("GET","livesearch.php?q="+str,true);
  xmlhttp.send();
}
// Varibles 
var input;
input.addEventListener("keypress", function(event) {
  if (event.key === "g") {
    event.preventDefault();
document.getElementById("myFunctiongame()").click();
  }
})
//Sidenav
		if ('scrollRestoration' in history) {
		  history.scrollRestoration = 'manual';
		}
var close = document.getElementsByClassName("closealert");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}
//FUNCTIONS
     function blocked() {
  var myWindow = window.open("105/blocked/index.html", "_blank", "width=500,height=400,resizable=yes,left=500,top=200,toolbar=yes");
}

function myFunctionterms() {
  var myWindow = window.open("105/terms/index.html", "_blank", "width=1300,height=680");

}

function addgame() {
   var myWindow = window.open("https://forms.gle/TXz4Mk4ZQEyjSn43A", "_blank", "width=1300,height=680");
}
   
function code() {
  var myWindow = window.open("105/code/index.html", "_blank", "width=1300,height=680");


function feedback() {
   var myWindow = window.open("https://forms.gle/xmRta2vvGCLsrKUC8", "_blank", "width=1300,height=680");
}

}
function suggestions() {
   var myWindow = window.open("https://forms.gle/X82sK1epn5Y1Rqj66", "_blank", "width=1300,height=680");
}

function myFunctionDarkMode() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

function myFunctiongame() {
  var myWindow = window.open("game/index.html", "_blank", "width=1300,height=680");
}
function ack() {
  var myWindow = window.open("105/acknowledgements/index.html", "_blank", "width=1300,height=680");
}

function myFunction12345() {
   var myWindow = window.open("", "MsgWindow", "width=500,height=500");
  myWindow.document.write("Email:<p>28stu216@lexingtonma.org</p><p><strong>Note:</strong> you can only email me if you have a lexington account</p><p>I will get a email account shortly</p>");
}
function bio() {
   var myWindow = window.open("ReadMe.md", "_blank", "width=500,height=500");
}
function changelog() {
  var myWindow = window.open("105/changelog/index.html", "_blank", "width=1300,height=680");
}
function myFunctionspotify() {
  var myWindow = window.open("105/spotify/index.html", "_blank", "width=1300,height=680");
}

function Chatroom() {
  var myWindow = window.open("105/chatroom/index.html", "_blank", "width=1300,height=680");
}
function onFunction() {
  alert ("Your browser has connected back to the internet connection. \n-Sebastian105");
}

function offFunction() {
  alert ("We detected that your browser has lost internet connection. \n-Sebastian105");
}