const searchInput = document.getElementById('searchInput');
const fineItems = document.querySelectorAll('.fine-item');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    fineItems.forEach(item => {
        const descText = item.querySelector('.fine-desc').textContent.toLowerCase();

        if (descText.includes(searchTerm)) {
            item.style.display = ''; 
        } else {
            item.style.display = 'none'; 
        }
    });
});