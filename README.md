# Book Search Application

A full-stack MERN (MongoDB, Express, React, Node.js) application that allows users to search for books using the Google Books API and manage their favorite books. This project refactors a RESTful API into a GraphQL API using Apollo Server.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Description

This application enables users to search for books via the Google Books API and save their favorite titles to a personal list. It leverages the MERN stack with a React frontend, MongoDB database, and Node.js/Express.js server. The backend has been refactored from a RESTful API to a GraphQL API using Apollo Server, enhancing data fetching efficiency.

## Features

- User authentication with JWT
- Search for books using the Google Books API
- Save favorite books to a personal list
- View and manage saved books

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AntonioKOD/Book_search.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd Book_search
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Install client dependencies:**
   ```bash
   cd ../client
   npm install
   ```

5. **Build the client:**
   ```bash
   npm run build
   ```

6. **Start the server:**
   ```bash
   cd ../server
   npm start
   ```

## Usage

After completing the installation steps, the application will be accessible at `http://localhost:3000`. Users can register or log in to search for books and manage their saved list.

## Technologies Used

- **Frontend:** React, React Bootstrap, React Router
- **Backend:** Node.js, Express.js, Apollo Server, GraphQL
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT)
- **API:** Google Books API


## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## Questions

For any questions or feedback, please contact [Antonio Kodheli](mailto:antonio_kodheli@icloud.com).

You can also visit the [GitHub repository](https://github.com/AntonioKOD/Book_search) for more information.

