const peopleSection = document.querySelector("#people");
const response = document.querySelector("#response");

function meetChristopher(message) {
  response.textContent = message;
  peopleSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

document.querySelector("#meetButton").addEventListener("click", () => {
  meetChristopher("Great choice. Which one?");
});

document.querySelector("#otherButton").addEventListener("click", () => {
  meetChristopher("Exactly.");
});

document.querySelector("#year").textContent = new Date().getFullYear();