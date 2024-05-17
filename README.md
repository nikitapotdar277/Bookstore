# MERN Bookstore CRUD Application

This is a simple CRUD (Create, Read, Update, Delete) application for managing books in a bookstore. It's built using the MERN stack, which includes MongoDB, Express.js, React.js, and Node.js. Additionally, Tailwind CSS is used for styling and Vite for fast development.

## Features

- **Create:** Add new books to the bookstore inventory.
- **Read:** View the list of available books with details.
- **Update:** Edit existing book information.
- **Delete:** Remove books from the inventory.

## Technologies Used

- **ReactJS**: Frontend library for building user interfaces.
- **NodeJS**: JavaScript runtime for server-side development.
- **ExpressJS**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing book information.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **Vite**: Next-generation frontend tooling for development.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/nikitapotdar277/Bookstore.git
```

2. Navigate to the project directory:

```bash
cd Bookstore
```

3. Install dependencies for both frontend and backend:

```bash
cd frontend
npm install

cd ..

cd backend
npm install
```

4. Set up environment variables:

In the `config.js` file in the `backend` directory, add the following:

```plaintext
export const mongoDBURL=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with your MongoDB connection string.

5. Run the backend server:

```bash
npm run dev
```

6. Run the frontend development server:

```bash
cd ../frontend
npm run dev
```

## Folder Structure

```
Bookstore/
├── frontend/          # Frontend React application
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── assets/
│       └── ...
└── server/          # Backend Node.js and Express application
    ├── models/
    ├── routes/
    └── ...
```

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.
