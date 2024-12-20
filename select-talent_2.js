// select-talent_2

const allTalents = [
    "Artist", "Makeup Artist", "Canvas Art", "Game Art", "Illustration",
    "Digital Art", "Art Therapy", "Photography", "Travel Blogging",
    "Cooking", "Sketching", "Dancing", "Writing", "Music", "Acting"
];

const searchResultsContainer = document.getElementById("search-results");
const selectedTagsContainer = document.getElementById("selected-tags");
let selectedTags = [];

// Render all talents initially
function renderSearchResults(query = "") {
    searchResultsContainer.innerHTML = "";
    const filteredTalents = allTalents.filter(talent =>
        talent.toLowerCase().includes(query.toLowerCase()) && !selectedTags.includes(talent)
    );

    filteredTalents.forEach(talent => {
        const tagElement = document.createElement("span");
        tagElement.className = "tag";
        tagElement.innerHTML = `${talent} <i class="fas fa-plus"></i>`;
        tagElement.onclick = () => addTag(talent);
        searchResultsContainer.appendChild(tagElement);
    });
}

// Add tag
function addTag(talent) {
    if (selectedTags.length < 15 && !selectedTags.includes(talent)) {
        selectedTags.push(talent);
        updateSelectedTags();
        renderSearchResults();
    }
}

// Remove tag
function removeTag(talent) {
    selectedTags = selectedTags.filter(tag => tag !== talent);
    updateSelectedTags();
    renderSearchResults();
}

// Update selected tags
function updateSelectedTags() {
    selectedTagsContainer.innerHTML = "";
    selectedTags.forEach(talent => {
        const tagElement = document.createElement("span");
        tagElement.className = "tag";
        tagElement.innerHTML = `${talent} <i class="fas fa-times" onclick="removeTag('${talent}')"></i>`;
        selectedTagsContainer.appendChild(tagElement);
    });
}

// Filter results as user types
function filterTalents() {
    const query = document.getElementById("search-input").value;
    renderSearchResults(query);
}

// Submit talents
function submitTalents() {
    alert(`Selected Talents: ${selectedTags.join(", ")}`);
}

// Initial render
renderSearchResults();
