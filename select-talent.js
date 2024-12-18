function filterResults() {
    const query = document.getElementById("talent-search").value.toLowerCase();
    const resultTags = document.querySelectorAll(".result-tag");

    resultTags.forEach(tag => {
        const text = tag.textContent.toLowerCase();
        if (text.includes(query)) {
            tag.style.display = "flex";
        } else {
            tag.style.display = "none";
        }
    });
}
