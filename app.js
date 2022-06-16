let word = document.querySelector(".input");
let display = document.querySelector(".display");

const countVovels = (word) => {
  let vovels = word.value.split("");
  vovels = vovels.filter(
    (letter) =>
      letter == "a" ||
      letter == "e" ||
      letter == "i" ||
      letter == "o" ||
      letter == "u"
  );
  console.log(vovels.length);
  display.innerHTML = `There are ${vovels.length} vovels in ${word.value}`;
};

document.querySelector("body").addEventListener("click", (e) => {
  if (e.target.classList.contains("button")) {
    countVovels(word);
  }
});
