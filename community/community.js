// Initial setup
let currentCommunityIndex = 0;
const communityBatchSize = 10; // Number of communities to display at once

// Sample communities
const allCommunities = [
    { name: 'Web Developers Hub', description: 'A community for web developers to share knowledge and job opportunities.', admin: 'Alice Johnson', email: 'alice@example.com' },
    { name: 'Graphic Designers Unite', description: 'Connect with graphic designers to collaborate on projects and share tips.', admin: 'Bob Smith', email: 'bob@example.com' },
    { name: 'Data Science Network', description: 'Discuss trends in data science and find data-related projects.', admin: 'Charlie Brown', email: 'charlie@example.com' },
    { name: 'Freelance Writers', description: 'A space for freelance writers to exchange ideas and find gigs.', admin: 'Diana Prince', email: 'diana@example.com' },
    { name: 'Mobile App Developers', description: 'Discuss mobile app development techniques and job openings.', admin: 'Eve Adams', email: 'eve@example.com' },
    { name: 'Digital Marketers', description: 'A group for digital marketers to share strategies and opportunities.', admin: 'Frank Miller', email: 'frank@example.com' },
    { name: 'SEO Specialists', description: 'Connect with SEO professionals to discuss tactics and trends.', admin: 'Grace Lee', email: 'grace@example.com' },
    { name: 'UX/UI Designers', description: 'A community for UX/UI designers to collaborate and share insights.', admin: 'Hannah Taylor', email: 'hannah@example.com' },
    { name: 'Project Managers', description: 'Discuss project management tools and methods with fellow managers.', admin: 'Ian Clark', email: 'ian@example.com' },
    { name: 'Tech Startups', description: 'A space for tech startups to network and find resources.', admin: 'Jenna White', email: 'jenna@example.com' },
    { name: 'Blockchain Enthusiasts', description: 'A group for discussions on blockchain technology and its applications.', admin: 'Kara Black', email: 'kara@example.com' },
    { name: 'AI Developers', description: 'Explore the latest in artificial intelligence and machine learning.', admin: 'Liam Brown', email: 'liam@example.com' },
    { name: 'Cybersecurity Experts', description: 'A space to discuss cybersecurity trends and best practices.', admin: 'Mia Davis', email: 'mia@example.com' },
    { name: 'Game Developers', description: 'Connect with other game developers and share development tips.', admin: 'Noah Wilson', email: 'noah@example.com' },
    { name: 'E-commerce Professionals', description: 'A community for those working in the e-commerce sector.', admin: 'Olivia Martinez', email: 'olivia@example.com' },
    { name: 'Remote Work Advocates', description: 'Share tips and experiences about working remotely.', admin: 'Paul Moore', email: 'paul@example.com' },
    { name: 'Entrepreneurs', description: 'Discuss startup ideas and entrepreneurship strategies.', admin: 'Quinn Anderson', email: 'quinn@example.com' },
    { name: 'Content Creators', description: 'A group for content creators to share and collaborate on projects.', admin: 'Rachel Scott', email: 'rachel@example.com' },
    { name: 'Health Tech Innovators', description: 'Discuss innovations in health technology and their applications.', admin: 'Sam Young', email: 'sam@example.com' },
    { name: 'Fintech Professionals', description: 'A community for those working in the financial technology sector.', admin: 'Tina Harris', email: 'tina@example.com' }
];

// Show a batch of communities
function showCommunities(startIndex, endIndex) {
    const communityList = document.getElementById('communityList');
    const batch = allCommunities.slice(startIndex, endIndex);

    batch.forEach(community => {
        const communityCard = document.createElement('div');
        communityCard.classList.add('community-card');
        communityCard.innerHTML = `
            <h3>${community.name}</h3>
            <p>${community.description}</p>
            <div class="admin-details">
                <p><strong>Admin:</strong> ${community.admin}</p>
                <p><strong>Contact:</strong> <a href="mailto:${community.email}">${community.email}</a></p>
            </div>
            <button onclick="joinCommunity(this)">Join Community</button>
        `;
        communityList.appendChild(communityCard);
    });

    // Check if more communities need to be loaded
    if (endIndex >= allCommunities.length) {
        document.getElementById('loadMoreBtn').style.display = 'none'; // Hide button if no more communities
    }
}

// Handle Create Community button
document.getElementById('createCommunityBtn').addEventListener('click', function() {
    document.getElementById('createCommunityForm').classList.remove('hidden');
    document.getElementById('browseCommunities').classList.remove('hidden');
    showCommunities(0, communityBatchSize);
});

// Handle Browse Communities button
document.getElementById('browseCommunitiesBtn').addEventListener('click', function() {
    document.getElementById('createCommunityForm').classList.add('hidden');
    document.getElementById('browseCommunities').classList.remove('hidden');
    showCommunities(0, communityBatchSize);
});

// Handle Load More button
document.getElementById('loadMoreBtn').addEventListener('click', function() {
    currentCommunityIndex += communityBatchSize;
    showCommunities(currentCommunityIndex, currentCommunityIndex + communityBatchSize);
});

// Create a new community
function createCommunity() {
    const name = document.getElementById('communityName').value;
    const description = document.getElementById('communityDescription').value;
    const admin = document.getElementById('adminName').value;
    const email = document.getElementById('adminEmail').value;

    // Simulate creating a community
    const communityList = document.getElementById('communityList');
    const communityCard = document.createElement('div');
    communityCard.classList.add('community-card');
    communityCard.innerHTML = `
        <h3>${name}</h3>
        <p>${description}</p>
        <div class="admin-details">
            <p><strong>Admin:</strong> ${admin}</p>
            <p><strong>Contact:</strong> <a href="mailto:${email}">${email}</a></p>
        </div>
        <button onclick="joinCommunity(this)">Join Community</button>
    `;
    communityList.appendChild(communityCard);

    // Clear the form
    document.getElementById('communityName').value = '';
    document.getElementById('communityDescription').value = '';
    document.getElementById('adminName').value = '';
    document.getElementById('adminEmail').value = '';
}

// Simulate joining a community
function joinCommunity(button) {
    button.textContent = 'Joined';
    button.disabled = true;
}

// Initial display of communities
document.addEventListener('DOMContentLoaded', function() {
    showCommunities(0, communityBatchSize); // Show the first batch of communities
});
