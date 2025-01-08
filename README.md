# Task Reminder System

The Task Reminder System is a simple and interactive command-line application written in JavaScript. It allows users to manage tasks, sort them by priority, view upcoming tasks, and schedule reminders using asynchronous programming concepts.

## Features

- **Add Tasks**: Create tasks with a title, due time, and priority.
- **View Upcoming Tasks**: List tasks that are due within a specified timeframe.
- **Sort Tasks by Priority**: Organize tasks in descending order of priority.
- **Schedule Reminders**: Get reminders for tasks as they approach their due time.
- **Interactive Command Line**: Navigate through a menu-driven interface to manage tasks easily.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 12 or later)

## Installation

1. Clone the repository or copy the script to your local machine.
2. Ensure you have Node.js installed.
3. Run the script using the command:
   ```bash
   node <script_name>.js
   ```

## Usage

1. Launch the application by running the script in your terminal:
   ```bash
   node <script_name>.js
   ```
2. Use the menu to interact with the system:
   - Option 1: Add a new task by entering its title, due time in minutes, and priority.
   - Option 2: View tasks due within a specified number of minutes.
   - Option 3: Sort tasks by their priority.
   - Option 4: Schedule reminders for tasks.
   - Option 5: Exit the application.

## Example Workflow

1. Add tasks like:
   - Title: "Finish report"
   - Due Time: 10 minutes
   - Priority: 3
2. View tasks due in the next 10 minutes.
3. Sort the tasks by priority.
4. Schedule reminders for all tasks.
5. Exit the application.

## Technologies Used

- JavaScript (ES6)
- Node.js
- `readline` module for interactive input
- `setTimeout` for asynchronous reminders

## Code Overview

### Key Functions

- **addTask(title, dueTimeInMinutes, priority)**: Adds a new task to the task list.
- **sortTasksByPriority()**: Sorts tasks by their priority.
- **getTasksDueIn(minutes)**: Retrieves tasks that are due within a specified number of minutes.
- **sendReminders()**: Schedules and sends reminders for tasks as they approach their due time.

### Interactive Menu

The interactive menu guides users through the application with the following options:
- Add a task
- View tasks due in a specified timeframe
- Sort tasks by priority
- Schedule reminders
- Exit the application

## Error Handling

The system includes error handling to ensure robustness. For example, if invalid data is provided when adding a task, the system will display an appropriate error message and return to the menu.

---

Enjoy managing your tasks efficiently with the Task Reminder System               
