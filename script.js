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



const modal = document.getElementById("fineModal");
const closeBtn = document.querySelector(".close-modal");


function openModal(law, desc, price) {
  document.getElementById("modal-law-text").textContent = law;
  document.getElementById("modal-desc-text").textContent = desc;
  document.getElementById("modal-price-text").textContent = price;
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; 
}


function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; 
}

closeBtn.addEventListener("click", closeModal);


window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});


document.querySelectorAll(".fine-item").forEach(item => {
  item.addEventListener("click", function() {
    const law = this.querySelector(".fine-law").textContent;
    const desc = this.querySelector(".fine-desc").textContent;
    const price = this.querySelector(".fine-price").textContent;
    openModal(law, desc, price);
  });
});