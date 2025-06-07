// Sample Exercise Data
const sampleExercises = [
    {
        id: 'ex001',
        name: 'Push-up',
        type: 'Strength',
        muscleGroup: 'Chest, Shoulders, Triceps',
        equipmentNeeded: 'None',
        instructions: 'Start in a plank position with hands slightly wider than shoulders. Lower your body until your chest nearly touches the floor, then push back up to the starting position. Keep your body straight throughout the movement.'
    },
    {
        id: 'ex002',
        name: 'Squat',
        type: 'Strength',
        muscleGroup: 'Legs, Glutes',
        equipmentNeeded: 'None (or Barbell/Dumbbells for variation)',
        instructions: 'Stand with feet shoulder-width apart. Lower your hips as if sitting back in a chair, keeping your chest up and back straight. Go as low as comfortable, then push back up through your heels.'
    },
    {
        id: 'ex003',
        name: 'Dumbbell Bench Press',
        type: 'Strength',
        muscleGroup: 'Chest, Shoulders, Triceps',
        equipmentNeeded: 'Dumbbells, Bench',
        instructions: 'Lie on a bench with a dumbbell in each hand at chest level. Push the dumbbells up until your arms are fully extended, then slowly lower them back to the starting position.'
    },
    {
        id: 'ex004',
        name: 'Plank',
        type: 'Core',
        muscleGroup: 'Abs, Back',
        equipmentNeeded: 'None',
        instructions: 'Hold a push-up position, but rest your weight on your forearms instead of your hands. Keep your body in a straight line from head to heels. Hold for a designated time.'
    },
    {
        id: 'ex005',
        name: 'Jumping Jacks',
        type: 'Cardio',
        muscleGroup: 'Full Body',
        equipmentNeeded: 'None',
        instructions: 'Stand with feet together and arms at your sides. Jump to a position with legs spread wide and arms raised overhead. Return to the starting position. Repeat.'
    },
    {
        id: 'ex006',
        name: 'Bicep Curl',
        type: 'Strength',
        muscleGroup: 'Biceps',
        equipmentNeeded: 'Dumbbells (or Barbell)',
        instructions: 'Stand or sit holding dumbbells with an underhand grip. Curl the weights up towards your shoulders, keeping your elbows stationary. Slowly lower the weights back down.'
    }
];

function displayExercises() {
    // Check if container is found inside the exercises tab content specifically
    // This is important because the element might not be in the main DOM when tabs are hidden.
    const exercisesTabPanel = document.getElementById('exercises-content'); // This is the ID of the tab panel for 'exercises'
    let listContainer = null;
    if (exercisesTabPanel) {
        listContainer = exercisesTabPanel.querySelector('#exercise-list-container');
    }

    if (!listContainer) {
        console.log('Exercise list container not found in the Exercises tab panel. It might not be active yet.');
        // We will call this function when the tab is made active.
        return;
    }

    listContainer.innerHTML = ''; // Clear any existing content

    if (sampleExercises.length === 0) {
        listContainer.innerHTML = '<p>No exercises found.</p>';
        return;
    }

    const ul = document.createElement('ul');
    ul.style.listStyleType = 'none';
    ul.style.padding = '0';

    sampleExercises.forEach(exercise => {
        const li = document.createElement('li');
        li.style.marginBottom = '20px';
        li.style.padding = '15px';
        li.style.border = '1px solid #ddd';
        li.style.borderRadius = '8px';

        let content = `
            <h3 style="margin-top: 0; margin-bottom: 10px; color: #007aff;">${exercise.name}</h3>
            <p><strong>Type:</strong> ${exercise.type}</p>
            <p><strong>Muscle Group:</strong> ${exercise.muscleGroup}</p>
            <p><strong>Equipment:</strong> ${exercise.equipmentNeeded}</p>
        `;
        if (exercise.instructions) {
            content += `<p><strong>Instructions:</strong> ${exercise.instructions}</p>`;
        }
        li.innerHTML = content;
        ul.appendChild(li);
    });
    listContainer.appendChild(ul);
}

document.addEventListener('DOMContentLoaded', () => {
    const tabNavigation = document.getElementById('tab-navigation');
    const tabContent = document.getElementById('tab-content');

    // Add role="tablist" to the navigation container
    tabNavigation.setAttribute('role', 'tablist');

    // Define your tabs here
    const tabs = [
        { id: 'home', name: 'Home', content: '<div>\n            <h2>Welcome to Your Application!</h2>\n            <p>This is a modern, HTML-based application designed with simplicity and usability in mind. Navigate through the tabs to explore different sections.</p>\n            <section aria-labelledby="features-heading">\n                <h3 id="features-heading">Features:</h3>\n                <ul>\n                    <li>Clean, Apple-inspired user interface.</li>\n                    <li>Dynamic tab-based navigation with ARIA support.</li>\n                    <li>Client-side data storage demonstration using JSON.</li>\n                </ul>\n            </section>\n            <p>Feel free to explore and test the functionalities. The \'Data\' tab provides an interactive example of how data can be managed locally in your browser.</p>\n        </div>' },
        {
            id: 'exercises',
            name: 'Exercises',
            content: '<h2>Exercise Library</h2><p>Browse through the available exercises below.</p><div id="exercise-list-container" style="margin-top: 15px;"></div>'
        },
        { id: 'profile', name: 'Profile', content: '<div>\n            <h2>User Profile</h2>\n            <p>This section is designated for displaying and managing user-specific information. In a full application, this could include:</p>\n            <ul>\n                <li>Username and contact details.</li>\n                <li>Profile picture and bio.</li>\n                <li>Account preferences and activity logs.</li>\n            </ul>\n            <p>For now, it\'s a placeholder to illustrate the tab\'s purpose. Data for this section would typically be fetched from the database.</p>\n            <section aria-labelledby="profile-example-heading" style="margin-top: 20px; padding: 15px; background-color: #e9e9eb; border-radius: 8px;">\n                <h3 id="profile-example-heading">Example Profile Data (Conceptual):</h3>\n                <p><strong>Name:</strong> Alex Appleby</p>\n                <p><strong>Email:</strong> alex.appleby@example.com</p>\n                <p><strong>Joined:</strong> January 1, 2024</p>\n            </section>\n        </div>' },
        { id: 'settings', name: 'Settings', content: '<div>\n            <h2>Application Settings</h2>\n            <p>Here, you would typically find options to customize your application experience. This might include:</p>\n            <ul>\n                <li><strong>Appearance:</strong> Theme selection (light/dark mode), font size adjustments.</li>\n                <li><strong>Notifications:</strong> Preferences for email or in-app alerts.</li>\n                <li><strong>Data Management:</strong> Options to export or import data, or clear local cache.</li>\n                <li><strong>Account:</strong> Password changes, privacy settings, or account deletion.</li>\n            </ul>\n            <p>Currently, these are illustrative points. The \'Data\' tab already provides a basic example of clearing locally stored data.</p>\n            <section aria-labelledby="example-settings-heading" style="margin-top: 20px;">\n                <h3 id="example-settings-heading">Example Setting:</h3>\n                <label for="theme-select" style="margin-right: 5px;">Theme:</label>\n                <select id="theme-select" style="padding: 5px; border-radius: 4px; border: 1px solid #d2d2d7;">\n                    <option value="light">Light (Default)</option>\n                    <option value="dark" disabled>Dark (Coming Soon)</option>\n                </select>\n            </section>\n        </div>' },
        { id: 'data', name: 'Data', content: '<div>\n    <h3>Manage Your Data</h3>\n    <label for="data-input" style="display:block; margin-bottom: 5px;">Enter JSON data:</label>\n    <textarea id="data-input" placeholder="Enter JSON data here (e.g., {&quot;name&quot;: &quot;John Doe&quot;, &quot;age&quot;: 30})" style="width: 100%; min-height: 100px; margin-bottom: 10px; padding: 8px; border: 1px solid #d2d2d7; border-radius: 6px;"></textarea>\n    <button id="save-data-btn" style="padding: 8px 15px; background-color: #007aff; color: white; border: none; border-radius: 6px; cursor: pointer; margin-right: 10px;">Save Data</button>\n    <button id="load-data-btn" style="padding: 8px 15px; background-color: #34c759; color: white; border: none; border-radius: 6px; cursor: pointer; margin-right: 10px;">Load Data</button>\n    <button id="clear-data-btn" style="padding: 8px 15px; background-color: #ff3b30; color: white; border: none; border-radius: 6px; cursor: pointer;">Clear Data</button>\n    <div id="data-output" aria-live="polite" style="margin-top: 20px; padding: 10px; background-color: #f0f0f0; border-radius: 6px; min-height: 50px; white-space: pre-wrap; word-wrap: break-word;">\n        <p>Data will appear here when loaded.</p>\n    </div>\n</div>' }
    ];

    function switchTab(tabId) {
        document.querySelectorAll('.tab-button[role="tab"]').forEach(button => {
            const isSelected = button.dataset.tabId === tabId;
            button.classList.toggle('active', isSelected);
            button.setAttribute('aria-selected', isSelected ? 'true' : 'false');
        });

        document.querySelectorAll('#tab-content > div[role="tabpanel"]').forEach(contentPanel => {
            const isActive = contentPanel.id === tabId + '-content';
            contentPanel.classList.toggle('active', isActive);

            if (isActive && tabId === 'exercises') { // If 'Exercises' tab is now active
                displayExercises(); // Call function to populate it
            }
        });
    }

    // Clear initial content before adding tab panels if tabs exist
    if (tabs.length > 0) {
        const initialMessage = tabContent.querySelector('p');
        if (initialMessage && initialMessage.textContent.startsWith('Welcome to the application.')) {
            initialMessage.remove();
        }
    }

    tabs.forEach((tab, index) => {
        const button = document.createElement('button');
        button.id = tab.id + '-tab'; // ID for the tab button
        button.classList.add('tab-button');
        button.textContent = tab.name;
        button.dataset.tabId = tab.id; // Keep this for existing logic

        button.setAttribute('role', 'tab');
        button.setAttribute('aria-controls', tab.id + '-content');

        const contentPanel = document.createElement('div');
        contentPanel.id = tab.id + '-content'; // ID for the panel
        contentPanel.setAttribute('role', 'tabpanel');
        contentPanel.setAttribute('aria-labelledby', button.id);
        contentPanel.innerHTML = tab.content;

        if (index === 0) {
            button.classList.add('active');
            button.setAttribute('aria-selected', 'true');
            contentPanel.classList.add('active');
        } else {
            button.setAttribute('aria-selected', 'false');
            // contentPanel is hidden by default by CSS not having .active class
        }

        tabNavigation.appendChild(button);
        tabContent.appendChild(contentPanel);

        button.addEventListener('click', () => switchTab(tab.id));
    });

    if (tabs.length === 0) {
        // If there are no tabs, provide a message.
        tabContent.innerHTML = '<p>No tabs available.</p>';
    }
    // Note: Initial tab activation is handled in the loop for the first tab.
    // If tabs.length > 0, the first tab is made active.
    // No explicit call to switchTab() is needed here for initial setup.

    // Check if the initially active tab is 'exercises' and populate if so.
    // Note: Our default active tab is 'home'. This is for robustness if that changes.
    const initiallyActiveButton = tabNavigation.querySelector('.tab-button.active');
    if (initiallyActiveButton && initiallyActiveButton.dataset.tabId === 'exercises') {
        displayExercises();
    }

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
                    const dataToSave = JSON.parse(dataInput.value || '{}'); // Ensure valid JSON or default to empty object
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
function saveData(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        console.log(`Data saved under key: ${key}`);
    } catch (error) {
        console.error(`Error saving data to localStorage for key ${key}:`, error);
    }
}

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

function removeData(key) {
    try {
        localStorage.removeItem(key);
        console.log(`Data removed for key: ${key}`);
    } catch (error)
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
