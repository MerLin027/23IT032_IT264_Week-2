// Interactive Task Reminder System

const tasks = [];
const readline = require('readline');

// Setup interactive input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Add a new task
function addTask(title, dueTimeInMinutes, priority) {
  if (!title || typeof dueTimeInMinutes !== 'number' || typeof priority !== 'number') {
    throw new Error('Invalid task data. Ensure title, dueTime, and priority are provided.');
  }
  const dueTime = new Date(Date.now() + dueTimeInMinutes * 60000);
  tasks.push({ title, dueTime, priority });
}

// Sort tasks by priority
function sortTasksByPriority() {
  tasks.sort((a, b) => b.priority - a.priority);
}

// Get tasks due within a timeframe (in minutes)
function getTasksDueIn(minutes) {
  const now = new Date();
  return tasks.filter(task => (task.dueTime - now) / 60000 <= minutes);
}

// Send reminders
function sendReminders() {
  tasks.forEach(task => {
    const delay = task.dueTime - Date.now();
    if (delay > 0) {
      setTimeout(() => {
        console.log(`Reminder: Task "${task.title}" is due now!`);
      }, delay);
    }
  });
}

// Interactive menu
function showMenu() {
  console.log('\nTask Reminder System');
  console.log('1. Add a new task');
  console.log('2. View tasks due in the next X minutes');
  console.log('3. Sort tasks by priority');
  console.log('4. Send reminders');
  console.log('5. Exit');

  rl.question('Choose an option: ', handleMenu);
}

function handleMenu(option) {
  switch (option) {
    case '1':
      rl.question('Enter task title: ', title => {
        rl.question('Enter due time in minutes: ', dueTime => {
          rl.question('Enter priority (1-5): ', priority => {
            try {
              addTask(title, parseInt(dueTime), parseInt(priority));
              console.log('Task added successfully!');
            } catch (error) {
              console.error('Error:', error.message);
            }
            showMenu();
          });
        });
      });
      break;

    case '2':
      rl.question('Enter timeframe in minutes: ', minutes => {
        const dueTasks = getTasksDueIn(parseInt(minutes));
        console.log('Tasks due:', dueTasks);
        showMenu();
      });
      break;

    case '3':
      sortTasksByPriority();
      console.log('Tasks sorted by priority.');
      showMenu();
      break;

    case '4':
      sendReminders();
      console.log('Reminders scheduled.');
      showMenu();
      break;

    case '5':
      console.log('Exiting...');
      rl.close();
      break;

    default:
      console.log('Invalid option. Please try again.');
      showMenu();
      break;
  }
}

// Start the application
showMenu();