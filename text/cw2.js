// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
    document.getElementById("desktopheader").style.opacity = "0.5";
  } else {
    document.getElementById("navbar").style.padding = "90px 100px";
    document.getElementById("logo").style.fontSize = "35px";
    document.getElementById("desktopheader").style.opacity = "1";
  }
}


/* DARKMODE *//* DARKMODE *//* DARKMODE *//* DARKMODE *//* DARKMODE *//* DARKMODE *//* DARKMODE *//* DARKMODE *//* DARKMODE *//* DARKMODE *//* DARKMODE *//* DARKMODE */

function darkmode() {
 var element = document.body;
 element.classList.toggle("darkmode");
}



/* MOBILEHEADER *//* MOBILEHEADER *//* MOBILEHEADER *//* MOBILEHEADER *//* MOBILEHEADER *//* MOBILEHEADER *//* MOBILEHEADER *//* MOBILEHEADER *//* MOBILEHEADER */

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction2()};

function scrollFunction2() {
if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
  document.getElementById("mobileheader").style.fontSize = "30px";
} else {
  document.getElementById("mobileheader").style.fontSize = "90px";
}
}


/* GET IN TOUCH POP UP *//* GET IN TOUCH POP UP *//* GET IN TOUCH POP UP *//* GET IN TOUCH POP UP *//* GET IN TOUCH POP UP *//* GET IN TOUCH POP UP *//* GET IN TOUCH POP UP */

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
  modal.style.display = "none";
}
}


/* HOMEPAGE */


/* VIDEO */


/* IMAGE */

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    GalleryRemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) GalleryAddClass(x[i], "show");
  }
}

function GalleryAddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function GalleryRemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

/* AUDIO */

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
