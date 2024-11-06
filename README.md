Here’s a comprehensive README file for your project:

---

# Vericap Assignment - Frontend Intern

**Live Demo:** [https://harshal-vericap.vercel.app](https://harshal-vericap.vercel.app)  
**GitHub Repository:** [https://github.com/HarshalMukte/Vericap-assignment-frontend-intern](https://github.com/HarshalMukte/Vericap-assignment-frontend-intern)

## Project Overview

This project is a responsive user dashboard built with Next.js and SCSS modules. The application fetches user data from a mock API, displays user metrics, and provides a user profile page with editable information. The dashboard is optimized for performance, accessibility, and usability, following best practices in component design and state management.

## Table of Contents

- [Project Overview](#project-overview)
- [Design Choices](#design-choices)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Testing Instructions](#testing-instructions)
- [Project Structure](#project-structure)
- [Features](#features)
- [Error Handling](#error-handling)
- [Contributing](#contributing)

## Design Choices

1. **Component Structure**:
   - Components are modularized to ensure reusability and maintainability. For example, the `Sidebar`, `ProfilePage`, and `SettingsPage` components are isolated, with individual SCSS modules for styling.
   - The component structure follows a folder hierarchy, allowing easy scalability if new components are added.

2. **SCSS Modules**:
   - The project uses SCSS modules for scoped styling, preventing style leakage and promoting modularity.
   - Variables and mixins are utilized for theme management, including a dark mode toggle in the settings page.

3. **Responsiveness**:
   - The layout and tables are fully responsive, adapting to different screen sizes, including mobile views, with the sidebar and table scrolling only when needed.

4. **State Management**:
   - State is managed within each component using `useState` and `useEffect`, with `localStorage` used to persist user preferences, such as dark mode and profile details.

## Technologies Used

- **Next.js**: Framework for building the application with server-side rendering and static site generation.
- **React**: JavaScript library for building the UI components.
- **SCSS Modules**: CSS preprocessor for styling with support for variables, nesting, and modules.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/HarshalMukte/Vericap-assignment-frontend-intern.git
   cd Vericap-assignment-frontend-intern
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Visit the application**:
   Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the app.

### Building for Production

To create an optimized build for production, run:

```bash
npm run build
```

## Testing Instructions

1. **Responsive Testing**:
   - Test the responsiveness by resizing the browser window or using developer tools to simulate mobile and tablet views.
   
2. **Search Functionality**:
   - In the Users section, use the search bar to filter users by name or email. Ensure the filtered data updates accurately.

3. **Form Validation**:
   - In the Profile page, click the "Edit Profile" button to enable the form. Modify the user’s name or email, and verify that the updates persist.
   - Confirm that the "Save" button stores the data in `localStorage`.

4. **Error Handling**:
   - Disconnect from the internet or simulate an error to test the error handling for API requests. Ensure that error messages display as expected.

## Project Structure

```
src/
├── components/
│   ├── Dashboard/
│   ├── Layout/
│   ├── Profile/
│   ├── Settings/
├── styles/
│   ├── globals.scss
│   ├── layout.scss
├── pages/
│   ├── index.jsx
│   ├── profile.jsx
│   ├── settings.jsx
└── public/
    └── images/ (fallback image, logo, etc.)
```

## Features

1. **Dashboard**:
   - Displays user metrics, including total, active, and inactive users.
   - Includes a donut chart showing user activity.
   - Responsive search functionality for filtering user data.

2. **Profile Page**:
   - Displays user information with editable fields for name and email.
   - Changes persist in `localStorage` and are loaded on refresh.
   - Users can upload a new profile image or reset to a fallback image.

3. **Settings Page**:
   - Dark mode toggle with preference saved in `localStorage`.
   - Toggles the theme across all pages.

## Error Handling

- **API Errors**: Displays error messages if the API request fails. The search input is disabled if an error occurs.
- **Form Validation**: Input fields validate for empty or invalid values, preventing saving without valid data.

## Contributing

We welcome contributions! Feel free to fork the repository and submit pull requests.

---
