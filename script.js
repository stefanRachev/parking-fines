const fineGroups = document.querySelectorAll(".fine-group");
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();

  fineGroups.forEach((group) => {
    const fineItems = group.querySelectorAll(".fine-item");
    let groupHasMatch = false;

    fineItems.forEach((item) => {
      const keywords = item.dataset.keywords
        ? item.dataset.keywords.toLowerCase()
        : "";

      if (keywords.includes(searchTerm) || searchTerm === "") {
        item.style.display = "";
        groupHasMatch = true;
      } else {
        item.style.display = "none";
      }
    });

    if (groupHasMatch) {
      group.style.display = "";
    } else {
      group.style.display = "none";
    }
  });
});

const clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", () => {
  searchInput.value = "";
  searchInput.dispatchEvent(new Event("input"));
});
