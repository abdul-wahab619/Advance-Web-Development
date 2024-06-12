# Blogify

Blogify is a simple web application for creating and managing blogs. It allows users to create, edit, and delete blog posts. The application is built using Node.js, Express.js, MongoDB for the backend, and EJS template for server-side rendering. Bootstrap is used for frontend design.

![Blogify Interface](/utils/interface.jpg)

## Features

- **User authentication:** Users can sign up and log in to create and manage their blogs.
- **Create blog posts:** Authenticated users can create new blog posts with a title, content, and optional cover image.
- **Edit and delete blog posts:** Users can edit or delete their own blog posts.
- **View blog posts:** All users can view the list of blog posts and read individual posts.
- **Deployment on Railway:** Deploy my Blogify application easily on Railway platform.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/abdul-wahab619/Blogify.git
```

2. Navigate to the project directory:

```bash

cd Blogify
```

3. Install dependencies:

```bash

npm install

```

4. Set up environment variables:

   - Create a `.env` file in the root directory.
   - Define the following environment variables in the `.env` file:
     - `PORT`: Port number for the server (default is 3000).
     - `MONGODB_URI`: MongoDB connection string.
     - `SESSION_SECRET`: Secret key for session management.
     - Other necessary environment variables such as API keys, etc.

5. Start the server:

```bash

npm start

```

6. Open your web browser and navigate to `http://localhost:3000` (or your specified port) to access the application.

## Deployment

Deploy my Blogify application on Railway by clicking [here](https://ejs-blogify-app.up.railway.app/).

## Dependencies

- Express.js: Web application framework for Node.js.
- EJS: Embedded JavaScript templates for server-side rendering.
- Mongoose: MongoDB object modeling tool.
- Passport.js: Authentication middleware for Node.js.
- Bootstrap: Frontend framework for responsive design.

## Update

- Controller setup
- blogController, userController
- clean routes

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
