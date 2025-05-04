// const searchInput = document.getElementById("searchInput");
// const fineItems = document.querySelectorAll(".fine-item");

// searchInput.addEventListener("input", () => {
//   const searchTerm = searchInput.value.toLowerCase();

//   fineItems.forEach((item) => {
//     const descText = item.querySelector(".fine-desc").textContent.toLowerCase();
//     const keywords = item.dataset.keywords
//       ? item.dataset.keywords.toLowerCase()
//       : "";

//     const isKeywordMatch = keywords.includes(searchTerm);
//     const isDescMatch = descText.includes(searchTerm);

//     if (isKeywordMatch || isDescMatch) {
//       item.style.display = "";
//     } else {
//       item.style.display = "none";
//     }
//   });
// });

// const clearButton = document.getElementById("clearButton");

// clearButton.addEventListener("click", () => {
//   searchInput.value = "";
//   searchInput.dispatchEvent(new Event("input"));
// });


const searchInput = document.getElementById("searchInput");
const fineItems = document.querySelectorAll(".fine-item");

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();

  fineItems.forEach((item) => {
    const keywords = item.dataset.keywords
      ? item.dataset.keywords.toLowerCase()
      : "";

    if (keywords.includes(searchTerm)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
});

const clearButton = document.getElementById("clearButton");

clearButton.addEventListener("click", () => {
  searchInput.value = "";
  searchInput.dispatchEvent(new Event("input"));
});

