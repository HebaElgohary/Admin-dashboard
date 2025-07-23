# Admin Dashboard

A modern React-based admin dashboard application built with Vite, React Router, and Bootstrap.

## Overview

This application provides a clean, responsive interface for managing products with features including product listing, detailed views, and form-based product management. The project demonstrates modern React patterns and best practices.

## Features

- **Responsive Layout**: Mobile-friendly design using Bootstrap and custom styling
- **Product Management**: View, add, edit, and navigate through product details
- **Dynamic Routing**: Seamless navigation with React Router v7
- **Modern UI Components**: Styled components and React Bootstrap integration

## Tech Stack

- **React 19**: Utilizing the latest React features
- **Vite**: For fast development and optimized builds
- **React Router v7**: For client-side routing
- **Bootstrap 5**: For responsive UI components
- **Axios**: For API communication
- **Styled Components**: For component-specific styling
- **React Icons**: For UI icons

## Project Structure
task5/
├── public/
├── src/
│   ├── api/             # API service functions
│   ├── components/      # Reusable UI components
│   │   ├── sharedComponents/  # Header, Footer, etc.
│   │   └── StyledComponents/  # Styled UI elements
│   ├── layout/          # Layout components
│   ├── pages/           # Page components
│   └── styles/          # CSS modules and global styles
├── index.html
└── package.json


## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
