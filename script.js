document.getElementById('toggle-sidebar').addEventListener('click', function () {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
});

// Highlight active link in the sidebar and load new content
const links = document.querySelectorAll('.nav-link a');
links.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        links.forEach(l => l.classList.remove('active'));
        this.classList.add('active');

        // Load content dynamically based on the clicked link
        const mainContent = document.querySelector('.content');
        const page = this.getAttribute('data-page'); // Get the page identifier
        loadPageContent(page, mainContent);
    });
});

// Function to load content dynamically
function loadPageContent(page, container) {
    if (page === 'dashboard') {
        container.innerHTML = `
            <div class="bento-box">
                <div class="bento-box-up">
                    <button class="patient-btn"> + Add patient</button>
                </div>
                <div class="bento-box-down">
                    <div class="left">In-Patient</div>
                    <div class="right">Out-patient</div>
                </div>
                <div class="bento-box-side">
                    <div class="Up">Graphs</div>
                    <div class="Down">Analytics</div>
                </div>
            </div>
        `;
    } else if (page === 'profile') {
        container.innerHTML = `
            <div class="profile-page">
                <h2>Profile</h2>
                <p>Welcome to your profile page. Here you can update your personal information.</p>
                <form class="profile-form">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name">
                    
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email">
                    
                    <button class="patient-btn" type="submit">Save Changes</button>
                </form>
            </div>
        `;
    } else if (page === 'settings') {
        container.innerHTML = `
            <div class="settings-page">
                <h2>Settings</h2>
                <p>Adjust your preferences and application settings here.</p>
                <form class="settings-form">
                    <label for="theme">Theme:</label>
                    <select id="theme" name="theme">
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </select>
                    
                    <label for="notifications">Notifications:</label>
                    <input type="checkbox" id="notifications" name="notifications">
                    <span>Enable Notifications</span>
                    
                    <button class="patient-btn" type="submit">Save Settings</button>
                </form>
            </div>
        `;
    } else if (page === 'logout') {
        container.innerHTML = `
            <div class="logout-page">
                <h2>Logout</h2>
                <p>You have been logged out successfully.</p>
            </div>
        `;
    }
}