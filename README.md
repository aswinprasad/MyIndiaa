# MyIndiaa Frontend

This repository contains the frontend implementation for MyIndiaa. The application is built using React.js and Tailwind CSS, with state management handled by Redux. Additionally, the application is designed as a Progressive Web App (PWA) to provide offline capabilities and enhanced user experience.

## Deployed Application

You can access the deployed application [here](https://my-indiaa.vercel.app/).

## Installation

To run the application locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/aswinprasad/MyIndiaa.git
   ```

2. Navigate to the project directory:
   ```bash
   cd MyIndiaa
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173` to see the application in action.

## Usage

- **Header:** Contains the navigation menu and branding.
- **Footer:** Displays footer content and links.
- **Product Card:** Shows individual product details.
- **Navigation Menu:** Allows users to navigate through different sections of the site.

## State Management

- **Redux:** Used for managing global state such as the shopping cart and product listings.
- **Local State:** Managed within components for UI-related state that does not need to be global.

## Responsive Design

- The application is designed to be fully responsive using Tailwind CSS, ensuring a seamless experience on mobile, tablet, and desktop devices.

## PWA Features

- The application is a Progressive Web App (PWA), providing offline capabilities through service workers.

## Additional Features

- **Product Listing Page:** Fetches and displays products from a mock API.
- **Shopping Cart:** Allows users to add items to the cart and view the cart contents.