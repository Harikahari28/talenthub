// Search freelancers by name
function searchFreelancers() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const cards = document.querySelectorAll(".freelancer-card");

    cards.forEach(card => {
        const name = card.getAttribute("data-name").toLowerCase();
        if (name.includes(input)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
}

// Sort freelancers by hourly rate
function sortFreelancers() {
    const sortValue = document.getElementById("sortSelect").value;
    const cardsContainer = document.getElementById("freelancerCards");
    const cards = Array.from(cardsContainer.children);

    if (sortValue === "low-high") {
        cards.sort((a, b) => a.getAttribute("data-rate") - b.getAttribute("data-rate"));
    } else if (sortValue === "high-low") {
        cards.sort((a, b) => b.getAttribute("data-rate") - a.getAttribute("data-rate"));
    }

    cards.forEach(card => cardsContainer.appendChild(card));
}

// Toggle favorite button
function toggleFavorite(button) {
    button.classList.toggle("active");
    if (button.classList.contains("active")) {
        button.textContent = "Unfavorite";
    } else {
        button.textContent = "Favorite";
    }
}

// Form validation
function validateForm() {
    const jobTitle = document.getElementById("jobTitle").value;
    const jobDescription = document.getElementById("jobDescription").value;
    const jobRate = document.getElementById("jobRate").value;

    if (!jobTitle || !jobDescription || !jobRate) {
        alert("Please fill out all fields.");
        return false;
    }

    alert("Job posted successfully!");
    return true;
}
