// Sample Exercise Data
const sampleExercises = [
    {
        id: 'ex001',
        name: 'Push-up',
        type: 'Strength', // General classification
        muscleGroup: 'Chest, Shoulders, Triceps', // Specific muscles
        equipmentNeeded: 'None',
        experienceLevel: 'Beginner', // New property
        categoryPPL: 'Push', // New property (Push/Pull/Legs or other broader category)
        instructions: 'Start in a plank position with hands slightly wider than shoulders. Lower your body until your chest nearly touches the floor, then push back up to the starting position. Keep your body straight throughout the movement.'
    },
    {
        id: 'ex002',
        name: 'Squat',
        type: 'Strength',
        muscleGroup: 'Legs, Glutes',
        equipmentNeeded: 'None (or Barbell/Dumbbells for variation)',
        experienceLevel: 'Beginner',
        categoryPPL: 'Legs',
        instructions: 'Stand with feet shoulder-width apart. Lower your hips as if sitting back in a chair, keeping your chest up and back straight. Go as low as comfortable, then push back up through your heels.'
    },
    {
        id: 'ex003',
        name: 'Dumbbell Bench Press',
        type: 'Strength',
        muscleGroup: 'Chest, Shoulders, Triceps',
        equipmentNeeded: 'Dumbbells, Bench',
        experienceLevel: 'Beginner',
        categoryPPL: 'Push',
        instructions: 'Lie on a bench with a dumbbell in each hand at chest level. Push the dumbbells up until your arms are fully extended, then slowly lower them back to the starting position.'
    },
    {
        id: 'ex004',
        name: 'Plank',
        type: 'Core',
        muscleGroup: 'Abs, Back',
        equipmentNeeded: 'None',
        experienceLevel: 'Beginner',
        categoryPPL: 'Core',
        instructions: 'Hold a push-up position, but rest your weight on your forearms instead of your hands. Keep your body in a straight line from head to heels. Hold for a designated time.'
    },
    {
        id: 'ex005',
        name: 'Jumping Jacks',
        type: 'Cardio',
        muscleGroup: 'Full Body',
        equipmentNeeded: 'None',
        experienceLevel: 'Beginner',
        categoryPPL: 'Cardio',
        instructions: 'Stand with feet together and arms at your sides. Jump to a position with legs spread wide and arms raised overhead. Return to the starting position. Repeat.'
    },
    {
        id: 'ex006',
        name: 'Bicep Curl',
        type: 'Strength',
        muscleGroup: 'Biceps',
        equipmentNeeded: 'Dumbbells (or Barbell)',
        experienceLevel: 'Beginner',
        categoryPPL: 'Pull',
        instructions: 'Stand or sit holding dumbbells with an underhand grip. Curl the weights up towards your shoulders, keeping your elbows stationary. Slowly lower the weights back down.'
    },
    {
        id: 'ex007',
        name: 'Overhead Press (Barbell)',
        type: 'Strength',
        muscleGroup: 'Shoulders, Triceps',
        equipmentNeeded: 'Barbell',
        experienceLevel: 'Intermediate',
        categoryPPL: 'Push',
        instructions: 'Stand with barbell at shoulder height. Press barbell overhead until arms are fully extended. Lower with control.'
    },
    {
        id: 'ex008',
        name: 'Deadlift (Barbell)',
        type: 'Strength',
        muscleGroup: 'Back, Hamstrings, Glutes, Core',
        equipmentNeeded: 'Barbell',
        experienceLevel: 'Advanced',
        categoryPPL: 'Pull',
        instructions: 'Stand with mid-foot under the barbell. Bend at hips and knees to grip the bar. Keep back straight, lift chest, and drive through heels to stand up. Lower bar controllably.'
    },
    {
        id: 'ex009',
        name: 'Pull-up',
        type: 'Strength',
        muscleGroup: 'Back, Biceps',
        equipmentNeeded: 'Pull-up Bar',
        experienceLevel: 'Intermediate',
        categoryPPL: 'Pull',
        instructions: 'Hang from a pull-up bar with an overhand grip. Pull your body up until your chin is over the bar. Lower yourself slowly.'
    },
    {
        id: 'ex010',
        name: 'Dumbbell Row',
        type: 'Strength',
        muscleGroup: 'Back, Biceps',
        equipmentNeeded: 'Dumbbell, Bench (optional)',
        experienceLevel: 'Beginner',
        categoryPPL: 'Pull',
        instructions: 'Place one knee and hand on a bench, holding a dumbbell in the other hand. Pull the dumbbell towards your hip, squeezing your back muscles. Lower slowly.'
    },
    {
        id: 'ex011',
        name: 'Leg Press',
        type: 'Strength',
        muscleGroup: 'Quads, Hamstrings, Glutes',
        equipmentNeeded: 'Leg Press Machine',
        experienceLevel: 'Beginner',
        categoryPPL: 'Legs',
        instructions: 'Sit in a leg press machine with feet shoulder-width apart on the platform. Push the platform away until your legs are nearly extended (do not lock knees). Slowly return to start.'
    },
    {
        id: 'ex012',
        name: 'Lateral Raise (Dumbbell)',
        type: 'Strength',
        muscleGroup: 'Shoulders (Lateral Deltoids)',
        equipmentNeeded: 'Dumbbells',
        experienceLevel: 'Beginner',
        categoryPPL: 'Push',
        instructions: 'Stand holding dumbbells at your sides. Raise arms out to the sides until they are parallel to the floor. Lower slowly.'
    },
    {
        id: 'ex013',
        name: 'Tricep Dips (Bench)',
        type: 'Strength',
        muscleGroup: 'Triceps, Chest, Shoulders',
        equipmentNeeded: 'Bench (or parallel bars)',
        experienceLevel: 'Intermediate',
        categoryPPL: 'Push',
        instructions: 'Sit on edge of bench, hands gripping edge beside hips. Extend legs. Push hips off bench, lower body by bending elbows until shoulders are below elbows. Push back up.'
    },
    {
        id: 'ex014',
        name: 'Hamstring Curl (Machine)',
        type: 'Strength',
        muscleGroup: 'Hamstrings',
        equipmentNeeded: 'Hamstring Curl Machine',
        experienceLevel: 'Beginner',
        categoryPPL: 'Legs',
        instructions: 'Lie face down on machine, ankles under roller pad. Curl legs up towards glutes. Lower slowly.'
    },
    {
        id: 'ex015',
        name: 'Calf Raise (Standing)',
        type: 'Strength',
        muscleGroup: 'Calves',
        equipmentNeeded: 'None (or weights for added resistance)',
        experienceLevel: 'Beginner',
        categoryPPL: 'Legs',
        instructions: 'Stand with feet flat. Push through balls of feet to raise heels as high as possible. Hold briefly, then lower slowly.'
    },
    {
        id: 'ex016',
        name: 'Russian Twist',
        type: 'Core',
        muscleGroup: 'Abs, Obliques',
        equipmentNeeded: 'None (or weight for added resistance)',
        experienceLevel: 'Beginner',
        categoryPPL: 'Core',
        instructions: 'Sit on floor, lean back slightly with knees bent. Clasp hands or hold weight. Twist torso from side to side.'
    },
    {
        id: 'ex017',
        name: 'Burpee',
        type: 'Cardio',
        muscleGroup: 'Full Body',
        equipmentNeeded: 'None',
        experienceLevel: 'Intermediate',
        categoryPPL: 'Full Body',
        instructions: 'Start standing. Drop into a squat, hands on floor. Kick feet back to plank. Optional push-up. Jump feet forward to squat. Jump up explosively with arms overhead.'
    }
];

// Standard Equipment List
const standardEquipmentList = [
    { id: 'dumbbells', name: 'Dumbbells' },
    { id: 'barbell', name: 'Barbell' },
    { id: 'kettlebell', name: 'Kettlebell' },
    { id: 'pullup_bar', name: 'Pull-up Bar' },
    { id: 'bench_adjustable', name: 'Adjustable Bench' },
    { id: 'resistance_bands', name: 'Resistance Bands' },
    { id: 'yoga_mat', name: 'Yoga Mat' },
    { id: 'jump_rope', name: 'Jump Rope' },
    { id: 'medicine_ball', name: 'Medicine Ball' },
    { id: 'stability_ball', name: 'Stability Ball' }
];

function displayExercises() {
    // Check if container is found inside the exercises tab content specifically
    // This is important because the element might not be in the main DOM when tabs are hidden.
    const exercisesPanel = document.getElementById('exercises-content');
    if (!exercisesPanel) {
        // console.log('Exercises panel not found for display.');
        return;
    }
    const listContainer = exercisesPanel.querySelector('#exercise-list-container');
    if (exercisesTabPanel) {
        listContainer = exercisesTabPanel.querySelector('#exercise-list-container');
    }

    if (!listContainer) {
        // console.error('Exercise list container not found in Exercises tab.');
        return;
    }

    // Get current filter values
    const selectedExperience = exercisesPanel.querySelector('#filter-experience').value;
    const selectedCategory = exercisesPanel.querySelector('#filter-categoryPPL').value;
    const selectedEquipment = exercisesPanel.querySelector('#filter-equipment').value;
    const selectedMuscleGroup = exercisesPanel.querySelector('#filter-muscleGroup').value;

    // Filter sampleExercises
    let filteredExercises = sampleExercises.filter(exercise => {
        const matchesExperience = !selectedExperience || exercise.experienceLevel === selectedExperience;
        const matchesCategory = !selectedCategory || exercise.categoryPPL === selectedCategory;
        const matchesEquipment = !selectedEquipment || exercise.equipmentNeeded === selectedEquipment;

        // Muscle group check: if a specific muscle group is selected,
        // check if the exercise's muscleGroup string (which can be "Chest, Shoulders") contains the selected one.
        const exerciseMuscleGroups = exercise.muscleGroup.split(',').map(mg => mg.trim().toLowerCase());
        const matchesMuscleGroup = !selectedMuscleGroup || exerciseMuscleGroups.includes(selectedMuscleGroup.toLowerCase());

        return matchesExperience && matchesCategory && matchesEquipment && matchesMuscleGroup;
    });

    listContainer.innerHTML = ''; // Clear existing content

    if (filteredExercises.length === 0) {
        listContainer.innerHTML = '<p>No exercises match your current filter criteria.</p>';
        return;
    }

    const ul = document.createElement('ul');
    ul.style.listStyleType = 'none';
    ul.style.padding = '0';

    filteredExercises.forEach(exercise => {
        const li = document.createElement('li');
        li.style.marginBottom = '20px';
        li.style.padding = '15px';
        li.style.border = '1px solid #ddd'; // Ensure this matches CSS or move to CSS
        li.style.borderRadius = '8px';   // Ensure this matches CSS or move to CSS

        let content = `
            <h3 style="margin-top: 0; margin-bottom: 10px; color: #007aff;">${exercise.name}</h3>
            <p><strong>Type:</strong> ${exercise.type}</p>
            <p><strong>Category:</strong> ${exercise.categoryPPL}</p>
            <p><strong>Experience:</strong> ${exercise.experienceLevel}</p>
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

function displayEquipmentChecklist() {
    const settingsPanel = document.getElementById('settings-content'); // ID of the settings tab panel
    if (!settingsPanel) return;

    const container = settingsPanel.querySelector('#equipment-checkbox-container');
    if (!container) {
        console.error('Equipment checkbox container not found in Settings tab.');
        return;
    }

    container.innerHTML = ''; // Clear "Loading..." message or old checkboxes

    if (!standardEquipmentList || standardEquipmentList.length === 0) {
        container.innerHTML = '<p>No standard equipment defined.</p>';
        return;
    }

    standardEquipmentList.forEach(equipment => {
        const div = document.createElement('div');
        div.classList.add('equipment-item'); // For styling

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'equip-' + equipment.id;
        checkbox.value = equipment.id;
        checkbox.name = 'user_equipment';

        const label = document.createElement('label');
        label.htmlFor = 'equip-' + equipment.id;
        label.textContent = equipment.name;
        label.style.marginLeft = '8px';

        div.appendChild(checkbox);
        div.appendChild(label);
        container.appendChild(div);
    });
}

function populateExerciseDropdown() {
    // Ensure this function is called when the 'Log Workout' tab is active and its DOM is ready.
    const logWorkoutPanel = document.getElementById('log-workout-content'); // Panel ID for 'log-workout' tab
    if (!logWorkoutPanel) return; // Tab panel not active/rendered

    const selectElement = logWorkoutPanel.querySelector('#exercise-name-select');
    if (!selectElement) {
        console.error('Exercise name select element not found in Log Workout tab.');
        return;
    }

    // Clear existing options (except the default "-- Select --")
    while (selectElement.options.length > 1) {
        selectElement.remove(1);
    }

    sampleExercises.forEach(exercise => {
        const option = document.createElement('option');
        option.value = exercise.id; // Store exercise ID as value
        option.textContent = exercise.name;
        selectElement.appendChild(option);
    });
}

function populateEditForm(logTimestamp) {
    const logs = loadData(WORKOUT_LOGS_KEY);
    if (!logs) return;

    const logToEdit = logs.find(log => log.timestamp === logTimestamp);
    if (!logToEdit) {
        alert('Error: Could not find log entry to edit.');
        return;
    }

    // Ensure the form elements are accessible (assuming 'log-workout' tab is active or elements are global)
    const logWorkoutPanel = document.getElementById('log-workout-content');
    if (!logWorkoutPanel) return;

    // Populate the form fields
    // Important: Ensure populateExerciseDropdown has run if the select is empty
    // This should be handled by switchTab calling populateExerciseDropdown first.
    logWorkoutPanel.querySelector('#exercise-name-select').value = logToEdit.exerciseId;
    logWorkoutPanel.querySelector('#exercise-sets').value = logToEdit.sets;
    logWorkoutPanel.querySelector('#exercise-reps').value = logToEdit.reps;
    logWorkoutPanel.querySelector('#exercise-weight').value = logToEdit.weight;
    logWorkoutPanel.querySelector('#editing-log-timestamp').value = logToEdit.timestamp;

    // Change button text and visibility
    logWorkoutPanel.querySelector('#save-log-btn').textContent = 'Update Log';
    logWorkoutPanel.querySelector('#cancel-edit-btn').style.display = 'inline-block';

    // Optional: Scroll form into view
    logWorkoutPanel.querySelector('#log-workout-form').scrollIntoView({ behavior: 'smooth' });
}

function resetLogForm() {
    const logWorkoutPanel = document.getElementById('log-workout-content');
    if (!logWorkoutPanel) return;

    logWorkoutPanel.querySelector('#log-workout-form').reset(); // Clears form fields
    logWorkoutPanel.querySelector('#editing-log-timestamp').value = ''; // Clear editing timestamp
    logWorkoutPanel.querySelector('#save-log-btn').textContent = 'Save Log';
    logWorkoutPanel.querySelector('#cancel-edit-btn').style.display = 'none';
    // Ensure dropdown is reset to default selection
    logWorkoutPanel.querySelector('#exercise-name-select').value = "";
}

const USER_EQUIPMENT_KEY = 'userEquipment';
const WORKOUT_LOGS_KEY = 'workoutLogs'; // Define a constant for the localStorage key

function loadUserEquipmentAndDisplay() {
    const settingsPanel = document.getElementById('settings-content');
    if (!settingsPanel) {
        // console.log('Settings panel not active/rendered for loading equipment.');
        return;
    }

    // Ensure checkboxes are present first by calling displayEquipmentChecklist
    // This might be redundant if called sequentially in switchTab, but good for standalone robustness
    // displayEquipmentChecklist(); // Potentially called right before this in switchTab

    const savedEquipmentIds = loadData(USER_EQUIPMENT_KEY);
    if (!savedEquipmentIds || !Array.isArray(savedEquipmentIds)) {
        // console.log('No saved equipment data found or data is not an array.');
        return; // No data to pre-select
    }

    const checkboxes = settingsPanel.querySelectorAll('#equipment-checkbox-container input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        if (savedEquipmentIds.includes(checkbox.value)) {
            checkbox.checked = true;
        } else {
            checkbox.checked = false; // Ensure items not in the list are unchecked
        }
    });
    // console.log('User equipment loaded and checkboxes updated.');
}

function saveUserEquipment(selectedEquipmentIds) {
    saveData(USER_EQUIPMENT_KEY, selectedEquipmentIds);
    console.log('User equipment saved:', selectedEquipmentIds);

    // Display feedback message
    const settingsPanel = document.getElementById('settings-content');
    if (settingsPanel) {
        const feedbackDiv = settingsPanel.querySelector('#equipment-save-feedback');
        if (feedbackDiv) {
            feedbackDiv.textContent = 'Equipment preferences saved successfully!';
            // Clear message after a few seconds
            setTimeout(() => {
                feedbackDiv.textContent = '';
            }, 3000);
        }
    }
}

function saveWorkoutLog(logEntry) {
    let logs = loadData(WORKOUT_LOGS_KEY);
    if (!logs || !Array.isArray(logs)) {
        logs = []; // Initialize as an empty array if no logs or not an array
    }
    logs.push(logEntry);
    saveData(WORKOUT_LOGS_KEY, logs);
    console.log('Workout log saved:', logEntry);
    // Optionally, trigger display of saved logs here
    // displaySavedLogs(); // We'll call this separately after saving for now
}

function deleteWorkoutLog(logTimestamp) {
    let logs = loadData(WORKOUT_LOGS_KEY);
    if (!logs || !Array.isArray(logs)) {
        console.log('No logs to delete or logs data is corrupted.');
        return;
    }

    const initialLogCount = logs.length;
    logs = logs.filter(log => log.timestamp !== logTimestamp);

    if (logs.length < initialLogCount) {
        saveData(WORKOUT_LOGS_KEY, logs);
        console.log('Workout log deleted:', logTimestamp);
        alert('Log entry deleted.'); // User feedback
    } else {
        console.log('Log entry not found for deletion:', logTimestamp);
        alert('Could not find the log entry to delete.');
    }

    displaySavedLogs(); // Refresh the list
}

function displaySavedLogs() {
    const logWorkoutPanel = document.getElementById('log-workout-content');
    if (!logWorkoutPanel) {
        // console.log('Log Workout panel not active/rendered for displaying logs.');
        return;
    }

    const logsListElement = logWorkoutPanel.querySelector('#saved-logs-list');
    if (!logsListElement) {
        console.error('Saved logs list element not found in Log Workout tab.');
        return;
    }

    const logs = loadData(WORKOUT_LOGS_KEY);
    logsListElement.innerHTML = ''; // Clear existing list items

    if (!logs || logs.length === 0) {
        logsListElement.innerHTML = '<li>No workout logs saved yet.</li>';
        return;
    }

    // Display logs, newest first
    logs.slice().reverse().forEach(log => {
        const listItem = document.createElement('li');
        const logDate = new Date(log.timestamp);
        const formattedTimestamp = `${logDate.toLocaleDateString()} ${logDate.toLocaleTimeString()}`;

        // Main log content
        const logDetails = document.createElement('div');
        logDetails.innerHTML = `
            <strong>${log.exerciseName}</strong> - ${formattedTimestamp}<br>
            Sets: ${log.sets}, Reps: ${log.reps}, Weight: ${log.weight}
        `;
        logDetails.style.marginBottom = '10px'; // Space before buttons

        // Buttons container
        const buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('log-item-actions'); // For styling the container

        // Edit Button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-log-btn'); // Class for styling
        editButton.dataset.timestamp = log.timestamp;
        editButton.style.marginRight = '8px'; // Space between buttons

        // Delete Button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-log-btn'); // Class for styling
        deleteButton.dataset.timestamp = log.timestamp;

        buttonsDiv.appendChild(editButton);
        buttonsDiv.appendChild(deleteButton);

        listItem.appendChild(logDetails);
        listItem.appendChild(buttonsDiv);

        // Styling for listItem (already present from previous steps)
        listItem.style.padding = '10px';
        listItem.style.borderBottom = '1px solid #eee';

        logsListElement.appendChild(listItem);
    });
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
        {
            id: 'log-workout',
            name: 'Log Workout',
            content: `
                <h2>Log Your Workout</h2>
                <form id="log-workout-form">
                    <input type="hidden" id="editing-log-timestamp" name="editing-log-timestamp">
                    <div class="form-group">
                        <label for="exercise-name-select">Exercise Name:</label>
                        <select id="exercise-name-select" name="exercise-name-select" required>
                            <option value="">-- Select an Exercise --</option>
                            <!-- Options will be populated by JavaScript -->
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exercise-sets">Sets:</label>
                        <input type="number" id="exercise-sets" name="exercise-sets" min="1" required>
                    </div>
                    <div class="form-group">
                        <label for="exercise-reps">Reps (per set):</label>
                        <input type="number" id="exercise-reps" name="exercise-reps" min="1" required>
                    </div>
                    <div class="form-group">
                        <label for="exercise-weight">Weight (kg/lbs):</label>
                        <input type="number" id="exercise-weight" name="exercise-weight" min="0" step="0.1">
                    </div>
                    <button type="submit" id="save-log-btn">Save Log</button>
                    <button type="button" id="cancel-edit-btn" style="display:none; margin-left: 10px;">Cancel Edit</button>
                </form>
                <div id="saved-logs-container" style="margin-top: 30px;">
                    <h3>Previously Saved Logs:</h3>
                    <ul id="saved-logs-list">
                        <!-- Logs will be displayed here -->
                    </ul>
                </div>
            `
        },
        { id: 'profile', name: 'Profile', content: '<div>\n            <h2>User Profile</h2>\n            <p>This section is designated for displaying and managing user-specific information. In a full application, this could include:</p>\n            <ul>\n                <li>Username and contact details.</li>\n                <li>Profile picture and bio.</li>\n                <li>Account preferences and activity logs.</li>\n            </ul>\n            <p>For now, it\'s a placeholder to illustrate the tab\'s purpose. Data for this section would typically be fetched from the database.</p>\n            <section aria-labelledby="profile-example-heading" style="margin-top: 20px; padding: 15px; background-color: #e9e9eb; border-radius: 8px;">\n                <h3 id="profile-example-heading">Example Profile Data (Conceptual):</h3>\n                <p><strong>Name:</strong> Alex Appleby</p>\n                <p><strong>Email:</strong> alex.appleby@example.com</p>\n                <p><strong>Joined:</strong> January 1, 2024</p>\n            </section>\n        </div>' },
        {
            id: 'settings',
            name: 'Settings',
            content: `
            <div>
                <h2>Application Settings</h2>
                <p>Here, you would typically find options to customize your application experience. This might include:</p>
                <ul>
                    <li><strong>Appearance:</strong> Theme selection (light/dark mode), font size adjustments.</li>
                    <li><strong>Notifications:</strong> Preferences for email or in-app alerts.</li>
                    <li><strong>Data Management:</strong> Options to export or import data, or clear local cache.</li>
                    <li><strong>Account:</strong> Password changes, privacy settings, or account deletion.</li>
                </ul>
                <section aria-labelledby="example-settings-heading" style="margin-top: 20px;">
                    <h3 id="example-settings-heading">Example Setting:</h3>
                    <label for="theme-select" style="margin-right: 5px;">Theme:</label>
                    <select id="theme-select" style="padding: 5px; border-radius: 4px; border: 1px solid #d2d2d7;">
                        <option value="light">Light (Default)</option>
                        <option value="dark" disabled>Dark (Coming Soon)</option>
                    </select>
                </section>

                <section id="my-equipment-section" aria-labelledby="my-equipment-heading" style="margin-top: 30px; padding-top:20px; border-top: 1px solid #eee;">
                    <h3 id="my-equipment-heading">My Available Equipment</h3>
                    <form id="equipment-form">
                        <div id="equipment-checkbox-container">
                            <!-- Checkboxes will be populated here by JavaScript -->
                            <p>Loading equipment list...</p>
                        </div>
                        <button type="submit" id="save-equipment-btn" style="margin-top: 15px;">Save Equipment</button>
                    </form>
                    <div id="equipment-save-feedback" style="margin-top: 10px; color: green;"></div>
                </section>
            </div>
            `
        },
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

            if (isActive) {
                if (tabId === 'exercises') {
                    populateFilterDropdowns(); // Call this first
                    displayExercises();
                } else if (tabId === 'log-workout') {
                    populateExerciseDropdown();
                    displaySavedLogs();
                } else if (tabId === 'settings') {
                    displayEquipmentChecklist();
                    loadUserEquipmentAndDisplay();
                }
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
    if (initiallyActiveButton) {
        if (initiallyActiveButton.dataset.tabId === 'exercises') {
            populateFilterDropdowns(); // Call this first
            displayExercises();
        } else if (initiallyActiveButton.dataset.tabId === 'log-workout') {
            populateExerciseDropdown();
            displaySavedLogs();
        } else if (initiallyActiveButton.dataset.tabId === 'settings') {
            displayEquipmentChecklist();
            loadUserEquipmentAndDisplay();
        }
    }

    // Using Event Delegation for the Log Workout form submission:
    const tabContentElement = document.getElementById('tab-content');
    if (tabContentElement) {
        // Handle form submissions
        tabContentElement.addEventListener('submit', function(event) {
            if (event.target.id === 'equipment-form') {
                event.preventDefault(); // Prevent default form submission
                // ... (equipment form logic from previous step, ensure it's correct) ...
                const selectedEquipmentIds = [];
                const settingsPanel = document.getElementById('settings-content');
                if (settingsPanel) {
                    const checkboxes = settingsPanel.querySelectorAll('#equipment-checkbox-container input[type="checkbox"]');
                    checkboxes.forEach(checkbox => {
                        if (checkbox.checked) {
                            selectedEquipmentIds.push(checkbox.value);
                        }
                    });
                }
                saveUserEquipment(selectedEquipmentIds);
            } else if (event.target.id === 'log-workout-form') {
                event.preventDefault(); // Prevent default form submission

                const editingTimestampInput = document.getElementById('editing-log-timestamp');
                const currentEditingTimestamp = editingTimestampInput ? editingTimestampInput.value : null;

                const exerciseSelect = document.getElementById('exercise-name-select');
                const setsInput = document.getElementById('exercise-sets');
                const repsInput = document.getElementById('exercise-reps');
                const weightInput = document.getElementById('exercise-weight');

                const updatedLogData = {
                    exerciseId: exerciseSelect.value,
                    exerciseName: exerciseSelect.options[exerciseSelect.selectedIndex].text,
                    sets: parseInt(setsInput.value),
                    reps: parseInt(repsInput.value),
                    weight: parseFloat(weightInput.value) || 0,
                    // timestamp will be handled based on whether it's an edit or new
                };

                if (!updatedLogData.exerciseId) {
                    alert('Please select an exercise.');
                    return;
                }

                if (currentEditingTimestamp) {
                    // ---- EDIT MODE ----
                    let logs = loadData(WORKOUT_LOGS_KEY);
                    if (!logs || !Array.isArray(logs)) {
                        alert('Error: Could not load logs to update.');
                        return;
                    }

                    const logIndex = logs.findIndex(log => log.timestamp === currentEditingTimestamp);

                    if (logIndex === -1) {
                        alert('Error: Could not find the log entry to update.');
                        return;
                    }

                    // Update the existing log entry, preserving its original timestamp as ID
                    logs[logIndex] = {
                        ...logs[logIndex], // Keep original timestamp and any other non-edited fields
                        ...updatedLogData, // Apply new data
                        timestamp: currentEditingTimestamp // Explicitly ensure original timestamp is kept
                    };

                    saveData(WORKOUT_LOGS_KEY, logs);
                    alert('Workout log updated successfully!');
                    resetLogForm(); // Reset form to save mode and clear fields
                    displaySavedLogs(); // Refresh the list

                } else {
                    // ---- SAVE NEW LOG MODE ----
                    const newLogEntry = {
                        ...updatedLogData,
                        timestamp: new Date().toISOString() // Generate new timestamp for new log
                    };
                    saveWorkoutLog(newLogEntry); // saveWorkoutLog only saves

                    alert('Workout log saved!');
                    resetLogForm(); // Reset form
                    displaySavedLogs(); // Refresh list
                }
            }
        });

        // Handle clicks on dynamically added buttons within saved logs list
        const logWorkoutPanelForClicks = document.getElementById('log-workout-content');
        if (logWorkoutPanelForClicks) {
            const savedLogsListElement = logWorkoutPanelForClicks.querySelector('#saved-logs-list');
            if (savedLogsListElement) {
                savedLogsListElement.addEventListener('click', function(event) {
                    if (event.target.classList.contains('delete-log-btn')) {
                        const logTimestamp = event.target.dataset.timestamp;
                        if (logTimestamp) {
                            if (confirm('Are you sure you want to delete this log entry?')) {
                                deleteWorkoutLog(logTimestamp);
                            }
                        } else {
                            console.error('Delete button clicked without a timestamp.');
                        }
                    } else if (event.target.classList.contains('edit-log-btn')) { // Add this
                        const logTimestamp = event.target.dataset.timestamp;
                        if (logTimestamp) {
                            populateEditForm(logTimestamp);
                        } else {
                            console.error('Edit button clicked without a timestamp.');
                        }
                    }
                });
            }
        }

        // Event listener for Cancel Edit button (using delegation on the form)
        const formInPanel = logWorkoutPanelForClicks?.querySelector('#log-workout-form'); // Re-use panel variable if available or get form directly
        if(formInPanel){
            formInPanel.addEventListener('click', function(event){
                if(event.target.id === 'cancel-edit-btn'){
                    resetLogForm();
                }
            });
        }
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
