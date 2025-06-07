document.addEventListener('DOMContentLoaded', () => {
    const tabNavigation = document.getElementById('tab-navigation');
    const tabContent = document.getElementById('tab-content');

    // Define your tabs here
    const tabs = [
        { id: 'home', name: 'Home', content: '<div>\n            <h2>Welcome to Your Application!</h2>\n            <p>This is a modern, HTML-based application designed with simplicity and usability in mind. Navigate through the tabs to explore different sections.</p>\n            <p><strong>Features:</strong></p>\n            <ul>\n                <li>Clean, Apple-inspired user interface.</li>\n                <li>Dynamic tab-based navigation.</li>\n                <li>Client-side data storage demonstration using JSON.</li>\n            </ul>\n            <p>Feel free to explore and test the functionalities. The \'Data\' tab provides an interactive example of how data can be managed locally in your browser.</p>\n        </div>' },
        { id: 'profile', name: 'Profile', content: '<div>\n            <h2>User Profile</h2>\n            <p>This section is designated for displaying and managing user-specific information. In a full application, this could include:</p>\n            <ul>\n                <li>Username and contact details.</li>\n                <li>Profile picture and bio.</li>\n                <li>Account preferences and activity logs.</li>\n            </ul>\n            <p>For now, it\'s a placeholder to illustrate the tab\'s purpose. Data for this section would typically be fetched from the database.</p>\n            <div style="margin-top: 20px; padding: 15px; background-color: #e9e9eb; border-radius: 8px;">\n                <p><strong>Example Profile Data (Conceptual):</strong></p>\n                <p><strong>Name:</strong> Alex Appleby</p>\n                <p><strong>Email:</strong> alex.appleby@example.com</p>\n                <p><strong>Joined:</strong> January 1, 2024</p>\n            </div>\n        </div>' },
        { id: 'settings', name: 'Settings', content: '<div>\n            <h2>Application Settings</h2>\n            <p>Here, you would typically find options to customize your application experience. This might include:</p>\n            <ul>\n                <li><strong>Appearance:</strong> Theme selection (light/dark mode), font size adjustments.</li>\n                <li><strong>Notifications:</strong> Preferences for email or in-app alerts.</li>\n                <li><strong>Data Management:</strong> Options to export or import data, or clear local cache.</li>\n                <li><strong>Account:</strong> Password changes, privacy settings, or account deletion.</li>\n            </ul>\n            <p>Currently, these are illustrative points. The \'Data\' tab already provides a basic example of clearing locally stored data.</p>\n            <div style="margin-top: 20px;">\n                <h4>Example Setting:</h4>\n                <label for="theme-select">Theme:</label>\n                <select id="theme-select" style="padding: 5px; border-radius: 4px; border: 1px solid #d2d2d7;">\n                    <option value="light">Light (Default)</option>\n                    <option value="dark" disabled>Dark (Coming Soon)</option>\n                </select>\n            </div>\n        </div>' },
        { id: 'data', name: 'Data', content: '<div>\n    <h3>Manage Your Data</h3>\n    <textarea id="data-input" placeholder="Enter JSON data here (e.g., {&quot;name&quot;: &quot;John Doe&quot;, &quot;age&quot;: 30})" style="width: 100%; min-height: 100px; margin-bottom: 10px; padding: 8px; border: 1px solid #d2d2d7; border-radius: 6px;"></textarea>\n    <button id="save-data-btn" style="padding: 8px 15px; background-color: #007aff; color: white; border: none; border-radius: 6px; cursor: pointer; margin-right: 10px;">Save Data</button>\n    <button id="load-data-btn" style="padding: 8px 15px; background-color: #34c759; color: white; border: none; border-radius: 6px; cursor: pointer; margin-right: 10px;">Load Data</button>\n    <button id="clear-data-btn" style="padding: 8px 15px; background-color: #ff3b30; color: white; border: none; border-radius: 6px; cursor: pointer;">Clear Data</button>\n    <div id="data-output" style="margin-top: 20px; padding: 10px; background-color: #f0f0f0; border-radius: 6px; min-height: 50px; white-space: pre-wrap; word-wrap: break-word;">\n        <p>Data will appear here when loaded.</p>\n    </div>\n</div>' }
    ];

    // Function to switch tabs
    function switchTab(tabId) {
        // Update button states
        document.querySelectorAll('.tab-button').forEach(button => {
            button.classList.remove('active');
            if (button.dataset.tabId === tabId) {
                button.classList.add('active');
            }
        });

        // Update content visibility
        document.querySelectorAll('#tab-content > div').forEach(contentPanel => {
            contentPanel.classList.remove('active');
            if (contentPanel.id === tabId + '-content') {
                contentPanel.classList.add('active');
            }
        });
    }

    // Create tab buttons and content panels
    tabs.forEach((tab, index) => {
        // Create tab button
        const button = document.createElement('button');
        button.classList.add('tab-button');
        button.textContent = tab.name;
        button.dataset.tabId = tab.id;
        tabNavigation.appendChild(button);

        // Create content panel
        const contentPanel = document.createElement('div');
        contentPanel.id = tab.id + '-content';
        contentPanel.innerHTML = tab.content; // Using innerHTML for simplicity, sanitize if using user-generated content
        tabContent.appendChild(contentPanel);

        // Add click event listener to switch tabs
        button.addEventListener('click', () => switchTab(tab.id));

        // Set the first tab as active by default
        if (index === 0) {
            button.classList.add('active');
            contentPanel.classList.add('active');
            // Remove the initial placeholder message
            const initialMessage = tabContent.querySelector('p');
            if (initialMessage && initialMessage.textContent.startsWith('Welcome to the application.')) {
                initialMessage.remove();
            }
        }
    });

    // Event listeners for the Data tab
    const dataTabContent = document.getElementById('data-content');
    if (dataTabContent) { // Check if the data tab content exists
        const dataInput = dataTabContent.querySelector('#data-input');
        const saveDataBtn = dataTabContent.querySelector('#save-data-btn');
        const loadDataBtn = dataTabContent.querySelector('#load-data-btn');
        const clearDataBtn = dataTabContent.querySelector('#clear-data-btn');
        const dataOutput = dataTabContent.querySelector('#data-output');

        if (saveDataBtn) {
            saveDataBtn.addEventListener('click', () => {
                try {
                    const dataToSave = JSON.parse(dataInput.value || '{}'); // Ensure valid JSON
                    saveData('myData', dataToSave);
                    dataOutput.textContent = 'Data saved! Click "Load Data" to see it.';
                } catch (e) {
                    dataOutput.textContent = 'Error: Invalid JSON format. Please check your input.';
                    console.error("Error parsing JSON input:", e);
                }
            });
        }

        if (loadDataBtn) {
            loadDataBtn.addEventListener('click', () => {
                const loaded = loadData('myData');
                if (loaded) {
                    dataOutput.textContent = JSON.stringify(loaded, null, 2);
                } else {
                    dataOutput.textContent = 'No data found in localStorage or an error occurred.';
                }
            });
        }

        if (clearDataBtn) {
            clearDataBtn.addEventListener('click', () => {
                removeData('myData');
                dataOutput.textContent = 'Data cleared from localStorage.';
                dataInput.value = ''; // Clear the input field as well
            });
        }
    }
});

// Functions for JSON data storage using localStorage

/**
 * Saves data to localStorage.
 * @param {string} key - The key under which to store the data.
 * @param {any} value - The value to store (will be JSON.stringified).
 */
function saveData(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        console.log(`Data saved under key: ${key}`);
    } catch (error) {
        console.error(`Error saving data to localStorage for key ${key}:`, error);
    }
}

/**
 * Loads data from localStorage.
 * @param {string} key - The key of the data to retrieve.
 * @returns {any|null} - The parsed JSON data, or null if not found or error.
 */
function loadData(key) {
    try {
        const data = localStorage.getItem(key);
        if (data === null) {
            console.log(`No data found for key: ${key}`);
            return null;
        }
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error loading data from localStorage for key ${key}:`, error);
        return null;
    }
}

/**
 * Removes data from localStorage.
 * @param {string} key - The key of the data to remove.
 */
function removeData(key) {
    try {
        localStorage.removeItem(key);
        console.log(`Data removed for key: ${key}`);
    } catch (error) {
        console.error(`Error removing data from localStorage for key ${key}:`, error);
    }
}

// Example usage (optional - can be called from other parts of the app)
// saveData('userPreferences', { theme: 'dark', notifications: true });
// const prefs = loadData('userPreferences');
// if (prefs) {
//     console.log('Loaded preferences:', prefs);
// }
// removeData('userPreferences');
