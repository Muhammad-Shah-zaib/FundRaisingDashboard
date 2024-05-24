# NFRW (NUST Fundraising Web) Frontend

## Project Overview

NFRW (NUST Fundraising Web) is a web-based project designed to facilitate the collection of donations for the needy people associated with the National University of Sciences and Technology (NUST). This repository contains the frontend part of the application built using React with TypeScript. The backend is already available in a separate repository.

## Technologies Used

- **React** with **TypeScript**
- **React Router DOM** for routing
- **React Spinners** for loading indicators
- **RxJS** for managing API calls
= **ShadCn/Ui** for Ui components (toasts, spinners, shets, tables, dialogs)
- **Vite** for the development build tool

## Project Structure

- **src/hooks**: Contains custom hooks used throughout the application.
- **src/components**: Contains reusable components.
- **src/shared**: Houses the `pages` and `layouts` directories.
  - **src/shared/pages**: Contains the main page components.
  - **src/shared/layouts**: Contains layout components used to structure the pages.
- **src/environment**: Contains configuration files, including a server URL file where all API endpoints are listed.
- **src/models**: Contains the `DTOs` (Data Transfer Objects) used for type definitions.
- **src/App.tsx**: Main file where all the routes are defined.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (>= 14.x)
- npm (>= 6.x)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Muhammad-Shah-zaib/FundRaisingServer
    cd <repository-directory>
    ```

2. **Install dependencies:**

    ```bash
    npm i
    ```

3. **Start the development server:**

    ```bash
    npm run dev
    ```

This will start the development server using Vite, and you can access the application at `http://localhost:3000` by default.

## Contributing

We welcome contributions to improve NFRW. If you have suggestions or encounter any issues, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

---

Thank you for your interest in NFRW. Together, we can make a difference for the needy people of NUST.
