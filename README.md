# Vue 3 Vite Project

Welcome to our Vue 3 project built with Vite! This project is designed with a modular structure to enhance scalability and maintainability.

## Prerequisites

Before you begin, ensure you have the following setup:

1. **Create a `.env` file**: This file should be placed in the root directory, at the same level as the `vite.config.ts` file.

   ```dotenv
   VITE_BASE_POSTS_URL="https://public-api.wordpress.com"
   ```

## Project Structure

Here's an overview of the project structure to help you navigate through the codebase:

- **components**: Contains all Vue components.

  - **common**: Reusable components used across the application.
    - **icons**: Icon components.
    - **inputs**: Input components.
  - **post**: Feature-specific components related to posts.

- **config**: Configuration files.

  - `http-clients.ts`: Functions for making network calls.

- **helpers**: Utility functions, such as date utilities.

- **layouts**: Layout components for the application pages.

- **models**: Type definitions, organized by feature.

- **pages**: Vue components that represent the application's pages.

- **repo**: Network-related hooks.
  - Example: `post.repo.ts` includes methods for fetching post data.

## Getting Started

Follow these steps to set up and run the project:

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Create a `.env` file**: Add the necessary environment variables as described in the Prerequisites section.

4. **Start the development server**:

   ```bash
   npm run dev
   ```

## Available Scripts

Here are some useful scripts for development and production:

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm run serve`: Serves the built project.

Happy coding! 🚀
