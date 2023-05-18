import dogs from "./data.js";
import Dog from "./Dog.js";

function getnewDog() {
  const nextDogData = dogs.shift();
  return nextDogData ? new Dog(nextDogData) : {};
}

let dogProfile = getnewDog();

document.querySelector("#icon-cross").addEventListener("click", () => {
  dogProfile.hasbeenSwiped = true;
  render();
});

document.querySelector("#icon-heart").addEventListener("click", () => {
  dogProfile.hasbeenSwiped = true;
  dogProfile.hasbeenLiked = true;
  render();
});

function render() {
  document.querySelector(".main_inner").innerHTML = dogProfile.getDogHtml();
  document.querySelector(".main_content").style.backgroundImage =
    dogProfile.dogAvatar();
  if (dogs.length > 0) {
    if (dogProfile.hasbeenSwiped && dogProfile.hasbeenLiked) {
      document.querySelector(
        ".badge_img"
      ).innerHTML = `<img src="assets/images/badge-like.png" alt="" class="badge" />`;
      nextProfile();
    } else if (dogProfile.hasbeenSwiped) {
      document.querySelector(
        ".badge_img"
      ).innerHTML = `<img src="assets/images/badge-nope.png" alt="" class="badge" />`;
      nextProfile();
    }
  } else {
    noMatches();
  }

  function nextProfile() {
    setTimeout(() => {
      document.querySelector(".badge_img").innerHTML = ``;
      dogProfile = getnewDog();
      document.querySelector(".main_inner").innerHTML = dogProfile.getDogHtml();
      document.querySelector(".main_content").style.backgroundImage =
        dogProfile.dogAvatar();
    }, 1500);
  }

  function noMatches() {
    if (dogProfile.hasbeenSwiped && dogProfile.hasbeenLiked) {
      document.querySelector(
        ".badge_img"
      ).innerHTML = `<img src="assets/images/badge-like.png" alt="" class="badge" />`;
    } else if (dogProfile.hasbeenSwiped) {
      document.querySelector(
        ".badge_img"
      ).innerHTML = `<img src="assets/images/badge-nope.png" alt="" class="badge" />`;
    }
    setTimeout(() => {
      document.querySelector(".main_content").style.backgroundImage = "";
      document.querySelector(
        ".main_content"
      ).innerHTML = `<h2 class="no_matches"> No more matches :( </h2>`;
    }, 1500);
  }
}

render();
