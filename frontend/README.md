# Inventory Management System

A modern, responsive inventory management application built with React, TypeScript, and shadcn/ui.

## Features

- 🔐 Authentication with protected routes
- 📊 Dashboard with inventory statistics
- 📦 Full CRUD operations for inventory items
- 🌓 Dark/Light theme support
- 📱 Fully responsive design (mobile-first)
- 🎨 Modern UI with shadcn/ui components
- 🔄 State management with Redux Toolkit
- 💾 Data persistence with Redux Persist
- 🚀 API calls with React Query
- 📝 TypeScript for type safety

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit + Redux Persist
- **Data Fetching**: TanStack Query (React Query)
- **Routing**: React Router DOM
- **Form Handling**: React Hook Form + Zod
- **HTTP Client**: Axios
- **Icons**: Lucide React

## Project Structure

```
frontend/
├── src/
│   ├── api/              # API layer with mock data
│   │   ├── client.ts     # Axios client with interceptors
│   │   ├── auth.api.ts   # Authentication APIs
│   │   └── inventory.api.ts # Inventory CRUD APIs
│   ├── components/       # Reusable components
│   │   ├── ui/          # shadcn/ui components
│   │   ├── ProtectedRoute.tsx
│   │   ├── PublicRoute.tsx
│   │   └── ThemeToggle.tsx
│   ├── hooks/           # Custom React hooks
│   │   ├── useAuth.ts   # Authentication hooks
│   │   ├── useInventory.ts # Inventory hooks
│   │   └── useTheme.ts  # Theme management
│   ├── layouts/         # Layout components
│   │   ├── MainLayout.tsx
│   │   └── Sidebar.tsx
│   ├── pages/           # Page components
│   │   ├── LoginPage.tsx
│   │   ├── DashboardPage.tsx
│   │   ├── InventoryPage.tsx
│   │   ├── ManageInventoryPage.tsx
│   │   └── SettingsPage.tsx
│   ├── store/           # Redux store
│   │   ├── index.ts     # Store configuration
│   │   ├── authSlice.ts # Auth state slice
│   │   └── hooks.ts     # Typed Redux hooks
│   ├── lib/             # Utility functions
│   │   └── utils.ts     # cn() helper
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── components.json      # shadcn/ui config
├── tailwind.config.js   # Tailwind configuration
├── tsconfig.json        # TypeScript config
├── vite.config.ts       # Vite configuration
└── package.json         # Dependencies
```

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Demo Credentials

- **Email**: admin@inventory.com
- **Password**: admin123

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Features Overview

### Authentication
- Login page with form validation
- Protected routes requiring authentication
- Public routes redirecting authenticated users
- Persistent login state with Redux Persist
- Logout functionality

### Dashboard
- Total items count
- In stock, low stock, and out of stock statistics
- Total inventory value calculation
- Recent activity feed

### Inventory Management
- View all inventory items in a responsive table
- Create new inventory items
- Edit existing items
- Delete items with confirmation
- Real-time status indicators (In Stock, Low Stock, Out of Stock)
- Automatic status calculation based on quantity

### Settings
- User profile information
- Theme toggle (Light/Dark mode)
- Application version info

### Responsive Design
- Mobile-first approach
- Collapsible sidebar on mobile
- Responsive tables with hidden columns on smaller screens
- Touch-friendly UI elements

## API Layer

The application uses a centralized API layer with mock data:

- **Auth API**: Login/Logout with static credentials
- **Inventory API**: Full CRUD operations with in-memory storage
- **Axios Client**: Configured with interceptors for auth tokens and error handling

All API calls are wrapped in React Query hooks for:
- Automatic caching
- Background refetching
- Optimistic updates
- Loading and error states

## State Management

- **Redux Toolkit**: For global auth state
- **Redux Persist**: For persisting auth state to localStorage
- **React Query**: For server state management
- **React Hook Form**: For form state

## Future Enhancements

- Connect to real backend API
- Add search and filter functionality
- Implement pagination for large datasets
- Add export functionality (CSV, PDF)
- User management and roles
- Advanced analytics and reporting
- Barcode scanning support
- Multi-warehouse support

## License

MIT
