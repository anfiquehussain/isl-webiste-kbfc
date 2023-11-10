var icon = document.getElementById("icon");
var closeIcon = document.getElementById("close");
var fullscreenDiv = document.getElementById("fullscreenDiv");

function updateUI() {
  var scrollPosition = window.scrollY;
  if (scrollPosition > 100) {
    icon.style.display = "block";
    closeIcon.style.display = "none";
    fullscreenDiv.style.display = "none";
  } else {
    icon.style.display = "none";
    closeIcon.style.display = "block";
    fullscreenDiv.style.display = "block";
  }
}

icon.addEventListener("click", function() {
  icon.style.display = "none";
  closeIcon.style.display = "block";
  fullscreenDiv.style.display = "block";
});

closeIcon.addEventListener("click", function() {
  icon.style.display = "block";
  closeIcon.style.display = "none";
  fullscreenDiv.style.display = "none";
});

window.addEventListener("scroll", function() {
  updateUI();
});


