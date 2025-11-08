# 📝 To-Do App

A modern and elegant To-Do List application built with vanilla JavaScript, HTML, and CSS. This app features a beautiful gradient design, smooth animations, and persistent data storage.

![To-Do App](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## ✨ Features

- ✅ **Add Tasks** - Quickly add new tasks to your list
- 🎯 **Mark as Complete** - Check off completed tasks with a single click
- 🗑️ **Delete Tasks** - Remove tasks you no longer need
- 💾 **Local Storage** - Your tasks are saved automatically and persist between sessions
- 🎨 **Modern UI** - Beautiful gradient design with smooth animations
- 📱 **Responsive Design** - Works perfectly on desktop and mobile devices
- ⚡ **Fast & Lightweight** - No frameworks, pure vanilla JavaScript

## 🚀 Demo

Simply open `index.html` in your web browser to start using the app!

## 📋 Prerequisites

No prerequisites needed! This is a simple static web application that runs directly in your browser.

- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No installation required
- No dependencies needed

## 🛠️ Installation

1. **Clone the repository** or download the files:
   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project directory**:
   ```bash
   cd TO-DO
   ```

3. **Open the app**:
   - Simply double-click `index.html`, or
   - Open `index.html` in your preferred web browser

## 📂 Project Structure

```
TO-DO/
│
├── index.html          # Main HTML file
├── README.md           # Project documentation
│
├── style/
│   └── style.css       # All styles and animations
│
└── js/
    └── script.js       # Application logic and functionality
```

## 🎨 Design Features

### Color Scheme
- **Primary Gradient**: Purple to violet (`#667eea` to `#764ba2`)
- **Task Cards**: Light gradient backgrounds
- **Delete Button**: Red gradient (`#ff6b6b` to `#ee5a6f`)

### Animations
- Smooth slide-in animation when adding new tasks
- Hover effects with subtle translations
- Focus states with glowing borders
- Button press animations

### Typography
- Font Family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- Clean and readable text hierarchy

## 💻 Usage

### Adding a Task
1. Type your task in the input field
2. Click the "Agregar" button or press `Enter`
3. Your task will appear in the list below

### Completing a Task
- Click the checkbox next to any task to mark it as complete
- Completed tasks will have a strikethrough effect and reduced opacity

### Deleting a Task
- Click the "Eliminar" button on any task to remove it from the list

### Data Persistence
- All tasks are automatically saved to your browser's local storage
- Your tasks will be there when you return, even after closing the browser

## 🔧 Technical Details

### Technologies Used
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox, gradients, and animations
- **JavaScript (ES6+)** - Vanilla JS for all functionality

### Key Functions

```javascript
addTask()       // Adds a new task to the list
deleteTask(id)  // Removes a task by ID
toggleTask(id)  // Toggles completion status
renderTasks()   // Renders all tasks to the DOM
saveTasks()     // Saves tasks to localStorage
loadTasks()     // Loads tasks from localStorage
```

### Local Storage Structure
Tasks are stored as a JSON array with the following structure:
```javascript
[
  {
    id: 1699401234567,      // Timestamp-based unique ID
    text: "Task description",
    completed: false         // Boolean completion status
  }
]
```

## 🎯 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Future Enhancements

Potential features for future versions:

- [ ] Task categories/tags
- [ ] Task priority levels
- [ ] Due dates and reminders
- [ ] Search and filter functionality
- [ ] Dark mode toggle
- [ ] Export/import tasks
- [ ] Task editing capability
- [ ] Drag and drop reordering

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Joel Sanchez**

- GitHub: [@neocanario](https://github.com/neocanario)

## 🙏 Acknowledgments

- Inspired by modern task management applications
- Gradient colors inspired by contemporary UI trends
- Built with ❤️ and vanilla JavaScript

---

**Note**: This is a client-side application. All data is stored locally in your browser and is not synced across devices.

**Last Updated**: November 8, 2025
