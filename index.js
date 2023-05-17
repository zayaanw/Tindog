import dogs from "./data.js";
import Dog from "./Dog.js";

const Rex = new Dog(dogs[0]);
const Bella = new Dog(dogs[1]);
const Teddy = new Dog(dogs[2]);

Rex.doginfo();
Bella.doginfo();
Teddy.doginfo();

document.querySelector("#icon-cross").addEventListener("click", () => {
  document.querySelector(".main_inner").innerHTML = Bella.getDogHtml();
  document.querySelector(".main_content").style.backgroundImage =
    Bella.dogAvatar();
});
