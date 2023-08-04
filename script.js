let clickToJoinBtn = document.getElementById("click-btn");
let closeBtn = document.querySelector(".close-icon");
let popup = document.querySelector(".popup-container");
let blurBackground = document.querySelector(".blur-background");

clickToJoinBtn.onclick = function () {
  popup.style.display = "block";
  blurBackground.style.display = "block";
};

closeBtn.onclick = function () {
  popup.style.display = "none";
  blurBackground.style.display = "none";
};
