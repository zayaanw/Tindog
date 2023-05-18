import dogs from "./data.js";
import Dog from "./Dog.js";

function getnewDog() {
  const nextDogData = dogs.shift();
  return nextDogData ? new Dog(nextDogData) : {};
}

let dogProfile = getnewDog();

console.log(dogProfile);

document.querySelector("#icon-cross").addEventListener("click", () => {
  if (dogProfile.hasbeenSwiped) {
    dogProfile = getnewDog();
    document.querySelector(".main_inner").innerHTML = dogProfile.getDogHtml();
    document.querySelector(".main_content").style.backgroundImage =
      dogProfile.dogAvatar();
  } else {
    document.querySelector(".main_inner").innerHTML = dogProfile.getDogHtml();
    document.querySelector(".main_content").style.backgroundImage =
      dogProfile.dogAvatar();
  }
});
