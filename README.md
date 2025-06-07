# Fitness Tracker Web App

## Description

This is a client-side web application designed to help users track their workouts, explore exercises, and monitor their personal bests. It's built with HTML, CSS, and vanilla JavaScript, utilizing browser `localStorage` for data persistence.

## Current Features

*   **Tabbed Navigation:** Easy-to-use interface with dedicated sections for different functionalities.
*   **Exercise Library:**
    *   Browse a list of pre-defined exercises.
    *   Detailed information for each exercise: type, category (Push/Pull/Legs, etc.), experience level, muscle group, equipment needed, and instructions.
    *   Filter exercises by experience level, category, equipment, and muscle group.
*   **Workout Logging:**
    *   Log workouts with exercise name (selected from a dropdown), sets, reps, and weight.
    *   View a list of previously saved workout logs.
    *   **Edit** existing log entries to correct details.
    *   **Delete** log entries.
*   **Personal Best (PB) Tracking:**
    *   Automatically calculates and displays your personal best (heaviest weight lifted) for each exercise based on your logged workouts.
    *   View PBs in a dedicated "Progress" tab.
*   **User Equipment Profile:**
    *   Specify your available workout equipment in the "Settings" tab.
    *   Saved preferences are remembered for future sessions.
*   **Accessibility & UX:**
    *   Semantic HTML and ARIA attributes for tab navigation.
    *   "Skip to main content" link.
    *   Responsive design for filter controls.

## How to Use

1.  **Open `index.html` in your web browser.** (Since it's a client-side app, no special build process is needed for the current version).

2.  **Navigating the App:**
    *   Use the tabs at the top ("Home", "Exercises", "Log Workout", "Progress", "Settings", "Profile") to switch between different sections.

3.  **Exercises Tab:**
    *   View the list of available exercises.
    *   Use the dropdown filters at the top to narrow down the list by Experience Level, Category, Equipment, or Muscle Group.
    *   Click "Reset Filters" to see all exercises again.

4.  **Log Workout Tab:**
    *   **To Log a New Workout:**
        *   Select an exercise from the "Exercise Name" dropdown.
        *   Enter the number of Sets, Reps (per set), and Weight (if applicable).
        *   Click "Save Log". Your log will appear in the "Previously Saved Logs" list below.
    *   **To Edit a Log:**
        *   Find the log in the "Previously Saved Logs" list.
        *   Click the "Edit" button next to it. The form above will populate with the log's details.
        *   Modify the details as needed.
        *   Click "Update Log" (the "Save Log" button changes text).
        *   To cancel editing, click "Cancel Edit".
    *   **To Delete a Log:**
        *   Find the log in the "Previously Saved Logs" list.
        *   Click the "Delete" button. You'll be asked to confirm.

5.  **Progress Tab:**
    *   This tab automatically displays your calculated Personal Bests for each exercise where you've logged a weight.
    *   PBs are based on the heaviest weight lifted, with tie-breaking by reps and then recency.

6.  **Settings Tab:**
    *   Go to the "My Available Equipment" section.
    *   Check the boxes next to the equipment you have.
    *   Click "Save Equipment". Your selections will be saved for future reference (though not yet actively used by other features like workout generation).

## Technology Stack

*   HTML5
*   CSS3
*   Vanilla JavaScript (ES6+)
*   Browser `localStorage` for data storage.
