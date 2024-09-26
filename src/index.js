function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Love is a fire that burns unseen",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);