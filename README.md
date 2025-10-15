# Synthio Chat

A responsive chat interface built from Figma design specifications for Synthio Labs.

---

## 🚀 Live Demo
[Visit the live site](https://synthiolab.netlify.app/)

## 📂 GitHub Repository
[View on GitHub](https://github.com/ryujan404/synthioLabs)

---

## ⚡ Quick Start

To run locally:

```bash
# Install dependencies
npm install  # (Node version >= 14)

# Start the development server
npm start
```

Then visit: http://localhost:3000

---

## 🧰 Tech Stack

- React 19.2.0
- Redux 5.0.1
- Tailwind CSS 3.4.18
- Date-fns 4.1.0

---

## 🏗️ Architecture: Atomic Design
The codebase follows atomic design principles for scalability and reusability.

```
src/components/
├── atoms/        # Avatar, Badge, IconButton, Logo, SearchBar, TabButton
├── molecules/    # ChatHeader, ChatListItem, MessageActions, MessageBubble, MessageInput
├── organisms/    # ChatSidebar, ChatWindow, NavigationBar
└── pages/        # Chat
```

### Why Atomic Design?
✅ Maximizes reusability  
✅ Makes components easy to test and extend  
✅ Supports scalable feature growth

---

## ✨ Key Features

- 🎯 Pixel-perfect translation of the Figma design (desktop & mobile)
- 📱 Fully responsive layout with sidebar and navigation
- 🤖 Dummy chat data simulation with user/AI roles
- 🚀 Performance-focused: React.memo, useCallback, useMemo
- 🧩 Component-based structure: clear separation of atoms, molecules, organisms

---

## 🎨 Design Decisions

### 1) Redux for State Management
Supports scalability and maintainability for future features beyond the mockup.

### 2) Tailwind CSS for Styling
Enables rapid, consistent, and responsive styling, perfectly matching Figma.

### 3) Constants Extraction
All numbers, colors, and strings are declared in dedicated files for maintainability.

### 4) Atomic Architecture
Assures ease of adding new features and testing isolated components.

### 5) Performance Focus
Memoized components and handlers minimize unnecessary re-renders.
