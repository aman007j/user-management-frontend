# User Management Frontend - React

A modern React application for managing user information with a clean and responsive UI. This frontend communicates with the Spring Boot backend API.

## 📁 Project Structure

```
user-management-frontend/
+---public
|       vite.svg
|       
\---src
    |   App.css
    |   App.jsx
    |   index.css
    |   main.jsx
    |   
    +---assets
    |       react.svg
    |       
    +---components
    |       UserForm.css
    |       UserForm.jsx
    |       UserTable.css
    |       UserTable.jsx
    |       
    \---services
            userService.js
```

## 🚀 Prerequisites

- Node.js 14+ and npm
- vite
- Backend API running on http://localhost:8080

## 🛠️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/aman007j/user-management-frontend.git
cd user-management-frontend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```

The application will open automatically at **http://localhost:5173**

## ✨ Features

### User Form
- Input fields for first name and last name
- Client-side validation
- Loading state during submission
- Form clears after successful submission

### User Table
- Displays all users in a responsive table
- Shows ID, First Name, Last Name, and Full Name columns
- Loading state while fetching data
- Empty state message when no users exist
- Hover effects for better UX

### Error Handling
- Displays error messages for failed API calls
- Validation errors shown inline
- User-friendly error messages

## 🎨 Design Features

- **Responsive Design** - Works on desktop, tablet, and mobile
- **Modern UI** - Gradient backgrounds and smooth animations
- **Loading States** - Visual feedback during operations
- **Accessibility** - Proper labels and semantic HTML

## 🔧 Technologies Used

- **React 18.2** - UI library
- **Axios 1.6** - HTTP client for API calls
- **CSS3** - Modern styling with flexbox and gradients
- **React Hooks** - useState and useEffect for state management

## 📡 API Integration

The frontend communicates with the backend through the `userService.js` file:

- **getAllUsers()** - Fetches all users from GET `/users`
- **createUser(firstName, lastName)** - Creates a new user via POST `/users`

Base URL is configured in `userService.js` (default: http://localhost:8080)

## 🏗️ Component Architecture

### App.jsx (Parent Component)
- Manages application state (users, loading, error)
- Handles data fetching on mount
- Passes props to child components
- Coordinates form submission and table updates

### UserForm.jsx (Child Component)
- Controlled form inputs with local state
- Client-side validation
- Emits data to parent via onSubmit prop
- Displays validation errors

### UserTable.jsx (Child Component)
- Receives users array as prop
- Conditional rendering based on loading/empty states
- Responsive table layout

### userService.js (API Layer)
- Centralized API calls using Axios
- Error handling and logging
- Separates API logic from components

## 🎯 Code Quality Features

- ✅ Modular, reusable React components
- ✅ Clean naming conventions (camelCase for variables, PascalCase for components)
- ✅ Proper component separation (presentation vs logic)
- ✅ Loading and error state management
- ✅ Responsive design with mobile-first approach
- ✅ Clear comments and documentation
- ✅ Consistent code formatting

## 🌐 Environment Configuration

To change the backend API URL, edit `src/services/userService.js`:

```javascript
const API_BASE_URL = 'http://localhost:8080';
```

## 🎨 Customization

### Changing Colors
Edit the gradient in `App.css`:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Modifying Table Columns
Edit `UserTable.jsx` to add/remove columns:
```jsx
<th>New Column</th>
```

## 🚧 Future Enhancements

- Add edit and delete functionality
- Implement search/filter feature
- Add sorting capabilities
- Implement pagination for large datasets
- Add form validation using libraries (Formik, React Hook Form)
- Add unit tests with Jest and React Testing Library
- Implement dark mode toggle
- Add animation libraries (Framer Motion)

## 🐛 Troubleshooting

### CORS Errors
Ensure the backend has CORS enabled for `http://localhost:5173`

### Connection Refused
Verify the backend is running on port 8080

### Module Not Found
Run `npm install` to install all dependencies
