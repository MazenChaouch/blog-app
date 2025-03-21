# Blog App

## Problem Statement

Create a simple blog application where users can perform the following actions:

1. View a list of all blog posts.
2. View the details of a single blog post.
3. Create a new blog post.
4. Edit an existing blog post.
5. Delete a blog post.

### Flow Description

1. **Viewing All Posts:**

   - The user navigates to the homepage (`/posts`).
   - The application fetches all posts from the server and displays them in a list.
   - Each post in the list has links to view, edit, or delete the post.

2. **Viewing a Single Post:**

   - The user clicks on a post title from the list.
   - The application fetches the details of the selected post from the server and displays them.

3. **Creating a New Post:**

   - The user clicks on the "Create New Post" link.
   - The application displays a form for entering the title and content of the new post.
   - The user submits the form, and the application sends the data to the server to create the new post.
   - The user is redirected back to the list of posts.

4. **Editing an Existing Post:**

   - The user clicks on the "Edit" link next to a post in the list.
   - The application fetches the details of the selected post and displays them in a form.
   - The user updates the title and/or content and submits the form.
   - The application sends the updated data to the server to update the post.
   - The user is redirected back to the list of posts.

5. **Deleting a Post:**
   - The user clicks on the "Delete" button next to a post in the list.
   - The application sends a request to the server to delete the post.
   - The user is redirected back to the list of posts, and the deleted post is no longer displayed.

## Tasks

1. **Set up the project structure:**

   - Create directories for controllers, routes, views, and public assets.
   - Set up the main application file (`app.js`).

2. **Install necessary dependencies:**

   - Express for handling HTTP requests.
   - EJS for templating.
   - Method-override for supporting PUT and DELETE methods.
   - Nodemon for development.

3. **Create the controllers:**

   - `postsController.js` to handle the logic for each action (CRUD operations).

4. **Define the routes:**

   - `posts.js` to define routes for handling post-related requests.

5. **Create the views:**

   - `posts.ejs` to display the list of posts.
   - `post.ejs` to display a single post.
   - `new.ejs` to display the form for creating a new post.
   - `edit.ejs` to display the form for editing an existing post.

6. **Set up Tailwind CSS:**

   - Use the Tailwind CSS CDN for styling the application.

7. **Implement the main application logic:**

   - Set up the Express application in `app.js`.
   - Configure the view engine, middleware, and static files.
   - Define the routes and start the server.

8. **Test the application:**
   - Ensure all CRUD operations work as expected.
   - Verify the UI is styled correctly using Tailwind CSS.

## Getting Started

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd blog-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the application:

   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Project Structure

```
blog-app/
│
├── controllers/
│   └── postsController.js
├── routes/
│   └── posts.js
├── views/
│   ├── posts.ejs
│   ├── post.ejs
│   ├── new.ejs
│   └── edit.ejs
├── public/
│   └── style.css
├── app.js
├── package.json
└── README.md
```
