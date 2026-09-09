# Dynamic Task Manager

A small React task management application built to demonstrate fundamental React concepts including reusable components, JSX, props, events, state management, conditional rendering, list rendering, and stable keys.

The project was created as part of a React assignment covering Sessions 1 and 2. Rather than copying a traditional classroom Todo App, the application uses its own component structure, UI design, and task management features.

## Features

### 1. Task Creation

Users can create new tasks by entering text into the task input and clicking **Add**.

- Prevents empty tasks from being added.
- Automatically clears the input after a task is added.
- Generates a unique ID for every task.
- Stores each task with its text and completion status.

Example task:

```js
{
  id: "unique-id",
  name: "Complete React assignment",
  isCompleted: false
}
```

### 2. Dynamic Task List

All tasks are stored in React state and displayed dynamically using JavaScript's `map()` method.

Each task has a unique `key` based on its ID to help React efficiently track list items.

### 3. Complete / Uncomplete Tasks

Each task has a checkbox that allows the user to toggle its completion status.

Completed tasks are visually distinguished from incomplete tasks using different styling.

### 4. Delete Tasks

Every task has a **Delete** button.

Clicking the button removes only the selected task from the task list.

### 5. Empty State

When there are no tasks, the application displays a helpful message instead of an empty list.

For example:

> No tasks yet. Add your first task.

### 6. Task Statistics

The application displays dynamic task statistics including:

- **Total Tasks**
- **Completed Tasks**

The statistics automatically update whenever tasks are added, completed, uncompleted, or deleted.

### 7. Task Filtering

Users can filter the task list using three options:

- **All** — displays every task.
- **Completed** — displays only completed tasks.
- **Not Completed** — displays only incomplete tasks.

The currently selected filter is visually highlighted.

### 8. Clear Completed Tasks

The **Clear Completed** button removes all completed tasks while keeping incomplete tasks.

The button is displayed when there are completed tasks available to clear.

---

## React Concepts Demonstrated

This project focuses on the fundamental concepts covered in React Sessions 1 and 2.

### JSX

JSX is used to create the application's user interface directly inside React components.

```jsx
<h2>Tasks Assigned</h2>
```

### Reusable Components

The application is divided into smaller components rather than placing everything inside one component.

Example structure:

```text
App
├── TaskForm
├── TaskStats
├── TaskFilter
└── TaskList
```

Each component has a specific responsibility.

### Props

Props are used to pass data and functions between components.

For example, the task list receives the current tasks and the function used to update them:

```jsx
<TaskList tasks={tasks} setTasks={setTasks} />
```

### Passing Functions as Props

Child components can trigger changes to data owned by the parent by receiving state-update functions through props.

For example:

```jsx
<TaskForm setTasks={setTasks} />
```

This allows `TaskForm` to add a new task to the state maintained by `App`.

### Events

The application handles user interactions using React event handlers such as:

- `onSubmit`
- `onChange`
- `onClick`

Examples include submitting a new task, changing a checkbox, selecting a filter, and deleting a task.

### State

The application uses `useState` to store changing data.

The main application state is the task array:

```jsx
const [tasks, setTasks] = useState([]);
```

State updates cause React to re-render the interface with the latest information.

### Conditional Rendering

Conditional rendering is used to display different parts of the interface depending on the application state.

For example:

```jsx
{
  tasks.length !== 0 ? <TaskList /> : <p>No tasks yet. Add your first task.</p>;
}
```

### List Rendering

The task list is generated dynamically using `map()`:

```jsx
tasks.map((task) => <li key={task.id}>{task.name}</li>);
```

### Keys

Every task uses its unique ID as its React key:

```jsx
key={task.id}
```

This gives React a stable way to identify individual tasks when the list changes.

---

## Project Structure

A possible project structure is:

```text
dynamic-task-manager/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── TaskForm.jsx
│   │   ├── TaskList.jsx
│   │   ├── TaskStats.jsx
│   │   └── TaskFilter.jsx
│   │
│   ├── styles/
│   │   ├── taskForm.css
│   │   ├── taskList.css
│   │   └── ...
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
│
├── index.html
├── package.json
└── README.md
```

The exact structure may vary depending on the implementation.

---

## How to Run the Project

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm
- A code editor such as VS Code

### 1. Clone the Repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to the Project

```bash
cd dynamic-task-manager
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Vite will provide a local URL, usually similar to:

```text
http://localhost:5173
```

Open the provided URL in your browser.

---

## How to Use

1. Enter a task in the input field.
2. Click **Add** to create the task.
3. Use the checkbox to mark a task as completed or incomplete.
4. Click **Delete** to remove an individual task.
5. Use **All**, **Completed**, or **Not Completed** to filter tasks.
6. Check the task statistics to see the current number of total and completed tasks.
7. Click **Clear Completed** to remove all completed tasks at once.

---

## Task Data Structure

Each task is represented as an object containing three properties:

```js
{
  id: "unique-task-id",
  name: "Complete React assignment",
  isCompleted: false
}
```

### Properties

| Property      | Type    | Description                              |
| ------------- | ------- | ---------------------------------------- |
| `id`          | String  | Unique identifier for the task           |
| `name`        | String  | The task description                     |
| `isCompleted` | Boolean | Determines whether the task is completed |

---

## Technologies Used

- **React**
- **JavaScript**
- **JSX**
- **HTML**
- **CSS**
- **Vite**
- **npm**

---

## Purpose of the Project

The main purpose of this project is to practice the fundamental building blocks of React by creating a functional application from scratch.

The project demonstrates how React components can communicate through props, how state can be used to manage changing application data, and how user interactions can trigger state updates that automatically change the UI.

It also demonstrates how concepts such as conditional rendering, list rendering, and keys work together to create a dynamic user interface.

---

## Future Improvements

Possible improvements for future versions include:

- Persisting tasks using `localStorage`.
- Adding task editing.
- Adding task due dates.
- Adding task priorities.
- Adding categories or tags.
- Adding animations and transitions.
- Adding dark mode.
- Connecting the application to a backend API.
- Adding user authentication.

---

## Author

**Saron A.**

Software Engineering Student
Frontend Development Enthusiast

---

## License

This project was created for educational purposes.
