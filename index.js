import dogs from "./data.js";
import Dog from "./Dog.js";

function getnewDog() {
  const nextDogData = dogs.shift();
  return nextDogData ? new Dog(nextDogData) : {};
}

let dogProfile = getnewDog();

document.querySelector("#icon-cross").addEventListener("click", () => {
  if (dogProfile.hasbeenSwiped) {
    document.querySelector(
      ".badge_img"
    ).innerHTML = `<img src="assets/images/badge-nope.png" alt="" class="badge" />`;

    setTimeout(() => {
      document.querySelector(".badge_img").innerHTML = ``;
      dogProfile = getnewDog();
      document.querySelector(".main_inner").innerHTML = dogProfile.getDogHtml();
      document.querySelector(".main_content").style.backgroundImage =
        dogProfile.dogAvatar();
    }, 1500);
  } else {
    document.querySelector(".main_inner").innerHTML = dogProfile.getDogHtml();
    document.querySelector(".main_content").style.backgroundImage =
      dogProfile.dogAvatar();
  }
});

document.querySelector("#icon-heart").addEventListener("click", () => {
  if (dogProfile.hasbeenSwiped) {
    document.querySelector(
      ".badge_img"
    ).innerHTML = `<img src="assets/images/badge-like.png" alt="" class="badge" />`;

    setTimeout(() => {
      document.querySelector(".badge_img").innerHTML = ``;
      dogProfile = getnewDog();
      document.querySelector(".main_inner").innerHTML = dogProfile.getDogHtml();
      document.querySelector(".main_content").style.backgroundImage =
        dogProfile.dogAvatar();
    }, 1500);
  } else {
    document.querySelector(".main_inner").innerHTML = dogProfile.getDogHtml();
    document.querySelector(".main_content").style.backgroundImage =
      dogProfile.dogAvatar();
  }
});

function render() {
  document.querySelector(".main_inner").innerHTML = dogProfile.getDogHtml();
  document.querySelector(".main_content").style.backgroundImage =
    dogProfile.dogAvatar();
}

render();
