// Prevent browser from saving scroll location
history.scrollRestoration = "manual"

window.onload = function(){
  shiftProjectExtra();
  checkToMobilify();

  window.setTimeout(function(){
    document.getElementById("arrow").style.opacity = "1";
    document.getElementById("arrow").classList = "animated bounce";
  }, 1300)

  window.setTimeout(function(){
    document.getElementById("transition-overlay").style.opacity = "0";
  }, 0)

  window.setTimeout(function(){
    document.getElementById("main-text").style.visibility = "visible";
    document.getElementById("main-text").className = "main-text animated fadeIn";
  }, 700)

  window.setTimeout(function(){
    document.getElementById("icons").style.visibility = "visible";
    document.getElementById("icons").className = "icons animated fadeIn";
  }, 900)
}

function highlight(parentElement){
  elements = parentElement.childNodes;
  for(element in elements){
    elements[element].style = "color: #b7b7b7";
  }
}

function unHighlight(parentElement){
  elements = parentElement.childNodes;
  for(element in elements){
    elements[element].style = "color: white";
  }
}

window.addEventListener("scroll", function(){
  var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;

  if(scrollTop !== 0){
    document.getElementById("arrow").classList = "animated fadeOutUp";
  } else {
    document.getElementById("arrow").classList = "animated bounce";
  }
}, false);

function shiftProjectExtra(){
  document.getElementById("pm1").style.bottom = "-" + String(parseInt(document.getElementById("pm1").offsetHeight) - 1) + "px";
  document.getElementById("pm2").style.bottom = "-" + String(parseInt(document.getElementById("pm2").offsetHeight) - 1) + "px";
  document.getElementById("pm3").style.bottom = "-" + String(parseInt(document.getElementById("pm3").offsetHeight) - 1) + "px";

  document.getElementsByClassName("filler")[0].style.height = parseInt(document.getElementById("pm1").offsetHeight) + "px";
}

function checkToMobilify(){
  if(document.getElementById("main-pic").offsetWidth > window.innerWidth){
    document.getElementById("main-pic").style.width = "100vw";
  }
}

function copyDiscord(discordTag) {
  const temp = document.createElement("textarea");
  temp.value = discordTag;
  document.body.appendChild(temp);
  temp.select();
  document.execCommand("copy");
  document.body.removeChild(temp);

  Swal.fire({
		title: "Copied",
		text: `${discordTag} copied to clipboard`,
		icon: "success",
	})
}
